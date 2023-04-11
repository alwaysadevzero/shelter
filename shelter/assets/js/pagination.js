
const ARROW_FIRST = document.querySelector('.pagination__button-first');
const ARROW_LEFT = document.querySelector('.pagination__button-back');
const ARROW_NUMBER = document.querySelector('.pagination__button-number'); 
const ARROW_NEXT = document.querySelector('.pagination__button-next');
const ARROW_LAST = document.querySelector('.pagination__button-last');

const ITEMS = document.querySelector('.pets__items');

const CARDS_NUMBER = 8;
const PAGES_NUMBER = 6;
let currentPage = 1;

ARROW_FIRST.disabled = true;
ARROW_LEFT.disabled = true;

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

function getRandomData(data, length = CARDS_NUMBER) {
  const shuffled = data.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, length);
}

function createPages(data, pages = PAGES_NUMBER) {
	const pagesArr = [];

	for (let i = 0; i < pages; i++) {
		pagesArr.push(getRandomData(data))
	}

	return pagesArr
}

function drawPage(pageArr) {

	let fragment = new DocumentFragment();

	pageArr.forEach(card => fragment.append(createPetCard(card.img, card.type, card.name)))

	return fragment;
}

function updatePage(pageArr, currentPage = 1) {

		while (ITEMS.firstChild) ITEMS.removeChild(ITEMS.firstChild);
		
		ITEMS.appendChild(drawPage(pageArr[currentPage-1]))
}

function pagesChecker(currentPage) {
  if (currentPage <= 1) {
    ARROW_FIRST.disabled = true;
    ARROW_LEFT.disabled = true;
  } else {
    ARROW_FIRST.disabled = false;
    ARROW_LEFT.disabled = false;
  }

  if (currentPage >= PAGES_NUMBER) {
    ARROW_NEXT.disabled = true;
    ARROW_LAST.disabled = true;
  } else {
    ARROW_NEXT.disabled = false;
    ARROW_LAST.disabled = false;
  }
}

function main(dataArr) {

	const pages = createPages(dataArr)

	updatePage(pages, 1)

	ARROW_FIRST.addEventListener('click', () => {
		if (currentPage <= 1) return
		currentPage = 1
		pagesChecker(currentPage)
		updatePage(pages, currentPage)
		ARROW_NUMBER.textContent = currentPage
	})

	ARROW_LEFT.addEventListener('click', () => {
		if (currentPage <= 1) return
		currentPage--
		pagesChecker(currentPage)
		updatePage(pages, currentPage)
		ARROW_NUMBER.textContent = currentPage
	})
	
	ARROW_NEXT.addEventListener('click', () => {
		if (currentPage > PAGES_NUMBER - 1) { return}
		currentPage++
		pagesChecker(currentPage)
		updatePage(pages, currentPage)
		ARROW_NUMBER.textContent = currentPage
	})

	ARROW_LAST.addEventListener('click', () => {
		if (currentPage > PAGES_NUMBER - 1) { return}
		currentPage=PAGES_NUMBER
		pagesChecker(currentPage)
		updatePage(pages, currentPage)
		ARROW_NUMBER.textContent = currentPage
	})


}