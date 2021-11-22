// GSAP
function startGsap() {
  gsap.registerPlugin(ScrollTrigger);

  let windowWidth = window.innerWidth;

  if (windowWidth > 1000) {
    gsap.to("#navbar", { duration: 1.5, opacity: 1, y: 0 });
    gsap.to("#home_content", {
      scrollTrigger: {
        trigger: "#home_content",
        toggleActions: "play reset play reset",
      },
      duration: 1.5,
      x: 0,
      opacity: 1,
    });
    gsap.to("#about_content", {
      scrollTrigger: {
        trigger: "#about_content",
        toggleActions: "play reset play reset",
      },
      duration: 1.5,
      x: 0,
      opacity: 1,
    });
    gsap.from("#about_content_two", {
      toggleActions: "play reset play reset",
      duration: 1.5,
      x: 300,
    });
    gsap.to("#services", {
      scrollTrigger: {
        trigger: "#services",
        toggleActions: "play reset play reset",
      },
      duration: 1.5,
      opacity: 1,
      x: 0,
    });
    gsap.to("#services_two", {
      scrollTrigger: {
        trigger: "#services_two",
        toggleActions: "play reset play reset",
      },
      duration: 1.5,
      opacity: 1,
      x: 0,
    });
    gsap.from("#services_two_content_one", {
      scrollTrigger: {
        trigger: "#services_two_content_one",
        toggleActions: "play reset play reset",
      },
      duration: 1.5,
      rotation: -120,
    });
    gsap.to("#signup", {
      scrollTrigger: {
        trigger: "#signup",
        toggleActions: "play reset play reset",
      },
      duration: 1.5,
      opacity: 1,
      x: 0,
    });
    gsap.to("#footer", {
      scrollTrigger: {
        trigger: "#footer_content",
        toggleActions: "play reset play reset",
      },
      duration: 1.5,
      opacity: 1,
      x: 0,
    });
  } else {
    document.querySelector("#navbar").style.transform = "translateY(0px)";
    gsap.to("#navbar", { duration: 1.5, opacity: 1 });
    document.querySelector("#home_content").style.transform = "translateX(0px)";
    gsap.to("#home_content", { duration: 1.5, opacity: 1 });
    document.querySelector("#about_content").style.transform =
      "translateX(0px)";
    gsap.to("#about_content", { duration: 1.5, opacity: 1 });
    document.querySelector("#services").style.transform = "translateX(0px)";
    gsap.to("#services", { duration: 1.5, opacity: 1 });
    document.querySelector("#services_two").style.transform = "translateX(0px)";
    gsap.to("#services_two", { duration: 1.5, opacity: 1 });
    document.querySelector("#signup").style.transform = "translateX(0px)";
    gsap.to("#signup", { duration: 1.5, opacity: 1 });
    document.querySelector("#footer").style.transform = "translateX(0px)";
    gsap.to("#footer", { duration: 1.5, opacity: 1 });
  }
}

window.onload = function () {
  startGsap();
};

// Hamburger Menu
let popupToggler = false;

document.addEventListener("click", function (e) {
  const checkBars = e.target.hasAttribute("bars");

  if (checkBars === true) {
    if (popupToggler === false) {
      popup.style.top = "80px";
      bars.style.borderBottom = "3px solid #9518fc";
      popupToggler = true;
    } else if (popupToggler === true) {
      popup.style.top = "-1000px";
      bars.style.borderBottom = "none";
      popupToggler = false;
    }
  } else if (checkBars === false && popupToggler === true) {
    popup.style.top = "-1000px";
    bars.style.borderBottom = "none";
    popupToggler = false;
  }
});

// Theme Toggler
const theme = document.querySelector(".theme");

const themeSwitch = document.querySelector(".theme_switch");
const themeText = document.querySelectorAll(".theme_text");

let themeToggler = false;

theme.addEventListener("click", function themeToggle() {
  if (themeToggler === false) {
    themeSwitch.style.transform = "translateX(2rem)";
    themeSwitch.style.background = "#f4f4f4";

    document.querySelector("body").style.background = "#f4f4f4";
    popup.style.background = "#f4f4f4";

    for (let i = 0; i < themeText.length; i++) {
      themeText[i].style.color = "#000";
    }

    themeToggler = true;
  } else {
    themeSwitch.style.transform = "translateX(0px)";
    themeSwitch.style.background = "#000";

    document.querySelector("body").style.background = "#000";
    popup.style.background = "#000";

    for (let i = 0; i < themeText.length; i++) {
      themeText[i].style.color = "#f4f4f4";
    }

    themeToggler = false;
  }
});

// Footer date
const date = new Date().getFullYear();
const footerDateParagraph = document.querySelector(".footer_date_paragraph");
footerDateParagraph.innerHTML = `&copy;${date}. All Rights Reserved. Made by
<span class="bold">Vanja Zeli</span>.`;
