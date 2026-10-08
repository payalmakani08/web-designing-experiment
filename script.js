/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener(
    "click",
    function () {

        document.body.classList.toggle("dark");


        if (
            document.body.classList.contains("dark")
        ) {

            themeBtn.textContent = "☀️";

            localStorage.setItem(
                "theme",
                "dark"
            );

        } else {

            themeBtn.textContent = "🌙";

            localStorage.setItem(
                "theme",
                "light"
            );

        }

    }
);


/* Load saved theme */

if (
    localStorage.getItem("theme")
    ===
    "dark"
) {

    document.body.classList.add("dark");

    themeBtn.textContent = "☀️";

}


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    revealElements.forEach(
        function (element) {

            const elementTop =
                element.getBoundingClientRect().top;

            const windowHeight =
                window.innerHeight;


            if (
                elementTop
                <
                windowHeight - 100
            ) {

                element.classList.add("show");

            }

        }
    );

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();


/* =========================================
   ANIMATED COUNTERS
========================================= */

const counters =
    document.querySelectorAll(
        "[data-target]"
    );


let countersStarted = false;


function startCounters() {

    if (countersStarted) {
        return;
    }


    const stats =
        document.querySelector(".stats");


    if (!stats) {
        return;
    }


    const statsTop =
        stats.getBoundingClientRect().top;


    if (
        statsTop
        <
        window.innerHeight - 100
    ) {

        countersStarted = true;


        counters.forEach(
            function (counter) {

                const target =
                    Number(
                        counter.dataset.target
                    );


                let current = 0;


                const increment =
                    Math.max(
                        1,
                        Math.ceil(
                            target / 50
                        )
                    );


                function updateCounter() {

                    current += increment;


                    if (
                        current >= target
                    ) {

                        counter.textContent =
                            target;

                    } else {

                        counter.textContent =
                            current;

                        requestAnimationFrame(
                            updateCounter
                        );

                    }

                }


                updateCounter();

            }
        );

    }

}


window.addEventListener(
    "scroll",
    startCounters
);


startCounters();


/* =========================================
   SKILL BAR ANIMATION
========================================= */

let skillsStarted = false;


function animateSkills() {

    if (skillsStarted) {
        return;
    }


    const skills =
        document.querySelector(".skills");


    if (!skills) {
        return;
    }


    const skillsTop =
        skills.getBoundingClientRect().top;


    if (
        skillsTop
        <
        window.innerHeight - 100
    ) {

        skillsStarted = true;


        const bars =
            document.querySelectorAll(
                ".progress span"
            );


        bars.forEach(
            function (bar) {

                bar.style.width =
                    bar.dataset.width;

            }
        );

    }

}


window.addEventListener(
    "scroll",
    animateSkills
);


animateSkills();


/* =========================================
   FAQ ACCORDION
========================================= */

const faqQuestions =
    document.querySelectorAll(
        ".faq-question"
    );


faqQuestions.forEach(
    function (question) {

        question.addEventListener(
            "click",
            function () {

                const item =
                    question.parentElement;


                const wasActive =
                    item.classList.contains(
                        "active"
                    );


                /* Close all */

                document
                    .querySelectorAll(".faq-item")
                    .forEach(
                        function (faq) {

                            faq.classList.remove(
                                "active"
                            );

                            const icon =
                                faq.querySelector(
                                    ".faq-question span:last-child"
                                );

                            icon.textContent =
                                "+";

                        }
                    );


                /* Open selected */

                if (!wasActive) {

                    item.classList.add(
                        "active"
                    );


                    const icon =
                        question.querySelector(
                            "span:last-child"
                        );

                    icon.textContent =
                        "−";

                }

            }
        );

    }
);


/* =========================================
   SCROLL TO TOP
========================================= */

const topBtn =
    document.getElementById("topBtn");


window.addEventListener(
    "scroll",
    function () {

        if (
            window.scrollY > 500
        ) {

            topBtn.style.display =
                "block";

        } else {

            topBtn.style.display =
                "none";

        }

    }
);


topBtn.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll(
        "header, section"
    );


const navLinks =
    document.querySelectorAll(
        "nav a"
    );


window.addEventListener(
    "scroll",
    function () {

        let current = "";


        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 180;


                if (
                    window.scrollY
                    >=
                    sectionTop
                ) {

                    current =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navLinks.forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute("href")
                    ===
                    "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);


/* =========================================
   MOUSE PARALLAX EFFECT ON HERO
========================================= */

const hero =
    document.querySelector(
        ".hero-content"
    );


document.addEventListener(
    "mousemove",
    function (event) {

        if (
            window.innerWidth < 700
        ) {
            return;
        }


        const x =
            (window.innerWidth / 2
            -
            event.clientX)
            / 50;


        const y =
            (window.innerHeight / 2
            -
            event.clientY)
            / 50;


        hero.style.transform =
            `translate(${x}px, ${y}px)`;

    }
);


document.addEventListener(
    "mouseleave",
    function () {

        hero.style.transform =
            "translate(0, 0)";

    }
);
