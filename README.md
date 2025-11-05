# JudgeX - Advanced Web Platform for Programming Challenges 🚀

JudgeX is an innovative web platform designed for programming enthusiasts. It offers a wide range of features including a code compilation system, user authentication, various difficulty levels, leaderboards, and a unique online resume builder. The platform is built using pure HTML, CSS, and JavaScript, and it leverages `localStorage` for all data persistence, making it a completely serverless application in terms of user data management. For code evaluation, it integrates with the Judge0 API.

![JudgeX-preview-github.png](JudgeX-preview-github.png)

---

## 📂 Project Structure

Here is a detailed tree structure of the project:

```
    .
    ├── 403.html
    ├── 404.html
    ├── index.html
    ├── JudgeX-preview-github.png
    ├── LICENSE
    ├── profile.html
    ├── README.md
    ├── system.html
    ├── test.html
    ├── Exercise/
    │   ├── BG/
    │   │   ├── Easy/
    │   │   ├── Hard/
    │   │   ├── Insane/
    │   │   ├── Medium/
    │   │   └── Special/
    │   └── EN/
    │       ├── Easy/
    │       ├── Hard/
    │       ├── Insane/
    │       ├── Medium/
    │       └── Special/
    ├── Image/
    │   ├── Badges/
    │   └── Template/
    ├── Json/
    │   ├── chat-bot-phrases.json
    │   ├── exercises-answers-data.json
    │   └── information-about-system.json
    ├── Script/
    │   ├── For All/
    │   ├── Home/
    │   ├── Other/
    │   ├── Profile/
    │   └── System/
    └── Style/
    ├── For All/
    ├── Home/
    ├── Other/
    ├── Profile/
    └── System/
```

---

## Detailed File and Folder Descriptions

This section provides a detailed explanation of each file and folder in the project, clarifying its purpose and functionality.

### 📁 Root Directory

This is the main directory of the project, containing the primary HTML pages and configuration files.

- **`index.html`**: The main landing page of the website. It serves as the entry point for users, featuring sections like registration, login, leaderboards, and descriptions of the platform's features.
- **`profile.html`**: The user's profile page. This page is accessible after a user logs in and displays their progress, statistics, earned badges, certificates, and an editable online resume.
- **`system.html`**: The core of the application - the exercise-solving page. Here, users can view exercise problems, write code in a text editor, submit it for compilation, and see the results.
- **`403.html` & `404.html`**: Standard error pages for "Forbidden" and "Not Found" errors, providing a consistent user experience during navigation issues.
- **`JudgeX-preview-github.png`**: A preview image of the project, likely used for social media and GitHub repository previews.
- **`LICENSE`**: The license file for the project, defining the terms under which the software can be used, modified, and distributed.
- **`README.md`**: This file, providing documentation for the project.

### 📁 `Exercise/`

This folder contains the documents for all the programming exercises available on the platform. The structure is organized by language (`BG` for Bulgarian, `EN` for English) and then by difficulty level.

- **`BG/` & `EN/`**: Language-specific folders.
- **`Easy/`, `Medium/`, `Hard/`, `Insane/`, `Special/`**: These subfolders categorize the exercises by their difficulty. Each folder contains the exercise description files (e.g., `.docx`, `.pdf`), which are presented to the user on the `system.html` page.

### 📁 `Image/`

This folder stores all the visual assets used throughout the website.

- **`Badges/`**: Contains SVG images for various badges that users can earn (e.g., for solving problems in a specific language or reaching a certain difficulty level).
- **`Template/`**: Contains PNG image templates for the certificates that are generated for users upon completing a difficulty level.
- Other files like `JudgeX-logo.svg`, `about-banner.png`, `bulgarian-flag.svg`, etc., are used for branding, UI elements, and decorative purposes across the site.

### 📁 `Json/`

This folder holds JSON files that are used as databases or for configuration purposes.

