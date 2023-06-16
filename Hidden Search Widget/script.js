const search = document.querySelector(".container");
const btn = document.querySelector(".btn");
const input = document.querySelector(".searchBar");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
