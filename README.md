# Learning Javascript
By Stephanie Duffieux | May 2020

### Using Javascript with HTML

To write Javascript code with HTML we need to wrap our code within script tags. These can be placed in the head, body or after the body section of the HTML document.

We can output Javascript code within HTML code with document.write(), instead of console.log, example:

```
    <!DOCTYPE html>
    <html>
    <body>

    <h1>Introduction to Javascript</h1>
    <p>Javascript Code with HTML</p>

    <script>
        let myFirstjavascript = "I love Javascript"
        document.write(myFirstjavascript)
    </script>

    </body>
    </html>
```

## Functions

#### Hoisting

Functions are hoisted in Javascript, this means all variables are lifted to the top of the file while leaving the rest of the code where it is. 

* Example 

``` 
    // normally our code should read like this which would print => 1 2
    let a = 1;
    console.log(a, b);
    let b = 2;

    // now try this:
    var a = 1;
    console.log(a, b);
    var b = 2;

    // here the code recognises the variable b but it is not yet defined because it is defined after console.log, which is similar to writing our code this way:

    var a;
    var b;

    a = 1;
    console.log(a, b);
    b = 2;
 ```

 However functions cannot be hoisted with variables declared with let or const therefore it is considered bad practice to use var. 

 Function definitions can also be hoisted, example:

 ```
    answer = sum(1, 2);
    console.log(answer);

    function sum(x, y) {
    return x + y;
    }

    // this would return the number 3
```

## Objects

Objects in Javascript are similar to hashes in Ruby

```
    //We can declare an object in JS this way:

    let object = {}

    //and add properties using the dot notation:

    object.name = "My Name"
    console.log(object)
```

We can access data stored within variable objects using the dot notation like so:

```
    let student = {
        name: "Steph",
        age: 38,
        address: {
            street: "123 code street",
            state: "QLD"
            city: "Mango Hill"
        }
    }

    console.log(student.address.city)

    //console will print => Mango Hill

```

```

    let spaceship = {
    homePlanet: 'Earth',
    color: 'silver'
    };
    spaceship.homePlanet; // Returns 'Earth',
    spaceship.color; // Returns 'silver',


```

Objects can be assigned to variables and can be filled with an object with unordered data. The data is organised into key-value pairs. The key is like a variable name that points to a value.

```

    // An object literal with two key-value pairs
    let spaceship = {
    'Fuel Type': 'diesel',
    color: 'silver'
    };

```

We can assign objects to variables like so:

```

    let spaceship = {
    homePlanet: 'Earth',
    color: 'silver'
    };
    spaceship.homePlanet; // Returns 'Earth',
    spaceship.color; // Returns 'silver',

```

We can also access a key's value using the bracket notation [ ] similar to accessing an array element by its index.

```

    ['A', 'B', 'C'][0]; // Returns 'A'

```

We must use bracket notation when accessing keys that have numbers, spaces, or special characters in them. Without bracket notation in these situations, our code would throw an error.

```

    let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    'Active Duty': true,
    homePlanet: 'Earth',
    numCrew: 5
    };
    spaceship['Active Duty'];   // Returns true
    spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
    spaceship['numCrew'];   // Returns 5
    spaceship['!!!!!!!!!!!!!!!'];   // Returns undefined

```

With bracket notation you can also use a variable inside the brackets to select the keys of an object. This can be especially helpful when working with functions:

```
    let returnAnyProp = (objectName, propName) => objectName[propName];

    returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'

```

If we tried to write our returnAnyProp() function with dot notation (objectName.propName) the computer would look for a key of 'propName' on our object and not the value of the propName parameter.

### Object Property Assignment

Once an object is defined, we can change, add or delete key values.

```

    let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
    };

    spaceship.color = 'glorious gold'
    spaceship.numEngines = 5
    delete spaceship['Secret Mission']
    console.log(spaceship)

```
### Methods

When the data stored in an object is a function it is called a method. A property is what an object has, while a method is what an object does.

Take for example - console.log() => console is the object, log is the method.

We can include methods in our object literals by creating ordinary, comma-separated key-value pairs. The key serves as our method’s name, while the value is an anonymous function expression.

```

    const alienShip = {
    invade: function () { 
        console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
    }
    }

    //With the new method syntas introduced in ES6 we can omit the colon and the function keyword.

    const alienShip = {
        invade () { 
            console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
        }
    };

    alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'

```

```

    let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

    const alienShip = {
    retreat() {
        console.log(retreatMessage)
    },
    takeOff() {
        console.log('Spim... Borp... Glix... Blastoff!')
    }
    }

    alienShip.retreat()
    alienShip.takeOff()

```

