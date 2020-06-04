// Javascript - Callback and Async

function adder(x, y, callback) {
    let answer = x + y
    callback(answer) //callback calls another function
}

function shoutsSomthing(input) { //here answer is passed to the input parameter
    console.log(`HEY! ${input}!!`)
}

function outputNumbers(howMany) {
    for (let i=1; i <= howMany; i++) {
        console.log(i)
    }
}

adder(1, 2, shoutsSomthing) //prints => "HEY! 3!!"
adder(5, 7, outputNumbers) //prints => 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12

//Synchronous => The code below must wait for the code above the function
//It's important to understand that Javascript is a single threaded language
//We can say that it's a blocking language
//When we have blocking code running, and because JS is running on a single thread means if a block of code is running everything else has to wait

//Asynchronous 
console.log(1);

setTimeout(() => { //Asynchronous function
  console.log(2); //only when the time finishes (5 secs) will this code be executed
}, 5000);

console.log(3);
//prints 1 first, then 3 and 5 seconds later executes 2

//callstack allows Javascript to know what called why
//each state of a function can be preserved so when we return to a function is knows where to go back to
let a = 1;

function x() {
  return "here";
}

function y() {
  return x();
}

function z() {
  return y();
}

z();