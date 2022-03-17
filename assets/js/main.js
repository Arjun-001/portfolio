//=========================Random colour========================//
// let interval = setInterval changeColor, 5000);
// window.onload = interval;

window.onload = changeColor();
function changeColor() {
  var r = document.querySelector(":root");
  var rand = Math.floor(Math.random() * 361);

  r.style.setProperty("--hue-color", rand);
}
var randcolor = document.getElementById("random-color");
randcolor.addEventListener("click", changeColor);
var colorblast = document.getElementById("color-blast");
colorblast.addEventListener("click", changeColor);
var colorblast = document.getElementById("color-scheme");
colorblast.addEventListener("click", changeColor);
//=========================MENU========================//

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

//=========================Skills========================//

const skillsContent = document.getElementsByClassName("skills_content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills_content skills__close";
  }
  if (itemClass === "skills_content skills__close") {
    this.parentNode.className = "skills_content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

//=========================Qualifications========================//

const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

//=========================Service========================//

const modalViews = document.querySelectorAll(".awards__modal"),
  modalBtns = document.querySelectorAll(".awards__button"),
  modalCloses = document.getElementsByClassName("awards__modal__close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

for (i = 0; i < modalCloses.length; i++) {
  modalCloses[i].addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
}

//=========================Portfolio swiper========================//

let swiper = new Swiper(".portfolio__container", {
  loop: true,
  cssMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//=========================Show Scroll up========================//
function scrollTop() {
  const scrollTop = document.getElementById("scroll-up");

  if (this.scrollY >= 560) {
    scrollTop.classList.add("show-scroll");
  } else {
    scrollTop.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollTop);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

//=========================Submitted Page========================//
// set cookie on submit form button so prevent unauthorised navigation into submitted page
document.getElementById("submit-button").addEventListener("click", () => {
  sessionStorage.setItem("Authorised", true);
});
