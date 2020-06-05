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