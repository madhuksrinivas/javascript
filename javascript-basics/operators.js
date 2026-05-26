// PART 3: OPERATORS

// 3.1 Arithmetic Operators
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

// 3.2 Assignment Operators
let z = 10;
console.log("Initial z:", z);

z += 5;
console.log("z += 5:", z);

z -= 3;
console.log("z -= 3:", z);

z *= 2;
console.log("z *= 2:", z);

z /= 4;
console.log("z /= 4:", z);

// 3.3 Comparison Operators
let num1 = 10;
let num2 = "10";

console.log("== (loose equality):");
console.log("10 == '10':", num1 == num2); // true (type coercion)

console.log("=== (strict equality):");
console.log("10 === '10':", num1 === num2); // false (no type coercion)

console.log("Relational operators:");
console.log("10 > 5:", num1 > 5);
console.log("10 < 5:", num1 < 5);
console.log("10 >= 10:", num1 >= 10);
console.log("10 <= 5:", num1 <= 5);

// 3.4 Logical Operators
let isLoggedIn = true;
let hasPermission = false;

console.log("AND operator (&&):");
console.log("true && false:", isLoggedIn && hasPermission);

console.log("OR operator (||):");
console.log("true || false:", isLoggedIn || hasPermission);

console.log("NOT operator (!):");
console.log("!true:", !isLoggedIn);

// 3.5 Ternary Operator
let age = 20;
let status = age >= 18 ? "adult" : "minor";
console.log(`Age ${age} is classified as: ${status}`);

// ─────────────────────────────────────────────
// EXPECTED OUTPUT
// ─────────────────────────────────────────────
// Addition (+): 13
// Subtraction (-): 7
// Multiplication (*): 30
// Division (/): 3.3333333333333335
// Modulus (%): 1
// Exponentiation (**): 1000
// Original counter: 5
// Pre-increment (++counter): 6
// Post-increment (counter++): 6
// Final counter: 7
// Initial z: 10
// z += 5: 15
// z -= 3: 12
// z *= 2: 24
// z /= 4: 6
// == (loose equality):
// 10 == '10': true
// === (strict equality):
// 10 === '10': false
// Relational operators:
// 10 > 5: true
// 10 < 5: false
// 10 >= 10: true
// 10 <= 5: false
// AND operator (&&):
// true && false: false
// OR operator (||):
// true || false: true
// NOT operator (!):
// !true: false
// Age 20 is classified as: adult
