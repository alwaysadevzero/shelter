const burgerMenuButton = document.querySelector(".header__burger-icon");
const burgerCover = document.querySelector(".header__burger-cover");
const burgerMenu = document.querySelector(".header__burger-menu");
const scroll = document.querySelector(".page");

const burgerItems = document.querySelectorAll(".burger__link");

burgerItems.forEach(item => item.addEventListener("click", burgerToggler));
burgerMenuButton.addEventListener("click", burgerToggler);
burgerCover.addEventListener("click", burgerToggler);


function burgerToggler() {
    burgerCover.classList.toggle("active");
    burgerMenu.classList.toggle("active");
	burgerMenuButton.classList.toggle("active");
	scroll.classList.toggle("scroll-disable");
}