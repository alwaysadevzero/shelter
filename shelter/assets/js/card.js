
async function getCardObj() {  
  const res = await fetch('pets.json');
  const data = await res.json(); 
  return data
}


function createPetCard(card) {

	const parentDiv = document.createElement('div');
	const img = document.createElement('img');
	const span = document.createElement('span');
	const div = document.createElement('div');
	const a = document.createElement('a');

	parentDiv.className = 'pets__card';
	img.src = card.img;
	img.alt = card.type;
	span.className = 'pets__name text-card';
	span.textContent = card.name;
	div.className = 'pets__button-card';
	a.className = 'text-georgia_button';
	a.textContent = 'Learn more';
	div.addEventListener("click", (event) => {updatePopup(card); popupToggler() })
	parentDiv.appendChild(img);
	parentDiv.appendChild(span);
	parentDiv.appendChild(div);
	div.appendChild(a);

	return parentDiv;
}