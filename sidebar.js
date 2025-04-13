const sidebar = document.querySelector(".sidebar");
const toggleButton = document.querySelector(".menubtn");
const overlay = document.querySelector(".overlay");

toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  }
});
overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});
