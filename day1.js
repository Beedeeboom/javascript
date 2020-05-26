// Javascript Introduction
// Variables can be declared using let, const or var
// Var = global scope
// Let and Const = block scope

let variableLet = "Can be changed"
const variableConst = "Can't be changed"
var variableVar = "Was the most common declarative keyword until ECMAScript 2017 (ES6) was introduced"

// Use const by default and let when you need to reassign something

// Using let
let name 

console.log(name || "Nobody")

console.log("Hello, " + name)

{
    let x = "Steph"
    console.log(x)
}

// Using const
const x = false || 5

console.log(x)

let person = "Brad"

// In Javascript a method is an object. In order to call an object we need to use brackets ()
console.log(person.toUpperCase())

console.log(person.toUpperCase().charAt(1))

// Javascript interpolation we need to use back ticks `
console.log(`We are ${50 + 50}% cool`)

// Short-Circuit Logic
// means whether JavaScript will execute a second operand is dependent on the first.

let a = false || 1
let b = 2 || 4
let c = false && 2
let d = 6 && 8

console.log(a,b,c,d)

// In Javascript a function is the same a def used in Ruby
// We also need to explicitly declare "return" in Javascript or nothing will print to the console
function adder(x,y) {
    return x + y
}

console.log(adder(5,9))

// Javascript gives us access to built in Math objects
Math.floor(1.2); //always rounds down
Math.ceil(1.2); //always rounds up
Math.PI;

// In Javascript there is no concept of Integer or Float, these are just referred to as Numbers

// Objects in Javascript are similar to hashes in Ruby. We can declare an object like so (like a JSON):
myObject3 = {
    name: "Garret",
    address: {
      city: "Sydney",
      country: "Australia"
    }
  }

// To access the properties of an object we can ue the dot notation:
myObject3.name

// or the bracket notation:
myObject3["name"]

// To access nested properties in an object we can use chaining:
myObject3.address.city
myObject3["address"]["city"]

// And we can combine dot and bracket notation:
myObject3["address"].city

// To overwrite or assign new values:
myObject3.name = "Bob"
myObject3.age = 40
console.log(myObject3)

// Arrays in Javascript work the same way as they do in Ruby
let myArray = ["garret", 123]
myArray[1]
myArray.length

// Methods on an array are also similar to the ones uses in Ruby
myArray.push(4) //append to the end
myArray.unshift(2) //prepend to the beginning
console.log(myArray)

myArray.pop() //remove from the end
myArray.shift() //remove form the beginning
console.log(myArray)