// ----
// DOMs
// ----
const hamburgerBackground = document.querySelector(".hamburger-background");
const headerMenuContainer = document.querySelector(".header-menu-container");
const line = document.querySelectorAll(".line");
const menuItem = document.querySelectorAll(".menu-item");

const hoverCard = document.querySelector(".hover-card");
const SunHiguchi = hoverCard.querySelector("h1");
const smallText = hoverCard.querySelector("small");

const toTopBtn = document.querySelector(".top-btn");
const toAbout = document.querySelectorAll("#to-about");
const toProjects = document.querySelector("#to-projects");
const toSupports = document.querySelector("#to-supports");
const toPayment = document.querySelectorAll("#to-payment");
const toContact = document.querySelector("#to-contact");

let aboutMeParent = document.querySelector(".about-me-container");
const aboutMe = document.querySelector("#about-me");
const myProjects = document.querySelector("#my-projects");
const supportContents = document.querySelector("#support-contents");
const payment = document.querySelector("#payment");
// const contact = document.querySelector("#contact");

// Slide Animation Elements
const slideInElements = document.querySelectorAll("#slideInElement");

/*--------------------
-------- Methods -----
-------------------- */
function click() {
  headerMenuContainer.classList.toggle("click");
  hamburgerBackground.classList.toggle("click");
}

function deltaFunction() {
  let delta;

  if (event.wheelDelta) {
    delta = event.wheelDelta;
  } else {
    delta = -1 * event.deltaY;
  }

  if (delta < 0) {
    // headerMenuContainer.id = "scroll";
    headerMenuContainer.setAttribute("id", "scroll");
  } else if (delta > 0) {
    headerMenuContainer.removeAttribute("id");
  }
}

let scrollPos = 0;

function topBtnDisplay() {
  // detects new state and compares it with the new one
  if (document.body.getBoundingClientRect().top > scrollPos) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }

  // saves the new position for iteration.
  scrollPos = document.body.getBoundingClientRect().top;
}

function findScrollDirectionOtherBrowsers(event) {
  if (window.matchMedia("(min-width: 768px)").matches) {
    deltaFunction();
  }
}

function hoverAnimationMove(e) {
  let xAxis = (window.innerWidth - e.pageX) / 10;
  let yAxis = (window.innerHeight - e.pageY) / 10;

  SunHiguchi.style.transform =
    "rotateY(" + yAxis + "deg) rotateX(" + xAxis + "deg)";
  smallText.style.transform =
    "rotateY(" + yAxis + "deg) rotateX( " + xAxis + "deg)";
}

function hoverAnimationIn(e) {
  SunHiguchi.style.transition = "none";
  smallText.style.transition = "none";

  //   Popout
  SunHiguchi.style.transform = "translateZ(100px)";
  smallText.style.transform = "translateZ(100px) rotateZ(-40deg)";
}

function hoverAnimationOut() {
  SunHiguchi.style.transition = "all .3s ease";
  SunHiguchi.style.transform = "rotateY(0deg) rotateX(0deg)";
  smallText.style.transition = "all .3s ease";
  smallText.style.transform = "rotateY(0deg) rotateX(0deg)";

  //   Popback
  SunHiguchi.style.transform = "translateZ(0px)";
  smallText.style.transform = "translateZ(0px)";
}

function toTheTop() {
  window.scrollTo(0, 0);
}

function toAboutSection() {
  // aboutMeParent = aboutMe.offsetParent;
  const aboutMeHeight = aboutMe.getBoundingClientRect().top;
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  window.scrollTo(0, aboutMeHeight + scrollTop);
  console.log(aboutMeHeight + scrollTop);
}

function toProjectsSection() {
  const myProjectsHeight = myProjects.offsetTop - 30;
  window.scrollTo(0, myProjectsHeight);
}

function toSupportsSection() {
  const supportContentsHeight = supportContents.offsetTop - 30;
  window.scrollTo(0, supportContentsHeight);
}

function toPaymentSection() {
  const paymentHeight = payment.offsetTop - 30;
  window.scrollTo(0, paymentHeight);
}

function toContactSection() {
  const contactHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight +
    1000;
  window.scroll(0, contactHeight);
}

function changeMenuColor() {
  if (
    (document.body.scrollTop > 550 && document.body.scrollTop <= 4300) ||
    (document.documentElement.scrollTop > 550 &&
      document.documentElement.scrollTop <= 4300)
  ) {
    for (let item = 0; item < line.length; item++) {
      const lines = line[item];
      lines.style.backgroundColor = "#e43f5a";
    }

    for (let item = 0; item < menuItem.length; item++) {
      const menuItems = menuItem[item];
      menuItems.classList.remove("color-default");
      menuItems.classList.add("color-not-default");
    }
  } else {
    for (let item = 0; item < line.length; item++) {
      const lines = line[item];
      lines.style.backgroundColor = "#ddd";
    }

    for (let item = 0; item < menuItem.length; item++) {
      const menuItems = menuItem[item];
      menuItems.classList.remove("color-not-default");
      menuItems.classList.add("color-default");
    }
  }
}

function slideElementsInWindow() {
  for (let i = 0; i < slideInElements.length; i++) {
    const slideInEl = slideInElements[i];
    let el_height = slideInEl.offsetHeight;

    let offsetY = slideInEl.getBoundingClientRect().top;
    let screenHeight = window.outerHeight;

    let el_position = offsetY - screenHeight + 300;

    if (-screenHeight <= el_position + el_height && el_position < 0) {
      if (!slideInEl.classList.contains("within-window")) {
        slideInEl.classList.add("within-window");
      }
    }
  }
}

// ------
// Events
// ------

hamburgerBackground.addEventListener("click", click);

// For IE
const toAboutArray = Array.prototype.slice.call(toAbout);
toAboutArray.forEach(function (toAboutBtn) {
  toAboutBtn.addEventListener("click", toAboutSection);
});

toTopBtn.addEventListener("click", toTheTop);
toProjects.addEventListener("click", toProjectsSection);
toSupports.addEventListener("click", toSupportsSection);

const toPaymentArray = Array.prototype.slice.call(toPayment);
toPaymentArray.forEach(function (paymentBtn) {
  paymentBtn.addEventListener("click", toPaymentSection);
});
toContact.addEventListener("click", toContactSection);

hoverCard.addEventListener("mousemove", hoverAnimationMove);
hoverCard.addEventListener("mouseenter", hoverAnimationIn);
hoverCard.addEventListener("mouseleave", hoverAnimationOut);

window.addEventListener("wheel", findScrollDirectionOtherBrowsers);
window.addEventListener("scroll", changeMenuColor);
window.addEventListener("scroll", topBtnDisplay);
window.addEventListener("load", slideElementsInWindow);
window.addEventListener("scroll", slideElementsInWindow);

console.log("Thank you for looking console.");
