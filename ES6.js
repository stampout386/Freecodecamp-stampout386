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
