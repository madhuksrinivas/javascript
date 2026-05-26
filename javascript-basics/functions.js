// PART 4: FUNCTIONS

// 4.1 Function Declarations
function greet(name) {
  return `Hello, ${name}!`;
}

console.log("Function declaration example:", greet("Alice"));

// Function with default parameters
function greetWithDefault(name = "Guest") {
  return `Welcome, ${name}!`;
}

console.log("Default parameter:", greetWithDefault());
console.log("With parameter:", greetWithDefault("Bob"));

// 4.2 Function Expressions
// Anonymous function expression
const multiply = function (a, b) {
  return a * b;
};

console.log("Function expression:", multiply(4, 6));

// 4.3 Arrow Functions
// Basic arrow function
const subtract = (a, b) => a - b;
console.log("Arrow function:", subtract(10, 4));

// Arrow function with single parameter
const square = (x) => x * x;
console.log("Single parameter arrow function:", square(5));

// Arrow function with no parameters
const getRandomNumber = () => Math.floor(Math.random() * 100);
console.log("No parameters arrow function:", getRandomNumber());

// 4.4 Rest Parameters
// Rest parameters collect remaining arguments into an array
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log("Rest parameters:", sumAll(1, 2, 3, 4, 5));

// 4.5 Closures
// A closure gives an inner function access to the outer function's scope
function outerFunction(x) {
  let outerVariable = x;

  function innerFunction(y) {
    return outerVariable + y;
  }

  return innerFunction;
}

const addToFive = outerFunction(5);
console.log("Closure example:", addToFive(3)); // 8

// ─────────────────────────────────────────────
// EXPECTED OUTPUT
// ─────────────────────────────────────────────
// Function declaration example: Hello, Alice!
// Default parameter: Welcome, Guest!
// With parameter: Welcome, Bob!
// Function expression: 24
// Arrow function: 6
// Single parameter arrow function: 25
// No parameters arrow function: <random number 0–99>
// Rest parameters: 15
// Closure example: 8
