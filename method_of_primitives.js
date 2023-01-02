let john = {
  name: "John",
  sayHi: function() {
    alert("Hi buddy!");
  }
};

john.sayHi(); // Hi buddy!

// Can I add a string property?
// importance: 5
// Consider the following code:

let str = "Hello";

str.test = 5;

alert(str.test);