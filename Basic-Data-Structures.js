let yourArray = [1, 'sdss', true, false, 45, 'hz'];

let myArray = ['a', 'b', 'c', 'd'];
myArray[1] = 23;
console.log(myArray);

function mixedNumbers(arr) {
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
