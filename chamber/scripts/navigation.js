const navbar = document.querySelector(".navbar");
const burger = document.querySelector("#menu");

burger.addEventListener("click", function () {
  navbar.classList.toggle("show");
  burger.classList.toggle("show");
})