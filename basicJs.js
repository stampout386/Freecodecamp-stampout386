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

myVar++;
let myVar = 11;

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

function testNotEqual(val) {
    if (val != 99) {
        return 'Not Equal';
    }
    return 'Equal';
}

testNotEqual(10);

function testStrictNotEqual(val) {
    if (val !== 17) {
        return 'Not Equal';
    }
    return 'Equal';
}

testStrictNotEqual(10);

function testGreaterThan(val) {
    if (val > 100) {
        return 'Over 100';
    }

    if (val > 10) {
        return 'Over 10';
    }

    return '10 or Under';
}

testGreaterThan(10);

function testGreaterOrEqual(val) {
    if (val >= 20) {
        return '20 or Over';
    }

    if (val >= 10) {
        return '10 or Over';
    }

    return 'Less than 10';
}

testGreaterOrEqual(10);

function testLessThan(val) {
    if (val < 25) {
        return 'Under 25';
    }

    if (val < 55) {
        return 'Under 55';
    }

    return '55 or Over';
}

testLessThan(10);

function testLessOrEqual(val) {
    if (val <= 12) {
        return 'Smaller Than or Equal to 12';
    }

    if (val <= 24) {
        return 'Smaller Than or Equal to 24';
    }

    return 'More Than 24';
}

testLessOrEqual(10);

function testLogicalAnd(val) {
    if (val >= 25 && val <= 50) {
        return 'Yes';
    }
    return 'No';
}

testLogicalAnd(10);

function testLogicalOr(val) {
    // Only change code below this line

    if (val < 10 || val > 20) {
        return 'Outside';
    }
    return 'Inside';
}

testLogicalOr(15);

function testElse(val) {
    let result = '';

    if (val > 5) {
        result = 'Bigger than 5';
    } else {
        result = '5 or Smaller';
    }

    return result;
}

testElse(4);

function testElseIf(val) {
    if (val > 10) {
        return 'Greater than 10';
    } else if (val < 5) {
        return 'Smaller than 5';
    } else {
        return 'Between 5 and 10';
    }
}

testElseIf(7);

function orderMyLogic(val) {
    if (val < 5) {
        return 'Less than 5';
    } else if (val < 10) {
        return 'Less than 10';
    } else {
        return 'Greater than or equal to 10';
    }
}

orderMyLogic(7);

function testSize(num) {
    if (num < 5) {
        return 'Tiny';
    } else if (num < 10) {
        return 'Small';
    } else if (num < 15) {
        return 'Medium';
    } else if (num < 20) {
        return 'Large';
    } else if (num >= 20) {
        return 'Huge';
    } else {
        return 'Change Me';
    }
}

testSize(7);

const names = [
    'Hole-in-one!',
    'Eagle',
    'Birdie',
    'Par',
    'Bogey',
    'Double Bogey',
    'Go Home!',
];

function golfScore(par, strokes) {
    if (strokes === 1) {
        return 'Hole-in-one!';
    } else if (strokes <= par - 2) {
        return 'Eagle';
    } else if (strokes === par - 1) {
        return 'Birdie';
    } else if (strokes === par) {
        return 'Par';
    } else if (strokes === par + 1) {
        return 'Bogey';
    } else if (strokes === par + 2) {
        return 'Double Bogey';
    } else if (strokes >= par + 3) {
        return 'Go Home!';
    } else {
        return 'Change Me';
    }
}

golfScore(5, 4);

function caseInSwitch(val) {
    let answer = '';
    switch (val) {
        case 1:
            answer = 'alpha';
            break;
        case 2:
            answer = 'beta';
            break;
        case 3:
            answer = 'gamma';
            break;
        case 4:
            answer = 'delta';
            break;
    }
    return answer;
}

caseInSwitch(1);

function switchOfStuff(val) {
    let answer = '';
    switch (val) {
        case 'a':
            answer = 'apple';
            break;
        case 'b':
            answer = 'bird';
            break;
        case 'c':
            answer = 'cat';
            break;
        default:
            answer = 'stuff';
            break;
    }
    return answer;
}

function sequentialSizes(val) {
    let answer = '';
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = 'Low';
            break;
        case 4:
        case 5:
        case 6:
            answer = 'Mid';
            break;
        case 7:
        case 8:
        case 9:
            answer = 'High';
            break;
    }
    return answer;
}

function chainToSwitch(val) {
    let answer = '';
    switch (val) {
        case 'bob':
            answer = 'Marley';
            break;
        case 42:
            answer = 'The Answer';
            break;
        case 1:
            answer = 'There is no #1';
            break;
        case 99:
            answer = 'Missed me by this much!';
            break;
        case 7:
            answer = 'Ate Nine';
            break;
    }
    return answer;
}

function isLess(a, b) {
    return a < b;
}

isLess(10, 15);

function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);

let count = 0;

