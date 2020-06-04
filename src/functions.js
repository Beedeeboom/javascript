//Functions
//We can create function with the keyword "functions"

function sayThanks() {
    console.log('Thank you for your purchase! We appreciate your business.')
  }

//to call a function we then declare it this way
//we can also call a function as many times as we need
sayThanks()

//Parameters and Arguments
//Some functions can take inputs and use the inputs to perform tasks
//We could add a customer name to the above function as such
function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}

sayThanks('Cole')

//We can also pass default parameters into a functions like below
//By using a default parameter, we account for situations when an argument isn’t passed into a function that is expecting an argument.
//For example if a customer wasn't logged in we could greet the user with a default greeting
//or greet the user with their name if the are signed in by overriding the default parameter
function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!

//When a return statement is used in a function body, the execution of the function is stopped 
//and the code that follows it will not be executed. Look at the example below:
function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}

console.log(rectangleArea(-1, -2))

//Return 
function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}

//Helper Functions
//We can also use the return value of a function inside another function. 
//These functions being called within another function are often referred to as helper functions. 
//Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.
function multiplyByNineFifths(number) {
  return number * (9/5);
};

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};

getFahrenheit(15); // Returns 59

//Another example:
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200
}

const totalCost = costOfMonitors(5,4)

console.log(totalCost)

//Function Expressions
//Another way to define a function is to use a function expression. 
//To define a function inside an expression, we can use the function keyword. 
//In a function expression, the function name is usually omitted. 
//A function with no name is called an anonymous function. 
//A function expression is often stored in a variable in order to refer to it.

//To create a function expression we create a variable that holds an anonymous function
const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
    return true
  }
  else {
    return false
  }
}

plantNeedsWater('Tuesday')

console.log(plantNeedsWater('Tuesday'))

//Arrow Functions
//ES6 introduced arrow function syntax, a shorter way to write functions by using the special “fat arrow” () => notation.
//Arrow functions remove the need to type out the keyword function every time you need to create a function. 
//Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { } like this:

const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};

//Body Arrow Functions
//Functions that take only 1 parameter do not need the parentheses
//Functions that takes 0 or multiple parameters  need the parentheses

//Example no parameters
const functionName = () => {

}

//Example one parameter
const functionName = paramOne => {

}

//Example two parameters or more
const functionName = (paramOne, paramTwo) => {

}

//We can also refactor a function this way for single lines of code
const squareNum = (num) => {
  return num * num
}

//Refactor to:
const squareNum = num => num * num 
