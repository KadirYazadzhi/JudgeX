const apiURL = 'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true';
const rapidAPIHost = 'judge0-ce.p.rapidapi.com';
const rapidAPIKey = 'eb1cbe92d7msh7fb67488f0cb32cp163caajsn6d54f9d7668f';
const activeTask = localStorage.getItem('activeTask');

let inputs = [];
let correctOutput = [];
let currentTaskIndex = 0;

async function submitCode() {
    const code = document.getElementById('code-editor').value;

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

            break;
        case "9":
            inputs = ["3\n 5", "-1\n 6", "0\n 0", "30\n -5", "10\n 40", "300\n -100"];

            break;
        case "10":
            inputs = ["3\n 5", "7\n -2", "0\n 0", "30\n -5", "10\n 40", "300\n -100"];

            break;
        case "12":
            inputs = ["10\n 2", "10\n 3", "15\n 5", "30\n 30", "100\n 10", "3\n 5"];

            break;
        case "14":
            inputs = ["5\n 3", "7\n 2", "10\n 10", "3\n 5", "10\n 8", "10\n 2"];

            break;
        case "16":
            inputs = ["3", "5", "2", "4", "12", "10"];

            break;
        case "18":
            inputs = ["3\n 4\n +", "10\n 5\n *", "5\n 2\n -", "100\n 10\n /", "3\n 3\n ^", "10\n 2\n %"];

            break;
        case "19":
            inputs = ["12567", "55668", "77755", "112233445566", "49265310", "110125"];
            correctOutput = ["1\n2\n5\n6\n7", "5\n5\n6\n6\n8", "7\n7\n7\n5\n5", "1\n1\n2\n2\n3\n3\n4\n4\n5\n5\n6\n6", "4\n9\n2\n6\n5\n3\n1\n0", "1\n1\n0\n1\n2\n5"];
            break;
        default:
            console.log("No task selected or task not found.");
            return;
    }

    for (let i = 0; i < inputs.length; i++) {
        const stdin = inputs[i];
        currentTaskIndex = i;
        const requestData = {
            language_id: 52,
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

            localStorage.setItem(`taskResult_${activeTask}`, testResults);
        }

    } catch (error) {
        console.log("Error: " + error.message + "\n");
    }
}