function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            if (count > 0) {
                return count + ' ' + 'Bet';
            } else {
                return count + ' ' + 'Hold';
            }
        case 7:
        case 8:
        case 9:
            if (count > 0) {
                return count + ' ' + 'Bet';
            } else {
                return count + ' ' + 'Hold';
            }
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            if (count > 0) {
                return count + ' ' + 'Bet';
            } else {
                return count + ' ' + 'Hold';
            }
    }
    return 'Change Me';
}

const myDog = {
    name: 'Paffi',
    legs: 4,
    tails: 1,
    friends: ['peoples', 'me'],
};

const testObj = {
    hat: 'ballcap',
    shirt: 'jersey',
    shoes: 'cleats',
};

const hatValue = testObj.hat;
const shirtValue = testObj.shirt;

const testObj = {
    'an entree': 'hamburger',
    'my side': 'veggies',
    'the drink': 'water',
};

const entreeValue = testObj['an entree'];
const drinkValue = testObj['the drink'];

const testObj = {
    12: 'Namath',
    16: 'Montana',
    19: 'Unitas',
};

const playerNumber = 16;
const player = testObj[playerNumber];

const myDog = {
    name: 'Coder',
    legs: 4,
    tails: 1,
    friends: ['freeCodeCamp Campers'],
};

myDog.name = 'Happy Coder';

const myDog = {
    name: 'Happy Coder',
    legs: 4,
    tails: 1,
    friends: ['freeCodeCamp Campers'],
};

myDog.bark = 'woof';

const myDog = {
    name: 'Happy Coder',
    legs: 4,
    tails: 1,
    friends: ['freeCodeCamp Campers'],
    bark: 'woof',
};

delete myDog.tails;

function phoneticLookup(val) {
    let result = '';
    let lookup = {
        alpha: 'Adams',
        bravo: 'Boston',
        charlie: 'Chicago',
        delta: 'Denver',
        echo: 'Easy',
        foxtrot: 'Frank',
    };
    result = lookup[val];
    return result;
}

phoneticLookup('charlie');

function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return 'Not Found';
    }
}

const myStorage = {
    car: {
        inside: {
            'glove box': 'maps',
            'passenger seat': 'crumbs',
        },
        outside: {
            trunk: 'jack',
        },
    },
};

const gloveBoxContents = myStorage.car.inside['glove box'];

const myPlants = [
    {
        type: 'flowers',
        list: ['rose', 'tulip', 'dandelion'],
    },
    {
        type: 'trees',
        list: ['fir', 'pine', 'birch'],
    },
];

const secondTree = myPlants[1].list[1];

if (value === '') {
    delete records[id][prop];
} else if (prop === 'tracks') {
    records[id][prop] = records[id][prop] || [];
    records[id][prop].push(value);
} else {
    records[id][prop] = value;
}
return records;

function pushArr() {
    const myArray = [];
    let i = 5;
    while (i > -1) {
        myArray.push(i);
        i--;
    }
}

function pushArr2() {
    const myArray = [];
    for (let i = 1; i < 6; i++) {
        myArray.push(i);
    }
    console.log(myArray);
}

pushArr2();

const myArray = [];
for (let i = 1; i < 10; i += 2) {
    myArray.push(i);
    console.log(myArray);
}

const myArray = [];
for (let i = 9; i > 0; i -= 2) {
    myArray.push(i);
}

const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];
}

function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr[i].length; k++) {
            product *= arr[i][k];
        }
    }
    return product;
}

multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7],
]);

let myArray = [];
let i = 10;

do {
    myArray.push(i);
    i++;
} while (i <= 10);

function sum(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
}

// Setup
const contacts = [
    {
        firstName: 'Akira',
        lastName: 'Laine',
        number: '0543236543',
        likes: ['Pizza', 'Coding', 'Brownie Points'],
    },
    {
        firstName: 'Harry',
        lastName: 'Potter',
        number: '0994372684',
        likes: ['Hogwarts', 'Magic', 'Hagrid'],
    },
    {
        firstName: 'Sherlock',
        lastName: 'Holmes',
        number: '0487345643',
        likes: ['Intriguing Cases', 'Violin'],
    },
    {
        firstName: 'Kristian',
        lastName: 'Vos',
        number: 'unknown',
        likes: ['JavaScript', 'Gaming', 'Foxes'],
    },
];

function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (name == contacts[i].firstName) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            } else {
                return 'No such property';
            }
        }
    }
    return 'No such contact';
}

function randomFraction() {
    let random = Math.random();

    return random;
}
function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
function convertToInteger(str) {
    return parseInt(str);
}

convertToInteger('56');

function convertToInteger(str) {
    return parseInt(str, 2);
}

convertToInteger('10011');

function checkEqual(a, b) {
    return a === b ? 'Equal' : 'Not Equal';
}

checkEqual(1, 2);

function checkSign(num) {
    return num === 0 ? 'zero' : num > 0 ? 'positive' : 'negative';
}

checkSign(10);

function countdown(n) {
    return n < 1 ? [] : [n].concat(countdown(n - 1));
}

function rangeOfNumbers(startNum, endNum) {
    return startNum === endNum
        ? [startNum]
        : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}
