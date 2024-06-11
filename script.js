const featureTab = document.querySelectorAll(".feature-tab");

const featureTabContent = document.querySelectorAll(".section-features-tab");

for (let i = 0; i < featureTab.length; i++) {
  featureTab[i].addEventListener("click", function () {
    // Deactivate all tabs and their content
    for (let j = 0; j < featureTab.length; j++) {
      featureTab[j].classList.remove("li-active");
      featureTabContent[j].classList.add("hidden");
    }

    // Activate the clicked tab and its content
    featureTab[i].classList.add("li-active");
    featureTabContent[i].classList.remove("hidden");
  });
}

const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const iconArrow = document.querySelectorAll(".fa-angle-down");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function () {
    for (let j = 0; j < questions.length; j++) {
      if (j !== i) {
        answers[j].classList.add("hidden");
        iconArrow[j].classList.remove("arrow-rotate");
      }
    }

    answers[i].classList.toggle("hidden");
    iconArrow[i].classList.toggle("arrow-rotate");
  });
}

const navbar = document.querySelector(".navbar");
const mobileLogo = document.querySelector(".mobile-logo");
const iconClose = document.querySelector(".icon-close");
const iconHamburger = document.querySelector(".icon-hamburger");
const navList = document.querySelectorAll(".nav-list");

function openCloseNavbar(state) {
  if (state === true) {
    navbar.style.display = "flex";
    iconClose.classList.add("block");
    mobileLogo.classList.add("block");
    document.body.style.overflow = "hidden";
  } else {
    navbar.style.display = "none";
    iconClose.classList.remove("block");
    mobileLogo.classList.remove("block");
    document.body.style.overflow = "scroll";
  }
}

iconHamburger.addEventListener("click", function () {
  openCloseNavbar(true);
});

iconClose.addEventListener("click", function () {
  openCloseNavbar(false);
});

for (let i = 0; i < navList.length; i++) {
  navList[i].addEventListener("click", function () {
    openCloseNavbar(false);
  });
}