- **`chat-bot-phrases.json`**: Contains predefined phrases and responses for the chat-bot feature, allowing it to interact with users.
- **`exercises-answers-data.json`**: A critical file containing the correct answers and test cases for all exercises. The system uses this data to validate user submissions.
- **`information-about-system.json`**: Stores informational text displayed in the system, such as tips, rules, or guidelines.

### 📁 `Script/`

This is the most critical folder, containing all the JavaScript logic that powers the website. The scripts are organized by the page or feature they relate to.

####  subdir `For All/`
Scripts that are used across multiple pages.

- **`all-const.js`**: Initializes constants and variables that are used globally, such as user data retrieved from `localStorage`.
- **`chat-bot-container.js`**: Manages the UI and visibility of the chat-bot container.
- **`chat-bot-logic.js`**: Implements the core logic of the chat-bot, processing user input and selecting responses from `chat-bot-phrases.json`.
- **`clock.js`**: A simple script to display the current time on the page.
- **`pages-start-time.js`**: Records the time when a user logs in, used for tracking session duration.

#### subdir `Home/`
Scripts specific to the `index.html` page.

- **`register.js`**: Handles the user registration process, including form validation and saving new user data to `localStorage`. It uses CryptoJS for password encryption.
- **`validation.js`**: Manages user login, checking credentials against the data stored in `localStorage`.
- **`leaderboard.js`**: Populates the leaderboards by fetching and sorting user data based on their scores.
- **`level buttons click.js`**: Handles clicks on the difficulty level buttons, redirecting the user to the `system.html` page with the selected level.
- **`pages-translation.js`**: Manages the translation of the page content between Bulgarian and English.
- **`faq-section.js`**: Controls the accordion functionality in the FAQ section.
- **`... and many others`**: The `Home/` directory contains numerous other small scripts for UI effects, animations, and interactions like `blur cards.js`, `button-to-top.js`, `slider.js`, `scroll-driven.js`, etc., which collectively create the dynamic user experience of the home page.

#### subdir `Other/`
Miscellaneous and utility scripts.

- **`prevent-console-modification.js`**: A security measure to prevent users from easily accessing or modifying the browser's developer console.
- **`404.js`**: Contains logic for the 404 page, such as a countdown redirect to the home page.

#### subdir `Profile/`
Scripts for the `profile.html` page.

- **`user-details.js`**: Fetches and displays the logged-in user's details (username, email, etc.) on the profile page.
- **`badges.js`**: Checks the user's solved exercises and dynamically displays the corresponding badges.
- **`progress-section.js`**: Calculates and renders the user's progress bars for each difficulty level.
- **`certificate-section-show-certificate.js`**: Handles the logic for showing earned certificates.
- **`online-resume.js`**: Manages the functionality of the online resume, allowing users to edit and save their information.
- **`information-section-field-changing.js`**: Allows users to update their personal information (e.g., password, email).
- **`settings.js`**: Manages user-configurable settings, such as theme (light/dark) and other preferences.
- **`shop-section-buy-hearts.js`**: Implements the logic for the "shop," where users can spend points to buy "hearts" (extra lives or attempts).

#### subdir `System/`
Scripts for the `system.html` (the exercise-solving) page. This is the core logic of the application.

- **`code-compilation.js`**: The most complex script. It handles the entire code submission process:
    1.  It takes the user's code from the editor.
    2.  It retrieves the corresponding test cases from `exercises-answers-data.json`.
    3.  It sends the code and test cases to the **Judge0 API** for compilation and execution.
    4.  It receives the results, compares them to the expected output, and determines if the solution is correct.
    5.  It updates the user's progress in `localStorage`.
