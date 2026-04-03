'use strict';

// 🌍 1. this in Global Scope
// In browsers (non‑strict mode): this refers to the window object.
// In Node.js: this refers to an empty object ({}) at the top level.

console.log(this); // window (browser), {} (Node)

// 📦 2. this Inside a Function
// Non‑strict mode: defaults to the global object (window in browsers).
// Strict mode: this is undefined.

function test() {
  console.log(this);
}
test(); // window (non-strict), undefined (strict)

// ⚖️ 3. Strict Mode (this substitution)
// In strict mode, JavaScript does not substitute this with the global object.
// If a function is called without a context, this stays undefined.

// 🔗 4. this Depends on How Function is Called
// If called standalone → this is global (or undefined in strict mode). eg. test() function
// If called as a method of an object → this is that object.

// 🏠 5. this Inside an Object’s Method
// Refers to the object that owns the method.
const obj = {
  name: "Alice",
  greet: function() {
    console.log(this.name); // this inside obj method is obj itself
  }
};
obj.greet(); // "Alice"

// 🔧 6. call, apply, bind
// These methods let you explicitly set this.

function sayHello() {
  console.log(this.name);
}
const person = { name: "Bob" };

sayHello.call(person);  // "Bob"
sayHello.apply(person); // "Bob"
const bound = sayHello.bind(person);
bound();                // "Bob"

// 🏹 7. this Inside Arrow Functions
// Arrow functions don’t have their own this.
// They capture this from the lexical scope (the surrounding context).

const obj1 = {
  name: "Carol",
  arrow: () => console.log(this.name)
};
obj1.arrow(); // undefined, because `this` is from global scope

// 🏹🏹 8. Nested Arrow Functions
// Each arrow function inherits this from its enclosing scope.
// Useful for callbacks where you don’t want this to change.

// 🖼️ 9. this Inside the DOM
// In event handlers, this refers to the element that triggered the event.

document.querySelector("button").addEventListener("click", function() {
  console.log(this); // the button element
});

// But if you use an arrow function, this comes from the outer scope, not the element.

// ✅ Summary Table
// Context	                 Value of this
// Global scope (browser)	 window
// Global scope (Node)	     {}
// Function (non-strict)	 window
// Function (strict)	     undefined
// Object method	         The object itself
// call / apply / bind	     Explicitly set value
// Arrow function	         Lexical this (outer scope)
// DOM event handler	     The element (if normal function)

// So, this is not fixed — it depends entirely on how the function is called and whether you’re in strict mode or using arrow functions.