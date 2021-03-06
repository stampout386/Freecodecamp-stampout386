function checkScope() {
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}
const s = [5, 7, 2];
function editInPlace() {
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();

function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14,
    };
    Object.freeze(MATH_CONSTANTS);
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

const magic = () => new Date();

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

const increment = (number, value = 1) => number + value;

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
};

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];

console.log(arr2);

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80,
};
const {today, tomorrow} = HIGH_TEMPERATURES;

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80,
};
const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;

const LOCAL_FORECAST = {
    yesterday: {low: 61, high: 75},
    today: {low: 64, high: 77},
    tomorrow: {low: 68, high: 80},
};
const {
    today: {low: lowToday, high: highToday},
} = LOCAL_FORECAST;

let a = 8,
    b = 6;
[a, b] = [b, a];

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    const [a, b, ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85,
};
const half = ({max, min}) => (max + min) / 2.0;

const result = {
    success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
    failure: ['no-var', 'var-on-top', 'linebreak'],
    skipped: ['no-extra-semi', 'no-dup-keys'],
};
function makeList(arr) {
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return failureItems;
}

const failuresList = makeList(result.failure);

const createPerson = (name, age, gender) => ({name, age, gender});

const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    },
};
bicycle.setGear(3);
console.log(bicycle.gear);

class Vegetable {
    constructor(name) {
        this.name = name;
    }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name);

class Thermostat {
    constructor(temp) {
        this._temp = temp;
    }
    get temperature() {
        return (5 / 9) * (this._temp - 32);
    }

    set temperature(c) {
        this._temp = (c * 9.0) / 5 + 32;
    }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

{
    /* <html>
  <body>
<script type ='module' src='index.js'></script>
  </body>
</html> */
}

const uppercaseString = (string) => {
    return string.toUpperCase();
};

const lowercaseString = (string) => {
    return string.toLowerCase();
};

export {uppercaseString, lowercaseString};

import {uppercaseString, lowercaseString} from './string_functions.js';

uppercaseString('hello');
lowercaseString('WORLD!');

import * as stringFunctions from './string_functions.js';

stringFunctions.uppercaseString('hello');
stringFunctions.lowercaseString('WORLD!');

export default function subtract(x, y) {
    return x - y;
}

import subtract from './math_functions.js';

subtract(7, 4);

const makeServerRequest = new Promise((resolve, reject) => {});

const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer;

    if (responseFromServer) {
        resolve('We got the data');
    } else {
        reject('Data not received');
    }
});
makeServerRequest.then((result) => console.log(result));
makeServerRequest.catch((error) => {
    console.log(error);
});
