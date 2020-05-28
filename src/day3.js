// Javascript Object and Classes

// Hoisting
var a = 1
var b = 2

console.log(a, b)

answer = sum(1, 2)
console.log(answer)

function sum(x, y) {
  return x + y
}

// Objects
let object1 = {}

// We can use the dot notation to declare an object
object1.name = "Alex"
console.log(object1.name) 

// Contructor function. Here we use the built in class method to declare a class
let object = {}
let object2 = new Object () //Ruby: Oject.new
object2.name = {}
object2.name.address = "123 mars way"
console.log(object2)

let obj = { age: 42 }
obj2 = obj
obj.age = 50 // here we are still changing the same object so will get 50 in console.log(obj2)
console.log(obj2)

// If we wanted to create a clone of an object instead
// obj2 = obj // Shallow copy (e.g copies only the reference/pointer, not the object)
let obj3 = { age: 43 }
obj4 = { ...obj3 } // Deep copy (duplicates the actual object)
obj3.age =  70
console.log(obj4)
obj3.age = 60
console.log(obj3)

// Functions
function Person(name, age) { //Object contructor function
    this.name = name //this is the Javascript equivalent of @ in Ruby.
    this.age = age 
    
    // here we are essentially creating two instance variables with "this" and then assigning values to them
}

let student = new Person()
student.name = "Steph" //we could declare our functions this way
console.log(student)

// Prototypes 
// In Javascript prototypes are similar to superclasses in Ruby
// JavaScript uses what is know as Prototype inheritance.
// All JavaScript objects inherit properties and methods from a prototype.
// with protoypes we can use the properties of another object

Person.prototype.country = "Australia"
let student1 = new Person("Matt", 47) //student is based on Person function 
let student2 = new Person("Steph", 38) // same for student2. This essentially does the same thing as a Ruby superclass
student2.country = "USA" //we can modify the properties of a specific object after it has inherited the values of the prototype Person
console.log(student.country)

let now = new Date()
console.log(now.__proto__) // or we can declare a prototype this way

// Another prototype example

function Hero(name, level){
    this.name = name
    this.level = level
    this.shout = function(){
        return `My name is ${this.name}!!`
    }
}

let conan = new Hero("Conan", 100)
let batman = new Hero("Batman", 60)

console.log(conan.shout())
console.log(batman.shout())
 
// The below would print out the shout function twice and is not best practice (keep code DRY)
// This is when we need to use prototype as shout will be common to all objects of the type Hero
// will print => Hero { name: 'Batman', level: 60, shout: [Function] }
console.log(conan) 
console.log(batman)

// In order to avoid the duplication we need to pull the shout function out of the constructor 
// and do it this way instead:

Hero.prototype.shout = function(){
    return `My name is ${this.name}!!`
}

console.log(conan.shout()) // will print => My name is Conan!!
console.log(batman.shout()) // will print => My name is Batman!!

// Prototype inheritance
function Animal(legs) {
    this.legs = legs
}

Animal.prototype.walk = () => `Taking  stroll with my ${this.legs} legs`

function Human(name) { // here I am creating a more specific animal that will inherite from Animal
    Animal.call(this, 2)
    this.name = name
}

Human.prototype = Object.create(Animal.prototype)
//create a new object based on the Animal prototype and set the Human prototype to a copy of the Anmial prototype
// means we inherite everything from the Animal prototype.

let me = new Human("Matt")
console.log(me.walk())

// In Javascript there is not actually a concept of a class as referred to in other languages
// As far as what happens when the interpretor is concerned is called prototypes

class Triangle { // creating an instance of a class we use the same method as creating protoypes

}

let tri = new Triangle ()
console.log(tri.__proto__)

// key difference between a function and class
// Functions are hoisted
// Classes are not hoisted

// A Javascript function is the same a def in Ruby (method)
// When we are writing classes we can think of them as being equivilent concepts as Ruby classes

class Rectangle {
    // def initialize(width, height) => in Ruby
    // we don't need the function key word when declaring a function within a class
    // in Ruby we need to declare def within a class
    // if you want to call a function you always need the brackets even if they are empty
    // the value of rect.area is a function
    // the value of rect.area() is the function executing
    constructor(width, height) { // Javascript version of initialize
    this.width = width
    this.height = height
    }
    area() {
        return this.height * this.width;
      }
}


class Square extends Rectangle { //here Square inherites from Rectangle
    constructor(width) {
        super(width, width) //here we are passing the paramenters from Rectangle using the key word "super"
    }
}

let rect = new Rectangle(10, 20)
let sq = new Square(15)
console.log(rect.area())
console.log(sq.area())