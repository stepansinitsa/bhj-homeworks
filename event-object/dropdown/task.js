const dropdownButton = document.querySelector(".dropdown__value");
const dropdownMenu = document.querySelector(".dropdown__list");
const dropdownItem = Array.from(
  document.getElementsByClassName("dropdown__item")
);

dropdownButton.addEventListener("click", function () {
  dropdownMenu.classList.toggle("dropdown__list_active");
});

dropdownItem.forEach(function (item) {
  item.onclick = function () {
    document.querySelector("div.dropdown__value").textContent =
      item.textContent;
    dropdownMenu.classList.remove("dropdown__list_active");
    return false;
  };
});

window.addEventListener("click", function (event) {
  if (!event.target.matches(".dropdown__value")) {
    dropdownMenu.classList.remove("dropdown__list_active");
  }
});
