let john = {
  name: "John",
  sayHi: function() {
    console.log("Hi buddy!");
  }
};

john.sayHi(); // Hi buddy!

// Can I add a string property?
// importance: 5
// Consider the following code:

let str = "Hello";

str.test = 5;

console.log(str.test);