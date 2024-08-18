    const apiURL = 'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true';
    const rapidAPIHost = 'judge0-ce.p.rapidapi.com';
    const rapidAPIKey = 'a4a8e6d2d7mshd11918bb81caf74p1f7e3fjsn9f85774f50f6';
    const activeTask = document.querySelector('.task-card.active-task');
    const selectedLanguage = localStorage.getItem('selectedCardIndex');
    const selectedLevel = localStorage.getItem('selectedButton');

    let inputs = [];
    let correctOutput = [];
    let currentTaskIndex = 0;
    let languageToWork = 0;

    async function submitCode() {
        const code = document.getElementById('code-editor').value;

        switch (selectedLanguage) {
            case "0":
                languageToWork = 50;
                break;
            case "1":
                languageToWork = 52;
                break;
            case "2":
                languageToWork = 51;
                break;
            case "3":
                languageToWork = 71;
                break;
            case "4":
                languageToWork = 62;
                break;
            case "5":
                languageToWork = 63;
                break;
            case "6":
                languageToWork = 74;
                break;
            case "7":
                languageToWork = 72;
                break;
            case "8":
                languageToWork = 60;
                break;
        }

        switch (localStorage.getItem('activeTask')) {
            case "1":
                inputs = ["7", "0", "-2", "4", "-3", "18"];
                correctOutput = ["False", "True", "True", "True", "False", "True"];
                break;
            case "2":
                inputs = ["2020", "1900", "2019", "2024", "876", "1890"];
                correctOutput = ["True", "False", "False", "True", "True", "False"];
                break;
            case "3":
                inputs = ["7", "10", "13", "1", "3", "50"];
                correctOutput = ["True", "False", "True", "False", "True", "False"];
                break;
            case "4":
                inputs = ["Hello World", "Python", "AEIOU", "bcdfgh", "//i**o22", "/*-+<a<=e?"];
                correctOutput = ["3", "1", "5", "0", "2", "2"];
                break;
            case "5":
                inputs = ["5", "3", "6", "7", "10", "14"];
                correctOutput = ["1\n2\nFizz\n4\nBuzz", "1\n2\nFizz", "1\n2\nFizz\n4\nBuzz\nFizz", "1\n2\nFizz\n4\nBuzz\nFizz\n7", "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz", "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14"];
                break;
            case "6":
                inputs = ["5", "-3", "0", "30", "0", "-14"];
                correctOutput = ["Positive", "Negative", "Zero", "Positive", "Zero", "Negative"];
                break;
            case "7":
                inputs = ["0", "100", "37", "4", "10", "300"];
                correctOutput = ["32.0", "212.0", "98.6", "39.2", "50", "572"];
                break;
            case "8":
                inputs = ["1000\n 5\n 2", "1500\n 4.3\n 6", "2000\n 3\n 1", "8000\n 8\n 4", "140000\n 3.4\n 5", "300\n 5\n 1"];
                correctOutput = ["100.0", "387.0", "60.0", "2560.0", "2380", "15"];
                break;
            case "9":
                inputs = ["3\n 5", "-1\n 6", "0\n 0", "30\n -5", "10\n 40", "300\n -100"];
                correctOutput = ["8", "5", "0", "25", "50", "200"];
                break;
            case "10":
                inputs = ["3\n 5", "7\n -2", "0\n 0", "30\n -5", "10\n 40", "300\n -100"];
                correctOutput = ["5", "7", "0", "30", "40", "300"];
                break;
            case "12":
                inputs = ["10\n 2", "10\n 3", "15\n 5", "30\n 30", "100\n 10", "3\n 5"];
                correctOutput = ["Divisible", "Not Divisible", "Divisible", "Divisible", "Divisible", "Not Divisible"];
                break;
            case "14":
                inputs = ["5\n 3", "7\n 2", "10\n 10", "3\n 5", "10\n 8", "10\n 2"];
                correctOutput = ["16", "18", "40", "16", "36", "24"];
                break;
            case "16":
                inputs = ["3", "5", "2", "4", "12", "10"];
                correctOutput = ["9", "25", "4", "16", "144", "100"];
                break;
            case "18":
                inputs = ["3\n 4\n +", "10\n 5\n *", "5\n 2\n -", "100\n 10\n /", "3\n 3\n ^", "10\n 2\n %"];
                correctOutput = ["7", "50", "3", "10", "9", "0"];
                break;
            case "19":
                inputs = ["12567", "55668", "77755", "112", "49265310", "110125"];
                correctOutput = ["1\n2\n5\n6\n7", "5\n5\n6\n6\n8", "7\n7\n7\n5\n5", "1\n1\n2", "4\n9\n2\n6\n5\n3\n1\n0", "1\n1\n0\n1\n2\n5"];
                break;
            case "20":
                inputs = ["radar", "hello", "level", "world", "apple", "madam"];
                correctOutput = ["True", "False", "True", "False", "False", "True"];
                break;
            case "22":
                inputs = ["1 2 3 4", "10 -1 7", "0 0 0 0", "-2 -3 5", "100 -10 -40 50", "0 10 30 10"];
                correctOutput = ["10", "16", "0", "0", "100", "50"];
                break;
            case "24":
                inputs = ["5", "3", "1", "0", "10", "12"];
                correctOutput = ["120", "6", "1", "0", "3628800", "479001600"];
                break;
            case "26":
                inputs = ["Hello world", "Count the words here", "This is a test", "JudgeX is a test system", "25 apple in the bag", "** // -- ++"];
                correctOutput = ["2", "4", "4", "5", "5", "4"];
                break;
            case "28":
                inputs = ["1, 2, 3, 4, 5", "-5, -3, -1, -7", "100, 200, 300", "-50, -1000, 100, 400, 1000", "1, 5, 8, 9, 6, 2, -6, 50", "5"];
                correctOutput = ["5", "-1", "300", "1000", "50", "5"];
                break;
            case "30":
                inputs = ["1, 2, 4, 5", "12, 13, 14, 16", "32, 33, 34, 35, 37, 38", "100, 101, 103", "7, 8, 9, 10, 12", "50, 52"];
                correctOutput = ["3", "15", "36", "102", "11", "51"];
                break;
            case "32":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "34":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "36":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "38":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "40":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "42":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "44":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "46":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "47":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "48":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "50":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "52":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "54":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "56":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "58":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "60":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "62":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "64":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "66":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "68":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "69":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "70":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "72":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "73":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "75":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "77":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "79":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "81":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "83":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "85":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "87":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "89":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "91":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;
            case "93":
                inputs = ["", "", "", "", "", ""];
                correctOutput = ["", "", "", "", "", ""];
                break;

            default:
                console.log("No task selected or task not found.");
                return;
        }

        for (let i = 0; i < inputs.length; i++) {
            const stdin = inputs[i];
            currentTaskIndex = i;
            const requestData = {
                language_id: languageToWork,
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
                    await checkResult(result.token, currentTaskIndex);
                }

            } catch (error) {
                console.log("Error: " + error.message + "\n");
            }
        }
    }

    let testResults = "";

    async function checkResult(submissionId, index) {
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
            const expectedOutput = correctOutput[index];

            testResults += output === expectedOutput ? "1" : "0";

            console.log(`Test ${index + 1}: ${output === expectedOutput ? "Passed" : "Failed"} - Expected: ${expectedOutput}, Got: ${output}`);

            if (index === inputs.length - 1) {
                console.log(`Final Test Results: ${testResults}`);

                localStorage.setItem(`taskResult_${activeTask}_${selectedLanguage}_${selectedLevel}`, testResults);
            }

        }
        catch (error) {
            console.log("Error: " + error.message + "\n");
        }
    }


