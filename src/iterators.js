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