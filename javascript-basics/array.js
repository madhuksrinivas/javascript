// PART 5: ARRAYS
// ─────────────────────────────────────────────
// DEFINITION:
// An Array is an ordered, indexed collection of values (elements) stored
// in a single variable. Arrays in JavaScript are zero-indexed, dynamically
// sized, and can hold mixed data types (numbers, strings, objects, etc.).
// Arrays are reference types (typeof [] === "object") with a built-in
// `length` property and a rich set of built-in methods.
//
// SECTIONS COVERED:
//   5.1  Creating Arrays        → literal, Array.from(), Array.of()
//   5.2  Accessing Elements     → [], .length, .at()
//   5.3  Adding & Removing      → push, pop, unshift, shift, splice
//   5.4  Slicing                → slice()
//   5.5  Iterating              → forEach, map, filter, reduce, some, every, flat, flatMap
//   5.6  Searching              → indexOf, lastIndexOf, includes, find, findIndex, findLast
//   5.7  Sorting                → sort(), reverse()
//   5.8  Combining              → concat(), spread (...)
//   5.9  Destructuring          → basic, skip, defaults, rest, swap, nested
//   5.10 Other Useful Methods   → join, fill, isArray, entries, keys, values
// ─────────────────────────────────────────────

// ─────────────────────────────────────────────
// 5.1 CREATING ARRAYS
// ─────────────────────────────────────────────

// Array literal
const fruits = ["apple", "banana", "orange"];
console.log("Array literal:", fruits);

// Mixed data types
const mixedArray = [1, "hello", true, null, { name: "John" }];
console.log("Mixed array:", mixedArray);

// Array.from() - creates array from iterable or array-like object
const fromString = Array.from("hello");
console.log("Array.from string:", fromString); // ['h','e','l','l','o']

const fromSet = Array.from(new Set([1, 2, 2, 3]));
console.log("Array.from Set:", fromSet); // [1, 2, 3]

// Array.from() with map function
const squares = Array.from({ length: 5 }, (_, i) => (i + 1) ** 2);
console.log("Array.from with map:", squares); // [1, 4, 9, 16, 25]

// Array.of() - creates array from arguments
const arrOf = Array.of(1, 2, 3);
console.log("Array.of():", arrOf); // [1, 2, 3]

// ─────────────────────────────────────────────
// 5.2 ACCESSING ELEMENTS
// ─────────────────────────────────────────────

const colors = ["red", "green", "blue", "yellow"];

console.log("First element:", colors[0]);
console.log("Last element:", colors[colors.length - 1]);
console.log("Array length:", colors.length);

// at() - supports negative index (ES2022)
console.log("at(0):", colors.at(0)); // "red"
console.log("at(-1):", colors.at(-1)); // "yellow" (last element)
console.log("at(-2):", colors.at(-2)); // "blue"

// ─────────────────────────────────────────────
// 5.3 ADDING AND REMOVING ELEMENTS
// ─────────────────────────────────────────────

let vegetables = ["carrot", "broccoli"];
console.log("Original vegetables:", vegetables);

vegetables.push("spinach"); // add to end - returns new length
console.log("After push():", vegetables);

vegetables.unshift("lettuce"); // add to beginning - returns new length
console.log("After unshift():", vegetables);

vegetables.pop(); // remove from end - returns removed element
console.log("After pop():", vegetables);

vegetables.shift(); // remove from beginning - returns removed element
console.log("After shift():", vegetables);

// splice() - add/remove elements at any position (modifies original)
// splice(start, deleteCount, ...itemsToInsert)
let items = ["a", "b", "c", "d", "e"];
const removed = items.splice(1, 2, "X", "Y"); // at index 1, remove 2, insert X and Y
console.log("After splice():", items); // ['a', 'X', 'Y', 'd', 'e']
console.log("splice() removed:", removed); // ['b', 'c']

// ─────────────────────────────────────────────
// 5.4 SLICING ARRAYS
// ─────────────────────────────────────────────

// slice() - returns a shallow copy of a portion (does NOT modify original)
// slice(start, end) - end is exclusive
const letters = ["a", "b", "c", "d", "e"];
console.log("slice(1, 3):", letters.slice(1, 3)); // ['b', 'c']
console.log("slice(2):", letters.slice(2)); // ['c', 'd', 'e']
console.log("slice(-2):", letters.slice(-2)); // ['d', 'e']

// ─────────────────────────────────────────────
// 5.5 ITERATING ARRAYS
// ─────────────────────────────────────────────

const nums = [1, 2, 3, 4, 5];

// forEach() - executes callback function for each and every element of the array
console.log("forEach() example:");
nums.forEach((num, index) => {
  console.log(`  Index ${index}: ${num}`);
});

// map() - creates a new array by applying callback fun for each and every element of the array
// used to transform elements
const doubled = nums.map((num) => num * 2);
console.log("map() doubled array:", doubled);

