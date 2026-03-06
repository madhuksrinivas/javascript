/*
 * COMPLETE JAVASCRIPT TUTORIAL
 * All JavaScript concepts in one comprehensive file
 */

// PART 1: JAVASCRIPT BASICS

// 1.1 Introduction to JavaScript
// JavaScript is a programming language that runs in web browsers and servers
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
// Console.log most common for development
console.log("This appears in the browser console");

// Alert shows a popup (uncomment to test)
// alert("This would show a popup");

// 1.4 Basic Data Types
// Numbers
console.log("Number:", 42);
console.log("Decimal:", 3.14);

// Strings
console.log("String with double quotes:", "Hello World!");
console.log("String with single quotes:", "JavaScript is awesome!");

// Boolean
console.log("Boolean true:", true);
console.log("Boolean false:", false);

// Undefined
let undefinedVariable;
console.log("Undefined variable:", undefinedVariable);

// Null
let nullVariable = null;
console.log("Null variable:", nullVariable);

// 1.5 Type Checking
console.log("Type of 42:", typeof 42);
console.log("Type of 'Hello':", typeof "Hello");
console.log("Type of true:", typeof true);
console.log("Type of undefined:", typeof undefined);
console.log("Type of null:", typeof null); // This returns "object" - it's a known quirk!

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

// PART 2: VARIABLES

// 2.1 VAR Declaration (Old way - avoid in modern JS)
// Variables are containers that store data values
// JavaScript has three ways to declare variables: var, let, and const

// var has function scope and can be redeclared
var oldVariable = "I'm using var";
console.log("var example:", oldVariable);

// var can be redeclared
var oldVariable = "I'm redeclared!";
console.log("var redeclared:", oldVariable);

// 2.2 LET Declaration (Modern way)
// let has block scope and cannot be redeclared
let modernVariable = "I'm using let";
console.log("let example:", modernVariable);

// let can be reassigned
modernVariable = "I'm reassigned!";
console.log("let reassigned:", modernVariable);

// Block scope example
{
  let blockScoped = "I'm only available in this block";
  console.log("Inside block:", blockScoped);
}

// 2.3 CONST Declaration (Constants)
// const cannot be reassigned or redeclared
const constantVariable = "I cannot be changed";
console.log("const example:", constantVariable);

// const must be initialized when declared
const PI = 3.14159;
console.log("PI value:", PI);

// Objects and arrays can be modified even if declared with const
const person = {
  name: "John",
  age: 30,
};
console.log("Original person:", person);

person.age = 31; // This is allowed
console.log("Modified person:", person);

// 2.4 Data Types in Detail
// Primitive types
let numberType = 42;
let stringType = "Hello World";
let booleanType = true;
let undefinedType;
let nullType = null;
let symbolType = Symbol("unique");
let bigintType = BigInt(123456789012345678901234567890n);

console.log("Number:", numberType, "- Type:", typeof numberType);
console.log("String:", stringType, "- Type:", typeof stringType);
console.log("Boolean:", booleanType, "- Type:", typeof booleanType);
console.log("Undefined:", undefinedType, "- Type:", typeof undefinedType);
console.log("Null:", nullType, "- Type:", typeof nullType);
console.log("Symbol:", symbolType, "- Type:", typeof symbolType);
console.log("BigInt:", bigintType, "- Type:", typeof bigintType);

// Non-primitive types
let objectType = { name: "John", age: 30 };
let arrayType = [1, 2, 3, 4, 5];
let functionType = function () {
  return "I'm a function";
};

console.log("Object:", objectType, "- Type:", typeof objectType);
console.log("Array:", arrayType, "- Type:", typeof arrayType);
console.log("Function:", functionType, "- Type:", typeof functionType);

// PART 3: OPERATORS

console.log("3.1 ARITHMETIC OPERATORS");

let x = 10;
let y = 3;

console.log("Addition (+):", x + y);
console.log("Subtraction (-):", x - y);
console.log("Multiplication (*):", x * y);
console.log("Division (/):", x / y);
console.log("Modulus (%):", x % y);
console.log("Exponentiation (**):", x ** y);

