// Declaration

let decArray1 = new Array();
let decArray2 = [];

let fruits = ['apple', 'orange', 'plum'];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
fruits[2] = 'pear'; // replace an element
fruits[3] = 'lemon'; // add an element
console.log(fruits);
console.log(fruits.length);

// An array can store elements of any type
let arr1 = ['apple', {name: 'john'}, true, function() {console.log('hello')}];
console.log(arr1[1].name);
arr1[3](); // () at end of array index grabs function at index [n] and runs it

// Trailing comma notation
/*
let fruits = [
  'apple',
  'orange',
  'plum',
]
*/

// Get last element with 'at'
console.log(fruits[fruits.length - 1]);
console.log(fruits.at(-1));

// Methods pop/push, shift/unshift
/* 
push - appends an element to the end
shift - get an element from the beginning, advancing the queue, so that the 2nd
element becomes the 1st
pop - takes an element from the end
*/

// pop - extracts the last element of the array and returns it
fruits.pop();
console.log(fruits);

// push - append the element to the end of the array
fruits.push('lemon');
console.log(fruits);

// shift - extracts the first element of the array and returns it
fruits.shift();
console.log(fruits);

// unshift - add the element to the beginning of the array
fruits.unshift('apple');
console.log(fruits);

// push and unshift can add multiple elements at once
fruits.push('pineapple', 'guava');
console.log(fruits);
fruits.unshift('mango', 'berry');
console.log(fruits);

 // internals
 /*
 - square brackets used to access a property arr[0] comes from object syntax
 - essentially the same as obj[key], where arr is the obj, while #'s are keys
 - array provides special methods to work with ordered collections of data
 */

 // copied by reference
 let newFruits = ['banana'];
 let arr2 = newFruits;

 console.log( arr2 === newFruits);
 arr2.push('pear');
 console.log(newFruits);