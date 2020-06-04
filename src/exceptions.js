//Exceptions
//You can throw exceptions in JS using the throw statement
throw 'my error'

//We can throw an error on any data type
throw "error";
throw 42;
throw true;
throw { message: "Error message", status: 400 };
throw ["one", "two", "three"];

//If an error is not handled or catched JS will use the Uncaught error type
//You can also throw errors using an object created by an object constructor
function CustomError(message) {
    this.message = message;
    this.name = "CustomError";
  }
  
throw new CustomError("something went wrong");

//Handling errors
//To handle exceptions we can you the try/catch statement
//when an error is throw within a try block it will immediately exit that block
//The error is then handed to the catch block
try {
    throw "oops something went wrong!";
} catch (error) {
    console.log(`Error: ${error}`);
}