// Increment and Decrement
let counter = 5;
console.log("Original counter:", counter);
console.log("Pre-increment (++counter):", ++counter);
console.log("Post-increment (counter++):", counter++);
console.log("Final counter:", counter);
let z = 10;
console.log("Initial z:", z);

z += 5; // z = z + 5
console.log("z += 5:", z);

z -= 3; // z = z - 3
console.log("z -= 3:", z);

z *= 2; // z = z * 2
console.log("z *= 2:", z);

z /= 4; // z = z / 4
console.log("z /= 4:", z);
let num1 = 10;
let num2 = "10";

console.log("== (loose equality):");
console.log("10 == '10':", num1 == num2);

console.log("\n=== (strict equality):");
console.log("10 === '10':", num1 === num2);

console.log("\nRelational operators:");
console.log("10 > 5:", num1 > 5);
console.log("10 < 5:", num1 < 5);
console.log("10 >= 10:", num1 >= 10);
console.log("10 <= 5:", num1 <= 5);
let isLoggedIn = true;
let hasPermission = false;

console.log("AND operator (&&):");
console.log("true && false:", isLoggedIn && hasPermission);

console.log("\nOR operator (||):");
console.log("true || false:", isLoggedIn || hasPermission);

console.log("\nNOT operator (!):");
console.log("!true:", !isLoggedIn);
// 3.5 Ternary Operatorlet age = 20;
let status = age >= 18 ? "adult" : "minor";
console.log(`Age ${age} is classified as: ${status}`);

// PART 4: FUNCTIONS

console.log("4.1 FUNCTION DECLARATIONS");

// Basic function declaration
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
// Anonymous function expression
const multiply = function (a, b) {
  return a * b;
};

console.log("Function expression:", multiply(4, 6));
// Basic arrow function
const subtract = (a, b) => a - b;
console.log("Arrow function:", subtract(10, 4));

// Arrow function with single parameter
const square = (x) => x * x;
console.log("Single parameter arrow function:", square(5));

// Arrow function with no parameters
const getRandomNumber = () => Math.floor(Math.random() * 100);
console.log("No parameters arrow function:", getRandomNumber());

console.log("\n4.4 REST PARAMETERS");

// Rest parameters collect remaining arguments
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log("Rest parameters:", sumAll(1, 2, 3, 4, 5));

console.log("\n4.5 CLOSURES");

// Function scope and closures
function outerFunction(x) {
  let outerVariable = x;

  function innerFunction(y) {
    return outerVariable + y;
  }

  return innerFunction;
}

const addToFive = outerFunction(5);
console.log("Closure example:", addToFive(3));

// PART 5: ARRAYS

console.log("5.1 CREATING ARRAYS");

// Array literal
const fruits = ["apple", "banana", "orange"];
console.log("Array literal:", fruits);

// Mixed data types
const mixedArray = [1, "hello", true, null, { name: "John" }];
console.log("Mixed array:", mixedArray);
const colors = ["red", "green", "blue", "yellow"];
console.log("First element:", colors[0]);
console.log("Last element:", colors[colors.length - 1]);
console.log("Array length:", colors.length);

console.log("\n5.3 ADDING AND REMOVING ELEMENTS");

let vegetables = ["carrot", "broccoli"];
console.log("Original vegetables:", vegetables);

// push() add to end
vegetables.push("spinach");
console.log("After push():", vegetables);

// unshift() add to beginning
vegetables.unshift("lettuce");
console.log("After unshift():", vegetables);

// pop() remove from end
vegetables.pop();
console.log("After pop():", vegetables);

// shift() remove from beginning
vegetables.shift();
console.log("After shift():", vegetables);
const nums = [1, 2, 3, 4, 5];

// forEach() execute function for each element
console.log("forEach() example:");
nums.forEach((num, index) => {
  console.log(`  Index ${index}: ${num}`);
});

// map() create new array with transformed elements
const doubled = nums.map((num) => num * 2);
console.log("map() doubled array:", doubled);

// filter() create new array with elements that pass test
const evens = nums.filter((num) => num % 2 === 0);
console.log("filter() even numbers:", evens);

// reduce() reduce array to single value
const sum = nums.reduce((total, num) => total + num, 0);
console.log("reduce() sum:", sum);
const searchArray = ["apple", "banana", "orange", "apple"];

