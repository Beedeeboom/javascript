//String Methods

function allCapitalLetters(string) {
    // eg "hello world" => "HELLO WORLD"
    return string.toUpperCase()
}

function allLowercaseLetters(string) {
    // eg "HELLO WORLD" => "hello world"
    return string.toLowerCase()
}

function giveMeTheRightCharacter(string, index) {
    // given 2 args, return the character in a string at the index
    // eg "fooBar", 3 => "B"
    return string.charAt(index)  
}

function removeWhiteSpace(string) {
    // eg "    hello world    " => "hello world"
    return string.trim()
}

function joinTwoStringsTogetherWithSpace(string1, string2) {
    // eg "hello", "world" => "hello world"
    return string1.concat(' ',string2)
}

function splitAString(string, character) {
    // given 2 args, split a string at each instance of the character 
    // eg "hello world", " " => ["hello", "world"]
    // eg "tee, dum, did, nee", "," => ["tee", "dum", "did", "nee"]
    return string.split(character)
}

function doesItEndWith(string, character) {
    //given 2 args, does the string end with the given character?
    // eg "foo", "b" => false
    // eg "foo", "o" => true
    return string.endsWith(character)
}

function whatIndexIsItAt(string, character) {
    // given 2 args, what is the index of the character
    // eg "hello world", "o" => 4
    // eg "foobar", "b" => 3
    return string.indexOf(character)
}

function replaceCharacterInString(string, character1, character2) {
    // given 3 args, change all instances of character1 to character2 in string
    // eg "hello world", "o", "x" => "hellx wxrld"
    return string.replace(character1, character2)
}

function repeatSomeAmountOfTimes(string, x) {
    // given 2 args, repeat the string x amount of times
    // eg "foo", 3 => "foofoofoo"
    return string.repeat(x)
}

function extractPartOfAString(string, index) {
    // given 2 args, give back the string after the point of the index
    // eg "hello world", 4 => "o world"
    return string.substr(index)
}

function firstLetterMustBeCapital(string) {
    // eg "hello world" => "Hello World"
    // eg "fOoBaR" => "FOoBaR"
    string1 = string.charAt(0).toUpperCase()
    string2 = string.substr(1)
    return string1.concat(string2)
}

function onlyFirstLetterCapitalized(string) {
    // eg "HELLO WORLD" => "Hello world"
    string1 = string.toLowerCase().substr(1)
    string2 = string.charAt(0).toUpperCase()
    return string2.concat(string1)
}

function stripTheStartAndCapitalize(string) {
    // given 2 args, remove the whitespace from the only the start of the
    // string and capitalize the rest of the string
    // eg "   hello world" => "HELLO WORLD"
    return string.trimStart().toUpperCase()
}

function capitalizeTheGivenCharacter(string, character) {
    // given 2 args, find the character in the string and capitalize it
    // eg "hello world", "r" => "hello woRld"
    return string.replace(character, character.toUpperCase())
}
