//Iterators

//.forEach() method will execute the same code for each element of an array.
//The below code calls the .forEach method on the groceries array
//.forEach takes an argument of callback function (callback = passed as an argument into another function)
//.forEach loops through the array and executed the callback function for each element

const groceries = ['bananas', 'sugar', 'cereales', 'bread']

groceries.forEach(function(groceryItem) {
    console.log('-' + groceryItem)
})

//Another way to pass a callback for .forEach() is to use the arrow function syntax.
groceries.forEach(groceryItem => console.log(groceryItem))

//We can also define a function beforehand to be used as the callback function.
function printGrocery(element){
    console.log(element)
}

groceries.forEach(printGrocery)

//Iterate over a fruit array
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(function (fruitItem) {
  console.log(`I want to eat a ${fruitItem}`)
})

//.map() method
//when this method is call on an array, it takes an argument of a callback function and returns a new array.
//.map() works in a similar way to .forEach() - The main difference is that .map() returns a new array
const numbers = [1, 2, 3, 4, 5]; 

const bigNumbers = numbers.map(number => {
  return number * 10;
});

console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]

//returning a new array - Big Numbers to Small Numbers
const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(num => num/100);

console.log(smallNumbers)