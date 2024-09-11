const resumeBtn = document.querySelector(".resume-template-btn");
const contentDiv = document.getElementById('online-resume-template');
const oldContent = contentDiv.innerHTML;
const resumeImg = document.querySelector('.resume-img');

resumeBtn.addEventListener('click', function () {
    if (resumeBtn.classList.contains("activeTemplate")) {
        resumeBtn.classList.remove("activeTemplate");
        contentDiv.innerHTML = oldContent;
    }
    else {
        resumeBtn.classList.add("activeTemplate");

        contentDiv.innerHTML = '   <div class="resume-small-information" contenteditable="true">\n' +
            '                        <span class="emoji-box">\n' +
            '                            <i class="fa-solid fa-laptop-code icon"></i>\n' +
            '                        </span>\n' +
            '                        <span>Hello! <span class="emoji" data-emoji="👋"></span></span>\n' +
            '                        <span>\n' +
            '                            I’m Kadir Yazadzhi, a 17-year-old front-end developer passionate about creating innovative and functional designs.\n' +
            '                            Skilled in HTML, CSS, JavaScript, TypeScript, MySQL, PostgreSQL, Python, and C++, I thrive in challenging environments\n' +
            '                            and enjoy collaborating with teams. Confident in my abilities, I also have experience in project management and client relations.\n' +
            '                            <span class="emoji" data-emoji="🚀">🚀</span>\n' +
            '                        </span>\n' +
            '                    </div>\n' +
            '\n' +
            '                    <img class="resume-img" src="Image/about-banner.png">\n' +
            '                    <input type="file" id="fileInput" style="display:none" accept="image/*">\n' +
            '\n' +
            '                    <div class="resume-about-box content" contenteditable="true">\n' +
            '                        <h2><i class="fa-solid fa-address-card icon"></i> About Me</h2>\n' +
            '                        <span>\n' +
            '                            I’m Kadir Yazadzhi, a dynamic and enthusiastic front-end developer with a strong passion for web design and development.\n' +
            '                            I am currently studying at a Professional High School of Economics, majoring in "Economic Informatics," and also pursuing Software\n' +
            '                            Engineering with C# at Software University.\n' +
            '                        </span>\n' +
            '\n' +
            '                        <br>\n' +
            '\n' +
            '                        <span>\n' +
            '                            In addition to my expertise in front-end development, I have skills in console development and problem solving. I thrive on participating\n' +
            '                            in various programming challenges, competitions, and Olympiads, which further fuel my passion for continuous learning and growth.\n' +
            '                        </span>\n' +
            '                    </div>\n' +
            '\n' +
            '                    <div class="resume-course-box content" contenteditable="true">\n' +
            '                        <h2><i class="fa-solid fa-user-graduate icon"></i> Courses</h2>\n' +
            '                        <div class="course">\n' +
            '                            <span>\n' +
            '                                <i class="fa-solid fa-laptop-code icon"></i>\n' +
            '                                Web Programming 16+ (03/2023 - 05/2023) - AtlasIT Academy\n' +
            '                            </span>\n' +
            '                            <span>\n' +
            '                                <i class="fa-solid fa-laptop-code icon"></i>\n' +
            '                                Microsoft Office Specialist (04/2023 - 04/2023) - Microsoft\n' +
            '                            </span>\n' +
            '                            <span><i class="fa-solid fa-laptop-code icon"></i>\n' +
            '                                Programming Basics with C++ (01/2024 - 02/2024) - Software University\n' +
            '                            </span>\n' +
            '                            <span>\n' +
            '                                <i class="fa-solid fa-laptop-code icon"></i>\n' +
            '                                MySQL (01/2024 - 02/2024) - Software University\n' +
            '                            </span>\n' +
            '                            <span>\n' +
            '                                <i class="fa-solid fa-laptop-code icon"></i>\n' +
            '                                Programming Basics with Python (02/2024 - 03/2024) - Software University\n' +
            '                            </span>\n' +
            '                            <span>\n' +
            '                                <i class="fa-solid fa-laptop-code icon"></i>\n' +
            '                                C++ Fundamentals (03/2024 - 04/2024) - Software University\n' +
            '                            </span>\n' +
            '                            <span>\n' +
            '                                <i class="fa-solid fa-laptop-code icon"></i>\n' +
            '                                TypeScript (04/2024 - 05/2024) - Software University\n' +
            '                            </span>\n' +
            '                            <span>\n' +
            '                                <i class="fa-solid fa-laptop-code icon"></i>\n' +
            '                                Programing Basics with C# (05/2024 - 06/2024) - Software University\n' +
            '                            </span>\n' +
            '                            <span>\n' +
            '                                <i class="fa-solid fa-laptop-code icon"></i>\n' +
            '                                Advanced C++ (05/2024 - 06/2024) - Software University\n' +
            '                            </span>\n' +
            '                            <span>\n' +
            '                                <i class="fa-solid fa-laptop-code icon"></i>\n' +
            '                                OOP C++ (06/2024 - 07/2024) - Software University\n' +
            '                            </span>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '\n' +
            '                    <div class="resume-work-experience-box content" contenteditable="true">\n' +
            '                        <h2><i class="fa-solid fa-building icon"></i> Work Experience</h2>\n' +
            '                        <div class="work">\n' +
            '                             <span>\n' +
            '                                 <i class="fa-solid fa-briefcase icon"></i>\n' +
            '                                <strong>Junior Front-End Developer - Freelance</strong> (2022 - Present)\n' +
            '                                Collaborated with clients to build responsive websites and optimize user experiences.\n' +
            '                             </span>\n' +
            '\n' +
            '                            <span>\n' +
            '                                <i class="fa-solid fa-briefcase icon"></i>\n' +
            '                                <strong>Intern Developer - Tech Corp</strong> (2023 - 2024)\n' +
            '                                Worked on developing internal tools using JavaScript and C#, contributing to project management and deployment.\n' +
            '                            </span>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '\n' +
            '                    <div class="resume-skills-box content" contenteditable="true">\n' +
            '                        <h2><i class="fa-solid fa-shapes icon"></i> Skills</h2>\n' +
            '                        <div class="skills">\n' +
            '                            <span><i class="fa-solid fa-globe icon"></i>\n' +
            '                                Front-End: HTML, CSS, JavaScript, TypeScript\n' +
            '                            </span>\n' +
            '                            <span>\n' +
            '                                <i class="fa-solid fa-database icon"></i>\n' +
            '                                Back-End: MySQL, PostgreSQL, C#\n' +
            '                            </span>\n' +
            '                            <span>\n' +
            '                                <i class="fa-solid fa-screwdriver-wrench icon"></i>\n' +
            '                                Tools: Git, Figma, Visual Studio Code\n' +
            '                            </span>\n' +
            '                            <span><i class="fa-solid fa-ranking-star icon"></i>\n' +
            '                                Project Management: Agile, SCRUM, Jira\n' +
            '                            </span>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '\n' +
            '                    <div class="resume-education-box content" contenteditable="true">\n' +
            '                        <h2><i class="fa-solid fa-school icon"></i> Education</h2>\n' +
            '                        <div class="education">\n' +
            '                        <span>\n' +
            '                            <i class="fa-solid fa-graduation-cap icon"></i>\n' +
            '                            Professional High School of Economics, Major: Economic Informatics (2020 - Present)\n' +
            '                        </span>\n' +
            '                            <span>\n' +
            '                            <i class="fa-solid fa-graduation-cap icon"></i>\n' +
            '                            Software University, Software Engineering with C# (2021 - Present)\n' +
            '                        </span>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '\n' +
            '                    <div class="resume-certifications-box content" contenteditable="true">\n' +
            '                        <h2><i class="fa-solid fa-trophy icon"></i> Certifications</h2>\n' +
            '                        <div class="certifications">\n' +
            '                        <span>\n' +
            '                            <i class="fa-solid fa-award icon"></i>\n' +
            '                            Web Programming 16+ - AtlasIT Academy\n' +
            '                        </span>\n' +
            '                            <span>\n' +
            '                            <i class="fa-solid fa-award icon"></i>\n' +
            '                            Microsoft Office Specialist - Microsoft\n' +
            '                        </span>\n' +
            '                            <span>\n' +
            '                            <i class="fa-solid fa-award icon"></i>\n' +
            '                            Programming Basics with C++ - Software University\n' +
            '                        </span>\n' +
            '                            <span>\n' +
            '                            <i class="fa-solid fa-award icon"></i>\n' +
            '                            MySQL - Software University\n' +
            '                        </span>\n' +
            '                            <span>\n' +
            '                            <i class="fa-solid fa-award icon"></i>\n' +
            '                            Programming Basics with Python - Software University\n' +
            '                        </span>\n' +
            '                            <span>\n' +
            '                            <i class="fa-solid fa-award icon"></i>\n' +
            '                            C++ Fundamentals - Software University\n' +
            '                        </span>\n' +
            '                            <span>\n' +
            '                            <i class="fa-solid fa-award icon"></i>\n' +
            '                            TypeScript (04/2024 - 05/2024) - Software University\n' +
            '                        </span>\n' +
            '                            <span>\n' +
            '                            <i class="fa-solid fa-award icon"></i>\n' +
            '                            Programing Basics with C# (05/2024 - 06/2024) - Software University\n' +
            '                        </span>\n' +
            '                            <span>\n' +
            '                            <i class="fa-solid fa-award icon"></i>\n' +
            '                            Advanced C++ (05/2024 - 06/2024) - Software University\n' +
            '                        </span>\n' +
            '                            <span>\n' +
            '                            <i class="fa-solid fa-award icon"></i>\n' +
            '                            OOP C++ (06/2024 - 07/2024) - Software University\n' +
            '                        </span>\n' +
            '\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '\n' +
            '                    <div class="resume-hobbies-box content" contenteditable="true">\n' +
            '                        <h2><i class="fa-solid fa-pen-nib icon"></i> Hobbies & Interests</h2>\n' +
            '                        <div class="hobbies">\n' +
            '                         <span>\n' +
            '                            <i class="fa-solid fa-gamepad icon"></i>\n' +
            '                            Gaming: Enjoy playing and developing video games\n' +
            '                         </span>\n' +
            '                            <span>\n' +
            '                            <i class="fa-solid fa-book-open-reader icon"></i>\n' +
            '                            Reading: Passionate about technology and science fiction books\n' +
            '                         </span>\n' +
            '                            <span>\n' +
            '                            <i class="fa-solid fa-film icon"></i>\n' +
            '                            Movies: Big fan of sci-fi and action movies\n' +
            '                         </span>\n' +
            '                            <span>\n' +
            '                            <i class="fa-solid fa-chess icon"></i>\n' +
            '                            Chess: Love strategizing and playing chess\n' +
            '                         </span>\n' +
            '                            <span>\n' +
            '                            <i class="fa-solid fa-code icon"></i>\n' +
            '                            Programming: Constantly learning new programming languages and technologies\n' +
            '                         </span>\n' +
            '                            <span>\n' +
            '                            <i class="fa-solid fa-basketball-ball icon"></i>\n' +
            '                            Sports: Enjoy basketball, running, and staying active\n' +
            '                        </span>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '\n' +
            '\n' +
            '                    <div class="resume-contact-box content" contenteditable="true">\n' +
            '                        <h2><i class="fa-solid fa-envelope icon"></i> Contact</h2>\n' +
            '                        <div class="contact">\n' +
            '                        <span>\n' +
            '                            <i class="fa-solid fa-at icon"></i>\n' +
            '                            Email: kadiryazadzhi@gmail.com\n' +
            '                        </span>\n' +
            '                            <span>\n' +
            '                            <i class="fa-solid fa-phone icon"></i>\n' +
            '                            Phone: +359 88 888 8888\n' +
            '                        </span>\n' +
            '                            <span>\n' +
            '                            <i class="fa-solid fa-globe icon"></i>\n' +
            '                            Website: www.kadiryazadzhi.com\n' +
            '                        </span>\n' +
            '                            <span>\n' +
            '                            <i class="fa-brands fa-linkedin icon"></i>\n' +
            '                            LinkedIn: linkedin.com/in/kadir-yazadzhi\n' +
            '                        </span>\n' +
            '                            <span>\n' +
            '                            <i class="fa-brands fa-facebook icon"></i>\n' +
            '                            Facebook : Kadir Yazadhzi\n' +
            '                        </span>\n' +
            '                            <span>\n' +
            '                            <i class="fa-brands fa-twitter icon"></i>\n' +
            '                            Twitter: @kadir_yazadzhi\n' +
            '                        </span>\n' +
            '                            <span>\n' +
            '                            <i class="fa-brands fa-instagram icon"></i>\n' +
            '                            Instagram: @kadir_yazadzhi\n' +
            '                        </span>\n' +
            '                            <span>\n' +
            '                            <i class="fa-brands fa-tiktok icon"></i>\n' +
            '                            TikTok: @kadir_yazadzhi\n' +
            '                        </span>\n' +
            '                            <span>\n' +
            '                            <i class="fa-brands fa-github icon"></i>\n' +
            '                            Github: @kadir_yazadzhi\n' +
            '                        </span>\n' +
            '                        </div>\n' +
            '                    </div>';
    }
});