### Nested Objects

Objects can be nested within another object. An Ojbect can have an object as a property which in turn could have a property that's an array of more objects.

``` 

    let spaceship = {
    passengers: null,
    telescope: {
        yearBuilt: 2018,
        model: "91031-XLT",
        focalLength: 2032 
    },
    crew: {
        captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
        'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
        model: "Nimbus2000"
    },
    nanoelectronics: {
        computer: {
        terabytes: 100,
        monitors: "HD"
        },
        'back-up': {
        battery: "Lithium",
        terabytes: 50
        }
    }
    }; 

    let capFave = spaceship.crew.captain['favorite foods'][0]
    spaceship.passengers = [{name: 'Space Dog'}]
    let firstPassenger = spaceship.passengers[0]


```

We can chain operators to access nested properties

```

    paceship.nanoelectronics['back-up'].battery; // Returns 'Lithium'

```

### Pass By Reference

Functions which change object properties mutate the object permanently.

```

    let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
    };

    //function greenEnergy has an object as a parameter. Object has a property and value

    let greenEnergy = objectParam => {
    objectParam['Fuel Type'] = 'avocado oil';
    }

```

```

    let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
    };

    let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
    }

    let remotelyDisable = obj => {
    obj.disabled = true;
    }

    greenEnergy(spaceship); //adds greenEnergy to spaceship properties

    remotelyDisable(spaceship); //add reotelyDisable to spaceship properties

    console.log(spaceship)

```

### Looping Through Objects

A for..in loop lets us iterate through object properties and their values ([MDN For..In](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in))

```

    let spaceship = {
        crew: {
        captain: { 
            name: 'Lily', 
            degree: 'Computer Engineering', 
            cheerTeam() { console.log('You got this!') } 
            },
        'chief officer': { 
            name: 'Dan', 
            degree: 'Aerospace Engineering', 
            agree() { console.log('I agree, captain!') } 
            },
        medic: { 
            name: 'Clementine', 
            degree: 'Physics', 
            announce() { console.log(`Jets on!`) } },
        translator: {
            name: 'Shauna', 
            degree: 'Conservation Science', 
            powerFuel() { console.log('The tank is full!') } 
            }
        }
    }; 

    for(let crewMember in spaceship.crew) {
    console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
    }

    //prints => capitain: Lily, chief: Dan, medic: Clementine, translator: Shauna

    for(let crewMemberDegree in spaceship.crew) {
    console.log(`${spaceship.crew[crewMemberDegree].name}: ${spaceship.crew[crewMemberDegree].degree}`)
    }

    //prints => Lily: Computer Engineering, Dan: Aerospace Engineering, Clementine: Physics, Shauna: Conservation Science


```

## Advanced Objects

### Keyword => this

The keyword "this" lets us access object properties (keys-value pairs) within other methods

```

    const robot = {
    model: '1E78V2',
    energyLevel: 100,

    provideInfo() {
        return `I am ${this.model} and my current energy level is ${this.energyLevel}`
    }
    };

    console.log(robot.provideInfo())


```

```

    const goat = {
    dietType: 'herbivore',
    makeSound() {
        console.log('baaa');
    },
    diet() {
        console.log(this.dietType);
    }
    };

    goat.diet(); 
    // Output: herbivore


```

### Object Privacy

Sometimes we don't want our object properties to change. To define an object property that shouldn't be changed we append it with an underscore. Although this doesn't prevent the property from being changed, it is way for developers to let other developers know not to change the value of that property.

```

    const robot = {
    _energyLevel: 100,
    recharge(){
        this._energyLevel += 30;
        console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
    };


```

### Getters

Getters are methods that get and return the internal properties of an object. Using getter methods we can:

    * Perfor an action on the data when getting a property
    * Return different values using conditionals
    * Access the properties of the calling object using "this"
    * Make our code more readable to other developers.


```

    const person = {
    _firstName: 'John',
    _lastName: 'Doe',
    get fullName() {
        if (this._firstName && this._lastName){
        return `${this._firstName} ${this._lastName}`;
        } else {
        return 'Missing a first name or a last name.';
        }
    }
    }

    // To call the getter method: 
    person.fullName; // 'John Doe'


```

### Setters

Setter methods can be used to reassing the values of existing properties within an object. In the below code snippet we are using the setter method to:

    * Perform a check for what value is being assing to this._age
    * Reassign only values that are numbers to this._age
    * Perform different outputs depending on what values are used to reassign this._age


