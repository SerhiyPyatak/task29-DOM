//----------- Task 1 Section -------------
let playList = [
	{
		author: "LED ZEPPELIN",
		song:"STAIRWAY TO HEAVEN"
	},
	
	{
		author: "QUEEN",
		song:"BOHEMIAN RHAPSODY"
	},
	
	{
		author: "LYNYRD SKYNYRD",
		song:"FREE BIRD"
	},
	
	{
		author: "DEEP PURPLE",
		song:"SMOKE ON THE WATER"
	},
	
	{
		author: "JIMI HENDRIX",
		song:"ALL ALONG THE WATCHTOWER"
	},
	
	{
		author: "AC/DC",
		song:"BACK IN BLACK"
	},
	
	{
		author: "QUEEN",
		song:"WE WILL ROCK YOU"
	},
	
	{
		author: "METALLICA",
		song:"ENTER SANDMAN"
	}
];

function getPlaylist() {
	playList.forEach(
		(elem) => {
			let listItem = document.createElement('li');
			listItem.innerHTML = `Song: ${elem.song}  Author: ${elem.author}`;
			document.getElementById('songs-playlist').appendChild(listItem);
		}
	);
}

//----------- task 2 section -------------------------
// Get the modal
let modal;

// Get the button that opens the modal
let btn;

// Get the <span> element that closes the modal
let span;

// When the user clicks on the button, open the modal
function showModal() {
	modal = document.getElementById("myModal");
	btn = document.getElementById("modal-btn");
	span = document.getElementsByClassName("close")[0];
	modal.style.display = "block";
}

// When the user clicks on this button, close the modal
function closeModal() {
	modal.style.display = "none";
}

//--------------- task 3 section -------------------------
let semaphoreState = 0;
const semaphoreLights = ['red', 'yellow', 'green'];
let semaphoreDirection = 1;
function switchSemaphore() {
	for (let i = 0; i < 3; i++) {
		document.getElementById(`lamp${i}`).style.backgroundColor = 'silver';
	}
	document.getElementById(`lamp${semaphoreState}`).style.backgroundColor = semaphoreLights[semaphoreState];
	if (semaphoreState === 2) {
		semaphoreDirection = -1;
	} else if (semaphoreState === 0) {
		semaphoreDirection = 1;
	}
	semaphoreState += semaphoreDirection;
}