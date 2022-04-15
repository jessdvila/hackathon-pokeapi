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
instructor.forEach(img => {
    let randomNum = Math.floor(Math.random() * (150 - 0) + 1);
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomNum}.png`
    img.addEventListener('click', countPokemon);
});


//---------------------------------

//select background to change to a video game feel

//add a "victory" popup/page





//add eventlistener for clicks on pokemon img to track number of pokemon caught
//"Cache" pokemon
let counter = 0; //increment every time we click a pokemon img
function countPokemon(){ //increment our counter
    counter+=1;
    console.log(counter);
}

//select the header to manipulate to show in game mode, display # caught, # of unique species
//top element is a navbar div class "navbar_right"
// let gameHeader = document.querySelector('header');
// gameHeader.innerHTML("Gotta Cache 'Em All!");

//change background to game mode
//body --> div class = "team-wrapper" id= full-academic-team"
let backgroundImg = document.querySelector('#full-academic-team')
// back.style.backgroundImg = "red"
backgroundImg.style.backgroundImage = "url('https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/masters/forest.jpg')";
//backgroundImg --> change to https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/masters/forest.jpg