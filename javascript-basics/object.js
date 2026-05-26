// PART 6: OBJECTS
// ─────────────────────────────────────────────
// DEFINITION:
// An Object is an unordered collection of key-value pairs (properties),
// where keys are strings (or Symbols) and values can be any data type
// including functions (called methods). Objects are reference types used
// to model real-world entities and group related data and behaviour together.
// Almost everything in JavaScript is an object or behaves like one.
//
// SECTIONS COVERED:
//   6.1  Creating Objects             → literal, shorthand, computed keys, Object.create()
//   6.2  Accessing Properties         → dot notation, bracket notation, ?., ??
//   6.3  Adding, Modifying & Deleting → assignment, delete, Object.defineProperty()
//   6.4  Methods in Objects           → method shorthand, this keyword
//   6.5  Object Utility Methods       → Object.keys/values/entries, assign, freeze, seal
//   6.6  Iterating Objects            → for...in, Object.keys/values/entries loops
//   6.7  Object Destructuring         → basic, rename, defaults, rest, nested
//   6.8  Object Spreading             → spread (...), shallow copy, merging
// ─────────────────────────────────────────────

// ─────────────────────────────────────────────
// 6.1 CREATING OBJECTS
// ─────────────────────────────────────────────

// Object literal (most common)
const person1 = {
  name: "John Doe",
  age: 30,
  city: "New York",
};
console.log("Object literal:", person1);

// Shorthand property names - when variable name matches key name
const name = "Alice";
const age = 25;
const shorthand = { name, age }; // same as { name: name, age: age }
console.log("Shorthand properties:", shorthand);

// Computed property names - dynamic key names using []
const key = "score";
const dynamic = { [key]: 100, [`${key}Label`]: "Points" };
console.log("Computed property names:", dynamic); // { score: 100, scoreLabel: 'Points' }

// Object.create() - creates object with specified prototype
const proto = {
  greet() {
    return `Hello, I'm ${this.name}`;
  },
};
const created = Object.create(proto);
created.name = "Bob";
console.log("Object.create():", created.greet());

// ─────────────────────────────────────────────
// 6.2 ACCESSING PROPERTIES
// ─────────────────────────────────────────────

const student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 20,
};

// Dot notation
console.log("Dot notation firstName:", student.firstName);
// Bracket notation - useful for dynamic or special-character keys
console.log("Bracket notation lastName:", student["lastName"]);

// Optional chaining (?.) - safely access nested properties without errors
const userObj = { address: { city: "New York" } };
console.log("Optional chaining:", userObj?.address?.city); // "New York"
console.log("Optional chaining missing:", userObj?.phone?.number); // undefined (no error)

// Nullish coalescing (??) - fallback when value is null or undefined
const config = { timeout: 0, label: null };
console.log("?? on null:", config.label ?? "default"); // "default"
console.log("?? on 0:", config.timeout ?? 3000); // 0 (0 is NOT null/undefined)

// ─────────────────────────────────────────────
// 6.3 ADDING, MODIFYING AND DELETING PROPERTIES
// ─────────────────────────────────────────────

const employee = {
  name: "Sarah",
  position: "Developer",
};
console.log("Original employee:", employee);

employee.department = "IT"; // add new property
console.log("After adding property:", employee);

employee.position = "Senior Developer"; // modify existing property
console.log("After modifying:", employee);

delete employee.department; // delete a property
console.log("After delete:", employee);

// Check if a property exists
console.log("'name' in employee:", "name" in employee); // true
console.log("'department' in employee:", "department" in employee); // false

// hasOwnProperty() - checks own property (not inherited)
console.log("hasOwnProperty 'name':", employee.hasOwnProperty("name")); // true

// ─────────────────────────────────────────────
// 6.4 METHODS IN OBJECTS
// ─────────────────────────────────────────────

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

// ─────────────────────────────────────────────
// 6.5 OBJECT UTILITY METHODS
// ─────────────────────────────────────────────

const sampleObject = { a: 1, b: 2, c: 3 };

// Object.keys() get property names - returns array of keys
console.log("Object.keys():", Object.keys(sampleObject)); // ['a', 'b', 'c']
// Object.values() get property values - returns array of objects
console.log("Object.values():", Object.values(sampleObject)); // [1, 2, 3]
// Object.entries() get key-value pairs - returns an array of [key, value] pairs
console.log("Object.entries():", Object.entries(sampleObject)); // [['a',1],['b',2],['c',3]]

// Object.assign() - copies properties from source(s) into target
const target = { a: 1 };
const source = { b: 2, c: 3 };
const assigned = Object.assign(target, source);
console.log("Object.assign():", assigned); // { a: 1, b: 2, c: 3 }

// Object.freeze() - prevents all modifications to the object
const frozen = Object.freeze({ x: 10, y: 20 });
frozen.x = 99; // silently ignored
console.log("Object.freeze():", frozen); // { x: 10, y: 20 }

// Object.seal() - prevents adding/deleting but allows modifying existing properties
const sealed = Object.seal({ x: 10, y: 20 });
sealed.x = 99; // allowed - modifying existing
sealed.z = 30; // silently ignored - can't add new
console.log("Object.seal():", sealed); // { x: 99, y: 20 }

// ─────────────────────────────────────────────
// 6.6 ITERATING OBJECTS
// ─────────────────────────────────────────────

const scores = { math: 95, english: 88, science: 92 };

