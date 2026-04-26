const currentPage = document.body.dataset.page;

document.querySelectorAll("[data-nav]").forEach((link) => {
  const isActive = link.dataset.nav === currentPage;
  link.classList.toggle("is-active", isActive);
  if (isActive) {
    link.setAttribute("aria-current", "page");
  }
});

const themeStorageKey = "jo-theme";
const themeToggle = document.querySelector("[data-theme-toggle]");
const root = document.documentElement;
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";
const savedTheme = localStorage.getItem(themeStorageKey);

const applyTheme = (theme) => {
  root.dataset.theme = theme;
  if (!themeToggle) return;

  const nextLabel = theme === "dark" ? "Switch to bright mode" : "Switch to night mode";
  themeToggle.textContent = nextLabel;
  themeToggle.setAttribute("aria-label", nextLabel);
};

applyTheme(savedTheme || preferredTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem(themeStorageKey, nextTheme);
    applyTheme(nextTheme);
  });
}

const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}
