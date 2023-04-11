const BURGER_MENU_BUTTON = document.querySelector(".header__burger-icon");
const BURGER_COVER = document.querySelector(".header__burger-cover");
const BURGER_MENU = document.querySelector(".header__burger-menu");
const PAGE = document.querySelector(".page");

const BURGER_ITEMS = document.querySelectorAll(".burger__link");

BURGER_ITEMS.forEach(item => item.addEventListener("click", burgerToggler));
BURGER_MENU_BUTTON.addEventListener("click", burgerToggler);
BURGER_COVER.addEventListener("click", burgerToggler);


function burgerToggler() {
    BURGER_COVER.classList.toggle("active");
    BURGER_MENU.classList.toggle("active");
	BURGER_MENU_BUTTON.classList.toggle("active");
	PAGE.classList.toggle("page-disable");
}