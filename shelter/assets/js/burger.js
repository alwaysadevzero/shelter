const burgerMenuButton = document.querySelector(".header__burger-menu");
const logo = document.querySelector(".header__logo");
const burgerMenu = document.querySelector(".header__menu");

burgerMenuButton.addEventListener("click", function() {
    logo.classList.toggle("active");
    burgerMenu.classList.toggle("active");
});