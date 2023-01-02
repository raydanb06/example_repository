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
