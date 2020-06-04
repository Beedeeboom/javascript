//Callbacks
//Why do we need them?
//Javascript is an event driven language, meaning it will move on to the next event while the first event finishes executing

//The below function will execute in the order or first then second
function first(){
    console.log(1);
  }
  function second(){
    console.log(2);
  }
  first();
  second(); //prints 1 then 2

//We can use the SetTimeout which is a JS function that calls a function after a set amount of time
//In the below code, JS doesn't wait for a response from first() before moving on to execute second()
function first(){
// Simulate a code delay
setTimeout( function(){
    console.log(1);
}, 500 );
}
function second(){
console.log(2);
}
first(); //waits 5 seconds before it prints the first function
second(); //prints 2 before 1 as 1 needs to wait 5 seconds

//Creating a Callback
//A callback is a function passed into another function as an argument
//which is then invoked inside of the function
function doHomework(subject, callback) {
  console.log(`Starting my ${subject} homework.`);
}
function alertFinished(){
  homework = 'Finished my homework'
  return callback(homework);
}
doHomework('math', alertFinished)