```

    const person = {
    _age: 37,
    set age(newAge){
        if (typeof newAge === 'number'){
        this._age = newAge;
        } else {
        console.log('You must assign a number to age');
        }
    }
    };

    person.age = 40;
    console.log(person._age); // Logs: 40
    person.age = '40'; // Logs: You must assign a number to age

```

```

    const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
        if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
        } else {
        return 'Sensors are currently down.'
        }
    },
    set numOfSensors(num) {
        if (typeof num === 'number' && num >= 0){
        this._numOfSensors = num;
        } else {
        console.log('Pass in a number that is greater than or equal to 0')
        }   
    } 
    };

    robot.numOfSensors = 100;
    console.log(robot.numOfSensors);


```

### Factory Functions

A factory function is a function that returns an object and can be reused to make multiple object instances. Factory functions can also have parameters allowing us to customize the object that gets returned.

```

    const monsterFactory = (name, age, energySource, catchPhrase) => {
    return { 
        name: name,
        age: age, 
        energySource: energySource,
        scare() {
        console.log(catchPhrase);
        } 
    }
    };

    const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
    ghost.scare(); // 'BOO!


```

We can also add methods within our object that are not declared as parameters.

```

    const robotFactory = (model, mobile) => {
    return {
        model: model,
        mobile: mobile,
        beep(){
        console.log('Beep Boop')
        }
    }
    }

    const tinCan = robotFactory('P-500', true)
    tinCan.beep() //prints 'Beep Boop'


```

### Destructure Assignment

We can use the destructuring technique to create new variables from an object's key by wrapping it in curly braces { }:

```

    const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
        beep() {
        console.log('Beep Boop');
        },
        fireLaser() {
        console.log('Pew Pew');
        },
    }
    };

    const { functionality } = robot
    functionality.beep()


```

### Object Methods

We can create our own instances of objects but we can also make sure of built-in methods for objects, see - [MDN Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)


```

    const robot = {
        model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
    };

    //returns the object keys in an array
    const robotKeys = Object.keys(robot);

    console.log(robotKeys);
    //prints [ 'model', 'mobile', 'sentient', 'armor', 'energyLevel' ]

    //returns the object keys and values in an array
    const robotEntries = Object.entries(robot);

    console.log(robotEntries);
    //prints
    //[ [ 'model', 'SAL-1000' ],
    //[ 'mobile', true ],
    //[ 'sentient', false ],
    //[ 'armor', 'Steel-plated' ],
    //[ 'energyLevel', 75 ] ]

    //creates a new variable with the robot object and adds a new set of key/values
    const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot)

    console.log(newRobot);
    //prints 
    //{ laserBlaster: true,
    // voiceRecognition: true,
    // model: 'SAL-1000',
    //mobile: true,
    //sentient: false,
    // armor: 'Steel-plated',
    // energyLevel: 75 }


```

## Iterators

### .forEach()

The .forEach() method will execute the same code for each element of an array.
The below code calls the .forEach method on the groceries array. Here .forEach takes an argument of callback function (callback = passed as an argument into another function) and .forEach loops through the array and executed the callback function for each element.

```
    const groceries = ['bananas', 'sugar', 'cereales', 'bread']

    groceries.forEach(function(groceryItem) {
        console.log('-' + groceryItem)
    
    //prints - bananas, - sugar, -cereales, - bread
})

```

### .map()
When .map() is called on an array, it takes an argument of a callback function and returns a new array

```
    const numbers = [1, 2, 3, 4, 5]; 

    const bigNumbers = numbers.map(number => {
    return number * 10;
    });

    console.log(numbers); // Output: [1, 2, 3, 4, 5]
    console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]

```

If we want to retrieve a certain string element we can retrieve it with return word[0], this will return the string element at index 0.

```
    const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

    const secretMessage = animals.map(animals => {
    return animals[0]
    })

    //prints the first letter of each word => HelloWorld

```

### .filter()

Like .map(), .filter() returns a new array. However .filter() returns an array of elements after filtering out certain elements from the original array.

```
    const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

    const shortWords = words.filter(word => {
    return word.length < 6;
    });

    //returns an array of strings shorter than six characters

```

### .findIndex()

We can use the .findIndex() method to find the location of an element in an array. Calling the .findIndex() method will return the index of the first element that evaluates to true in the callback function.

```

    const jumbledNums = [123, 25, 78, 5, 9]; 

    const lessThanTen = jumbledNums.findIndex(num => {
    return num < 10;
    });

    console.log(lessThanTen)
    //returns the index of the first element in the array that is less than 10 => 3

    console.log(jumbledNums[3])
    //returns the value of the element at index 3 => 5


```

