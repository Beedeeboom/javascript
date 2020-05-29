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