- **`ai-feedback.js`**: After a user submits code, this script sends the code to an **Ollama API** to get AI-generated feedback on how to improve it.
- **`certificate-generate.js`**: When a user completes all exercises in a difficulty level, this script generates a certificate by combining the user's name with the corresponding template from `Image/Template/`.
- **`change-exercise-buttons.js`**: Manages the navigation between exercises within a selected difficulty level.
- **`save-code-from-textarea.js`**: Automatically saves the user's code from the text editor to `localStorage` at regular intervals, preventing loss of work.
- **`display-submissions.js`**: Displays a history of the user's past submissions for the current exercise.
- **`container-width-control.js`**: Allows the user to resize the panels on the page (e.g., the code editor and the problem description).
- **`open-system-protection.js`**: Prevents users from accessing the system page directly without selecting a level or being logged in.

### 📁 `Style/`

This folder contains all the CSS files, responsible for the visual appearance of the website. The structure mirrors the `Script/` folder.

- **`For All/`**: Global styles, including `light-theme.css`, `footer.css`, and `chat-bot.css`.
- **`Home/`**: Styles specific to the `index.html` page, such as `header.css`, `leaderboard.css`, and `features.css`.
- **`Profile/`**: Styles for the user profile page.
- **`System/`**: Styles for the exercise-solving system page.
- **`Other/`**: Styles for other pages like the error pages.

This detailed structure provides a clear roadmap of the JudgeX platform's architecture, highlighting the separation of concerns and the modular approach to its front-end development.

---

## ✨ System Features & Future Development

This section outlines the current features of JudgeX and explores potential avenues for future development.

### 🌟 What JudgeX Currently Offers:

- **Code Compilation System**: Utilizes the Judge0 API to compile and run user code against predefined test cases.
- **AI-Powered Feedback**: Integrates with the Ollama API to provide users with AI-generated feedback on their code submissions.
- **User Authentication**: A complete registration and login system with client-side password encryption using CryptoJS.
- **Persistent Data**: All user data, progress, and settings are stored in the browser's `localStorage`, making it a serverless solution.
- **Multi-Language Support**: The platform supports both Bulgarian 🇧🇬 and English 🇬🇧 for the UI and exercise descriptions.
- **Variety of Challenges**: Exercises are categorized into five difficulty levels: Easy, Medium, Hard, Insane, and Special.
- **Gamification Elements**: Users can earn badges for their achievements and spend points in a shop for in-game items like hearts.
- **Dynamic Profile Page**: A comprehensive user profile that includes statistics, progress bars, earned badges, and generated certificates.
- **Online Resume Builder**: A unique feature that allows users to create and customize an online resume based on their achievements on the platform.

### 🚀 Potential New Features & Improvements:

- **Full-Stack Conversion**: Transition from `localStorage` to a proper backend with a database (e.g., Node.js with MongoDB/PostgreSQL). This would enable user data to be persistent across different devices.
- **User vs. User Challenges**: Implement a feature where two users can compete in real-time to solve the same problem the fastest.
- **Expanded Language Support**: Add support for more programming languages in the code compilation system.
- **Community Features**: Introduce a forum or a comment section for each exercise to allow users to discuss solutions and help each other.
- **System-Wide Dark Mode**: While the home page has a theme switcher, the system page could also benefit from a dark mode for a more consistent user experience.
- **Refactor CSS**: Convert the existing CSS to a preprocessor like SASS for better organization and maintainability.

### 🤝 How to Contribute

Contributions are welcome! If you have an idea for a new feature or an improvement, feel free to fork the repository, make your changes, and submit a pull request. Please ensure that your code follows the existing style and conventions of the project.

---

## 📊 Project Line Counts (Summarized)

Here is a summary of the project's line counts, grouped by file type.

| File Type | Total Lines |
|-----------|-------------|
| `.css`    | 8692        |
| `.js`     | 7647        |
| `.html`   | 2725        |
| `.json`   | 436         |
| **Total** | **19500**   |

---

## 🙏 Acknowledgements

A big thank you to everyone who has contributed to this project, provided feedback, or used it to learn and grow their programming skills. Your support is what makes this platform possible!

Happy Coding! 🎉