// for...in loop - iterates over all enumerable property names
console.log("for...in loop:");
for (const key in scores) {
  console.log(`  ${key}: ${scores[key]}`);
}

// Object.keys().forEach()
console.log("Object.keys().forEach():");
Object.keys(scores).forEach((key) => {
  console.log(`  ${key}: ${scores[key]}`);
});

// Object.entries().forEach() - iterate over key + value pairs
console.log("Object.entries().forEach():");
Object.entries(scores).forEach(([key, value]) => {
  console.log(`  ${key}: ${value}`);
});

// for...of with Object.entries()
console.log("for...of with Object.entries():");
for (const [key, value] of Object.entries(scores)) {
  console.log(`  ${key} = ${value}`);
}

// ─────────────────────────────────────────────
// 6.7 OBJECT DESTRUCTURING
// ─────────────────────────────────────────────

const userProfile = {
  username: "john_doe",
  email: "john@example.com",
  age: 25,
};

// Basic destructuring
const { username, email } = userProfile;
console.log("Destructured username:", username);
console.log("Destructured email:", email);

// Rename while destructuring
const { username: uName, age: uAge } = userProfile;
console.log("Renamed:", uName, uAge);

// Default values
const { username: user2, role = "guest" } = userProfile;
console.log("Default value role:", role); // "guest" (not in object)

// Nested object destructuring
const profile = {
  person: {
    name: "Alice",
    address: {
      city: "London",
      zip: "EC1A",
    },
  },
};
const {
  person: {
    name: personName,
    address: { city },
  },
} = profile;
console.log("Nested destructuring:", personName, city); // Alice London

// Rest in destructuring - collect remaining properties
const { username: u, ...rest } = userProfile;
console.log("Rest properties:", rest); // { email: '...', age: 25 }

// Destructuring in function parameters
function displayUser({ name, age = 0, role = "user" }) {
  console.log(`User: ${name}, Age: ${age}, Role: ${role}`);
}
displayUser({ name: "Bob", age: 30 });

// ─────────────────────────────────────────────
// 6.8 OBJECT SPREADING
// ─────────────────────────────────────────────

// Merge objects with spread
const defaults = { theme: "light", language: "en", notifications: true };
const userPrefs = { theme: "dark", language: "fr" };
const merged = { ...defaults, ...userPrefs }; // userPrefs overrides defaults
console.log("Merged with spread:", merged);

// Shallow copy an object
const original = { a: 1, b: 2, c: 3 };
const shallowCopy = { ...original };
shallowCopy.a = 99;
console.log("Original (unchanged):", original); // { a: 1, b: 2, c: 3 }
console.log("Shallow copy:", shallowCopy); // { a: 99, b: 2, c: 3 }

// Add or override properties while spreading
const updated = { ...original, b: 20, d: 4 };
console.log("Updated spread:", updated); // { a: 1, b: 20, c: 3, d: 4 }

// Spread in function call (convert object values to args)
function add(x, y, z) {
  return x + y + z;
}
const args = { x: 1, y: 2, z: 3 };
// Note: spread works for arrays in function calls, use destructuring for objects
const { x, y, z } = args;
console.log("Spread via destructure:", add(x, y, z));

// ─────────────────────────────────────────────
// EXPECTED OUTPUT
// ─────────────────────────────────────────────
// Object literal: { name: 'John Doe', age: 30, city: 'New York' }
// Shorthand properties: { name: 'Alice', age: 25 }
// Computed property names: { score: 100, scoreLabel: 'Points' }
// Object.create(): Hello, I'm Bob
// Dot notation firstName: Alice
// Bracket notation lastName: Johnson
// Optional chaining: New York
// Optional chaining missing: undefined
// ?? on null: default
// ?? on 0: 0
// Original employee: { name: 'Sarah', position: 'Developer' }
// After adding property: { name: 'Sarah', position: 'Developer', department: 'IT' }
// After modifying: { name: 'Sarah', position: 'Senior Developer', department: 'IT' }
// After delete: { name: 'Sarah', position: 'Senior Developer' }
// 'name' in employee: true
// 'department' in employee: false
// hasOwnProperty 'name': true
// Calculator add: 15
// Calculator info: { x: 10, y: 5, sum: 15 }
// Object.keys(): [ 'a', 'b', 'c' ]
// Object.values(): [ 1, 2, 3 ]
// Object.entries(): [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
// Object.assign(): { a: 1, b: 2, c: 3 }
// Object.freeze(): { x: 10, y: 20 }
// Object.seal(): { x: 99, y: 20 }
// for...in loop:
//   math: 95
//   english: 88
//   science: 92
// Object.keys().forEach():
//   math: 95
//   english: 88
//   science: 92
// Object.entries().forEach():
//   math: 95
//   english: 88
//   science: 92
// for...of with Object.entries():
//   math = 95
//   english = 88
//   science = 92
// Destructured username: john_doe
// Destructured email: john@example.com
// Renamed: john_doe 25
// Default value role: guest
// Nested destructuring: Alice London
// Rest properties: { email: 'john@example.com', age: 25 }
// User: Bob, Age: 30, Role: user
// Merged with spread: { theme: 'dark', language: 'fr', notifications: true }
// Original (unchanged): { a: 1, b: 2, c: 3 }
// Shallow copy: { a: 99, b: 2, c: 3 }
// Updated spread: { a: 1, b: 20, c: 3, d: 4 }
// Spread via destructure: 6
