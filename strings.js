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
\b, \f, \v - backspace, form feed, vertical tab */