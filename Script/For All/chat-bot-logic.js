class MessageApp {
    constructor(messageAreaSelector, inputSelector, buttonSelector, responsesUrl, dot) {
        this.messageArea = document.querySelector(messageAreaSelector);
        this.messageText = document.querySelector(inputSelector);
        this.sendButton = document.querySelector(buttonSelector);
        this.responsesUrl = responsesUrl;
        this.dot = document.querySelector(dot);
        this.responses = {};
        this.isBotTyping = false;

        this.loadResponses();
        this.initializeEventListeners();
    }

    async loadResponses() {
        try {
            const response = await fetch(this.responsesUrl);
            this.responses = await response.json();
        } catch (error) {
            console.error("Error loading responses:", error);
        }
    }

    initializeEventListeners() {
        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.messageText.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
    }

    // Method to send the first greeting message from the bot
    startingMessageFromBot() {
        const welcomeMessage = "Hello! I'm here to help you with your programming challenges. How can I assist you today?";
        this.createMessageBox(welcomeMessage, 'bot');
    }

    sendMessage() {
        if (this.isBotTyping) return;

        const message = this.messageText.value.trim();
        if (message) {
            this.createMessageBox(message, 'user');
            this.messageText.value = '';
            this.generateBotReply(message);
        }
    }

    createMessageBox(message, type, isTyping = false) {
        const messageBox = document.createElement('div');
        messageBox.classList.add(`${type}-messages-box`);

        if (type === "bot") {
            const imageBox = document.createElement('div');
            imageBox.classList.add('image-box');
            messageBox.appendChild(imageBox);

            const image = document.createElement('img');
            image.src = 'Image/chat-bot.jpg';
            image.alt = 'ChatBot';
            imageBox.appendChild(image);
        }

        const messageContent = document.createElement('p');
        if (isTyping) {
            messageContent.textContent = '';
        } else {
            messageContent.textContent = message;
        }

        messageBox.appendChild(messageContent);
        this.messageArea.appendChild(messageBox);
        this.messageArea.scrollTop = this.messageArea.scrollHeight;

        return messageContent;
    }

    generateBotReply(userMessage) {
        this.isBotTyping = true;
        this.toggleUserInput(false);

        const reply = this.analyzeMessage(userMessage);
        const botMessageContent = this.createMessageBox('', 'bot', true);

        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex < reply.length) {
                botMessageContent.textContent += reply[currentIndex];
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                this.isBotTyping = false;
                this.toggleUserInput(true);

                // If the bot doesn't understand, generate categories
                if (reply === "I'm sorry, I didn't understand that. Could you please clarify?") {
                    this.isBotTyping = true; // Bot starts typing again
                    this.toggleUserInput(false);

                    // Generate second message with animation
                    const secondMessage = "Or choose one of the following categories to find answers to your questions.";
                    const secondBotMessageContent = this.createMessageBox('', 'bot', true);

                    let secondIndex = 0;
                    const secondTypingInterval = setInterval(() => {
                        if (secondIndex < secondMessage.length) {
                            secondBotMessageContent.textContent += secondMessage[secondIndex];
                            secondIndex++;
                        } else {
                            clearInterval(secondTypingInterval);
                            this.isBotTyping = false; // Bot finished typing
                            this.toggleUserInput(true); // Re-enable user input
                            this.generateCategories(); // Show categories after the second message
                        }
                    }, 100); // Simulated typing speed for the second message
                }
            }
        }, 100);
    }

    toggleUserInput(isEnabled) {
        this.sendButton.disabled = !isEnabled;
        this.messageText.disabled = !isEnabled;
        this.sendButton.style.cursor = isEnabled ? 'pointer' : 'not-allowed';
        this.dot.classList.remove('green-chat-dot', 'orange-chat-dot');
        this.dot.classList.add(isEnabled ? 'green-chat-dot' : 'orange-chat-dot');
    }

    analyzeMessage(message) {
        const lowerCaseMessage = message.toLowerCase();

        let bestMatchReplies = [];
        let matchedKeywords = [];

        for (let keyword in this.responses) {
            if (
                lowerCaseMessage === keyword.toLowerCase() ||
                lowerCaseMessage.includes(keyword.toLowerCase())
            ) {
                matchedKeywords.push(keyword);
                bestMatchReplies = this.responses[keyword];
            }
        }

        if (matchedKeywords.length > 0) {
            return bestMatchReplies[Math.floor(Math.random() * bestMatchReplies.length)];
        }

        return "I'm sorry, I didn't understand that. Could you please clarify?";
    }

    generateCategories() {
        const categories = [
            "General Questions",
            "Task Submission Issues",
            "Programming Languages Support",
            "User Account Management",
            "Badges and Certificates",
            "Daily Submission Limits",
            "Points and Diamonds System",
            "Premium Features and Special Tasks",
            "Difficulty Levels and Task Guidelines",
            "Bug Reports and Feedback"
        ];

        const questionAndAnswerForCategories = {
            "General Questions": [
                {
                    question: "What is JudgeX?",
                    answer: "JudgeX is an online platform for practicing programming by solving tasks and submitting solutions for evaluation."
                },
                {
                    question: "Is JudgeX free to use?",
                    answer: "Yes, JudgeX has free features, but it also offers premium features for advanced users."
                }
            ],
            "Task Submission Issues": [
                {
                    question: "Why is my task submission not evaluated?",
                    answer: "Ensure that your code meets the input and output requirements and check for syntax errors or missing dependencies."
                },
                {
                    question: "How do I submit a task?",
                    answer: "Navigate to the task page, select your programming language, paste your code, and click 'Submit'."
                }
            ],
            "Programming Languages Support": [
                {
                    question: "Which programming languages are supported?",
                    answer: "JudgeX supports multiple languages, including Python, Java, C#, JavaScript, and more."
                },
                {
                    question: "Can I request support for a new programming language?",
                    answer: "Yes, you can suggest a new language by submitting a feature request through our feedback form."
                }
            ],
            "User Account Management": [
                {
                    question: "How do I create an account?",
                    answer: "Click on 'Sign Up' and fill out the registration form with your email and password."
                },
                {
                    question: "How can I reset my password?",
                    answer: "Go to the login page and click 'Forgot Password' to receive a password reset link."
                }
            ],
            "Badges and Certificates": [
                {
                    question: "How do I earn badges?",
                    answer: "You earn badges by completing tasks, solving challenges in different languages, and achieving specific milestones."
                },
                {
                    question: "How can I obtain a certificate?",
                    answer: "Certificates are automatically generated when you complete all tasks at a certain difficulty level or in all supported languages."
                }
            ],
            "Daily Submission Limits": [
                {
                    question: "What is the daily submission limit?",
                    answer: "Each user has a limit of 5 submissions per day."
                },
                {
                    question: "Can I increase my daily submission limit?",
                    answer: "The daily limit can be increased with a premium subscription or by earning specific achievements."
                }
            ],
            "Points and Diamonds System": [
                {
                    question: "How do I earn diamonds?",
                    answer: "You earn diamonds by submitting correct solutions and completing premium tasks."
                },
                {
                    question: "What can I use diamonds for?",
                    answer: "Diamonds can be used to purchase certificates and unlock premium tasks."
                }
            ],
            "Premium Features and Special Tasks": [
                {
                    question: "What are premium tasks?",
                    answer: "Premium tasks are more challenging and offer additional rewards, such as extra diamonds and exclusive badges."
                },
                {
                    question: "How can I access premium features?",
                    answer: "You can access premium features by subscribing to a premium membership."
                }
            ],
            "Difficulty Levels and Task Guidelines": [
                {
                    question: "What are the difficulty levels?",
                    answer: "JudgeX offers five levels: Easy, Medium, Hard, Very Hard, and Special for premium users."
                },
                {
                    question: "Where can I find task guidelines?",
                    answer: "Each task includes detailed guidelines and examples in the description section."
                }
            ],
            "Bug Reports and Feedback": [
                {
                    question: "How do I report a bug?",
                    answer: "Use the 'Report Bug' button on the website or contact support through the feedback form."
                },
                {
                    question: "Can I suggest new features?",
                    answer: "Yes, we welcome suggestions! Use the feedback form to share your ideas."
                }
            ]
        };

        const container = document.createElement('div');
        container.classList.add('categories-container');
        this.messageArea.appendChild(container);

        let currentIndex = 0;

        const categoryTypingInterval = setInterval(() => {
            if (currentIndex < categories.length) {
                const box = document.createElement('div');
                box.classList.add("category-box");
                container.appendChild(box);

                const button = document.createElement('div');
                button.classList.add('category-button');
                box.appendChild(button);

                const text = document.createElement('span');
                text.textContent = categories[currentIndex];
                button.appendChild(text);

                // Add event listener to toggle questions for each category
                button.addEventListener('click', () => {
                    const category = text.textContent.trim();
                    console.log("Category clicked:", category);
                    const questions = questionAndAnswerForCategories[category];
                    if (!questions) {
                        console.error(`No questions found for category: ${category}`);
                        return;
                    }
                    this.showQuestionsForCategory(category, questions, box);
                });

                currentIndex++;
            } else {
                clearInterval(categoryTypingInterval);
            }
        }, 500); // Delay between each category animation
    }

    // Method to generate questions for a specific category
    showQuestionsForCategory(category, questions, categoryElement) {
        if (!questions || questions.length === 0) {
            console.error(`No questions found for category: ${category}`);
            return;
        }

        const questionsContainer = document.createElement('div');
        questionsContainer.classList.add('questions-container');
        categoryElement.appendChild(questionsContainer);

        questions.forEach((q) => {
            const questionBox = document.createElement('div');
            questionBox.classList.add("question-box");
            questionsContainer.appendChild(questionBox)

            const questionButton = document.createElement('div');
            questionButton.classList.add('question-button');
            questionButton.textContent = q.question;
            questionBox.appendChild(questionButton);

            // Add event listener to display the answer
            questionButton.addEventListener('click', () => this.showAnswer(q.answer, questionBox));
        });
    }


    // Method to display an answer for a specific question
    showAnswer(answer, questionElement) {
        // Check if the answer is already displayed
        let answerElement = questionElement.querySelector('.answer');
        if (answerElement) {
            answerElement.remove(); // Remove answer if already displayed
            return;
        }

        answerElement = document.createElement('div');
        answerElement.classList.add('answer');
        answerElement.textContent = answer;
        questionElement.appendChild(answerElement);
    }


}

const app = new MessageApp('.messages-area', '.send-input', '.send-icon', 'Json/chat-bot-phrases.json', '.chat-circle');
app.startingMessageFromBot(); // Call the method to send the first message