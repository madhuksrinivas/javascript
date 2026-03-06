// In JavaScript, prototypes and prototype inheritance are the foundation of how objects share behavior.

// What is a Prototype?
// Every JavaScript object has an internal link to another object called its prototype.
// The prototype acts as a “blueprint” — it contains properties and methods that can be shared.

// Example:
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

const alice = new Person("Alice");
alice.greet(); // Hello, my name is Alice
// Here, greet is defined on Person.prototype, so all Person instances can use it without duplicating the function.

// Prototype Chain (Inheritance):
// When you access a property or method on an object:
// 1. JavaScript checks the object itself.
// 2. If not found, it looks at the object’s prototype.
// 3. If still not found, it moves up the chain until it reaches Object.prototype.
// 4. If not found there, it returns undefined.

// Example:
const parent = { greet: () => console.log("Hello from parent") };
const child = Object.create(parent); // child inherits from parent
child.sayHi = () => console.log("Hi from child");

child.greet(); // Hello from parent (inherited)
child.sayHi(); // Hi from child (own method)

// Key Points
// 1. Object.prototype is at the top of the chain. All objects inherit from it unless explicitly changed.
// 2. Built-in objects also use prototypes:
// a. Arrays inherit from Array.prototype.
// b. Dates inherit from Date.prototype.
// 3. You can extend prototypes to add new methods, but be cautious — modifying built-in prototypes can cause conflicts.

// Summary
// Prototype: An object that provides shared properties/methods.
// Prototype inheritance: Objects can reuse behavior by linking to another object’s prototype.
// Prototype chain: The lookup path JavaScript follows when resolving properties.

// ---------------------------

// When you explore the prototype chain with an array in JavaScript, here’s what happens step by step:
let arr = [];
arr.__proto__; // this array protopye -  is prototype
arr.__proto__.__proto__; // this is array prototype inhertis from object protopyt - protype inheritance
arr.__proto__.__proto__.__proto__;
// 1. arr.__proto__
// This points to Array.prototype.
// All arrays inherit methods like push, pop, forEach, map, etc. from here.

// 2. arr.__proto__.__proto__
// This points to Object.prototype.
// Since Array.prototype itself is an object, its prototype is Object.prototype.
// Here you find methods like toString, hasOwnProperty, valueOf.

// 3. arr.__proto__.__proto__.__proto__
// This is null.
// Object.prototype is the root of the prototype chain, so its prototype is null.

// Visual Prototype Chain
// arr → Array.prototype → Object.prototype → null
// greet → Function.prototype → Object.prototype → null

// Summary:
// Arrays inherit from Array.prototype.
// Functions inherit from Function.prototype.

// Array.prototype/Function.prototype inherits from Object.prototype.

// Object.prototype is the root, with null as its prototype. so we say everything in JS is nothing but object.

// This chain is what allows arrays to use both array-specific methods (map, filter) and general object methods (toString, hasOwnProperty).


// Prototype → the blueprint (object) that holds shared properties and methods.
// Prototype inheritance → the chain (link) that connects objects to their prototypes and lets them reuse behavior.

// So in one word each:
// Prototype → blueprint
// Prototype inheritance → chain