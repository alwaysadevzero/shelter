const POPUP = document.querySelector(".popup");
const POPUP_COVER = document.querySelector(".popup__cover");
const POPUP_BUTTON = document.querySelector(".popup__button");

const POPUP_IMG = document.querySelector(".popup__image");
const POPUP_HEADER = document.querySelector(".popup__header");
const POPUP_SUBHEADER = document.querySelector(".popup__subheader");
const POPUP_TEXT = document.querySelector(".popup__text");

const POPUP_AGE = document.getElementById('age');
const POPUP_INOCULATIONS = document.getElementById('inoculations');
const POPUP_DISEASES = document.getElementById('diseases');
const POPUP_SITES = document.getElementById('parasites');

const POPUP_OPEN_BUTTON = document.querySelectorAll(".pets__button-card")

POPUP_BUTTON.addEventListener("click", popupToggler);
POPUP_COVER.addEventListener("click", popupToggler);

function popupToggler() {
    POPUP.classList.toggle("active");
    POPUP_COVER.classList.toggle("active");
	PAGE.classList.toggle("page-disable");
}


function updatePopup(card){
	POPUP_IMG.src = card.img
	POPUP_HEADER.textContent = card.name
	POPUP_SUBHEADER.textContent = card.type + " - " + card.breed
	POPUP_TEXT.textContent = card.description
	POPUP_AGE.textContent = card.age
	POPUP_INOCULATIONS.textContent = card.inoculations.join(" ")
	POPUP_DISEASES.diseases = card.inoculations.join(" ")
	POPUP_SITES.parasites = card.inoculations.join(" ")

}