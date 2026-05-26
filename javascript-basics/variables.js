// PART 2: VARIABLES

// 2.1 VAR Declaration (Old way - avoid in modern JS)
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

// ─────────────────────────────────────────────
// EXPECTED OUTPUT
// ─────────────────────────────────────────────
// var example: I'm using var
// var redeclared: I'm redeclared!
// let example: I'm using let
// let reassigned: I'm reassigned!
// Inside block: I'm only available in this block
// const example: I cannot be changed
// PI value: 3.14159
// Original person: { name: 'John', age: 30 }
// Modified person: { name: 'John', age: 31 }
// Number: 42 - Type: number
// String: Hello World - Type: string
// Boolean: true - Type: boolean
// Undefined: undefined - Type: undefined
// Null: null - Type: object
// Symbol: Symbol(unique) - Type: symbol
// BigInt: 123456789012345678901234567890n - Type: bigint
// Object: { name: 'John', age: 30 } - Type: object
// Array: [ 1, 2, 3, 4, 5 ] - Type: object
// Function: [Function: functionType] - Type: function
