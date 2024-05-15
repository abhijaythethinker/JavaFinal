console.clear();
const characterList = document.querySelectorAll('.character');
const select = document.getElementById('Select');
const singleP = document.getElementById('1player');
const multiP = document.getElementById('2players');
const play = document.getElementById('Play');
let selectedCharacters = 0;
let numberCharacters = 0;

select.disabled = true;

singleP.addEventListener('click', () => {
	characterList.forEach(character => {
		character.addEventListener('click', () => {
				const activeCharacter = document.querySelector('.character.active');
				if (numberCharacters == 0) {
					if (activeCharacter) {
						activeCharacter.classList.remove('active');
					}
					if (selectedCharacters < 2 && !character.classList.contains('active')) {
						character.classList.add('active');
						const characterId = character.dataset.name;
						console.log(characterId);
					}
				}
				else {
					console.log("hello");
				}
		});
	  });
	  select.addEventListener('click', () => {
		const activeCharacter = document.querySelector('.character.active');
		if (activeCharacter && selectedCharacters < 1) {
			selectedCharacters++;
			numberCharacters++;
			console.log(selectedCharacters)
		}
		else {
			select.disabled = true;
		}
	})
})

multiP.addEventListener('click', () => {
	characterList.forEach(character => {
		character.addEventListener('click', () => {
			const activeCharacter = document.querySelector('.character.active');
			if (numberCharacters == 0) {
				if (activeCharacter) {
					activeCharacter.classList.remove('active');
				  }
				if (selectedCharacters < 2 && !character.classList.contains('active')) {
					character.classList.add('active');
					const characterId = character.dataset.name;
					console.log(characterId);
				}
			}
			else if(numberCharacters == 1) {
				const activeCharacter2 = document.querySelector('.character.active2');
				if (activeCharacter2) {
					activeCharacter2.classList.remove('active2');
				  }
				if (selectedCharacters < 2 && !character.classList.contains('active2')) {
					character.classList.add('active2');
					const characterId2 = character.dataset.name;
					console.log(characterId2);
				}
			}
			else {
				console.log("hello");
			}	  
		});
	  });
	  select.addEventListener('click', () => {
		const activeCharacter = document.querySelector('.character.active');
		const activeCharacter2 = document.querySelector('.character.active2');
		if ((activeCharacter || activeCharacter2) && (selectedCharacters < 3)) {
			selectedCharacters++;
			numberCharacters++;
			console.log(selectedCharacters)
		}
		else {
			select.disabled = true;
		}
	})
})

play.addEventListener('click', () => {
	play.disabled = true;
	const activeCharacter = document.querySelector('.character.active');
	const activeCharacter2 = document.querySelector('.character.active2');
		if (multiP && selectedCharacters == 2 && (activeCharacter && activeCharacter2)) {
			play.disabled = false;
			console.log("hello");
		}
		else if (singleP && selectedCharacters == 1 && (activeCharacter)){
			play.disabled = false;
			console.log("hello");
		}
		else {
			play.disabled = true;
		}
})