console.log("indexOf 'apple':", searchArray.indexOf("apple"));
console.log("includes 'banana':", searchArray.includes("banana"));

// find() first element that satisfies condition
const found = searchArray.find((fruit) => fruit.length > 5);
console.log("First fruit with length > 5:", found);

// PART 6: OBJECTS

console.log("6.1 CREATING OBJECTS");

// Object literal
const person1 = {
  name: "John Doe",
  age: 30,
  city: "New York",
};
console.log("Object literal:", person1);
const student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 20,
};

// Dot notation
console.log("Dot notation firstName:", student.firstName);

// Bracket notation
console.log("Bracket notation lastName:", student["lastName"]);
const employee = {
  name: "Sarah",
  position: "Developer",
};

console.log("Original employee:", employee);

// Adding new properties
employee.department = "IT";
console.log("After adding property:", employee);

// Modifying existing properties
employee.position = "Senior Developer";
console.log("After modifying:", employee);
const calculator = {
  x: 0,
  y: 0,

  setValues(a, b) {
    this.x = a;
    this.y = b;
  },

  add() {
    return this.x + this.y;
  },

  getInfo() {
    return {
      x: this.x,
      y: this.y,
      sum: this.add(),
    };
  },
};

calculator.setValues(10, 5);
console.log("Calculator add:", calculator.add());
console.log("Calculator info:", calculator.getInfo());
const sampleObject = {
  a: 1,
  b: 2,
  c: 3,
};

// Object.keys() get property names
console.log("Object.keys():", Object.keys(sampleObject));

// Object.values() get property values
console.log("Object.values():", Object.values(sampleObject));

// Object.entries() get key-value pairs
console.log("Object.entries():", Object.entries(sampleObject));
const userProfile = {
  username: "john_doe",
  email: "john@example.com",
  age: 25,
};

// Basic destructuring
const { username, email } = userProfile;
console.log("Destructured username:", username);
console.log("Destructured email:", email);

// PART 7: LOOPS

console.log("7.1 FOR LOOP");

// Basic for loop
console.log("Basic for loop counting 1 to 5:");
for (let i = 1; i <= 5; i++) {
  console.log(`  Count: ${i}`);
}

// For loop with arrays
const fruitList = ["apple", "banana", "orange"];
console.log("For loop with array:");
for (let i = 0; i < fruitList.length; i++) {
  console.log(`  Index ${i}: ${fruitList[i]}`);
}
// Basic while loop
let count = 1;
console.log("While loop counting 1 to 5:");
while (count <= 5) {
  console.log(`  While count: ${count}`);
  count++;
}
// Do-while loop executes at least once
let num = 10;
console.log("Do-while loop executes at least once:");
do {
  console.log(`  Do-while number: ${num}`);
  num++;
} while (num < 10);
// For...in loop for object properties
const personObj = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log("For...in loop with object:");
for (let property in personObj) {
  console.log(`  ${property}: ${personObj[property]}`);
}
// For...of loop with arrays
const animals = ["cat", "dog", "bird"];
console.log("For...of loop with array:");
for (let animal of animals) {
  console.log(`  Animal: ${animal}`);
}
// break statement
console.log("Break statement stop at first even number:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`  Found first even number: ${i}`);
    break;
  }
  console.log(`  Checking: ${i}`);
}

// continue statement
console.log("Continue statement skip even numbers:");
for (let i = 1; i <= 6; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`  Odd number: ${i}`);
}

// PART 8: CONDITIONALS

console.log("8.1 IF STATEMENT");

// Basic if statement
let userAge = 25;
if (userAge >= 18) {
  console.log("You are an adult");
}

console.log("\n8.2 IF-ELSE STATEMENT");

let votingAge = 16;
if (votingAge >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote yet");
}

console.log("\n8.3 IF-ELSE IF-ELSE CHAIN");

// Grade evaluation
let studentScore = 85;
if (studentScore >= 90) {
  console.log("Grade: A");
} else if (studentScore >= 80) {
  console.log("Grade: B");
} else if (studentScore >= 70) {
  console.log("Grade: C");
} else if (studentScore >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}
// Basic switch statement
let dayOfWeek = 3;
switch (dayOfWeek) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Weekend");
}
// Basic ternary operator
let userScore = 88;
let result = userScore >= 80 ? "Pass" : "Fail";
console.log(`Result: ${result}`);

