//Exeception Handling, Function Scope and Closures

//Exception 

//throw error
throw { message: "Error", status: 400 } //Javascript will use Uncaught error type

function CustomError(msg) {
    this.message = message;
    this.name = "CurstomError"
} 

throw new CustomError("Something went wrong") //throws a new error message

// try catch error
try {
    console.log(1)
    throw "something went wrong" //once the exception is thrown it won't return through the block
    console.log(2)
} catch (error) {
    console.log(`Error: ${error}`)
}

//Usually rather than throwing a string we can use the built-in Javascript object "Error".
//This also gives us a stack trace to figure out where the issue happened.
try {
    console.log(1)
    throw new Error("something went wrong")
    console.log(2)
} catch (error) {
    console.log(error)
}

//Custom class error
class StephError extends Error {
    constructor(...params) {
        super(...params)
        this.name = "StephError"
    }
}

try {
    console.log(1)
    throw new StephError("something went wrong")
    console.log(2)
} catch (error) {
    console.log(error)
}

//Function Scope

function myDog() {
    var dog = "Kobe" //can't be accessed from outside the function = becomes a local variable inside the function even though var is global
    console.log(dog)
}

myDog()
console.log(dog)

//We can declare functions inside the scope of other functions this way
//Functional programming is written this way
function parentFunc(a) {
    let b = 1

    function nestedFunc() {
        return a + b
    }

    return nestedFunc()
}

let answer = parentFunc(10) 
console.log(answer) //prints 11 => a + b

//Closure
//A Closure is a function that wraps another function or functions, but rather than calling them itself it returns them
// A Function == an Object
function makeAdder(a) {
    return function(b) { //here we are not calling a function, we are declaring one and returning it at the same time
        return a + b //here the function will use the parent function and its own argument to return a + b
    }
}

const addFive = makeAdder(5) //here we are making a copy of the function makeAdder. Here we are permanently declaring a to be 5
console.log(addFive(6)) //here we are declaring b to be 6 because we previously declared a to be 5 so we get a result of 11
//this is referred to as closure.
//essentially what we are doing here is creating a custom function and returning that custom function.
//makeAdder is like a builder that creates functions that we customise by passing parameters.
//here we are asking makeAdder to make something with 5, so add something to 5

//Mixins
//We can abstract out functionality and use the mixin as a way to do multiple inheritance

class Shape {
    constructor(height, width) {
        this.height = height
        this.width = width
    }
    talk(thing) {
        return `Hey! I am a talking ${thing}!`
    }
}

class Square extends Shape {
    constructor(width) {
        super(width, width)
    }
    
    talk() {
        return super.talk("Square") //here we are using the parent class "Shape" and passing "Square" to talk()
     }
}

//Anonymous Class Mixin
//This allows us to re-use a class in a different hierarchy
//Mixins allow us to re-use a certain function 
const calcMixin = function(Base) { //here we create an anonymous class that inherites from any class we want
    return class extends Base { 
        area() {
            return this.width * this.height 
        }
    }
}

class Square extends calcMixin(Shape) {
    constructor(width) {
        super(width, width)
    }
    
    talk() {
        return super.talk("Square") 
     }
}

let sq = new Square(10, 10)

console.log(sq.talk())
console.log(sq.area())

//JSON
const person = {
    name: "Jack",
    age: 30,
    hobbies: ["surfing", "skydiving"]
}

console.log(JSON.stringify(person))
// prints JSON => {"name":"Jack","age":"30","hobbies":"["surfing", "skydiving"]"}

//Or we could declare a JSON this way
const str = {"name":"Jack","age":"30","hobbies":"["surfing", "skydiving"]"}
const person = JSON.parse(str)
console.log(person)