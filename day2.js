// spread operator ... puts the remainder of something into (e.g below: put the remainder of bar into a hash)
let people = ["garret", "hamish", "matt"]

let [foo, ...bar] = people

console.log(bar)

// use the spread operator to join two arrays
let morePeople = ["steph", "brad"]

let everyone = [...people, ...morePeople]

console.log(everyone)

// match a key to the same name to return a value (returns a key and value pair)
let favColor = { sally: "blue", tom: "red", scott: "purple"}

let { sally } = favColor
let { scott } = favColor

console.log(sally, scott)
console.log(scott)

// adding a key value pair to an exisiting hash 
let {john="white"} = favColor

console.log(scott, john)

// we can destructure nested properties
let herosBirthplaces = {
    marvel: {ironman: "New York", thor: "Asgard"},
    dc: { batman: "Gotham City", superman: "Krypton"}
}

let { dc, dc: { batman} } = herosBirthplaces

console.log(dc.batman)

// Control Structures
// If Statements
const age = 25

if (age > 18) {
    console.log("You are an adult")
} else if (age >= 13) {
    console.log("You are a teenager")
} else {
    console.log("You are a child")
}

// Ternary Operators
const allowed = age >= 18 ? true : false
console.log(`Are allowed to go to the Casino: ${allowed}`)

let fav_bird = "Robin"

// Case Statements
switch (fav_bird) {
    case "Crow":
        console.log("You like Crows")
        break
    case "Robin":
        console.log("You like Robins")
        break
    default:
        console.log("I don't know that bird")
}

// Loops
// While Loop
let count = 3

while (count > 0){
    console.log(count--)
}

// For Loop
// 3 sections in the for loop signature.
// (initializer; condition; increment;)
// (x=0; x < 10; x++)
// Initializer: our locally defined variable
// Condition: Execute the block code while this condition is true
// Increment: Run this code AFTER the block has been executed
for (let i=0; i < 10; i++) {
    console.log(i)
}

// Interators
let favFoods = ["pizza", "cake", "chips"]

// here we use to "of" for arrays
for (let food of favFoods) {
    console.log(food)
}

let cohort = {
    name: "FastTrack 2020",
    students: 18,
    teacher: "Matt"
}

// here we use "in" for objects
for (key in cohort) {
    console.log(cohort[key])
}

// passing a function
// here we are declaring a function and passing it using .forEach
favFoods.forEach(function(value, index) {
    console.log(`${value} is at index ${index}`)
})

// or we could make the whole function a one line
favFoods.forEach((value, index) => console.log(`${value} is at index ${index}`)) 

// We could pass a name to our function to re-use it
function funcName(value, index) {
    console.log(`${value} is at index ${index}`)
}

favFoods.forEach(funcName)