// Nested ternary operators
let points = 150;
let level =
  points >= 200 ? "Expert" : points >= 100 ? "Intermediate" : "Beginner";
console.log(`Player level: ${level}`);
// Falsy values: false, 0, "", null, undefined, NaN
console.log("Testing falsy values:");
if (false) console.log("false is truthy");
else console.log("false is falsy");
if (0) console.log("0 is truthy");
else console.log("0 is falsy");
if ("") console.log("empty string is truthy");
else console.log("empty string is falsy");

// Truthy values: everything else
console.log("Testing truthy values:");
if ("hello") console.log("non-empty string is truthy");
if (1) console.log("non-zero number is truthy");

// PART 9: ASYNC PROGRAMMING

console.log("9.1 CALLBACKS");

// Simple callback example
function greetAsync(name, callback) {
  setTimeout(() => {
    const message = `Hello, ${name}!`;
    callback(message);
  }, 1000);
}

greetAsync("Alice", (message) => {
  console.log("Callback result:", message);
});
// Creating a Promise
function fetchUserPromise(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, name: `User ${userId}` });
      } else {
        reject(new Error("Invalid user ID"));
      }
    }, 500);
  });
}

// Using promises with .then() and .catch()
fetchUserPromise(5)
  .then((user) => {
    console.log("Promise resolved:", user);
  })
  .catch((error) => {
    console.error("Promise rejected:", error.message);
  });
// Async function declaration
async function getUsersAsync() {
  try {
    console.log("Starting async operation...");
    const user1 = await fetchUserPromise(30);
    console.log("Got user:", user1.name);
    return user1;
  } catch (error) {
    console.error("Async function error:", error.message);
  }
}

getUsersAsync();
// Promise.all wait for all promises to resolve
const userPromises = [
  fetchUserPromise(10),
  fetchUserPromise(11),
  fetchUserPromise(12),
];

Promise.all(userPromises).then((users) => {
  console.log(
    "Promise.all result:",
    users.map((u) => u.name),
  );
});

// PART 10: ERROR HANDLING

console.log("10.1 TRY-CATCH BASICS");

// Basic try-catch structure
try {
  console.log("Executing potentially dangerous code...");
  // This will cause an error
  // someUndefinedFunction();
  throw new Error("Custom error message");
} catch (error) {
  console.error("Caught an error:", error.message);
}

console.log("Code continues after try-catch");
try {
  console.log("Try block executed");
  throw new Error("Intentional error");
} catch (error) {
  console.log("Catch block executed:", error.message);
} finally {
  console.log("Finally block always executes");
}
// Custom error class
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

// Using custom errors
function validateUser(userData) {
  if (!userData.name) {
    throw new ValidationError("Name is required", "name");
  }
  return true;
}

try {
  validateUser({ name: "" });
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(`Validation failed for ${error.field}: ${error.message}`);
  }
}

// PART 11: MODERN JAVASCRIPT FEATURES (ES6+)

console.log("11.1 ARROW FUNCTIONS");

// Traditional vs Arrow function
const traditionalAdd = function (a, b) {
  return a + b;
};
const arrowAdd = (a, b) => a + b;

console.log("Traditional function:", traditionalAdd(5, 3));
console.log("Arrow function:", arrowAdd(5, 3));
const userName = "Alice";
const userAgeVal = 28;

const greeting = `Hello, ${userName}! You are ${userAgeVal} years old.`;
console.log("Template literal:", greeting);
// Array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, , fourth] = numbers;
console.log("Array destructuring:", { first, second, fourth });

// Object destructuring
const personData = {
  name: "John",
  age: 30,
  city: "New York",
};

const { name, age, city } = personData;
console.log("Object destructuring:", { name, age, city });

// 11.4 Spread Operator
// Array spreading
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Array spreading:", combined);

