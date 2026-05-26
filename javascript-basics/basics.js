// PART 1: JAVASCRIPT BASICS

// 1.1 Introduction to JavaScript
// JavaScript is a single-threaded synchronous programming language that runs in web browsers and servers
// It's used to make websites interactive and dynamic

console.log("JavaScript is a versatile programming language!");

// 1.2 Basic Syntax
// Semicolons are optional but recommended
console.log("This statement ends with a semicolon;");
console.log("This one doesn't need one");

// Comments use // for single line comments
/*
   for multi-line comments
   Like this one!
*/

// 1.3 Displaying Output
console.log("This appears in the browser console");

// 1.4 Basic Data Types
console.log("Number:", 42);
console.log("Decimal:", 3.14);
console.log("String:", "Hello World!");
console.log("Boolean true:", true);
console.log("Boolean false:", false);

let undefinedVariable;
console.log("Undefined variable:", undefinedVariable);

let nullVariable = null;
console.log("Null variable:", nullVariable);

// 1.5 Type Checking
console.log("Type of 42:", typeof 42);
console.log("Type of 'Hello':", typeof "Hello");
console.log("Type of true:", typeof true);
console.log("Type of undefined:", typeof undefined);
console.log("Type of null:", typeof null); // returns "object" - known quirk!

// 1.6 Basic Calculations
let a = 10;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);

// 1.7 String Operations
let firstName = "John";
let lastName = "Doe";

// String concatenation
console.log("Full name:", firstName + " " + lastName);

// Template literals (modern way)
console.log(`Full name using template literal: ${firstName} ${lastName}`);

// String methods
console.log("Length of firstName:", firstName.length);
console.log("Uppercase:", firstName.toUpperCase());
console.log("Lowercase:", firstName.toLowerCase());

// ─────────────────────────────────────────────
// EXPECTED OUTPUT
// ─────────────────────────────────────────────
// JavaScript is a versatile programming language!
// This statement ends with a semicolon;
// This one doesn't need one
// This appears in the browser console
// Number: 42
// Decimal: 3.14
// String: Hello World!
// Boolean true: true
// Boolean false: false
// Undefined variable: undefined
// Null variable: null
// Type of 42: number
// Type of 'Hello': string
// Type of true: boolean
// Type of undefined: undefined
// Type of null: object
// Addition: 15
// Subtraction: 5
// Multiplication: 50
// Division: 2
// Full name: John Doe
// Full name using template literal: John Doe
// Length of firstName: 4
// Uppercase: JOHN
// Lowercase: john
