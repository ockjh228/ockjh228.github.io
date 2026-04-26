const currentPage = document.body.dataset.page;

document.querySelectorAll("[data-nav]").forEach((link) => {
  const isActive = link.dataset.nav === currentPage;
  link.classList.toggle("is-active", isActive);
  if (isActive) {
    link.setAttribute("aria-current", "page");
  }
});

const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}