// Object spreading
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log("Object spreading:", merged);
function greetUser(name = "Guest", greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

console.log("No arguments:", greetUser());
console.log("One argument:", greetUser("Bob"));
// Map key-value pairs
const userMap = new Map();
userMap.set("name", "John");
userMap.set("age", 30);

console.log("Map get 'name':", userMap.get("name"));
console.log("Map has 'age':", userMap.has("age"));

// Set unique values
const uniqueNumbers = new Set([1, 2, 3, 2, 1, 4, 5]);
console.log("Set values:", [...uniqueNumbers]);

// PART 12: CLASSES

console.log("12.1 BASIC CLASS DEFINITION");

// Basic class syntax
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greetPerson() {
    return `Hello, I'm ${this.name} and I'm ${this.age} years old.`;
  }

  getInfo() {
    return {
      name: this.name,
      age: this.age,
      isAdult: this.age >= 18,
    };
  }
}

const person2 = new Person("Alice", 25);
console.log("Class instance:", person2.greetPerson());
console.log("Person info:", person2.getInfo());
// Base class
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  speak() {
    return `${this.name} makes a sound`;
  }
}

// Derived class
class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Dog");
    this.breed = breed;
  }

  speak() {
    return `${this.name} barks: Woof! Woof!`;
  }

  fetch() {
    return `${this.name} fetches the ball`;
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
console.log("Inheritance:", dog.speak());
console.log("Dog method:", dog.fetch());
class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

// Call static method without creating instance
console.log("Static method:", MathUtils.add(5, 3));
console.log("Static method:", MathUtils.multiply(4, 2));
class Temperature {
  constructor() {
    this._celsius = 0;
  }

  get celsius() {
    return this._celsius;
  }

  set celsius(value) {
    this._celsius = value;
  }

  get fahrenheit() {
    return (this._celsius * 9) / 5 + 32;
  }
}

const temp = new Temperature();
temp.celsius = 25;
console.log("Celsius:", temp.celsius);
console.log("Fahrenheit:", temp.fahrenheit);

// PRACTICAL EXAMPLES
class TodoList {
  constructor() {
    this.todos = [];
    this.nextId = 1;
  }

  addTodo(text) {
    const todo = {
      id: this.nextId++,
      text: text,
      completed: false,
      createdAt: new Date(),
    };
    this.todos.push(todo);
    return todo;
  }

  completeTodo(id) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = true;
    }
    return todo;
  }

  getAllTodos() {
    return this.todos;
  }

  getActiveTodos() {
    return this.todos.filter((t) => !t.completed);
  }
}

const todoList = new TodoList();
todoList.addTodo("Learn JavaScript");
todoList.addTodo("Build a project");
todoList.completeTodo(1);

console.log("All todos:", todoList.getAllTodos());
console.log("Active todos:", todoList.getActiveTodos());

console.log("\nExample 2: USER MANAGEMENT SYSTEM");

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.createdAt = new Date();
  }

  getProfile() {
    return {
      username: this.username,
      email: this.email,
      memberSince: this.createdAt,
    };
  }
}

class UserManager {
  constructor() {
    this.users = new Map();
  }

  addUser(username, email) {
    if (this.users.has(username)) {
      throw new Error("Username already exists");
    }
    const user = new User(username, email);
    this.users.set(username, user);
    return user;
  }

  getUser(username) {
    return this.users.get(username);
  }

  getAllUsers() {
    return Array.from(this.users.values());
  }
}

const userManager = new UserManager();
userManager.addUser("alice", "alice@example.com");
userManager.addUser("bob", "bob@example.com");

console.log("User alice:", userManager.getUser("alice").getProfile());
console.log(
  "All users:",
  userManager.getAllUsers().map((u) => u.username),
);

console.log("\nExample 3: SIMPLE CALCULATOR WITH HISTORY");

class CalculatorWithHistory {
  constructor() {
    this.value = 0;
    this.history = [];
  }

  add(num) {
    this.history.push(`${this.value} + ${num} = ${this.value + num}`);
    this.value += num;
    return this;
  }

  subtract(num) {
    this.history.push(`${this.value} - ${num} = ${this.value - num}`);
    this.value -= num;
    return this;
  }

  multiply(num) {
    this.history.push(`${this.value} * ${num} = ${this.value * num}`);
    this.value *= num;
    return this;
  }

  getResult() {
    return this.value;
  }

  getHistory() {
    return this.history;
  }

  clear() {
    this.value = 0;
    this.history = [];
    return this;
  }
}

const calc = new CalculatorWithHistory();
calc.add(10).subtract(3).multiply(2);

