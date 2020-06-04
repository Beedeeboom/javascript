//Blocks and Scope
//A Block is the code found inside a set of curly braces
//Blocks help us group one or more statements together and serve as an important structural marker for our code.
//A Block could be a function like this:
const logSkyColor = () => {
    let color = 'blue'; 
    console.log(color); // blue 
  };

//We can access variables declared before a function that are called within a function like this
//These are called Global Variables
const city = 'New York City'

function logCitySkyline() {
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}

console.log(logCitySkyline())

//Global Scope 
//In global scope, variables are declared outside of blocks. 
//These variables are called global variables. 
//Because global variables are not bound inside a block, they can be accessed by any code in the program, including code in blocks.
const satellite = 'The Moon'
const galaxy = 'The Milky Way'
const stars = 'North Star'

function callMyNightSky() {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky())

//Block Scope
//when a variable is defined in block scope, it is only accessible to the code within the curly braces.
const logSkyColor = () => {
    let color = 'blue'; 
    console.log(color); // blue 
  };
  
logSkyColor(); // blue 
console.log(color); // ReferenceError

//Scope Pollution
//Is when we have too many global variables that exist in the global name space.
//Or when we reuse variables accross different scopes. 
//It makes it difficult to keep track of our different variables and is prone to accidents
//This is bad practice in code maintainability.
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars) //here the global variable is reassigned to 'Sirius'

