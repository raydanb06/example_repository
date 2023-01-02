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

/* toString(base): The method num.toString(base) returns a string representation of num in the numeral system with the given base.*/
let num = 255;

console.log(`.toString no base given: ${num.toString()}`);
console.log(`.toString base 16 given (hex): ${num.toString(16)}`);
console.log(`.toString base 2 given (bitwise): ${num.toString(2)}`);
// two dots to call a method directly on a number
console.log(`..toString base 36 given (numeral): ${123456..toString(36)}`);
// parenthesis to call a method dirctly on a number
console.log(`().toString base 36 given (numeral): ${(123456).toString(36)}`);

