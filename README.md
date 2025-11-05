# JudgeX - Advanced Web Platform for Programming Challenges

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

## 📊 Project Line Counts

This table shows the number of lines for each non-binary, non-document file in the project.

| File                                                                              | Lines     |
|-----------------------------------------------------------------------------------|-----------|
| Style/Profile/profile-page.css                                                    | 1555      |
| index.html                                                                        | 1127      |
| profile.html                                                                      | 898       |
| Style/System/system.css                                                           | 769       |
| system.html                                                                       | 617       |
| Style/System/nav system.css                                                       | 569       |
| Script/Profile/online-resume.js                                                   | 405       |
| Script/For All/chat-bot-logic.js                                                  | 366       |
| Style/Home/hero-section.css                                                       | 352       |
| Style/Home/leaderboard.css                                                        | 341       |
| Script/System/code-compilation.js                                                 | 323       |
| Script/System/display-submissions.js                                              | 318       |
| Style/Home/about-us-section.css                                                   | 302       |
| Style/Home/contact.css                                                            | 277       |
| Script/System/ai-feedback.js                                                      | 270       |
| Script/System/download-exercise-document.js                                       | 257       |
| Style/For All/chat-bot.css                                                        | 248       |
| Style/Home/header.css                                                             | 247       |
| Style/System/submissions.css                                                      | 240       |
| Style/For All/footer.css                                                          | 237       |
| Script/Home/register.js                                                           | 237       |
| Script/System/system-sidebar.js                                                   | 199       |
| Style/Home/responsive-styles.css                                                  | 195       |
| Style/Home/register.css                                                           | 195       |
| Style/Home/cards.css                                                              | 195       |
| Script/For All/all-const.js                                                       | 191       |
| Script/Profile/profile-notification.js                                            | 182       |
| Json/chat-bot-phrases.json                                                        | 172       |
| Style/System/time-card.css                                                        | 169       |
| README.md                                                                         | 168       |
| Style/For All/navbar phone.css                                                    | 167       |
| Json/exercises-answers-data.json                                                  | 166       |
| Style/Home/levels-buttons.css                                                     | 165       |
| Script/System/sidebar-information-card-logic.js                                   | 165       |
| Style/Home/nav-other-button.css                                                   | 163       |
| Style/Home/features.css                                                           | 163       |
| Style/Home/contact-phone.css                                                      | 160       |
| Script/Profile/badges.js                                                          | 156       |
| Script/Profile/progress-section.js                                                | 152       |
| Script/For All/pages-start-time.js                                                | 152       |
| Style/System/sidebar-information-modal.css                                        | 151       |
| Style/Home/marquee.css                                                            | 146       |
| Script/Home/features.js                                                           | 144       |
| Style/Home/scroll-driven.css                                                      | 141       |
| Script/Profile/search-bar.js                                                      | 140       |
| Style/Profile/profile-right-menu.css                                              | 138       |
| Script/System/system-contact-validation.js                                        | 138       |
| Style/Home/special section.css                                                    | 136       |
| Style/Home/faq.css                                                                | 136       |
| Style/Home/blur cards.css                                                         | 136       |
| Style/System/system-message-container.css                                         | 134       |
| Script/System/change-exercise-name.js                                             | 134       |
| Script/Profile/information-section-field-changing.js                              | 134       |
| Style/Home/search.css                                                             | 131       |
| Script/System/local-storage-download-and-restore.js                               | 123       |
| Script/System/save-code-from-textarea.js                                          | 118       |
| Script/System/certificate-generate.js                                             | 118       |
| Script/System/show-certificate-message.js                                         | 117       |
| Style/Home/content-section.css                                                    | 116       |
| Script/Home/pages-translation.js                                                  | 116       |
| Script/System/change-exercise-buttons.js                                          | 110       |
| Script/Home/blur cards.js                                                         | 108       |
| Script/Profile/shop-section-buy-hearts.js                                         | 104       |
| Script/Home/language card click.js                                                | 104       |
| Script/Other/prevent-console-modification.js                                      | 103       |
| Script/Profile/profile-menu.js                                                    | 99        |
| Json/information-about-system.json                                                | 98        |
| Style/Other/404.css                                                               | 94        |
| Script/System/sidebar-phone.js                                                    | 93        |
| Script/System/code-view-icon.js                                                   | 90        |
| Script/Profile/certificate-section-show-certificate.js                            | 89        |
| Script/Home/rank-section-text.js                                                  | 87        |
| Script/Home/leaderboard.js                                                        | 87        |
| Script/Home/script.js                                                             | 84        |
| Style/System/certificate-message.css                                              | 83        |
| Script/Home/validation.js                                                         | 76        |
| Script/System/add-information-about-user.js                                       | 74        |
| Style/Home/style-two.css                                                          | 73        |
| Script/System/change-language-in-system.js                                        | 69        |
| Script/Profile/change-user-image.js                                               | 69        |
| Style/System/loader.css                                                           | 68        |
| Style/System/ai-feedback-modal.css                                                | 68        |
| Script/Home/generate-special-level-button.js                                      | 68        |
| Script/Profile/function-for-certificate-image.js                                  | 67        |
| Script/Home/leaderboard-year.js                                                   | 67        |
| Script/Profile/profile-right-information-times.js                                 | 64        |
| Script/Home/level buttons click.js                                                | 59        |
| Script/Profile/settings.js                                                        | 58        |
| Script/Profile/profile-right-section-buttons.js                                   | 58        |
| Script/For All/clock.js                                                           | 54        |
| Script/Profile/user-details.js                                                    | 53        |
| Script/For All/chat-bot-container.js                                              | 53        |
| Style/Home/page-property.css                                                      | 50        |
| Style/For All/light-theme.css                                                     | 49        |
| Script/Home/open-profile-page.js                                                  | 49        |
| Script/Home/special-button.js                                                     | 48        |
| Script/Profile/special-account-setup.js                                           | 44        |
| Script/Home/footer-buttons.js                                                     | 43        |
| Script/Profile/online-resume-image.js                                             | 42        |
| 403.html                                                                          | 42        |
| Script/Other/404.js                                                               | 41        |
| 404.html                                                                          | 41        |
| Script/System/show-and-hide-time-type.js                                          | 40        |
| Script/System/null-test-alert-message.js                                          | 39        |
| Style/For All/cards-color.css                                                     | 38        |
| Script/System/time-card-current-time.js                                           | 37        |
| Script/Home/slider.js                                                             | 36        |
| Script/Home/more cards.js                                                         | 36        |
| Script/System/system-phone-alert.js                                               | 33        |
| Style/Home/map.css                                                                | 32        |
| Script/Home/faq-section.js                                                        | 32        |
| Script/System/open-system-protection.js                                           | 31        |
| Script/System/buttons-hover-text.js                                               | 31        |
| Script/Home/set-profile-image.js                                                  | 31        |
| Script/Home/scroll-driven.js                                                      | 31        |
| Script/System/sidebar-other-menu.js                                               | 30        |
| Script/Profile/profile-page-protection.js                                         | 30        |
| Style/For All/system-scroll-style.css                                             | 27        |
| Script/System/view-certificate.js                                                 | 27        |
| Script/Home/contact.js                                                            | 26        |
| Style/Home/language.css                                                           | 25        |
| Script/System/special-bar-color.js                                                | 25        |
| Script/Home/map.js                                                                | 25        |
| Script/System/system-sidebar-profile.js                                           | 24        |
| Script/Home/special cards change.js                                               | 24        |
| Script/Home/search.js                                                             | 19        |
| Script/Home/navbar-phone.js                                                       | 19        |
| Script/System/container-width-control.js                                          | 16        |
| Script/Profile/deactivate-shop-cards.js                                           | 16        |
| Script/Home/pointer.js                                                            | 15        |
| Style/Home/feedback.css                                                           | 11        |
| Script/Home/button-to-top.js                                                      | 4         |
| Script/Profile/resume-template.js                                                 | 1         |
| **Total Lines (Source Code)**                                                     | **16589**     |