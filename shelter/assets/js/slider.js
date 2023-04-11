const SLIDER = document.querySelector('.pets__slider-container');
const ARROW_LEFT = document.querySelector('.arrow-left');
const ARROW_RIGHT = document.querySelector('.arrow-right');

const CARDS_NUMBER = 3


window.onload = () => {
  getCardObj().then((data) => {main(data)})
};


function createCardsGroup(data) {;
	const div = document.createElement('div');

	for (let i=0; i < data.length; i++){
		div.appendChild(createPetCard(data[i].img, data[i].type, data[i].name))
	}

	div.classList.add('pets__items')
	return div
}

function dataRandomizer(data, avoidData = [], length = CARDS_NUMBER) {
  const difference = data.filter(element => !avoidData.includes(element));
  const shuffled = difference.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, length);
}

function getCards(cardsArr, idName) {
	const Cards = createCardsGroup(cardsArr)
	Cards.setAttribute('id',idName);
	return Cards
}

function arrowLeftListener() {
	ARROW_LEFT.addEventListener('click', () => {
		SLIDER.classList.add('transition-left')
		ARROW_LEFT.removeEventListener("click", arrowLeftListener);
		ARROW_RIGHT.removeEventListener("click", arrowRightListener);
	})
}
function arrowRightListener() {
	ARROW_RIGHT.addEventListener('click', () => {
		SLIDER.classList.add('transition-right')
		ARROW_LEFT.removeEventListener("click", arrowLeftListener);
		ARROW_RIGHT.removeEventListener("click", arrowRightListener);
	})
}




function main(dataArr) {
  let activeCardsArr = dataRandomizer(dataArr);
  let beforeCardsArr = dataRandomizer(dataArr, activeCardsArr);
  let afterCardsArr = dataRandomizer(dataArr, activeCardsArr);

  while (SLIDER.firstChild) SLIDER.removeChild(SLIDER.firstChild);

  SLIDER.appendChild(getCards(beforeCardsArr, "before"));
  SLIDER.appendChild(getCards(activeCardsArr, "active"));
  SLIDER.appendChild(getCards(afterCardsArr, "after"));

  const activeCardsContainer = document.getElementById("active")
  const beforeCardsContainer = document.getElementById("before")
  const afterCardsContainer = document.getElementById("after")

  arrowLeftListener()
  arrowRightListener()


 SLIDER.addEventListener("animationend", (animationEvent) => {
  

  if (animationEvent.animationName === "move-left") {
	afterCardsContainer.innerHTML = activeCardsContainer.innerHTML
	afterCardsArr = activeCardsArr


	activeCardsContainer.innerHTML = beforeCardsContainer.innerHTML
	activeCardsArr = beforeCardsArr
	beforeCardsArr = dataRandomizer(dataArr, activeCardsArr)
	beforeCardsContainer.innerHTML = getCards(beforeCardsArr, "before").innerHTML  


    SLIDER.classList.remove("transition-left");
  } else {

	beforeCardsContainer.innerHTML = activeCardsContainer.innerHTML
	beforeCardsArr = activeCardsArr
	

	activeCardsContainer.innerHTML = afterCardsContainer.innerHTML
	activeCardsArr = afterCardsArr
	afterCardsArr = dataRandomizer(dataArr, activeCardsArr)
	afterCardsContainer.innerHTML = getCards(afterCardsArr, "before").innerHTML  


    SLIDER.classList.remove("transition-right");
  }
	arrowLeftListener()
	arrowRightListener()
	})
}

