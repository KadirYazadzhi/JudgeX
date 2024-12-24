class MessageApp {
    constructor(messageAreaSelector, inputSelector, buttonSelector) {
        this.messageArea = document.querySelector(messageAreaSelector);
        this.messageText = document.querySelector(inputSelector);
        this.sendButton = document.querySelector(buttonSelector);

        // Dictionary of keywords and corresponding responses
        this.responses = {
            "task": ["Do you need help with a specific task?", "Which task are you working on?"],
            "difficulty": ["We have tasks of varying difficulty: Easy, Medium, Hard, and Very Hard.", "Which difficulty level are you interested in?"],
            "special": ["The Special level is for premium users, offering the most challenging tasks.", "Would you like to unlock Special tasks?"],
            "hearts": ["You can earn up to 5 hearts per day for submitting solutions.", "Keep up the good work to earn more hearts!"],
            "badges": ["Badges are earned for various achievements, such as solving tasks in a specific language.", "What badge are you aiming to earn?"],
            "certificate": ["You can earn an automatic certificate when you complete all tasks in a level or language.", "Want to know more about how to earn a certificate?"],
            "diamonds": ["Diamonds are an important currency in our system, earned by submitting correct solutions.", "How many diamonds do you have right now?"],
            "level": ["Each level has its own set of tasks, ranging from Easy to Very Hard.", "Which level are you tackling today?"],
            "languages": ["Our system supports multiple languages. Which one are you using?", "Do you want to know more about the available languages?"],
            "score": ["You can track your progress in each task and level through your score.", "How's your score going on the tasks?"],
            "submission": ["You can submit 5 solutions per day. Don't forget to make the most of them!", "Have you submitted your solutions for today?"],
            "challenge": ["Are you up for a new challenge in one of the harder levels?", "Let me know if you're ready to take on something harder!"],
            "verify": ["Each solution is verified against sample inputs. Make sure your code works for all cases.", "Need help debugging your solution?"],
            "feedback": ["You will receive feedback on your solutions soon after submission.", "Do you want to check your latest feedback?"],
            "profile": ["You can check your profile to see your progress and badges earned.", "Would you like to see your profile?"],
            "congratulations": ["Congratulations on completing a task!", "Well done for earning a badge! Keep it up!"],
            "progress": ["Track your progress through your profile. You can see how many tasks you've solved at each level.", "Are you checking your progress regularly?"],
            "languagesupport": ["The system supports multiple programming languages, including Python, Java, C++, and more.", "Which language are you using for your task?"],
            "earn": ["You can earn diamonds by submitting correct solutions.", "Make sure to submit your best solutions to earn more diamonds!"],
            "leaderboard": ["Check the leaderboard to see how you're ranking among other users.", "Would you like to see how you're doing compared to others?"],
            "premium": ["Premium users can unlock Special level tasks and other exclusive features.", "Would you like to know more about becoming a premium user?"],
            "taskdescription": ["Each task has a detailed description with example inputs and expected outputs.", "Need help understanding a task's description?"],
            "correctsolution": ["Make sure your solution works for all inputs. A correct solution will pass all test cases.", "Want tips on how to debug your solution?"],
            "error": ["If you encounter an error, check your code for syntax issues or logical errors.", "Would you like some help identifying errors in your code?"],
            "tutorial": ["Check out tutorials and guides for more help with solving tasks.", "Want to explore some tutorials to improve your skills?"],
            "motivation": ["Keep solving tasks to level up and earn rewards!", "You're doing great! Keep going to unlock more challenges!"],
            "unlock": ["Unlock higher difficulty tasks by solving the current ones.", "Are you ready to unlock more advanced tasks?"],
            "time": ["Some tasks may have a time limit, so make sure to optimize your code.", "Need tips on optimizing your code for better performance?"],
            "help": ["If you need help with a task, feel free to reach out to the community or check the FAQ.", "Would you like to see the FAQ or get help from the community?"],
            "faq": ["The FAQ section contains answers to common questions about tasks, levels, and features.", "Would you like to browse the FAQ?"],
            "challengecompleted": ["You've completed this challenge! Great job!", "What's your next challenge? Let me know if you need assistance!"],
            "certificatesystem": ["The certificate system rewards you for completing tasks at each level.", "Would you like more information on how to earn certificates?"],
            "badgeearn": ["Badges can be earned for different achievements like solving all tasks in a level.", "Which badge are you aiming for today?"],
            "userachievement": ["Congratulations on achieving a new milestone! Keep up the good work!", "Would you like to check your latest achievements?"]
        };


        this.initializeEventListeners();
    }

    // Initializes event listeners for the send button and Enter key
    initializeEventListeners() {
        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.messageText.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
    }

    // Sends a user message and triggers the bot's response
    sendMessage() {
        const message = this.messageText.value.trim();
        if (message) {
            this.createMessageBox(message, 'user');
            this.messageText.value = ''; // Clear the input field
            this.generateBotReply(message);
        }
    }

    // Creates and appends a message box to the message area
    createMessageBox(message, type, isTyping = false) {
        const messageBox = document.createElement('div');
        messageBox.classList.add(`${type}-messages-box`);

        const messageContent = document.createElement('p');
        if (isTyping) {
            messageContent.textContent = '';
        } else {
            messageContent.textContent = message;
        }

        messageBox.appendChild(messageContent);
        this.messageArea.appendChild(messageBox);

        // Scroll to the bottom after adding a message
        this.messageArea.scrollTop = this.messageArea.scrollHeight;

        return messageContent;
    }

    // Generates a bot reply with a typing animation (letter by letter)
    generateBotReply(userMessage) {
        const reply = this.analyzeMessage(userMessage);
        const botMessageContent = this.createMessageBox('', 'bot', true);

        let currentIndex = 0;

        // Simulate typing by adding letters one by one
        const typingInterval = setInterval(() => {
            if (currentIndex < reply.length) {
                botMessageContent.textContent += reply[currentIndex];
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100); // Adjust typing speed by changing the interval (100ms per letter)
    }

    // Analyzes the user message for keywords and generates a response
    analyzeMessage(message) {
        const lowerCaseMessage = message.toLowerCase();
        for (let keyword in this.responses) {
            if (lowerCaseMessage.includes(keyword)) {
                const replies = this.responses[keyword];
                return replies[Math.floor(Math.random() * replies.length)];
            }
        }
        return "I'm sorry, I didn't understand that. Could you please clarify?";
    }
}

// Initialize the app with appropriate selectors
const app = new MessageApp('.messages-area', '.send-input', '.send-icon');