console.log("Calculator result:", calc.getResult());
console.log("Calculator history:", calc.getHistory());

// PART 13: JAVASCRIPT RUNTIME & EVENT LOOP

// 13.1 Execution Context
// Execution Context is the environment where JavaScript code is executed
// It contains information about variables, functions, and the scope chain

// Types of Execution Context:
// 1. Global Execution Context (GEC)
// 2. Function Execution Context (FEC)
// 3. Eval Execution Context (rarely used)

// 13.1.1 Global Execution Context
// Created when JavaScript code first runs
// There's only ONE global execution context per program
// In browsers: global object is 'window', 'this' refers to window
// In Node.js: global object is 'global'

// Global Execution Context has two phases:

// Phase 1: Creation Phase (Memory Creation Phase)
// - Creates the global object (window/global)
// - Creates 'this' and binds it to global object
// - Sets up memory space for variables and functions (Hoisting)
// - Variables are set to 'undefined'
// - Functions are stored in memory with their entire code

console.log("\n--- Global Execution Context Demo ---");

// These work due to hoisting in creation phase
console.log("Hoisted var:", hoistedVar); // undefined (not error)
console.log("Hoisted function:", hoistedFunction()); // Works!

var hoistedVar = "I am hoisted";

function hoistedFunction() {
  return "Function is hoisted completely";
}

// let and const are NOT hoisted the same way (Temporal Dead Zone)
// console.log(notHoisted); // ReferenceError: Cannot access before initialization
let notHoisted = "TDZ protection";

// Phase 2: Execution Phase
// - JavaScript code is executed line by line
// - Variables are assigned their values
// - Functions are invoked

console.log("After execution:", hoistedVar); // "I am hoisted"

// 13.1.2 Function Execution Context
// Created whenever a function is invoked
// Each function call gets its own execution context
// Can have multiple function execution contexts

function demonstrateContext() {
  var localVar = "I'm local";
  let blockVar = "I'm block scoped";

  function innerFunction() {
    console.log("Access from inner:", localVar); // Can access outer scope
  }

  innerFunction();
  return localVar;
}

console.log("\n--- Function Execution Context ---");
console.log("Function result:", demonstrateContext());
// console.log(localVar); // ReferenceError: localVar is not defined

// 13.1.3 Execution Context Stack (Call Stack)
// JavaScript uses a stack to manage execution contexts
// When a function is called: new context is pushed onto stack
// When a function returns: context is popped from stack

console.log("\n--- Execution Context Stack ---");

function levelOne() {
  console.log("Level 1 - Pushed onto stack");
  levelTwo();
  console.log("Level 1 - Back in execution");
}

function levelTwo() {
  console.log("Level 2 - Pushed onto stack");
  levelThree();
  console.log("Level 2 - Back in execution");
}

function levelThree() {
  console.log("Level 3 - Pushed onto stack");
  console.log("Level 3 - Now popping...");
}

// Stack visualization:
// 1. Global Context (always at bottom)
// 2. levelOne() pushed
// 3. levelTwo() pushed
// 4. levelThree() pushed
// 5. levelThree() pops
// 6. levelTwo() pops
// 7. levelOne() pops
// 8. Back to Global Context

levelOne();

// 13.1.4 Execution Context Components

// Each execution context has:
// 1. Variable Environment
//    - var declarations
//    - function declarations
//    - arguments object (for functions)
//
// 2. Lexical Environment
//    - let and const declarations
//    - outer environment reference (scope chain)
//
// 3. this binding
//    - Global context: window/global
//    - Function context: depends on how function is called

console.log("\n--- this Binding in Different Contexts ---");

// Global context
console.log("Global this:", this); // window (browser) or global (Node.js)

// Function context
function regularFunction() {
  console.log("Regular function this:", this); // global object (non-strict)
}

const arrowFunc = () => {
  console.log("Arrow function this:", this); // Inherits from outer scope
};

regularFunction();
arrowFunc();

// Object method context
const obj = {
  name: "MyObject",
  method: function () {
    console.log("Method this:", this.name); // "MyObject"
  },
  arrowMethod: () => {
    console.log("Arrow in object:", this); // Not the object!
  },
};

obj.method();
obj.arrowMethod();

