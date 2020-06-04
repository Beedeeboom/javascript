//Arrays
//Accessing array elements by index
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[0] //prints item at index 0
console.log(listItem)
console.log(famousSayings[2]) //prints item at index 2

//Update Array Elements
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

seasons[3] = 'Autumn';
console.log(seasons); //Output: ['Winter', 'Spring', 'Summer', 'Autumn']

//The .length property
//One of an array’s built-in properties is length and it returns the number of items in the array. 
//We access the .length property just like we do with strings. Check the example below:
const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];

console.log(newYearsResolutions.length);
// Output: 2
//we can use the .length element to find out how many elements are in an array

//The .push() method adds an element to the end of an array
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('fold clothes', 'mop the floor')

console.log(chores) //prints 'wash dishes', 'do laundry', take out trash', 'fold clothes', 'mop floor'

//The .pop() method removes the last element of an array
const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop();

console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2

//The .shift() method removes the first item from an array
//The .unshif() method adds an element to the first item of an array
//The .slice() method returns certain elements of the array (N.B we need to include the index after the last item we want to obtain for it to print)
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift()
groceryList.unshift('popcorn')
console.log(groceryList.slice(1, 4)) //prints 'bananas', 'coffee beans', 'brown rice'

//.slice is non-mutating, meaning we can console.log the groceryList again and it will print the full list
console.log(groceryList) // prints the full list

//The .indexOf() returns the index of an array item
const pastaIndex = groceryList.indexOf('pasta')
console.log(pastaIndex) //prints 4

//Arrays and Functions
//If we change an array inside a function, the change will be mutated outside the function
const flowers = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
  arr.push('lily');
}

addFlower(flowers);

console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

//Another example
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept) //prints 'arrays', 'can', 'be', 'MUTATED'

function removeElement(newArr) {
  newArr.pop()
}

removeElement(concept)

console.log(concept) //prints 'arrays', 'can', 'be'

//Nested Arrays
const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2

//Accessing nested arrays
const numberClusters = ([[1, 2], [3, 4], [5, 6]])

const target = numberClusters[2][1]