### .reduce()

The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array.

```

    const numbers = [1, 2, 4, 10];

    const summedNums = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
    })

    console.log(summedNums) // Output: 17


```

In the code above the first iteration takes the number 1 as the accumulator and the number 2 as the current value and returns the sum of 3. The loop continues to the second iteration, the accumulator is now 3 and the current value is 4, the returned valued is the sum of 3 + 4. The loop continues until it reaches the last elements and returns the value 17.

### .some()

Returns true if the element of an array passes the function condition, else prints false

```
    const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

    console.log(words.some((word) => {
    return word.length < 3;
    })); //prints false because no element in the array is under 3 characters

```

### .every()

The .every() method tests if all elements in an array pass the function test, returning true or false.

```

    const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise']
    const interestingWords = words.filter(word => {
    return word.length > 5
    })
    console.log(interestingWords.every((word) => { return word.length > 5 } ))
    //[prints true]

```

### Choosing the right iterator

Javascript has many iteration methods available on [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every). It is important to learn to choose the correct method for different scenarios.

```
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);

```

### String Methods

#### .trim()

Removes white space from the start of a string.

```

    function removeWhiteSpace(string) {
        // eg "    hello world    " => "hello world"
        return string.trim()
    }

```

#### .concat()

Joins strings together.

```

    function joinTwoStringsTogetherWithSpace(string1, string2) {
    // eg "hello", "world" => "hello world"
    return string1.concat(' ',string2)
    }

```

#### .split()

Splits a string at each instance of a character passed.

```

    function splitAString(string, character) {
        // given 2 args, split a string at each instance of the character 
        // eg "hello world", " " => ["hello", "world"]
        // eg "tee, dum, did, nee", "," => ["tee", "dum", "did", "nee"]
        return string.split(character)
    }

```

#### .includes()

Returns a boolean if a string contains a given character.

```

    function doesTheStringInclude(string, character) {
    //given 2 args, is the character in the string?
    // eg "haystack", "a" => true
    // eg "haystack", "z" => false
    return string.includes(character)
    }

```

#### .endsWith()

Returns a boolean if a string ends with a given character.

```

    function doesItEndWith(string, character) {
        //given 2 args, does the string end with the given character?
        // eg "foo", "b" => false
        // eg "foo", "o" => true
        return string.endsWith(character)
    }

```

#### .indexOf()

Returns the index of a given character.

```

    function whatIndexIsItAt(string, character) {
        // given 2 args, what is the index of the character
        // eg "hello world", "o" => 4
        // eg "foobar", "b" => 3
        return string.indexOf(character)
    }

```

#### .replace()

Changes all instances of a strings given character.

```

    function replaceCharacterInString(string, character1, character2) {
        // given 3 args, change all instances of character1 to character2 in string
        // eg "hello world", "o", "x" => "hellx wxrld"
        return string.replace(character1, character2)
    }

```

#### .repeat()

Repeats a string x amount of times.

```

    function repeatSomeAmountOfTimes(string, x) {
        // given 2 args, repeat the string x amount of times
        // eg "foo", 3 => "foofoofoo"
        return string.repeat(x)
    }

```

#### .substr()

Returns a string after the point of the given index.

```

    function extractPartOfAString(string, index) {
        // given 2 args, give back the string after the point of the index
        // eg "hello world", 4 => "o world"
        return string.substr(index)
    }

```

### Combining String Methods

#### First Letter Must Be Capitalized


```

    function firstLetterMustBeCapital(string) {
        // eg "hello world" => "Hello World"
        // eg "fOoBaR" => "FOoBaR"
        string1 = string.charAt(0).toUpperCase()
        string2 = string.substr(1)
        return string1.concat(string2)
    }

```

#### Only First Letter Capitalized


```

    function onlyFirstLetterCapitalized(string) {
        // eg "HELLO WORLD" => "Hello world"
        string1 = string.toLowerCase().substr(1)
        string2 = string.charAt(0).toUpperCase()
        return string2.concat(string1)
    }

```

#### Strip The Start and Capitalize


```

    function stripTheStartAndCapitalize(string) {
        // given 2 args, remove the whitespace from the only the start of the
        // string and capitalize the rest of the string
        // eg "   hello world" => "HELLO WORLD"
        return string.trimStart().toUpperCase()
    }

```

#### Capitalize A Given Character


```

    function capitalizeTheGivenCharacter(string, character) {
        // given 2 args, find the character in the string and capitalize it
        // eg "hello world", "r" => "hello woRld"
        return string.replace(character, character.toUpperCase())
    }

```







