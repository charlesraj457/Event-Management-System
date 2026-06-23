// ===============================
// Event Management System
// app.js
// ===============================

// Wait until page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    console.log("EventHub Loaded Successfully!");

    // Initialize all functions
    searchEvents();
    smoothScroll();
    navbarShadow();
    scrollToTopButton();

});

// ===============================
// SEARCH EVENTS
// ===============================

function searchEvents() {

    const searchBox = document.getElementById("searchBox");

    if (!searchBox) return;

    searchBox.addEventListener("keyup", function () {

        const filter = this.value.toLowerCase();

        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            const title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(filter)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

// ===============================
// SMOOTH SCROLL
// ===============================

function smoothScroll() {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

}

// ===============================
// NAVBAR SHADOW ON SCROLL
// ===============================

function navbarShadow() {

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";

        } else {

            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";

        }

    });

}

// ===============================
// SCROLL TO TOP BUTTON
// ===============================

// Create Button

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

// Style Button

topButton.style.position = "fixed";
topButton.style.bottom = "30px";
topButton.style.right = "30px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#2563eb";
topButton.style.color = "#fff";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

// Function

function scrollToTopButton() {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topButton.style.display = "block";

        } else {

            topButton.style.display = "none";

        }

    });

}

// Scroll to Top

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===============================
// SIMPLE FADE-IN ANIMATION
// ===============================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.8s";

    observer.observe(card);

});