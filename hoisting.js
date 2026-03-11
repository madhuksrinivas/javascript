// Hoisting is the behavior where variable and function declarations are moved to the top of their scope before code execution.
// This means you can reference variables or functions before they are explicitly declared, 
// but the details differ depending on whether you use var, let, const, or function declarations.

// Key Points About Hoisting
// Function Declarations: Fully hoisted. You can call a function before it is defined in the code.
// var Declarations: Hoisted but initialized with undefined. Accessing them before assignment gives undefined.
// let and const: Hoisted but remain in the Temporal Dead Zone (TDZ) until initialized. Accessing them before declaration throws a ReferenceError.
// Class Declarations: Also hoisted but remain in TDZ until initialized.

// Examples
// 1. Function Hoisting
sayHello(); // Works fine
function sayHello() {
  console.log("Hello!");
}
// Function declarations are hoisted completely.

// 2. var Hoisting
console.log(x); // undefined
var x = 5;
console.log(x); // 5
// Declaration is hoisted, but assignment happens later.
// So x exists at the top but is undefined until assigned.

// 3. let and const Hoisting
console.log(y); // ReferenceError
let y = 10;

console.log(z); // ReferenceError
const z = 20;
// Variables are hoisted but not initialized.
// Accessing them before declaration triggers an error due to TDZ.


// Keyword/Type	    Hoisted?	Initial Value Before Assignment	    Behavior
// Function Decl.	Yes	        Full function available	            Can call before definition
// var	            Yes	        undefined	                        Accessible but undefined until assigned
// let	            Yes	        TDZ (no value)	                    ReferenceError if accessed before declaration
// const	        Yes	        TDZ (no value)	                    ReferenceError if accessed before declaration
// Class Decl.	    Yes	        TDZ (no value)	                    ReferenceError if accessed before declaration

// Common Pitfalls
// Assuming all variables behave like var: Modern JavaScript encourages let and const, which behave differently.
// TDZ Confusion: Developers often forget that let and const are hoisted but inaccessible until initialized.
// Function Expressions: Unlike function declarations, function expressions (e.g., const f = function(){}) are not hoisted with their value—only the variable is hoisted.

// Best Practices
// Use let and const instead of var to avoid unexpected undefined values.
// Always declare variables at the top of their scope to make hoisting behavior explicit.
// Prefer function declarations when you need hoisting, and function expressions/arrow functions when you want predictable order.

// When JavaScript runs, execution is split into two phases:

// 1. Memory Creation Phase (a.k.a. Creation Phase)
// The engine scans the code before execution.
// Function declarations are stored in memory in their entirety.
// Variables declared with var are hoisted and initialized with undefined.
// Variables declared with let and const are hoisted but left uninitialized, which creates the Temporal Dead Zone (TDZ) until the actual declaration line is executed.

// 2. Execution Phase
// Code runs line by line.
// Assignments happen here — so a var variable that was undefined during creation now gets its value.
// Accessing let or const before their declaration line throws a ReferenceError because they’re still in TDZ.

// Example Walkthrough
console.log(a); // undefined
console.log(b); // ReferenceError
console.log(c); // ReferenceError

var a = 10;
let b = 20;
const c = 30;

// Memory Creation Phase:
// a → created, initialized as undefined
// b → created, uninitialized (TDZ)
// c → created, uninitialized (TDZ)

// Execution Phase:
// console.log(a) → prints undefined
// console.log(b) → ReferenceError (TDZ)
// console.log(c) → ReferenceError (TDZ)
// Then assignments happen: a = 10, b = 20, c = 30.

// hoisting is really about how the JavaScript engine sets up memory before execution begins. 
// The difference lies in whether the variable is initialized (var → undefined) or left uninitialized (let/const → TDZ).

// Type	                            Hoisted?	Initialized?	     Can Call Before Declaration?
// Function Declaration	            ✅ Yes	    Fully	            ✅ Yes
// Function Expression (var)	    ✅ Yes	    undefined	        ❌ No (TypeError if called)
// Function Expression (let/const)	✅ Yes	    TDZ (uninitialized)	❌ No (ReferenceError)
// Arrow Function (const)	        ✅ Yes	    TDZ (uninitialized)	❌ No (ReferenceError)