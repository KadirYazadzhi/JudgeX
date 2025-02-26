document.addEventListener('DOMContentLoaded', function () {
    class CodeSubmissionApp {
        constructor() {
            this.inputs = [];
            this.correctOutput = [];
            this.currentTaskIndex = 0;
            this.languageToWork = 0;
            this.today = new Date().toISOString().slice(0, 10);
            this.callData = JSON.parse(localStorage.getItem("callData")) || { count: 0, lastDate: this.today };
            this.testResults = "";
            this.url = "https://dont-driven-convenience-cookies.trycloudflare.com";

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
            if (getInfinityHearts() || getSpecialUser()) {
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
            if (getInfinityHearts() || getSpecialUser()) return;

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
                alert("The code you upload is too big.");
                return;
            }

            if (this.callData.lastDate !== this.today) {
                this.callData.count = 0;
                this.callData.lastDate = this.today;
            }

            if (this.callData.count < 5 || getInfinityHearts() || getSpecialUser()) {
                this.callData.count++;
                localStorage.setItem('callData', JSON.stringify(this.callData));
                this.heartsNotActive();
                this.showCountdown();
                this.removeCurrentCodeFromTextAreaAndLocalStorage();
            } else {
                alert("You have exceeded the number of solutions you can upload in a day. Please wait until tomorrow to continue.");
                return;
            }

            this.resetTestResults();

            const baseKey = `saveSubmitCode_${this.activeTask()}_${getSelectedLanguage()}_${getSelectedLevel()}`;
            let index = parseInt(localStorage.getItem(`${baseKey}_index`) || "0");

            localStorage.setItem(`${baseKey}_${index}`, code);
            localStorage.setItem(`${baseKey}_index`, index + 1);

            this.setLanguageToWork();

            const taskData = await this.loadTaskData(this.activeTask());
            if (!taskData) return;

            this.inputs = taskData.inputs;
            this.correctOutput = taskData.correctOutput;

            // Създаване на масив със заявки
            const requests = this.inputs.map((stdin, i) => {
                const requestData = {
                    language_id: this.languageToWork,
                    source_code: code,
                    stdin: stdin,
                    cpu_time_limit: "3",
                    memory_limit: "512000"
                };

                return this.submitSingleTestCase(requestData);
            });

            // Изпращане на всички заявки паралелно
            const results = await Promise.all(requests);

            // Обработка на резултатите
            for (let i = 0; i < results.length; i++) {
                const result = results[i];
                await this.checkResult(result.token, i, result.useLocalAPI);
            }
        }

        async submitSingleTestCase(requestData) {
            let useLocalAPI = true;
            let attempt = 0;
            let maxAttempts = 5;
            let token = null;

            while (attempt < maxAttempts && !token) {
                try {
                    console.log(`Attempt ${attempt + 1} - using ${useLocalAPI ? "Local API" : "RapidAPI"}`);

                    const apiUrl = useLocalAPI ? `${this.url}/submissions?base64_encoded=false&wait=true` : apiURL;

                    const response = await fetch(apiUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            ...(useLocalAPI
                                ? {}
                                : {
                                    'X-RapidAPI-Host': rapidAPIHost,
                                    'X-RapidAPI-Key': rapidAPIKey
                                })
                        },
                        body: JSON.stringify(requestData)
                    });

                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }

                    const result = await response.json();
                    token = result.token;
                    console.log("Received token:", token);

                } catch (error) {
                    console.error(`Attempt ${attempt + 1} failed: ${error.message}`);
                    attempt++;
                    if (attempt >= 3 && useLocalAPI) {
                        console.log("Switching to RapidAPI...");
                        useLocalAPI = false;
                    }
                }
            }

            if (!token) {
                throw new Error("Code submission failed after multiple attempts to get token.");
            }

            return { token, useLocalAPI };
        }

        resetTestResults() {
            this.testResults = ""; // Празни резултати за всеки нов код
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

        async checkResult(submissionId, index, useLocalAPI) {
            const resultURL = useLocalAPI
                ? `${this.url}/submissions/${submissionId}?base64_encoded=false`
                : `https://judge0-ce.p.rapidapi.com/submissions/${submissionId}?base64_encoded=false`;

            try {
                const response = await fetch(resultURL, {
                    headers: {
                        ...(useLocalAPI
                            ? {}
                            : {
                                'X-RapidAPI-Host': rapidAPIHost,
                                'X-RapidAPI-Key': rapidAPIKey
                            })
                    }
                });

                const result = await response.json();
                const output = result.stdout ? result.stdout.trim() : "";
                const expectedOutput = this.correctOutput[index];

                this.testResults += output === expectedOutput ? "1" : "0";

                let diamondReward = 0;
                switch (parseInt(getSelectedLevel())) {
                    case 1:
                        diamondReward = 10;
                        break;
                    case 2:
                        diamondReward = 20;
                        break;
                    case 3:
                        diamondReward = 30;
                        break;
                    case 4:
                        diamondReward = 50;
                        break;
                    case 5:
                        diamondReward = 250;
                        break;
                }

                if (this.testResults === "111111") {
                    localStorage.setItem(
                        'diamond_availability',
                        (getDiamond() + diamondReward).toString()
                    );
                }

                console.log(
                    `Test ${index + 1}: ${
                        output === expectedOutput ? "Passed" : "Failed"
                    }`
                );

                if (index === this.inputs.length - 1) {
                    console.log(`Final Test Results: ${this.testResults}`);

                    const baseKey = `taskResult_${this.activeTask()}_${getSelectedLanguage()}_${getSelectedLevel()}`;
                    const currentIndex = parseInt(localStorage.getItem(`${baseKey}_index`) || "0");
                    const newKey = `${baseKey}_${currentIndex}`;

                    // Съхранение на резултата с време
                    const submissionTime = new Date().toLocaleString();
                    const resultData = {
                        testResults: this.testResults,
                        time: submissionTime
                    };

                    localStorage.setItem(newKey, JSON.stringify(resultData));
                    localStorage.setItem(`${baseKey}_index`, currentIndex + 1);

                    console.log(`Saved test result as: ${newKey}`);
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