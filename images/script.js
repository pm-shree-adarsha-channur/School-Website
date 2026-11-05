let currentSlide = 0;

let slides = document.querySelectorAll(".slide");

function showSlide(index) {

    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function changeSlide(direction) {

    currentSlide = currentSlide + direction;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}

// Automatic slider

setInterval(function() {

    changeSlide(1);

}, 4000);
// HAMBURGER MENU

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function () {

    navbar.classList.toggle("active");

    const isOpen = navbar.classList.contains("active");

    menuToggle.textContent = isOpen ? "✕" : "☰";

    menuToggle.setAttribute("aria-expanded", isOpen);

});

// Close menu after clicking a link

navbar.querySelectorAll("a").forEach(function(link) {

    link.addEventListener("click", function() {
        navbar.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });

});
// ADMISSION FORM DEMO

const admissionForm = document.getElementById("admissionForm");

admissionForm.addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("formMessage").textContent =
        "Thank you! Your form is ready for submission.";

    admissionForm.reset();

});
// CONTACT FORM DEMO

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("contactMessage").textContent =
        "Thank you! Your message has been received.";

    contactForm.reset();

});
// BACK TO TOP BUTTON

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});