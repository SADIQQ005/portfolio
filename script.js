const modal = document.getElementById("modal");
const btnClose = document.getElementById("close");

window.onload = (event) => {
  setTimeout(() => modal.classList.add("visible"), 2000);
};

btnClose.addEventListener("click", () => {
  modal.classList.remove("visible");
});
