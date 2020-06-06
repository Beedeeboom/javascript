//Loops
//A for loop contains three expressions separated by ; inside the parentheses:

//1. an initialization starts the loop and can also be used to declare the iterator variable.
//2.a stopping condition is the condition that the iterator variable is evaluated against— if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
//3. an iteration statement is used to update the iterator variable on each loop.

for (let counter = 0; counter < 4; counter++) {
    console.log(counter);
  } //prints 0 1 2 3


for (let number = 5; number <= 10; number++) { //the variable declaration defines the start of the loop
console.log(number) //prints 5 6 7 8 9 10
}

//We can also loop in reverse
for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
  }

//Looping through Arrays
const vacationSpots = ['Bali', 'Paris', 'Tulum'];
for (let i = 0; i < vacationSpots.length; i++){
  console.log(`I would love to visit ${vacationSpots[i]}`)
}

//prints I would love to visit Bali - I would love to visit Paris - I would love to visit Tulum

//Nested loops
//For loops is ideal when we know how many times the loop should run
//the below contains 3 arrays
//the duplicates from array 1 and 2 are pushed into array 3
let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};

//While Loops
//Are better to use when we aren't sure how many times a loop should run.
//When we want to execute a loop a undetermined number of times.
const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

while (currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard)
}

//Do...While Statement
//Says to do a task once and then keep doing it until a specified condition is no longer met.
//The while and do...while loop are different.
//Unlike the while loop, the do...while will run at least once whether or not the condition evaluates to true.
let cupsOfSugarNeeded = 4
let cupsAdded = 0
let i = 0

do {
  cupsAdded = cupsAdded + i;
  i++;
} while (i < cupsOfSugarNeeded);

console.log(cupsAdded) //prints 6