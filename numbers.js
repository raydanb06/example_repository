// Appending 0's to the end or beginning of a number
let billion = 1e9;
console.log(7.3e9);

if (billion === 1e9) {
  console.log(`1e9 is equal to ${billion}`);
} else {
  console.log(`1e9 does not equal ${billion}`);
}

let mcs = 0.000001;

if (mcs === 1e-6) {
  console.log(`1e-6 is equal to ${mcs}`);
} else {
  console.log(`1e-6 does not equal ${mcs}`)
}

// Hex
console.log(`Hex number: ${0xff}`);
console.log(`Hex number (capital): ${0xFF}`); // Case doesn't matter

// Binary
console.log(`Binary number: ${0b11111111}`);

// Octal
console.log(`Octal number: ${0o377}`);

/* toString(base): The method num.toString(base) 
returns a string representation of num in the 
numeral system with the given base*/
let num = 255;

console.log(`.toString no base given: ${num.toString()}`);
console.log(`.toString base 16 given (hex): ${num.toString(16)}`);
console.log(`.toString base 2 given (bitwise): ${num.toString(2)}`);
// two dots to call a method directly on a number
console.log(`..toString base 36 given (numeral): ${123456..toString(36)}`);
// parenthesis to call a method dirctly on a number
console.log(`().toString base 36 given (numeral): ${(123456).toString(36)}`);

// Rounding
// Math.floor rounds down
console.log(`Math.floor of 3.1: ${Math.floor(3.1)}.
Math.floor of -1.1: ${Math.floor(-1.1)}.`);

// Math.ceil rounds up
console.log(`Math.ceil of 3.1: ${Math.ceil(3.1)}.
Math.ceil of -1.1: ${Math.ceil(-1.1)}.`);

/* Math.round rounds to the nearest integer, 
if .5 rounds up, if negative rounds up*/
console.log(`Math.round of 3.1: ${Math.round(3.1)}.
Math.round of -1.6: ${Math.round(-1.1)}.
Math.round of 3.5: ${Math.round(3.5)}.`);

// Math.trunc removes anything after the decimal point without rounding
console.log(`Math.trunc of 3.1: ${Math.trunc(3.1)}.
Math.trunc of -1.6: ${Math.trunc(-1.1)}.
Math.trunc of 3.5: ${Math.trunc(3.5)}.`);

/*Round to the n-th digit?
Multiply-and-Divide: multiply by 100, call round function, divide it back.
Or use the .toFixed(n): rounds the number to the n digits after the point and
returns the string representation of the result.*/
console.log(`Multiply-and-Divide: ${Math.round(1.23456 * 100) / 100}`);
console.log(`(1.23456).toFixed(1): ${(1.23456).toFixed(1)}`);
console.log(`(1.23456).toFixed(2): ${(1.23456).toFixed(2)}`);
// .toFixed(n) rounds like Math.round
console.log(`(1.23456).toFixed(4): ${(1.23456).toFixed(4)}`);

// Imprecise Calculations
console.log(1e500); //infinity
let sum = 0.1 + 0.2;
console.log(sum);
console.log(+sum.toFixed(2));

/* parseInt and parseFloat
Extracts a numeric value.
Reads a number from a string until they can't.
parseInt returns an integer and parseFloat returns a floating-point number. */
console.log(parseInt('100px'));
console.log(parseFloat('12.5em'));
console.log(parseInt('12.3'));
console.log(parseFloat('12.3.4'));
console.log(parseInt('a123'));
// parseInt second parameter specifies the base of the numeral system
console.log(parseInt('0xff', 16));
console.log(parseInt('ff', 16));
console.log(parseInt('2n9c', 36));

/* Other math functions
Math.random returns a number from 0 - 1, not including 1 */
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

/* Math.max(a, b, c, ...) and Math.min(a, b, c, ....)
Returns the greatest and smallest from the arbitrary number of arguments*/
console.log(Math.max(3, 5, -10, 0, 1));
console.log(Math.min(1, 2));

/* Math.pow(n, power)
Returns n raised to the given power. */
console.log(Math.pow(2, 10));

// Task 1: Sum numbers from the visitor
// alert('Choose 2 numbers to add.');
// let num1 = +prompt('Choose the first number to add', 'Integer');
// let num2 = +prompt('Choose the second number to add', 'Integer')
// console.log(num1 + num2);

// Task 2: A random integer from min to max
// function randomInteger(min, max) {
//   // here rand is from min to (max+1)
//   let rand = min + Math.random() * (max + 1 - min);
//   return Math.floor(rand);
// }

// alert( randomInteger(1, 3) );