// 13.1.5 Scope Chain
// Each execution context has access to its outer environment
// This creates a chain of scopes

console.log("\n--- Scope Chain Example ---");

var globalVar = "Global";

function outerFunc() {
  var outerVar = "Outer";

  function middleFunc() {
    var middleVar = "Middle";

    function innerFunc() {
      var innerVar = "Inner";

      // innerFunc can access all outer scopes
      console.log("Inner:", innerVar);
      console.log("Middle:", middleVar);
      console.log("Outer:", outerVar);
      console.log("Global:", globalVar);
    }

    innerFunc();
    // Can't access innerVar here
  }

  middleFunc();
  // Can't access middleVar or innerVar here
}

outerFunc();

// 13.1.6 Temporal Dead Zone (TDZ)
// let and const are hoisted but not initialized
// Accessing them before declaration causes ReferenceError

console.log("\n--- Temporal Dead Zone ---");

console.log("Before TDZ demo");

// console.log(inTDZ); // ReferenceError: Cannot access before initialization

let inTDZ = "Now initialized";
console.log("After initialization:", inTDZ);

// 13.1.7 Practical Example: Understanding Closures with Context

function createCounter() {
  let count = 0; // This lives in createCounter's execution context

  return function () {
    count++; // Inner function maintains reference to outer context
    return count;
  };
}

console.log("\n--- Closure and Execution Context ---");

const counter1 = createCounter();
const counter2 = createCounter();

console.log("Counter 1:", counter1()); // 1
console.log("Counter 1:", counter1()); // 2
console.log("Counter 2:", counter2()); // 1 (separate context)
console.log("Counter 1:", counter1()); // 3

// Each counter has its own execution context preserved

// 13.2 JavaScript Engine
// The JS engine (like V8 in Chrome/Node.js) executes JavaScript code
// It consists of:
// - Memory Heap: Where memory allocation happens (objects, variables)
// - Call Stack: Where function execution contexts are stored

// 13.3 Call Stack
// The call stack is a LIFO (Last In First Out) data structure
// It keeps track of function calls in your program
// When a function is called, it's pushed onto the stack
// When a function returns, it's popped off the stack

function first() {
  console.log("First function");
  second();
  console.log("First function end");
}

function second() {
  console.log("Second function");
  third();
  console.log("Second function end");
}

function third() {
  console.log("Third function");
}

// Call stack visualization:
// 1. main() is pushed
// 2. first() is pushed
// 3. second() is pushed
// 4. third() is pushed, executes, pops
// 5. second() completes, pops
// 6. first() completes, pops
// 7. main() completes, pops

first();

// 13.4 Web APIs
// Web APIs are provided by the browser (not part of JavaScript engine)
// Examples: setTimeout, fetch, DOM APIs, console, XMLHttpRequest
// These APIs handle asynchronous operations

console.log("\n--- Web API Example ---");
console.log("Start");

// setTimeout is a Web API, not part of JS engine
setTimeout(() => {
  console.log("Timeout callback executed");
}, 0);

console.log("End");
// Output order: Start -> End -> Timeout callback executed
// Even with 0ms delay, setTimeout goes through the event loop

// 13.5 Callback Queue (Task Queue)
// When Web API completes, callbacks are placed in the callback queue
// Also called the Task Queue or Macrotask Queue
// Examples: setTimeout, setInterval, I/O operations

console.log("\n--- Callback Queue Example ---");
console.log("1. Start");

setTimeout(() => {
  console.log("3. Timeout 1");
}, 0);

setTimeout(() => {
  console.log("4. Timeout 2");
}, 0);

console.log("2. End");
// Call stack must be empty before callback queue is processed

// 13.6 Microtask Queue
// Microtask queue has higher priority than callback queue
// Microtasks: Promises, queueMicrotask, MutationObserver
// All microtasks are executed before any macrotask

console.log("\n--- Microtask Queue Example ---");
console.log("1. Synchronous start");

setTimeout(() => {
  console.log("5. Macrotask - setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Microtask - Promise 1");
});

Promise.resolve().then(() => {
  console.log("4. Microtask - Promise 2");
});

console.log("2. Synchronous end");

