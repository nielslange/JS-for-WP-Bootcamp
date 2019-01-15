// Week 1: JS Language Fundamentals

// 1. Create variables of different data types
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

var varBoolean = true;
var varNull = null;
var varUndefined;
var varNumber = 23.5;
var varString = 'JS for WP Bootcamp';
var varSymbol = Symbol('bootcamp');
var varObject = {firstName:'Niels', lastName:'Lange'};

console.log(varBoolean);
console.log(varNull);
console.log(varUndefined);
console.log(varNumber);
console.log(varString);
console.log(varSymbol);
console.log(varObject);

// 2. Write functions with parameters
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

function add(firstAddend, secondAddend) {
    var sum = firstAddend + secondAddend;
    return sum;
}

function substract(minuend, subtrahend) {
    var difference = minuend - subtrahend;
    return difference;
}

function multiply(firstFactor, secondFactor) {
    var product = firstFactor * secondFactor;
    return product;
}

function divide(dividend, divisor) {
    var quotient = dividend / divisor;
    return quotient;
}

function mod(dividend, divisor) {
    var remainder = dividend % divisor;
    return remainder;
}

function pow(base, exponent) {
    var power = base ** exponent;
    return power;
}

console.log(add(2, 3));
console.log(substract(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));
console.log(mod(2, 3));
console.log(pow(2, 3));

// 3. Create objects with properties and methods