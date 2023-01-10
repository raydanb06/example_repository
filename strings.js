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

// Searching for a substring
/* str.indexOf(substr, pos) - looks for substr in str from starting position
pos, and returns the position where the match was found or -1 if 
nothing can be found */
let str5 = 'Widget with id';
console.log(str5.indexOf('Widget'));
console.log(str5.indexOf('widget'));
console.log(str5.indexOf('id'));
console.log(str5.indexOf('id', 2));

let str6 = 'As sly as a fox, as strong as an ox.';
let target = 'as';
let pos = 0;
while (true) {
  let foundPos = str6.indexOf(target, pos);
  if (foundPos === -1) break;

  console.log(`Found at ${foundPos}`);
  pos = foundPos+1;
}

let pos2 = -1;
while ((pos2 = str6.indexOf(target, pos2 + 1)) !== -1) {
  console.log(pos2);
}

/* str.lastIndexOf(substr, position) - searches from the end of a 
string to the beginning, It would list the occurrences in the reverse order */

let str7 = "Widget with id";

if (str7.indexOf("Widget")) {
    console.log("We found it");
    // doesn't work! indexOf returns 0 and doesn't enter the loop
}

if (str7.indexOf("Widget") !== -1) {
  console.log("We found it"); // works now!
}

// includes, startsWith, endsWith
/* str.inlcudes(substr, pos) returns true/false depending on whether str
contains substr within, use to test for match but don't need position */
console.log("Widget with id".includes("Widget"));
console.log("Hello".includes("Bye"));
console.log("Widget".includes("id"));
console.log("Widget".includes("id", 3));

/* str.startsWith and str.endsWith do exactly what they say */
console.log("Widget".startsWith("Wid"));
console.log("Widget".endsWith("get"));

// Getting a substring - substring, substr, slice
/* str.slice(start, end) returns the part of the string from start 
but not including end*/
let str8 = 'stringify';
console.log(str8.slice(0, 5));
console.log(str8.slice(0, 1));
console.log(str8.slice(2)); // no second argument, goes to end of str8ing
console.log(str8.slice(-4, -1)); // no second argument, goes to end of string

/* str.substring(start, end) returns the part of the string between
start and end but not including end, allows start to be greater than end,
negatiave arguments are not supported (unlike slice), they are treated as 0 */
console.log(str8.substring(2, 6));
console.log(str8.substring(6, 2));
console.log(str8.slice(2, 6)); // same as substring
console.log(str8.slice(6, 2)); // '' an empty string

/* str.substr(start, length) returns the part of the string from start, with 
the given length, this allows us to specify the length instead of
the ending position*/
console.log(str8.substr(2, 4));
console.log(str8.substr(-4, 2));

// Comparing Strings
// a lowercase letter is always greater than the uppercase
console.log('a' > 'Z');

// letters with diacritical marks are 'out of order'
console.log('Österreich' > 'Zealand');

/* str.codePointAt(pos) returns a decimal number representing the code
for the character at position pos */
console.log('Z'.codePointAt(0));
console.log('Z'.codePointAt(0));
console.log('z'.codePointAt(0).toString(16));

/* String.fromCodePoint(code) creates a character by its numeric code */
console.log(String.fromCodePoint(90));
console.log(String.fromCodePoint(0x5a));

let str9 = '';
for (let i = 65; i <= 220; i++) {
  str9 += String.fromCodePoint(i);
}
console.log(str9);

// Correct comparisons
/* str.localeCompare(str2) returns an integer indicating whether str is less, 
equal or greater than str2 according to the language rules:
returns a negative number if str is less than str 2
returns a positive number if str is greater than str 2
returns 0 if they are equivalent */
console.log('Österreich'.localeCompare('Zealand'));

// Task 1 - Uppercase the first character
function ucFirst(str) {
  if (!str) {
    return str;
  }
  return str[0].toUpperCase() + str.slice(1);
}
let newStr = ucFirst('john')
console.log(newStr);