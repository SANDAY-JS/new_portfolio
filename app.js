// DOMs
const hamburgerBackground = document.querySelector(".hamburger-background");
const headerMenuContainer = document.querySelector(".header-menu-container");
const line = document.querySelectorAll(".line");
const menuItem = document.querySelectorAll(".menu-item");

const toTopBtn = document.querySelector(".top-btn");
const toAbout = document.querySelectorAll("#to-about");
const toProjects = document.querySelector("#to-projects");
const toSupports = document.querySelector("#to-supports");
const toPayment = document.querySelector("#to-payment");
const toContact = document.querySelector("#to-contact");

const aboutMe = document.querySelector("#about-me");
const myProjects = document.querySelector("#my-projects");
const supportContents = document.querySelector("#support-contents");
const payment = document.querySelector("#payment");
// const contact = document.querySelector("#contact");

const aboutMeHeight = aboutMe.offsetTop;
const myProjectsHeight = myProjects.offsetTop - 10;
const supportContentsHeight = supportContents.offsetTop - 10;
const paymentHeight = payment.offsetTop - 10;
const contactHeight =
  document.documentElement.scrollHeight -
  document.documentElement.clientHeight +
  1000;

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

function toTheTop() {
  window.scrollTo(0, 0);
}

function toAboutSection() {
  window.scrollTo(0, aboutMeHeight);
}

function toProjectsSection() {
  window.scrollTo(0, myProjectsHeight);
}

function toSupportsSection() {
  window.scrollTo(0, supportContentsHeight);
}

function toPaymentSection() {
  window.scrollTo(0, paymentHeight);
}

function toContactSection() {
  window.scroll(0, contactHeight);
}

// ↑コンストラクターにできんかなー？

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

// Events
hamburgerBackground.addEventListener("click", click);

toTopBtn.addEventListener("click", toTheTop);
toProjects.addEventListener("click", toProjectsSection);
toSupports.addEventListener("click", toSupportsSection);
toPayment.addEventListener("click", toPaymentSection);
toContact.addEventListener("click", toContactSection);

window.addEventListener("wheel", findScrollDirectionOtherBrowsers);
window.addEventListener("scroll", changeMenuColor);

for (let i = 0; i < toAbout.length; i++) {
  const toAboutBtn = toAbout[i];
  toAboutBtn.addEventListener("click", toAboutSection);
}

// window.addEventListener("scroll", console.log(window.pageYOffset));

window.addEventListener("scroll", topBtnDisplay);
