const currentPage = document.body.dataset.page;
const root = document.documentElement;
const body = document.body;
const themeStorageKey = "jo-theme";
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeIcon = document.querySelector("[data-theme-icon]");
const themeLabel = document.querySelector("[data-theme-label]");

// Highlights the current page in the left navigation based on <body data-page="...">.
document.querySelectorAll("[data-nav]").forEach((link) => {
  const isActive = link.dataset.nav === currentPage;
  link.classList.toggle("is-active", isActive);
  if (isActive) {
    link.setAttribute("aria-current", "page");
  }
});

const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";
let savedTheme = null;

try {
  savedTheme = localStorage.getItem(themeStorageKey);
} catch {
  savedTheme = null;
}

// Applies the selected theme and updates the toggle button text/icon.
const applyTheme = (theme) => {
  root.setAttribute("data-theme", theme);
  body.setAttribute("data-theme", theme);
  if (!themeToggle || !themeIcon || !themeLabel) return;

  const isDark = theme === "dark";
  themeIcon.textContent = isDark ? "☾" : "☀";
  themeLabel.textContent = isDark ? "Dark mode" : "Bright mode";
  themeToggle.setAttribute("aria-label", isDark ? "Dark mode enabled" : "Bright mode enabled");
};

applyTheme(savedTheme || preferredTheme);

if (themeToggle) {
  // Saves the user's choice so the same theme is used on the next visit.
  themeToggle.addEventListener("click", () => {
    const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(themeStorageKey, nextTheme);
    } catch {
      // Ignore storage failures and still switch theme for the current session.
    }
    applyTheme(nextTheme);
  });
}

const yearNode = document.getElementById("year");
if (yearNode) {
  // Keeps the footer year current without editing HTML every year.
  yearNode.textContent = new Date().getFullYear();
}