// filter() - creates a new array by returning only the elements that satisfies the condition defined in call back fun
// used to filter elements
const evens = nums.filter((num) => num % 2 === 0);
console.log("filter() even numbers:", evens);

// reduce() - combines all elements of an array into single value by applying callback fun to each element
// reduce array to single value
const sum = nums.reduce((total, num) => total + num, 0);
console.log("reduce() sum:", sum);

// reduceRight() - same as reduce but processes from right to left
const sumRight = nums.reduceRight((total, num) => total + num, 0);
console.log("reduceRight() sum:", sumRight);

// some() - returns true if at least one element satisfies the condition
const hasEven = nums.some((num) => num % 2 === 0);
console.log("some() has even:", hasEven); // true

// every() - returns true only if ALL elements satisfy the condition
const allPositive = nums.every((num) => num > 0);
console.log("every() all positive:", allPositive); // true

// flat() - flattens nested arrays by specified depth
const nested = [1, [2, 3], [4, [5, 6]]];
console.log("flat(1):", nested.flat(1)); // [1, 2, 3, 4, [5, 6]]
console.log("flat(Infinity):", nested.flat(Infinity)); // [1, 2, 3, 4, 5, 6]

// flatMap() - maps each element then flattens one level
const sentences = ["Hello World", "JavaScript is fun"];
const wordList = sentences.flatMap((s) => s.split(" "));
console.log("flatMap() words:", wordList); // ['Hello', 'World', 'JavaScript', 'is', 'fun']

// ─────────────────────────────────────────────
// 5.6 SEARCHING ARRAYS
// ─────────────────────────────────────────────

const searchArray = ["apple", "banana", "orange", "apple"];

// indexOf() - returns first index of element (-1 if not found)
console.log("indexOf 'apple':", searchArray.indexOf("apple")); // 0
// lastIndexOf() - returns last index of element
console.log("lastIndexOf 'apple':", searchArray.lastIndexOf("apple")); // 3
// includes() - returns true/false
console.log("includes 'banana':", searchArray.includes("banana")); // true

// find() - returns first element that satisfies the condition
const found = searchArray.find((fruit) => fruit.length > 5);
console.log("find() first fruit length > 5:", found); // "banana"

// findIndex() - returns index of first element that satisfies the condition
const foundIndex = searchArray.findIndex((fruit) => fruit.length > 5);
console.log("findIndex() first fruit length > 5:", foundIndex); // 1

// findLast() - returns last element that satisfies the condition (ES2023)
const foundLast = searchArray.findLast((fruit) => fruit.length <= 5);
console.log("findLast() last fruit length <= 5:", foundLast); // "apple"

// ─────────────────────────────────────────────
// 5.7 SORTING ARRAYS
// ─────────────────────────────────────────────

// sort() - sorts in place (alphabetically by default)
const unsorted = ["banana", "apple", "cherry", "date"];
unsorted.sort();
console.log("sort() alphabetically:", unsorted);

// sort() with comparator for numbers
const unsortedNums = [10, 1, 5, 3, 8];
unsortedNums.sort((a, b) => a - b); // ascending
console.log("sort() numbers ascending:", unsortedNums);

unsortedNums.sort((a, b) => b - a); // descending
console.log("sort() numbers descending:", unsortedNums);

// reverse() - reverses the array in place
const toReverse = [1, 2, 3, 4, 5];
toReverse.reverse();
console.log("reverse():", toReverse); // [5, 4, 3, 2, 1]

// ─────────────────────────────────────────────
// 5.8 COMBINING ARRAYS
// ─────────────────────────────────────────────

// concat() - merges two or more arrays (does NOT modify originals)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = arr1.concat(arr2);
console.log("concat():", combined); // [1, 2, 3, 4, 5, 6]

// spread operator - another way to combine arrays
const spreadCombined = [...arr1, ...arr2];
console.log("spread combined:", spreadCombined); // [1, 2, 3, 4, 5, 6]

// spread to copy an array (shallow copy)
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log("original (unchanged):", original); // [1, 2, 3]
console.log("copy:", copy); // [1, 2, 3, 4]

// ─────────────────────────────────────────────
// 5.9 ARRAY DESTRUCTURING
// ─────────────────────────────────────────────

// Basic destructuring
const [first, second, third] = [10, 20, 30];
console.log("Basic destructuring:", first, second, third); // 10 20 30

// Skip elements using commas
const [a, , c] = [1, 2, 3];
console.log("Skip element:", a, c); // 1 3

// Default values
const [x = 0, y = 0, z = 99] = [5, 10];
console.log("Default values:", x, y, z); // 5 10 99

// Rest in destructuring - collect remaining elements
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log("head:", head); // 1
console.log("tail:", tail); // [2, 3, 4, 5]

// Swapping variables using destructuring
let p = 1,
  q = 2;
