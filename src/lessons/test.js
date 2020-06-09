Array.prototype.contains = function(v) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] === v) return true;
    }
    return false;
  };
  
Array.prototype.unique = function() {
var arr = [];
for (var i = 0; i < this.length; i++) {
    if (!arr.contains(this[i])) {
    arr.push(this[i]);
    }
}
return arr;
}

var duplicates = [1, 3, 4, 2, 1, 2, 3, 8];
var uniques = duplicates.unique(); // result = [1,3,4,2,8]

console.log(uniques)

function onlyFirstLetterCapitalized(string) {
    // eg "HELLO WORLD" => "Hello world"
    string1 = string.toLowerCase().substr(1)
    string2 = string.charAt(0).toUpperCase()
    return string2.concat(string1)
}

console.log(onlyFirstLetterCapitalized("HELLO WORLD"))

string = '  hello world'
console.log(string.trimStart().toUpperCase())

function capitalizeTheGivenCharacter(string, character) {
    // given 2 args, find the character in the string and capitalize it
    // eg "hello world", "r" => "hello woRld"
    return string.replace(character, character.toUpperCase())
}

console.log(capitalizeTheGivenCharacter('hello world', "r"))

function firstLetterMustBeCapital(string) {
    // eg "hello world" => "Hello World"
    // eg "fOoBaR" => "FOoBaR"
    string1 = string.charAt(0).toUpperCase()
    string2 = string.substr(1)
    return string1.concat(string2)
}

console.log(firstLetterMustBeCapital('foo bar'))