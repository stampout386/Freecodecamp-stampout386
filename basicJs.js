var a;
a = 7;

var a;
a = 7;
var b;
b = a;

var a = 9;

var myFirstName = 'Mikhail';
var myLastName = 'Shestak';

// Only change code below this line
var a;
var b;
var c;
a = 5;
b = 10;
c = 'I am a';
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + ' String!';

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = 'A String';
titleCaseOver = 9000;

let catName = 'Oliver';
let catSound = 'Meow!';

const FCC = 'freeCodeCamp'; // Change this line
let fact = 'is cool!'; // Change this line
fact = 'is awesome!';
console.log(FCC, fact); // Change this line

const sum = 10 + 10;
const difference = 45 - 33;
const product = 8 * 10;
const quotient = 66 / 33;

let myVar = 87;

// Only change code below this line
myVar++;
let myVar = 11;

// Only change code below this line
myVar--;

const ourDecimal = 5.7;
let myDecimal = 6.8;
// Only change code below this line
const product = 2.0 * 2.5;
const quotient = 4.4 / 2.0;

const remainder = 11 % 3;

let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

const myStr = 'I am a "double quoted" string inside "double quotes".';
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

const myName = 'Mikhail';
const myStr = 'My name is ' + myName + 'and I am well!';

const someAdjective = 'great';
let myStr = 'Learning to code is ';
myStr += someAdjective;

// Setup
let lastNameLength = 0;
const lastName = 'Lovelace';

// Only change code below this line
lastNameLength = lastName.length;

// Setup
let firstLetterOfLastName = '';
const lastName = 'Lovelace';

// Only change code below this line
firstLetterOfLastName = lastName[0];

// Setup
let myStr = 'Jello World';

// Only change code below this line
myStr = 'Hello World'; // Change this line
// Only change code above this line

// Setup
const lastName = 'Lovelace';

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line

// Setup
const lastName = 'Lovelace';

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

// Setup
const lastName = 'Lovelace';

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

const myNoun = 'dog';
const myAdjective = 'big';
const myVerb = 'ran';
const myAdverb = 'quickly';

// Only change code below this line
const wordBlanks = myNoun + ' ' + myAdjective + ' ' + myVerb + ' ' + myAdverb; // Change this line
// Only change code above this line
const myArray = ['hello', 1];

const myArray = [
    ['Bulls', 23],
    ['White Sox', 45],
];

const myArray = [50, 60, 70];

let myData = myArray[0];

// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];

// Setup
const myArray = [
    ['John', 23],
    ['cat', 2],
];

// Only change code below this line
myArray.push(['dog', 3]);

const myArray = [
    ['John', 23],
    ['cat', 2],
];

// Only change code below this line
const removedFromMyArray = myArray.pop();
const myArray = [
    ['John', 23],
    ['dog', 3],
];
myArray.shift();

// Only change code below this line
myArray.unshift(['Paul', 35]);

const myList = [
    ['bred', 2],
    ['chokolate', 4],
    ['tea', 1],
    ['coffee', 1],
    ['milk', 2],
];

let petString = 'James has a pet cat.';
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

let myString = 'freeCodeCamp';
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

function reusableFunction() {
    console.log('Hi World');
}

reusableFunction();

function functionWithArgs(a, b) {
    console.log(a + b);
}
functionWithArgs(3, 5);

function timesFive(a) {
    return a * 5;
}

function fun1() {
    oopsGlobal = 5;
}
let myGlobal = 10;
// Only change code above this line

function fun2() {
    var output = '';
    if (typeof myGlobal != 'undefined') {
        output += 'myGlobal: ' + myGlobal;
    }
    if (typeof oopsGlobal != 'undefined') {
        output += ' oopsGlobal: ' + oopsGlobal;
    }
    console.log(output);
}

const outerWear = 'T-Shirt';

function myOutfit() {
    // Only change code below this line
    let outerWear = 'sweater';
    // Only change code above this line
    return outerWear;
}

myOutfit();

let sum = 0;

function addThree() {
    sum = sum + 3;
}

function addFive() {
    sum = sum + 5;
}

addThree();
addFive();

let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7);

function nextInLine(arr, item) {
    arr.push(item);
    let a = arr.shift();
    return a;
}

function welcomeToBooleans() {
    return true;
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return 'Yes, that was true';
    }
    return 'No, that was false';
}

function testEqual(val) {
    if (val == 12) {
        return 'Equal';
    }
    return 'Not Equal';
}

testEqual(10);

function testStrict(val) {
    if (val === 7) {
        return 'Equal';
    }
    return 'Not Equal';
}

testStrict(10);

function compareEquality(a, b) {
    if (a === b) {
        // Change this line
        return 'Equal';
    }
    return 'Not Equal';
}

compareEquality(10, '10');
