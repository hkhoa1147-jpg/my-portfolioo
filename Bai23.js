// ===== 1. DARK MODE TOGGLE (LƯU TRẠNG THÁI QUA LOCALSTORAGE) =====
const themeToggleBtn = document.getElementById("theme-toggle");
const rootElement = document.documentElement;

const savedTheme = localStorage.getItem("portfolio-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  rootElement.setAttribute("data-theme", "dark");
  themeToggleBtn.textContent = "☀️";
}

themeToggleBtn.addEventListener("click", () => {
  const isDark = rootElement.getAttribute("data-theme") === "dark";
  if (isDark) {
    rootElement.removeAttribute("data-theme");
    localStorage.setItem("portfolio-theme", "light");
    themeToggleBtn.textContent = "🌙";
  } else {
    rootElement.setAttribute("data-theme", "dark");
    localStorage.setItem("portfolio-theme", "dark");
    themeToggleBtn.textContent = "☀️";
  }
});

// ===== 2. MOBILE MENU TOGGLE =====
const menuToggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggleBtn && navLinks) {
  menuToggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// ===== 3. SCROLL ANIMATION DÙNG INTERSECTION OBSERVER =====
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Ngừng theo dõi sau khi đã hiện
      }
    });
  },
  {
    threshold: 0.12, // Kích hoạt khi phần tử lộ diện 12% trong khung nhìn
  }
);

revealElements.forEach((el) => revealObserver.observe(el));