/* Three types of quotes:
'single quotes', "double quotes", `backticks` 
backticks allow embedded expressions into the string by wrapping ${} */
function sum(a, b) {
  return a + b;
}
console.log(`1 + 2 = ${sum(1, 2)}.`);

// backticks allow a string to span multiple lines
let guestList = `Guests:
* John
* Pete
* Mary
`;
console.log(guestList);

// special characters with single and double quotes \n (new line)
let newGuestList = "Guests:\n* Raydan\n* Naslen\n* Gohan";
console.log(newGuestList);

let str1 = "Hello\nWorld";
let str2 = `Hello
World`;
console.log(str1 === str2);

/* Other special characters:
\n - new line
\r - in windows used as a combination \r\n represents a new break
\' \" \` - quotes
\\ - backslash
\t - tab
\b, \f, \v - backspace, form feed, vertical tab 
\ - escape character*/
console.log('I\'m the Walrus!'); // using backslash
console.log("I'm the Walrus!");

// String length - the length property has the string length
console.log(`My\n`.length); // \n is a single 'special' character, counts as 1

// Accessing characters - use [pos] or call method str.at(pos), starts at 0
let str = `Hello`;

// first character
console.log(str[0]);
console.log(str.at(0));

// last character
console.log(str[str.length - 1]);
console.log(str.at(-1));

// traverse a string backwards
for (let i = str.length - 1; i >= 0; i--) {
  console.log(str[i]);
}

// can use for..of to iterate over characters
for (let char of 'Hello') {
  console.log(char);
}

// Strings are immutable - Strings can't be changed in Javascript
let str3 = 'Hi';
str3[0] = 'h'; // error
console.log(str3[0]); // still shows H

// usual workaround is to create a whole new string and assign it to str
let str4 = 'Hi'
str4 = 'h' + str4[1];
console.log(str4);

// Changing the case - Methods toLowerCase() and toUpperCase() change case:
console.log('Interface'.toUpperCase());
console.log('Interface'.toLowerCase());
console.log('Interface'[0].toLowerCase()); // only a single character