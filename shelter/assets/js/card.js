
async function getCardObj() {  
  const res = await fetch('pets.json');
  const data = await res.json(); 
  return data
}


function createPetCard(imageSrc, altText, petName) {
	const parentDiv = document.createElement('div');
	const img = document.createElement('img');
	const span = document.createElement('span');
	const div = document.createElement('div');
	const a = document.createElement('a');

	parentDiv.className = 'pets__card';
	img.src = imageSrc;
	img.alt = altText;
	span.className = 'pets__name text-card';
	span.textContent = petName;
	div.className = 'pets__button-card';
	a.className = 'text-georgia_button';
	a.textContent = 'Learn more';

	parentDiv.appendChild(img);
	parentDiv.appendChild(span);
	parentDiv.appendChild(div);
	div.appendChild(a);

	return parentDiv;
}




