// PART 7: LOOPS

// 7.1 For Loop
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

// 7.2 While Loop
let count = 1;
console.log("While loop counting 1 to 5:");
while (count <= 5) {
  console.log(`  While count: ${count}`);
  count++;
}

// 7.3 Do-While Loop
// Executes at least once even if condition is false
let num = 10;
console.log("Do-while loop executes at least once:");
do {
  console.log(`  Do-while number: ${num}`);
  num++;
} while (num < 10);

// 7.4 For...in Loop (iterates over object properties)
const personObj = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log("For...in loop with object:");
for (let property in personObj) {
  console.log(`  ${property}: ${personObj[property]}`);
}

// 7.5 For...of Loop (iterates over iterable values)
const animals = ["cat", "dog", "bird"];
console.log("For...of loop with array:");
for (let animal of animals) {
  console.log(`  Animal: ${animal}`);
}

// 7.6 Break Statement
// Exits the loop immediately
console.log("Break - stop at first even number:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`  Found first even number: ${i}`);
    break;
  }
  console.log(`  Checking: ${i}`);
}

// 7.7 Continue Statement
// Skips the current iteration and continues to the next
console.log("Continue - skip even numbers:");
for (let i = 1; i <= 6; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`  Odd number: ${i}`);
}

// ─────────────────────────────────────────────
// EXPECTED OUTPUT
// ─────────────────────────────────────────────
// Basic for loop counting 1 to 5:
//   Count: 1
//   Count: 2
//   Count: 3
//   Count: 4
//   Count: 5
// For loop with array:
//   Index 0: apple
//   Index 1: banana
//   Index 2: orange
// While loop counting 1 to 5:
//   While count: 1
//   While count: 2
//   While count: 3
//   While count: 4
//   While count: 5
// Do-while loop executes at least once:
//   Do-while number: 10
// For...in loop with object:
//   name: John
//   age: 30
//   city: New York
// For...of loop with array:
//   Animal: cat
//   Animal: dog
//   Animal: bird
// Break - stop at first even number:
//   Checking: 1
//   Found first even number: 2
// Continue - skip even numbers:
//   Odd number: 1
//   Odd number: 3
//   Odd number: 5
