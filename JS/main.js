// Variables
let header = document.querySelector("header");
const nav = document.querySelector("nav ul");
const allLinks = document.querySelectorAll("nav ul li a");
let allBullets = document.querySelectorAll(".nav-bullets .bullet");
const icon = document.querySelector(".icon");
const heading = document.querySelector(".content h1");
const text = "Hello Everyone! \n Welcome In My Portfolio";
let work = document.querySelector(".landing .works");
let about = document.querySelector(".about");
let content = document.querySelector(".about .content");
let skills = document.querySelector(".our-skills");
let progSpans = document.querySelectorAll(".our-skills .prog-span");
let switcherLis = document.querySelectorAll(".switcher li");
let boxs = document.querySelectorAll(".projects .box");

// Smooth Scroll
function scrollToSomeWhere(element) {
  element.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
scrollToSomeWhere(allLinks);
scrollToSomeWhere(allBullets);

work.addEventListener("click", function (e) {
  e.preventDefault();

  document.querySelector(e.target.dataset.section).scrollIntoView({
    behavior: "smooth",
  });
});

icon.addEventListener("click", function () {
  nav.classList.toggle("open");
});

// Animate Heading
setTimeout(() => {
  text.split("").forEach((letter, index) => {
    setTimeout(() => {
      heading.innerHTML += letter;
    }, 100 * index);
  });
}, 1000);

window.addEventListener("scroll", function () {
  if (scrollY >= 50) {
    header.classList.add("scrolled");
    allBullets.forEach((bullet) => bullet.classList.add("color"));
  } else {
    header.classList.remove("scrolled");
    allBullets.forEach((bullet) => bullet.classList.remove("color"));
  }

  if (scrollY >= about.offsetTop - 300) {
    content.style.transform = "translateY(0)";
  }

  let i = document.querySelector(".scroll-to-top i");

  // Scroll To Top Button
  if (scrollY >= 600) {
    i.style.cssText = `
    right: 20px; opacity: 1;
    `;
  } else {
    i.style.cssText = `
    right: -40px;
    opacity: 0;
    `;
  }

  i.onclick = function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  if (scrollY >= skills.offsetTop) {
    progSpans.forEach((span) => (span.style.width = span.dataset.prog));
  }

  let skillsOffsetTop = skills.offsetTop;

  // Our Skills Outer Height
  let skillsOuterHeight = skills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // Window Scroll Top
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    progSpans.forEach((skill) => {
      skill.style.width = skill.dataset.prog;
    });
  }
});

window.addEventListener("load", function () {
  if (scrollY >= 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
  if (scrollY >= about.offsetTop - 300) {
    content.style.transform = "translateY(0)";
  }
});

work.onclick = function () {
  return false;
};

switcherLis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageBoxs);
});

function removeActive() {
  switcherLis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

function manageBoxs() {
  boxs.forEach((box) => {
    box.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((ele) => {
    ele.style.display = "block";
  });
}
