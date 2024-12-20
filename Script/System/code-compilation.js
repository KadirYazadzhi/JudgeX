document.addEventListener('DOMContentLoaded', function() {
    class CodeSubmissionApp {
        constructor() {
            this.inputs = [];
            this.correctOutput = [];
            this.currentTaskIndex = 0;
            this.languageToWork = 0;
            this.today = new Date().toISOString().slice(0, 10);
            this.callData = JSON.parse(localStorage.getItem("callData")) || { count: 0, lastDate: this.today };
            this.testResults = "";

            this.initialize();
        }

        initialize() {
            this.heartsCreate();
            this.heartsNotActive();

            const submitBtn = document.querySelector(".submit-btn");
            submitBtn.addEventListener('click', () => {
                if (localStorage.getItem('SubmitCodeIsNotAllowed')) {
                    alert("The code submission is not available while you are reviewing the submitted code.");
                } else {
                    this.submitCode();
                }
            });
        }

        activeTask() {
            const activeCard = document.querySelector('.task-card.active-task');
            return activeCard ? activeCard.dataset.value : null;
        }

        heartsCreate() {
            const heartBox = document.querySelector(".heart-box");
            if (getInfinityDiamond() || getSpecialUser()) {
                this.createIcon(heartBox, ["fa-solid", "fa-infinity"]);
                this.createIcon(heartBox, ["fa-solid", "fa-heart"]);
            } else {
                for (let i = 0; i < 5; i++) {
                    this.createIcon(heartBox, ["fa-solid", "fa-heart"]);
                }
            }
        }

        createIcon(parent, classes) {
            const icon = document.createElement('i');
            icon.classList.add(...classes);
            parent.appendChild(icon);
        }

        heartsNotActive() {
            if (getInfinityDiamond() || getSpecialUser()) return;

            const heartsIcon = document.querySelectorAll(".fa-heart");
            for (let i = 0; i < this.callData.count; i++) {
                heartsIcon[4 - i].classList.add("not-active-heart");
            }
        }

        removeCurrentCodeFromTextAreaAndLocalStorage() {
            localStorage.removeItem(`codeEditorContent_${this.activeTask()}_${getSelectedLanguage()}_${getSelectedLevel()}`);
            document.getElementById('code-editor').value = "";
        }

        setLanguageToWork() {
            const languageMap = {
                "0": 50,
                "1": 52,
                "2": 51,
                "3": 71,
                "4": 62,
                "5": 63,
                "6": 74,
                "7": 72,
                "8": 60
            };
            this.languageToWork = languageMap[getSelectedLanguage()] || 0;
        }

        async submitCode() {
            const code = document.getElementById('code-editor').value;

            if (code.length < 10) {
                alert("The code you upload must be at least 10 characters long.");
                return;
            }

            if (code.length > 5000) {
                alert("The code you upload is too big.")
                return;
            }

            if (this.callData.lastDate !== this.today) {
                this.callData.count = 0;
                this.callData.lastDate = this.today;
            }

            if (this.callData.count < 5 || getInfinityDiamond() || getSpecialUser()) {
                this.callData.count++;
                localStorage.setItem('callData', JSON.stringify(this.callData));
                this.heartsNotActive();
                this.showCountdown();
                this.removeCurrentCodeFromTextAreaAndLocalStorage();
            } else {
                alert("You have exceeded the number of solutions you can upload in a day. Please wait until tomorrow to continue.");
                return;
            }

            localStorage.setItem(`saveSubmitCode_${this.activeTask()}_${getSelectedLanguage()}_${getSelectedLevel()}`, code);
            this.setLanguageToWork();

            const taskData = await this.loadTaskData(this.activeTask());
            if (!taskData) return;

            this.inputs = taskData.inputs;
            this.correctOutput = taskData.correctOutput;

            for (let i = 0; i < this.inputs.length; i++) {
                const stdin = this.inputs[i];
                this.currentTaskIndex = i;
                const requestData = {
                    language_id: this.languageToWork,
                    source_code: code,
                    stdin: stdin,
                    cpu_time_limit: "1",
                    memory_limit: "128000"
                };

                try {
                    const response = await fetch(apiURL, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-RapidAPI-Host': rapidAPIHost,
                            'X-RapidAPI-Key': rapidAPIKey
                        },
                        body: JSON.stringify(requestData)
                    });

                    const result = await response.json();
                    if (result.token) {
                        await this.checkResult(result.token, this.currentTaskIndex);
                    }

                } catch (error) {
                    console.log("Error: " + error.message + "\n");
                }
            }
        }

        async loadTaskData(taskId) {
            try {
                const response = await fetch('Json/exercises-answers-data.json');
                const tasks = await response.json();
                return tasks[taskId] || null;
            } catch (error) {
                console.error("Error loading task data:", error);
                return null;
            }
        }

        async checkResult(submissionId, index) {
            const resultURL = `https://judge0-ce.p.rapidapi.com/submissions/${submissionId}?base64_encoded=false`;

            try {
                const response = await fetch(resultURL, {
                    headers: {
                        'X-RapidAPI-Host': rapidAPIHost,
                        'X-RapidAPI-Key': rapidAPIKey
                    }
                });

                const result = await response.json();
                const output = result.stdout ? result.stdout.trim() : "";
                const expectedOutput = this.correctOutput[index];

                this.testResults += output === expectedOutput ? "1" : "0";

                let diamondReward = 0;
                switch (getSelectedLevel()) {
                    case 1: diamondReward = 10; break;
                    case 2: diamondReward = 20; break;
                    case 3: diamondReward = 30; break;
                    case 4: diamondReward = 50; break;
                }

                if (this.testResults === "111111") {
                    localStorage.setItem('diamond_availability', (getDiamond() + diamondReward).toString());
                }

                console.log(`Test ${index + 1}: ${output === expectedOutput ? "Passed" : "Failed"}`);

                if (index === this.inputs.length - 1) {
                    console.log(`Final Test Results: ${this.testResults}`);

                    localStorage.setItem(`taskResult_${this.activeTask()}_${getSelectedLanguage()}_${getSelectedLevel()}`, this.testResults);
                }

            } catch (error) {
                console.log("Error: " + error.message + "\n");
            }
        }

        showCountdown() {
            const countdownElement = document.getElementById('countdown');
            const countdownNumber = document.getElementById('countdown-number');

            countdownElement.classList.remove('hidden');

            let timeLeft = 7;
            countdownNumber.textContent = timeLeft;

            const countdownInterval = setInterval(() => {
                timeLeft--;
                countdownNumber.textContent = timeLeft;

                if (timeLeft === 0) {
                    clearInterval(countdownInterval);
                    countdownElement.classList.add('hidden');
                }
            }, 1000);
        }
    }

    new CodeSubmissionApp();
});