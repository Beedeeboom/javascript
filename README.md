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

