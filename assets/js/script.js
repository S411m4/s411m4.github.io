// =====================
// Loader
// =====================
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.classList.add('fade-out');
  setTimeout(() => loader.remove(), 800); // Optional cleanup
});


// =====================
// Navbar - Mobile Toggle
// =====================
document.getElementById('nav-toggle')?.addEventListener('click', () => {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
});


// =====================
// Theme Toggle
// =====================
const toggle = document.getElementById("toggleTheme");
const toggleMobile = document.getElementById("toggleThemeMobile");
const html = document.documentElement;

// Apply saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") html.classList.add("dark");

// Toggle + Save
function toggleTheme() {
  const isDark = html.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

toggle?.addEventListener("click", toggleTheme);
toggleMobile?.addEventListener("click", toggleTheme);


// =====================
// Typewriter Text
// =====================
const words = ["XR Developer", "Game Developer", "Unity Developer", "a Curious Coder"];
let i = 0;
let j = 0;
let isDeleting = false;
let currentWord = '';
let displayText = '';

function type() {
  const element = document.getElementById("typewriter");
  if (!element) return;

  currentWord = words[i];

  if (!isDeleting) {
    displayText = currentWord.substring(0, j + 1);
    element.textContent = displayText;
    j++;

    if (j === currentWord.length) {
      setTimeout(() => {
        isDeleting = true;
        type();
      }, 1500);
      return;
    }
  } else {
    displayText = currentWord.substring(0, j - 1);
    element.textContent = displayText;
    j--;

    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  }

  setTimeout(type, 120);
}

type();


// =====================
// Project Filter
// =====================
const filters = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-card');
const noProjectsMsg = document.getElementById('no-projects');

filters.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter-btn.active')?.classList.remove('active');
    btn.classList.add('active');

    const category = btn.dataset.category;
    let anyVisible = false;

    projects.forEach(card => {
      const match = card.dataset.category.includes(category) || category === 'all';
      card.style.display = match ? 'block' : 'none';
      if (match) anyVisible = true;
    });

    noProjectsMsg?.classList.toggle('hidden', anyVisible);
  });
});


// =====================
// Contact Form
// =====================
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm?.addEventListener("submit", function (e) {
  e.preventDefault();

  formStatus.classList.remove("hidden");
  formStatus.textContent = "Message sent!";

  setTimeout(() => {
    contactForm.reset();
    formStatus.classList.add("hidden");
  }, 3000);
});
