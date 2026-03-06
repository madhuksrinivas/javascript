// Different types of functions in JavaScript with clear examples.

// 1. Function Declaration
// Defined with the function keyword.
// Hoisted (you can call them before they’re defined).
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("Alice")); // Hello, Alice

// 2. Function Expression (Anonymous Function)
// Assigned to a variable.
// Not hoisted.
// Often anonymous (no name).
const greet1 = function(name) {
  return `Hello, ${name}`;
};
console.log(greet1("Bob")); // Hello, Bob

// 3. Named Function Expression
// Similar to anonymous function expressions, but the function has a name.
// Useful for recursion or debugging.
const factorial = function fact(n) {
  return n <= 1 ? 1 : n * fact(n - 1);
};
console.log(factorial(5)); // 120

// 4. Arrow Functions
// Shorter syntax.
// Do not bind their own this (lexical this).
const square = (x) => x * x;
console.log(square(4)); // 16

// 5. Immediately Invoked Function Expression (IIFE)
// Runs as soon as it’s defined.
(function() {
  console.log("IIFE runs immediately!");
})();

// 6. Constructor Functions
// Used with new to create objects.
function Person(name) {
  this.name = name;
}
const p = new Person("Charlie");
console.log(p.name); // Charlie

// 7. Generator Functions
// Defined with function*.
// Can pause and resume execution using yield.
function* countUp() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = countUp();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2

// 8. Async Functions
// Return a Promise.
// Use await inside for asynchronous code.
async function fetchData() {
  return "Data loaded";
}
fetchData().then(console.log); // Data loaded

// ✅ Summary:
// Declaration → function greet() {}
// Anonymous Expression → const f = function() {}
// Named Expression → const f = function name() {}
// Arrow → const f = () => {}
// IIFE → (function(){})()
// Constructor → function Person() {}
// Generator → function* gen() {}
// Async → async function f() {}