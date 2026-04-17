// Initialize Lucide icons
lucide.createIcons();

// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const mobileLinks = document.querySelectorAll(".mobile-link");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
}

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
  });
});

// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const visiblePoint = 100;

    if (elementTop < windowHeight - visiblePoint) {
      el.classList.add("show");
    }
  });
}

// Active navbar on scroll
const sections = document.querySelectorAll("header[id], section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function setActiveLink() {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 180;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

// Run on scroll and load
window.addEventListener("scroll", () => {
  revealOnScroll();
  setActiveLink();
});

window.addEventListener("load", () => {
  revealOnScroll();
  setActiveLink();
});