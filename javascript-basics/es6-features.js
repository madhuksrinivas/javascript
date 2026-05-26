// PART 11: MODERN JAVASCRIPT FEATURES (ES6+)

// 11.1 Arrow Functions
const traditionalAdd = function (a, b) {
  return a + b;
};
const arrowAdd = (a, b) => a + b;

console.log("Traditional function:", traditionalAdd(5, 3));
console.log("Arrow function:", arrowAdd(5, 3));

// 11.2 Template Literals
const userName = "Alice";
const userAgeVal = 28;

const greeting = `Hello, ${userName}! You are ${userAgeVal} years old.`;
console.log("Template literal:", greeting);

// 11.3 Destructuring
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

// 11.5 Default Parameters
function greetUser(name = "Guest", greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

console.log("No arguments:", greetUser());
console.log("One argument:", greetUser("Bob"));

// 11.6 Map and Set
// Map - key-value pairs (any type as key)
const userMap = new Map();
userMap.set("name", "John");
userMap.set("age", 30);

console.log("Map get 'name':", userMap.get("name"));
console.log("Map has 'age':", userMap.has("age"));

// Set - collection of unique values
const uniqueNumbers = new Set([1, 2, 3, 2, 1, 4, 5]);
console.log("Set values:", [...uniqueNumbers]);

// ─────────────────────────────────────────────
// EXPECTED OUTPUT
// ─────────────────────────────────────────────
// Traditional function: 8
// Arrow function: 8
// Template literal: Hello, Alice! You are 28 years old.
// Array destructuring: { first: 1, second: 2, fourth: 4 }
// Object destructuring: { name: 'John', age: 30, city: 'New York' }
// Array spreading: [ 1, 2, 3, 4, 5, 6 ]
// Object spreading: { a: 1, b: 2, c: 3, d: 4 }
// No arguments: Hello, Guest!
// One argument: Hello, Bob!
// Map get 'name': John
// Map has 'age': true
// Set values: [ 1, 2, 3, 4, 5 ]
