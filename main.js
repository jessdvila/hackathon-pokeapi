//choose the actual URL page that we'll manipulate on codesmith
//search through the code to find where in the html file the instructor images exist & ID
//once we find the id, set it to a variable = document.getElementById()
//document.querySelectorall(.img)
//variable.forEach(img => img.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{random number}.png');

//need a function to generate random number from 0 to 150

//---------------------------------
//select the header to manipulate to show in game mode, display # caught, # of unique species
//select background to change to a video game feel
//add eventlistener for clicks on pokemon img to track number of pokemon caught
//add a "victory" popup/page

//url for pokemon image
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png

//fetch code
// fetch('url')
// .then((data) => data.json())
// .then((data) => {
//     console.log(data)
// });

//instructors -- div class ID
//admin -- div.content-with-image
//--x--search through the code to find where in the html file the instructor images exist & ID
//--x--once we find the id, set it to a variable = document.getElementById()
//--x--document.querySelectorall(.img)
//--x--variable.forEach(img => img.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{random number}.png');

const instructor = document.querySelectorAll('img');
instructor.forEach((img) => {
  let randomNum = Math.floor(Math.random() * 150) + 1;
  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomNum}.png`;
  img.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomNum}.png`;
  // img.classList.add('pokemon');
  img.addEventListener('click', countPokemon);
});

//---------------------------------

//select background to change to a video game feel

//add a "victory" popup/page

//add eventlistener for clicks on pokemon img to track number of pokemon caught
//"Cache" pokemon
let counter = 0; //increment every time we click a pokemon img
let soundEffect = new Audio();

function countPokemon(e) {
  soundEffect.src = 'assets/sounds/sound3.mp3';
  soundEffect.play();
  //increment our counter
  counter += 1;

  e.currentTarget.src =
    'https://purepng.com/public/uploads/large/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-17015278256953yfbq.png';
  e.currentTarget.srcset =
    'https://purepng.com/public/uploads/large/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-17015278256953yfbq.png';

  gameHeader.innerHTML = `Gotta Cache 'Em All!<br> You've Caught ${counter} Pokemon!`;
  e.currentTarget.textContent = `${counter}`;
  e.currentTarget.removeEventListener('click', countPokemon);
}

//select the header to manipulate to show in game mode, display # caught, # of unique species
//top element is a navbar div class "navbar_right"
let gameHeader = document.querySelector('h1');
gameHeader.style.backgroundColor = 'yellow';
gameHeader.style.color = 'blue';
gameHeader.style.padding = '50px';
gameHeader.innerHTML = `Gotta Cache 'Em All!<br> You've Caught ${counter} Pokemon!`;
// gameHeader.innerHTML("Gotta Cache 'Em All");

//change background to game mode
//body --> div class = "team-wrapper" id= full-academic-team"
let backgroundImg = document.querySelector('#full-academic-team');
backgroundImg.style.backgroundImage =
  "url('https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/masters/forest.jpg')";

//make an API call to find the name of hte pokemon associated with the image.
//use the random number to access to pokemon in the array.
//get hte pokemon name, and change the name below the pokeball to the pokemon name.

//the code below is how to select the instructor's name
//   parent = pokemon.parentElement.parentElement.parentElement;
//   name = parent.querySelector('.team-heading');
//   name.innerHTML = '<p>Regina</p>'; -->this does not work

//randomize mario sounds on every click --> fetch api? of mario sounds
//fetch api of pokemon names to change instructor name for each img, change font color.
