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

            // Проверка на дължината на кода
            if (code.length < 10) {
                alert("The code you upload must be at least 10 characters long.");
                return;
            }

            if (code.length > 5000) {
                alert("The code you upload is too big.");
                return;
            }

            // Обновяване на дневния лимит за опити
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

            // Нулиране на очакваните резултати
            this.resetTestResults();

            // Определяне на езика за работа
            this.setLanguageToWork();

            // Зареждане на данни за задачата
            const taskData = await this.loadTaskData(this.activeTask());
            if (!taskData) {
                alert("Error: Unable to load task data. Please try again later.");
                return; // Прекратяване при грешка
            }

            this.inputs = taskData.inputs;
            this.correctOutput = taskData.correctOutput;

            try {
                let hasErrors = false; // Флаг за следене дали е възникнала грешка

                // Генериране на обещания за всички входове
                const results = await Promise.allSettled(
                    this.inputs.map((stdin, i) => {
                        const requestData = {
                            language_id: this.languageToWork,
                            source_code: code,
                            stdin: stdin,
                            cpu_time_limit: "3",
                            memory_limit: "512000",
                        };

                        return this.submitSingleTestCase(requestData).catch((error) => {
                            hasErrors = true; // Отбелязваме, че има грешка
                            return null; // Връщаме `null`, за да пропуснем грешния тест
                        });
                    })
                );

                if (hasErrors) {
                    // Ако има каквато и да е грешка, показваме единствено синтезирано съобщение
                    alert("An error occurred while processing some or all of the test cases. Please try again later.");
                    console.error("One or more test cases failed during execution.");
                    return; // Спиране на обработката
                }

                // Обработваме само успешно изпълнените заявки
                for (let i = 0; i < results.length; i++) {
                    const result = results[i];
                    if (result.status === "fulfilled") {
                        const testResult = result.value;
                        const success = await this.checkResult(testResult.token, i, testResult.useLocalAPI);

                        if (!success) {
                            console.error("Validation failed for a test case. Stopping further result processing.");
                            alert("An error occurred during validation of results. Please try again later.");
                            return;
                        }
                    }
                }

            } catch (error) {
                console.error("Critical error during submission:", error.message);
                alert(`A critical error occurred: ${error.message}. Please try again later.`);
            }
        }

        async submitSingleTestCase(requestData) {
            let useLocalAPI = true;
            let attempt = 0;
            const maxAttempts = 3; // Максимален брой опити
            let token = null;

            while (attempt < maxAttempts && !token) {
                try {
                    console.log(`Attempt ${attempt + 1} - using ${useLocalAPI ? "Local API" : "RapidAPI"}`);

                    const apiUrl = useLocalAPI
                        ? `${this.url}/submissions?base64_encoded=false&wait=true`
                        : apiURL;

                    const response = await fetch(apiUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            ...(useLocalAPI ? {} : {
                                'X-RapidAPI-Host': rapidAPIHost,
                                'X-RapidAPI-Key': rapidAPIKey,
                            }),
                        },
                        body: JSON.stringify(requestData),
                    });

                    // Ако имаме лимит (429)
                    if (response.status === 429) {
                        alert("Request limit reached: Too many requests. Please wait and try again later.");
                        console.error("Server returned 429: Too many requests.");
                        throw new Error("Request limit reached (429). Stopping further execution.");
                    }

                    // Ако HTTP статусът е неуспешен
                    if (!response.ok) {
                        const errorMessage = `HTTP error! Status: ${response.status}`;
                        console.error(errorMessage);
                        throw new Error(errorMessage);
                    }

                    // Извличане на резултат от успешен отговор
                    const result = await response.json();
                    token = result.token;

                    if (!token && attempt >= 2) {
                        console.log("Switching to RapidAPI...");
                        useLocalAPI = false;
                    }

                } catch (error) {
                    console.error(`Error on attempt ${attempt + 1}: ${error.message}`);


                    // След 2 неуспеха автоматично преминаваме към RapidAPI
                    if (attempt >= 2 && useLocalAPI) {
                        console.log("Switching to RapidAPI...");
                        useLocalAPI = false;
                    }

                    attempt++;
                }
            }

            if (!token) {
                const finalError = "Failed to retrieve token after all attempts.";
                console.error(finalError);
                throw new Error(finalError); // Спираме изпълнението
            }

            // Ако имаме успешен резултат
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
                // Timeout check -> Races between API response and the Timeout Promise (15 seconds)
                const timeoutPromise = new Promise((_, reject) =>
                    setTimeout(() => reject(new Error("Timeout")), 15000)
                );

                const resultPromise = fetch(resultURL, {
                    headers: {
                        ...(useLocalAPI
                            ? {}
                            : {
                                'X-RapidAPI-Host': rapidAPIHost,
                                'X-RapidAPI-Key': rapidAPIKey,
                            }),
                    },
                }).then((response) => response.json());

                const result = await Promise.race([resultPromise, timeoutPromise]); // Either API response or timeout

                // Check for Compilation Errors
                if (result.compile_output) {
                    console.error("Compilation Error:", result.compile_output);
                    alert(
                        "There was a compilation error in your code. Please fix the error and try again."
                    );

                    this.deductHeartForUserError(); // Deduct a heart for user-induced error
                    return;
                }

                // Check for Runtime/System Errors
                if (result.stderr) {
                    console.error("Runtime Error:", result.stderr);
                    alert(
                        "A system error occurred while evaluating your submission. No hearts were deducted. Please try again later."
                    );

                    this.rollbackHeartChange(); // Do not deduct hearts
                    return;
                }

                // Processing the Result: Compare Output vs. Expected Output
                const submittedOutput = result.stdout ? result.stdout.trim() : "";
                const expectedOutput = this.correctOutput[index];
                this.testResults += submittedOutput === expectedOutput ? "1" : "0";

                // Final Test Results Handling (when reaching the last test case)
                if (index === this.inputs.length - 1) {
                    console.log(`Final Test Results: ${this.testResults}`);

                    const baseKey = `taskResult_${this.activeTask()}_${getSelectedLanguage()}_${getSelectedLevel()}`;
                    const currentIndex = parseInt(localStorage.getItem(`${baseKey}_index`) || "0");
                    const newKey = `${baseKey}_${currentIndex}`;

                    if (this.testResults === "111111") {
                        // Reward Diamonds for Passing All Tests
                        const diamondsEarned = this.calculateDiamondReward();
                        const currentDiamonds = getDiamond() + diamondsEarned;
                        localStorage.setItem("diamond_availability", currentDiamonds.toString());

                        alert(`Submission successful! All test cases passed, and you've earned ${diamondsEarned} diamonds!`);
                    } else {
                        // Inform the user of failed tests
                        alert("Submission completed, but some test cases failed. Review your code and try again.");
                    }

                    // Save Results in LocalStorage
                    const submissionTime = new Date().toLocaleString();
                    const resultData = {
                        testResults: this.testResults,
                        time: submissionTime,
                    };

                    localStorage.setItem(newKey, JSON.stringify(resultData));
                    localStorage.setItem(`${baseKey}_index`, currentIndex + 1);
                }
            } catch (error) {
                console.error("Error during submission processing:", error.message);

                if (error.message === "Timeout") {
                    // Timeout Error Handling
                    alert("The system took too long to process your submission (15 seconds). Please try again later. No hearts were deducted.");

                    this.rollbackHeartChange(); // Prevent heart deduction
                } else {
                    // Generic Errors
                    alert("An unexpected error occurred while processing your submission. Please try again later.");
                }
            }
        }

        deductHeartForUserError() {
            if (!getInfinityHearts() && !getSpecialUser() && this.callData.count > 0) {
                // Deduct a heart for user-caused errors
                this.callData.count--;
                localStorage.setItem('callData', JSON.stringify(this.callData));
                this.heartsNotActive();
            }
        }

        rollbackHeartChange() {
            if (!getInfinityHearts() && !getSpecialUser() && this.callData.count > 0) {
                // Undo the submission count increment (prevent heart deduction)
                this.callData.count--;
                localStorage.setItem('callData', JSON.stringify(this.callData));
                this.heartsNotActive();
            }
        }

        calculateDiamondReward() {
            console.log(getSelectedLevel())
            switch (parseInt(getSelectedLevel())) {
                case 1:
                    return 10;
                case 2:
                    return 20;
                case 3:
                    return 30;
                case 4:
                    return 50;
                case 5:
                    return 250;
                default:
                    return 0;
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