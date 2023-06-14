// main.js
function toggleMenu() {
  var burgerMenu = document.querySelector(".navbar_burger-menu");
  var navOverlay = document.getElementById("nav-overlay");
  burgerMenu.classList.toggle("open");
  navOverlay.classList.toggle("active");
}

function scrollToSection(id) {
  var section = document.getElementById(id);
  section.scrollIntoView({ behavior: "smooth" });
  toggleMenu();
}

window.onscroll = function () {
  var dots = document.getElementsByClassName("scroll-indicator_dot");
  var sections = document.getElementsByClassName("section");
  for (var i = 0; i < sections.length; i++) {
    if (
      window.pageYOffset >= sections[i].offsetTop - window.innerHeight / 2 &&
      window.pageYOffset < sections[i].offsetTop + window.innerHeight / 2
    ) {
      dots[i].classList.add("active");
    } else {
      dots[i].classList.remove("active");
    }
  }
};

let currentSectionIndex = 0;
const sections = Array.from(document.querySelectorAll(".section"));

window.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();

    if (event.deltaY > 0) {
      // Scrolling down
      currentSectionIndex = Math.min(
        currentSectionIndex + 1,
        sections.length - 1
      );
    } else {
      // Scrolling up
      currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
    }

    sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
  },
  { passive: false }
);

var customDetails = document.querySelectorAll(".custom-details");
customDetails.forEach((detail) => {
  detail
    .querySelector(".summary-content")
    .addEventListener("click", function () {
      detail.classList.toggle("active");
    });
});