// Execution order:
// 1. All synchronous code
// 2. All microtasks (Promises)
// 3. One macrotask (setTimeout)
// 4. All microtasks again (if any)
// 5. Next macrotask... and so on

// 13.7 Event Loop
// The event loop continuously checks:
// 1. Is the call stack empty?
// 2. Are there any microtasks? Execute all of them
// 3. Is there a macrotask in callback queue? Execute one
// 4. Repeat

// Event Loop Priority Order:
// Call Stack → Microtask Queue → Callback Queue (Macrotask)

console.log("\n--- Event Loop Priority Example ---");

console.log("1. Script start");

setTimeout(() => {
  console.log("7. setTimeout (Macrotask)");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("3. Promise 1 (Microtask)");
    return Promise.resolve();
  })
  .then(() => {
    console.log("4. Promise 2 (Microtask)");
  });

Promise.resolve().then(() => {
  console.log("5. Promise 3 (Microtask)");
});

setTimeout(() => {
  console.log("8. setTimeout 2 (Macrotask)");
  Promise.resolve().then(() => {
    console.log("9. Promise in setTimeout (Microtask)");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("6. Promise 4 (Microtask)");
});

console.log("2. Script end");

// 13.8 JavaScript Runtime Environment
// A complete JS runtime includes:
// 1. JavaScript Engine (V8, SpiderMonkey, JavaScriptCore)
//    - Call Stack
//    - Memory Heap
// 2. Web APIs (in browsers) or C++ APIs (in Node.js)
//    - DOM, fetch, setTimeout, etc.
// 3. Callback Queue (Macrotask Queue)
// 4. Microtask Queue
// 5. Event Loop

// 13.9 Practical Example: Complex Async Flow

console.log("\n--- Complex Async Flow ---");

console.log("A. Start");

setTimeout(() => {
  console.log("F. Timeout 1");
  Promise.resolve().then(() => console.log("G. Promise in Timeout 1"));
}, 0);

Promise.resolve()
  .then(() => {
    console.log("C. Promise 1");
    setTimeout(() => console.log("H. Timeout in Promise 1"), 0);
  })
  .then(() => {
    console.log("D. Promise 2");
  });

setTimeout(() => {
  console.log("I. Timeout 2");
}, 0);

Promise.resolve().then(() => {
  console.log("E. Promise 3");
});

console.log("B. End");

// Expected order: A → B → C → D → E → F → G → H → I

// 13.10 Key Concepts Summary

// Call Stack:
// - Executes functions synchronously (LIFO)
// - Only one thing at a time
// - Must be empty for event loop to process queues

// Web APIs:
// - Handle async operations outside the JS engine
// - Don't block the call stack
// - Send callbacks to queues when done

// Microtask Queue:
// - Higher priority than macrotask queue
// - All microtasks executed before next macrotask
// - Examples: Promises, queueMicrotask

// Callback Queue (Macrotask Queue):
// - Lower priority than microtask queue
// - One macrotask per event loop cycle
// - Examples: setTimeout, setInterval, I/O

// Event Loop:
// - Constantly monitors call stack and queues
// - Ensures async code runs at the right time
// - Priority: Synchronous → Microtasks → Macrotasks

// 13.11 Common Patterns

// Pattern 1: Immediate Promise vs setTimeout
console.log("\n--- Pattern 1: Promise vs setTimeout ---");
setTimeout(() => console.log("setTimeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("Sync");
// Output: Sync → Promise → setTimeout

// Pattern 2: Nested Promises and Timeouts
console.log("\n--- Pattern 2: Nested Example ---");
setTimeout(() => {
  console.log("Timeout 1");
  Promise.resolve().then(() => console.log("Promise in Timeout 1"));
  setTimeout(() => console.log("Timeout 3"), 0);
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
  setTimeout(() => console.log("Timeout 2"), 0);
});

// Pattern 3: Understanding queueMicrotask
console.log("\n--- Pattern 3: queueMicrotask ---");
queueMicrotask(() => {
  console.log("Microtask via queueMicrotask");
});

Promise.resolve().then(() => {
  console.log("Microtask via Promise");
});

console.log("Synchronous");
// Both are microtasks, executed in order they were queued

// CONCLUSION

console.log("\n\n=== END OF COMPLETE JAVASCRIPT TUTORIAL ===");
