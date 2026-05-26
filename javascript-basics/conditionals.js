// PART 8: CONDITIONALS

// 8.1 If Statement
let userAge = 25;
if (userAge >= 18) {
  console.log("You are an adult");
}

// 8.2 If-Else Statement
let votingAge = 16;
if (votingAge >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote yet");
}

// 8.3 If-Else If-Else Chain
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

// 8.4 Switch Statement
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

// 8.5 Ternary Operator
let userScore = 88;
let result = userScore >= 80 ? "Pass" : "Fail";
console.log(`Result: ${result}`);

// Nested ternary
let points = 150;
let level =
  points >= 200 ? "Expert" : points >= 100 ? "Intermediate" : "Beginner";
console.log(`Player level: ${level}`);

// 8.6 Truthy and Falsy Values
// Falsy: false, 0, "", null, undefined, NaN
console.log("Testing falsy values:");
if (false) console.log("false is truthy");
else console.log("false is falsy");

if (0) console.log("0 is truthy");
else console.log("0 is falsy");

if ("") console.log("empty string is truthy");
else console.log("empty string is falsy");

// Truthy: everything else
console.log("Testing truthy values:");
if ("hello") console.log("non-empty string is truthy");
if (1) console.log("non-zero number is truthy");

// ─────────────────────────────────────────────
// EXPECTED OUTPUT
// ─────────────────────────────────────────────
// You are an adult
// You cannot vote yet
// Grade: B
// Wednesday
// Result: Pass
// Player level: Intermediate
// Testing falsy values:
// false is falsy
// 0 is falsy
// empty string is falsy
// Testing truthy values:
// non-empty string is truthy
// non-zero number is truthy