[p, q] = [q, p];
console.log("Swapped:", p, q); // 2 1

// Nested array destructuring
const matrix = [
  [1, 2],
  [3, 4],
];
const [[r1c1, r1c2], [r2c1, r2c2]] = matrix;
console.log("Nested destructuring:", r1c1, r1c2, r2c1, r2c2); // 1 2 3 4

// ─────────────────────────────────────────────
// 5.10 OTHER USEFUL ARRAY METHODS
// ─────────────────────────────────────────────

// join() - joins all elements into a string
const wordArr = ["Hello", "World", "JavaScript"];
console.log("join(' '):", wordArr.join(" ")); // "Hello World JavaScript"
console.log("join('-'):", wordArr.join("-")); // "Hello-World-JavaScript"

// fill() - fills elements with a static value
const filled = new Array(5).fill(0);
console.log("fill(0):", filled); // [0, 0, 0, 0, 0]

// Array.isArray() - checks if a value is an array
console.log("Array.isArray([]):", Array.isArray([])); // true
console.log("Array.isArray('hi'):", Array.isArray("hi")); // false

// entries() - returns [index, value] pairs iterator
const entryArr = ["a", "b", "c"];
for (const [index, value] of entryArr.entries()) {
  console.log(`entries() → index: ${index}, value: ${value}`);
}

// keys() - returns indices iterator
for (const key of entryArr.keys()) {
  console.log("keys():", key);
}

// values() - returns values iterator
for (const val of entryArr.values()) {
  console.log("values():", val);
}

// ─────────────────────────────────────────────
// EXPECTED OUTPUT
// ─────────────────────────────────────────────
// Array literal: [ 'apple', 'banana', 'orange' ]
// Mixed array: [ 1, 'hello', true, null, { name: 'John' } ]
// Array.from string: [ 'h', 'e', 'l', 'l', 'o' ]
// Array.from Set: [ 1, 2, 3 ]
// Array.from with map: [ 1, 4, 9, 16, 25 ]
// Array.of(): [ 1, 2, 3 ]
// First element: red
// Last element: yellow
// Array length: 4
// at(0): red
// at(-1): yellow
// at(-2): blue
// Original vegetables: [ 'carrot', 'broccoli' ]
// After push(): [ 'carrot', 'broccoli', 'spinach' ]
// After unshift(): [ 'lettuce', 'carrot', 'broccoli', 'spinach' ]
// After pop(): [ 'lettuce', 'carrot', 'broccoli' ]
// After shift(): [ 'carrot', 'broccoli' ]
// After splice(): [ 'a', 'X', 'Y', 'd', 'e' ]
// splice() removed: [ 'b', 'c' ]
// slice(1, 3): [ 'b', 'c' ]
// slice(2): [ 'c', 'd', 'e' ]
// slice(-2): [ 'd', 'e' ]
// forEach() example:
//   Index 0: 1
//   Index 1: 2
//   Index 2: 3
//   Index 3: 4
//   Index 4: 5
// map() doubled array: [ 2, 4, 6, 8, 10 ]
// filter() even numbers: [ 2, 4 ]
// reduce() sum: 15
// reduceRight() sum: 15
// some() has even: true
// every() all positive: true
// flat(1): [ 1, 2, 3, 4, [ 5, 6 ] ]
// flat(Infinity): [ 1, 2, 3, 4, 5, 6 ]
// flatMap() words: [ 'Hello', 'World', 'JavaScript', 'is', 'fun' ]
// indexOf 'apple': 0
// lastIndexOf 'apple': 3
// includes 'banana': true
// find() first fruit length > 5: banana
// findIndex() first fruit length > 5: 1
// findLast() last fruit length <= 5: apple
// sort() alphabetically: [ 'apple', 'banana', 'cherry', 'date' ]
// sort() numbers ascending: [ 1, 3, 5, 8, 10 ]
// sort() numbers descending: [ 10, 8, 5, 3, 1 ]
// reverse(): [ 5, 4, 3, 2, 1 ]
// concat(): [ 1, 2, 3, 4, 5, 6 ]
// spread combined: [ 1, 2, 3, 4, 5, 6 ]
// original (unchanged): [ 1, 2, 3 ]
// copy: [ 1, 2, 3, 4 ]
// Basic destructuring: 10 20 30
// Skip element: 1 3
// Default values: 5 10 99
// head: 1
// tail: [ 2, 3, 4, 5 ]
// Swapped: 2 1
// Nested destructuring: 1 2 3 4
// join(' '): Hello World JavaScript
// join('-'): Hello-World-JavaScript
// fill(0): [ 0, 0, 0, 0, 0 ]
// Array.isArray([]): true
// Array.isArray('hi'): false
// entries() → index: 0, value: a
// entries() → index: 1, value: b
// entries() → index: 2, value: c
// keys(): 0
// keys(): 1
// keys(): 2
// values(): a
// values(): b
// values(): c
