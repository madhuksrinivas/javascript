# JavaScript Runtime Environment (RTE)

## Table of Contents

1. [JavaScript Engine](#javascript-engine)
2. [Execution Context](#execution-context)
3. [Memory Management](#memory-management)
4. [Event Loop](#event-loop)
5. [Web APIs](#web-apis)
6. [Callback Queue](#callback-queue)
7. [Microtask Queue](#microtask-queue)

---

## JavaScript Engine

### What is a JavaScript Engine?

A **JavaScript Engine** is a program that executes JavaScript code. It's responsible for converting JavaScript code into machine code that your computer can understand and execute.

### Popular JavaScript Engines:

- **V8** - Used in Chrome, Node.js, Edge
- **SpiderMonkey** - Used in Firefox
- **JavaScriptCore (Nitro)** - Used in Safari
- **Chakra** - Used in old Edge (now deprecated)

### How JS Engine Works:

```
┌─────────────────────────────────────────────────────┐
│              JAVASCRIPT ENGINE                      │
├─────────────────────────────────────────────────────┤
│                                                     │
│  JavaScript Code                                    │
│         ↓                                          │
│  ┌──────────────┐                                  │
│  │    Parser    │ → Converts code to AST          │
│  └──────┬───────┘    (Abstract Syntax Tree)       │
│         ↓                                          │
│  ┌──────────────┐                                  │
│  │  Interpreter │ → Generates Bytecode            │
│  │   (Ignition) │                                  │
│  └──────┬───────┘                                  │
│         ↓                                          │
│  ┌──────────────┐                                  │
│  │   Compiler   │ → Optimizes hot code            │
│  │ (TurboFan)   │   to Machine Code               │
│  └──────┬───────┘                                  │
│         ↓                                          │
│    Machine Code                                     │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Example:

```javascript
// This JavaScript code:
function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result); // 8

// Goes through:
// 1. Parsing - Creates AST
// 2. Interpretation - Converts to bytecode
// 3. Compilation - Optimizes frequently used code
// 4. Execution - Runs the machine code
```

---

## Execution Context

### What is an Execution Context?

An **Execution Context** is an abstract concept that holds information about the environment within which the current code is being executed. Think of it as a container that stores all the necessary information for running code.

### Types of Execution Context:

#### 1. Global Execution Context (GEC)

#### 2. Function Execution Context (FEC)

#### 3. Eval Execution Context (rarely used)

---

## Global Execution Context (GEC)

### What is GEC?

The **Global Execution Context** is the default execution context created when JavaScript code starts running. There is only **ONE** GEC per program.

### Components of GEC:

1. **Memory Component (Variable Environment)**
2. **Code Component (Thread of Execution)**

### GEC Creation Process:

```
┌─────────────────────────────────────────────────────┐
│          GLOBAL EXECUTION CONTEXT (GEC)             │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │    MEMORY CREATION PHASE                    │   │
│  │                                             │   │
│  │  - Variables: undefined                     │   │
│  │  - Functions: entire code                   │   │
│  │  - Creates 'this' and 'window'             │   │
│  └─────────────────────────────────────────────┘   │
│                     ↓                              │
│  ┌─────────────────────────────────────────────┐   │
│  │    EXECUTION PHASE                          │   │
│  │                                             │   │
│  │  - Assigns values to variables              │   │
│  │  - Executes function calls                  │   │
│  │  - Creates new execution contexts           │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Example - GEC in Action:

```javascript
var name = "John";
var age = 25;

function greet() {
  console.log("Hello " + name);
}

greet();
```

### Step-by-Step Execution:

#### **Phase 1: Memory Creation Phase (of GEC)**

```
Memory Space:
┌────────────────────────┐
│ name: undefined        │
│ age: undefined         │
│ greet: function {...}  │
└────────────────────────┘
```

- `name` is allocated memory with value `undefined`
- `age` is allocated memory with value `undefined`
- `greet` stores the entire function code

#### **Phase 2: Execution Phase (of GEC)**

```
Memory Space:
┌────────────────────────┐
│ name: "John"          │
│ age: 25               │
│ greet: function {...} │
└────────────────────────┘

Execution:
Line 1: name = "John"
Line 2: age = 25
Line 3-5: greet function defined (already in memory)
Line 7: greet() is called → Creates new FEC
```

---

## Function Execution Context (FEC)

### What is FEC?

A **Function Execution Context** is created whenever a function is invoked. Each function call gets its own execution context.

### Components of FEC:

1. **Memory Component (Variable Environment)** - Local variables, arguments
2. **Code Component (Thread of Execution)** - Execution of function body
3. **`this` keyword** - Context binding
4. **Arguments object** - Function parameters

### FEC Creation Process:

```
┌─────────────────────────────────────────────────────┐
│       FUNCTION EXECUTION CONTEXT (FEC)              │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │    MEMORY CREATION PHASE                    │   │
│  │                                             │   │
│  │  - Parameters: values                       │   │
│  │  - Local variables: undefined               │   │
│  │  - Inner functions: entire code             │   │
│  │  - 'arguments' object created               │   │
│  │  - 'this' binding determined                │   │
│  └─────────────────────────────────────────────┘   │
│                     ↓                              │
│  ┌─────────────────────────────────────────────┐   │
│  │    EXECUTION PHASE                          │   │
│  │                                             │   │
│  │  - Assigns values to local variables        │   │
│  │  - Executes function code line by line      │   │
│  │  - Can create new FECs for nested calls     │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Example - FEC in Action:

```javascript
var x = 10;

function multiply(a, b) {
  var result = a * b;
  return result;
}

var product = multiply(5, 3);
console.log(product); // 15
```

### Complete Execution Flow:

#### **Step 1: GEC Memory Creation Phase**

```
Global Memory:
┌──────────────────────────┐
│ x: undefined            │
│ multiply: function {...}│
│ product: undefined      │
└──────────────────────────┘
```

#### **Step 2: GEC Execution Phase**

```
Global Memory:
┌──────────────────────────┐
│ x: 10                   │
│ multiply: function {...}│
│ product: undefined      │ ← About to be assigned
└──────────────────────────┘

When multiply(5, 3) is called → New FEC is created
```

#### **Step 3: FEC for multiply() - Memory Creation Phase**

```
Function Memory (multiply):
┌──────────────────────────┐
│ a: 5                    │
│ b: 3                    │
│ result: undefined       │
└──────────────────────────┘
```

#### **Step 4: FEC for multiply() - Execution Phase**

```
Function Memory (multiply):
┌──────────────────────────┐
│ a: 5                    │
│ b: 3                    │
│ result: 15              │
└──────────────────────────┘

Execution:
Line 4: result = 5 * 3 = 15
Line 5: return 15
```

#### **Step 5: Back to GEC**

```
Global Memory:
┌──────────────────────────┐
│ x: 10                   │
│ multiply: function {...}│
│ product: 15             │ ← Returned value assigned
└──────────────────────────┘

FEC for multiply() is destroyed (popped from call stack)
```

---

## Call Stack

### What is the Call Stack?

The **Call Stack** is a data structure that tracks execution contexts. It follows the **LIFO** (Last In, First Out) principle.

### Call Stack Diagram:

```
Program Start:
┌─────────────┐
│     GEC     │ ← Bottom (always present)
└─────────────┘

Function Called:
┌─────────────┐
│   FEC (fn)  │ ← Top (currently executing)
├─────────────┤
│     GEC     │
└─────────────┘

Nested Function:
┌─────────────┐
│ FEC (inner) │ ← Top
├─────────────┤
│ FEC (outer) │
├─────────────┤
│     GEC     │
└─────────────┘
```

### Example - Call Stack in Action:

```javascript
function first() {
  console.log("First function");
  second();
  console.log("First function ends");
}

function second() {
  console.log("Second function");
  third();
  console.log("Second function ends");
}

function third() {
  console.log("Third function");
}

first();
```

### Call Stack Evolution:

```
Step 1: Program starts
┌─────────────┐
│     GEC     │
└─────────────┘

Step 2: first() is called
┌─────────────┐
│ FEC(first)  │
├─────────────┤
│     GEC     │
└─────────────┘

Step 3: second() is called from first()
┌─────────────┐
│ FEC(second) │
├─────────────┤
│ FEC(first)  │
├─────────────┤
│     GEC     │
└─────────────┘

Step 4: third() is called from second()
┌─────────────┐
│ FEC(third)  │
├─────────────┤
│ FEC(second) │
├─────────────┤
│ FEC(first)  │
├─────────────┤
│     GEC     │
└─────────────┘

Step 5: third() finishes
┌─────────────┐
│ FEC(second) │
├─────────────┤
│ FEC(first)  │
├─────────────┤
│     GEC     │
└─────────────┘

Step 6: second() finishes
┌─────────────┐
│ FEC(first)  │
├─────────────┤
│     GEC     │
└─────────────┘

Step 7: first() finishes
┌─────────────┐
│     GEC     │
└─────────────┘
```

**Output:**

```
First function
Second function
Third function
Second function ends
First function ends
```

---

## Memory Management

### Memory Creation Phase vs Execution Phase

JavaScript execution happens in **TWO** phases for every execution context:

### 1. Memory Creation Phase (Hoisting Phase)

In this phase:

- Memory is allocated for variables and functions
- Variables are assigned `undefined`
- Functions are stored with their complete code
- No code is executed yet

### 2. Execution Phase

In this phase:

- Code is executed line by line
- Variables are assigned their actual values
- Functions are invoked
- New execution contexts are created for function calls

### Detailed Example:

```javascript
console.log(x); // undefined (not error!)
console.log(greet); // [Function: greet]
greet(); // "Hello World"

var x = 5;

function greet() {
  console.log("Hello World");
}

console.log(x); // 5
```

### Phase-by-Phase Breakdown:

#### **Memory Creation Phase:**

```
Memory:
┌────────────────────────────────┐
│ x: undefined                   │
│ greet: function() {            │
│     console.log("Hello World");│
│ }                              │
└────────────────────────────────┘
```

#### **Execution Phase:**

```
Line 1: console.log(x)
        → Reads from memory: undefined
        → Output: undefined

Line 2: console.log(greet)
        → Reads from memory: function code
        → Output: [Function: greet]

Line 3: greet()
        → Creates FEC for greet
        → Executes function body
        → Output: "Hello World"

Line 5: x = 5
        → Updates memory

Memory After Line 5:
┌────────────────────────────────┐
│ x: 5                           │
│ greet: function() { ... }      │
└────────────────────────────────┘

Line 11: console.log(x)
         → Reads from memory: 5
         → Output: 5
```

---

## Heap Memory

### What is Heap Memory?

**Heap Memory** is a large, unstructured region of memory used for dynamic memory allocation. Objects, arrays, and functions are stored in heap memory.

### Stack vs Heap:

```
┌─────────────────────────────────────────────────────┐
│              MEMORY ARCHITECTURE                    │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌─────────────────┐    ┌────────────────────┐    │
│  │   CALL STACK    │    │    HEAP MEMORY     │    │
│  │   (Ordered)     │    │   (Unstructured)   │    │
│  ├─────────────────┤    ├────────────────────┤    │
│  │ Primitives      │    │ Objects            │    │
│  │ - Numbers       │    │ - {}               │    │
│  │ - Booleans      │    │ - []               │    │
│  │ - undefined     │    │ - Functions        │    │
│  │ - null          │    │ - Dates            │    │
│  │ - References    │───→│ - Custom Objects   │    │
│  │   (pointers)    │    │                    │    │
│  └─────────────────┘    └────────────────────┘    │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Example - Stack vs Heap:

```javascript
// Primitives stored in STACK
let age = 25;
let name = "John";
let isActive = true;

// Objects stored in HEAP (reference in stack)
let person = {
  name: "John",
  age: 25,
};

let numbers = [1, 2, 3, 4, 5];
```

### Memory Representation:

```
CALL STACK:                    HEAP MEMORY:
┌──────────────────┐          ┌─────────────────────┐
│ age: 25          │          │                     │
│ name: "John"     │          │  Object @0x001:     │
│ isActive: true   │          │  {                  │
│ person: @0x001   │─────────→│    name: "John",    │
│ numbers: @0x002  │──┐       │    age: 25          │
└──────────────────┘  │       │  }                  │
                      │       │                     │
                      │       │  Array @0x002:      │
                      └──────→│  [1, 2, 3, 4, 5]    │
                              │                     │
                              └─────────────────────┘
```

### Example - Reference Behavior:

```javascript
// Primitive values (copied)
let a = 10;
let b = a; // b gets a COPY of value
b = 20;
console.log(a); // 10 (unchanged)
console.log(b); // 20

// Objects (referenced)
let obj1 = { value: 10 };
let obj2 = obj1; // obj2 gets REFERENCE to same object
obj2.value = 20;
console.log(obj1.value); // 20 (changed!)
console.log(obj2.value); // 20
```

### Memory Diagram:

```
After let b = a:
STACK:
┌────────┐
│ a: 10  │
│ b: 10  │ ← Separate copy
└────────┘

After let obj2 = obj1:
STACK:              HEAP:
┌─────────────┐    ┌──────────────┐
│ obj1: @0x01 │───→│ { value: 10 }│
│ obj2: @0x01 │───→│   @0x01      │
└─────────────┘    └──────────────┘
                    ↑
         Both point to SAME object
```

---

## Event Loop

### What is the Event Loop?

The **Event Loop** is the mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded. It continuously monitors the Call Stack, Callback Queue, and Microtask Queue.

### JavaScript Runtime Environment:

```
┌─────────────────────────────────────────────────────────────┐
│              JAVASCRIPT RUNTIME ENVIRONMENT                  │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────┐         ┌─────────────────────────┐      │
│  │  CALL STACK  │         │      HEAP MEMORY        │      │
│  │              │         │   (Objects, Arrays)     │      │
│  │  ┌────────┐  │         └─────────────────────────┘      │
│  │  │  FEC   │  │                                           │
│  │  ├────────┤  │                                           │
│  │  │  GEC   │  │                                           │
│  │  └────────┘  │                                           │
│  └──────┬───────┘                                           │
│         │                                                    │
│         │ ┌──────────────────────────────────────┐         │
│         │ │        EVENT LOOP                    │         │
│         │ │  (Monitors & Coordinates)            │         │
│         │ └──────────────────────────────────────┘         │
│         │            ↑              ↑                       │
│         │            │              │                       │
│  ┌──────▼────────┐   │              │                       │
│  │   WEB APIs    │   │              │                       │
│  │               │   │              │                       │
│  │ - setTimeout  │   │              │                       │
│  │ - setInterval │   │              │                       │
│  │ - fetch       │   │              │                       │
│  │ - DOM Events  │   │              │                       │
│  └───────┬───────┘   │              │                       │
│          │           │              │                       │
│          ▼           │              │                       │
│  ┌──────────────┐    │   ┌──────────────────┐             │
│  │  CALLBACK    │────┘   │   MICROTASK      │             │
│  │   QUEUE      │        │     QUEUE        │             │
│  │ (Task Queue) │        │  (Job Queue)     │             │
│  │              │        │                  │             │
│  │ - setTimeout │        │ - Promises       │             │
│  │ - setInterval│        │ - async/await    │             │
│  │ - DOM Events │        │ - queueMicrotask │             │
│  └──────────────┘        │ - MutationObserver│            │
│                          └──────────────────┘             │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Event Loop Algorithm:

```
1. Execute all synchronous code (Call Stack)
   ↓
2. Is Call Stack empty?
   ↓
3. YES → Check Microtask Queue
   ↓
4. Execute ALL microtasks (until queue is empty)
   ↓
5. Is Call Stack empty?
   ↓
6. YES → Check Callback Queue (take ONE task)
   ↓
7. Execute that task
   ↓
8. Repeat from step 2
```

### Example - Event Loop in Action:

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
});

console.log("End");
```

### Execution Flow:

#### **Step 1: Synchronous Code Execution**

```
Call Stack:
┌─────────────────────┐
│ console.log("Start")│
└─────────────────────┘

Output: "Start"
```

#### **Step 2: setTimeout Registered**

```
Call Stack:
┌─────────────────────┐
│ setTimeout(...)     │
└─────────────────────┘

Web API:
Timer for 0ms → Will move callback to Callback Queue

Call Stack: Empty
```

#### **Step 3: Promise Created**

```
Promise.resolve().then(...)

Microtask Queue:
┌─────────────────────────┐
│ console.log("Promise 1")│
└─────────────────────────┘
```

#### **Step 4: Synchronous Code Continues**

```
Call Stack:
┌────────────────────┐
│ console.log("End") │
└────────────────────┘

Output: "End"
```

#### **Step 5: Call Stack Empty - Event Loop Checks Queues**

```
Current State:
- Call Stack: EMPTY
- Microtask Queue: [Promise callback]
- Callback Queue: [setTimeout callback]

Event Loop: Execute Microtasks FIRST
```

#### **Step 6: Microtask Executed**

```
Call Stack:
┌─────────────────────────┐
│ console.log("Promise 1")│
└─────────────────────────┘

Output: "Promise 1"

Microtask Queue: EMPTY
```

#### **Step 7: Callback Queue Task Executed**

```
Call Stack:
┌──────────────────────────┐
│ console.log("Timeout 1") │
└──────────────────────────┘

Output: "Timeout 1"
```

**Final Output:**

```
Start
End
Promise 1
Timeout 1
```

---

## Web APIs

### What are Web APIs?

**Web APIs** are functionalities provided by the browser (or Node.js runtime) that are NOT part of the JavaScript engine. They handle asynchronous operations.

### Common Web APIs:

```
┌─────────────────────────────────────────────────────┐
│                    WEB APIs                         │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Timer APIs:                                        │
│  ├─ setTimeout(callback, delay)                    │
│  └─ setInterval(callback, delay)                   │
│                                                     │
│  Network APIs:                                      │
│  ├─ fetch(url)                                     │
│  └─ XMLHttpRequest                                 │
│                                                     │
│  DOM APIs:                                          │
│  ├─ addEventListener(event, callback)              │
│  ├─ querySelector(selector)                        │
│  └─ MutationObserver                               │
│                                                     │
│  Storage APIs:                                      │
│  ├─ localStorage                                   │
│  └─ sessionStorage                                 │
│                                                     │
│  Console API:                                       │
│  └─ console.log(), console.error()                 │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Example - setTimeout (Web API):

```javascript
console.log("First");

setTimeout(() => {
  console.log("Second (after 2 seconds)");
}, 2000);

console.log("Third");
```

### Execution Flow:

```
Step 1: console.log("First")
┌──────────────┐
│  Call Stack  │
│ console.log  │
└──────────────┘
Output: "First"

Step 2: setTimeout registered
┌──────────────┐
│  Call Stack  │
│  setTimeout  │───→ Sent to Web API
└──────────────┘

Web API:
┌──────────────────────────┐
│ Timer: 2000ms            │
│ Callback: () => {...}    │
└──────────────────────────┘

Step 3: console.log("Third")
┌──────────────┐
│  Call Stack  │
│ console.log  │
└──────────────┘
Output: "Third"

Step 4: After 2 seconds
Web API timer completes →
Callback moved to Callback Queue

Callback Queue:
┌───────────────────────────────┐
│ () => console.log("Second")   │
└───────────────────────────────┘

Step 5: Event Loop
Call Stack is empty →
Move callback from queue to stack

┌──────────────┐
│  Call Stack  │
│  callback()  │
└──────────────┘
Output: "Second (after 2 seconds)"
```

---

## Callback Queue (Task Queue)

### What is the Callback Queue?

The **Callback Queue** (also called **Task Queue** or **Macrotask Queue**) holds callbacks from asynchronous operations like timers and DOM events.

### Operations that use Callback Queue:

1. `setTimeout`
2. `setInterval`
3. `setImmediate` (Node.js)
4. DOM Events (`click`, `scroll`, etc.)
5. I/O operations

### Example - Multiple Callbacks:

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 1000);

setTimeout(() => {
  console.log("Timeout 2");
}, 500);

console.log("End");
```

### Timeline:

```
Time: 0ms
┌──────────────┐
│  Call Stack  │
│ console.log  │ → "Start"
└──────────────┘

Web APIs:
┌─────────────────────┐
│ Timer 1: 1000ms     │
│ Timer 2: 500ms      │
└─────────────────────┘

┌──────────────┐
│  Call Stack  │
│ console.log  │ → "End"
└──────────────┘

Time: 500ms
Timer 2 completes →
Callback Queue:
┌──────────────────────┐
│ Timeout 2 callback   │
└──────────────────────┘

Event Loop moves callback to stack:
Output: "Timeout 2"

Time: 1000ms
Timer 1 completes →
Callback Queue:
┌──────────────────────┐
│ Timeout 1 callback   │
└──────────────────────┘

Event Loop moves callback to stack:
Output: "Timeout 1"
```

**Final Output:**

```
Start
End
Timeout 2
Timeout 1
```

---

## Microtask Queue (Job Queue)

### What is the Microtask Queue?

The **Microtask Queue** (also called **Job Queue**) holds callbacks from **Promises** and other microtask operations. It has **HIGHER PRIORITY** than the Callback Queue.

### Operations that use Microtask Queue:

1. `Promise.then()`, `Promise.catch()`, `Promise.finally()`
2. `async/await`
3. `queueMicrotask()`
4. `MutationObserver`
5. `process.nextTick()` (Node.js - even higher priority)

### Priority Order:

```
1. Synchronous Code (Call Stack)
   ↓
2. Microtask Queue (ALL tasks)
   ↓
3. Callback Queue (ONE task at a time)
   ↓
4. Back to Microtask Queue (if any added)
   ↓
5. Repeat
```

### Example - Microtask vs Callback Queue:

```javascript
console.log("1: Start");

setTimeout(() => {
  console.log("2: Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("3: Promise 1");
});

Promise.resolve().then(() => {
  console.log("4: Promise 2");
});

console.log("5: End");
```

### Execution Flow Diagram:

```
Step 1-2: Synchronous code
Output: "1: Start", "5: End"

Current State:
Call Stack: EMPTY

Microtask Queue:
┌──────────────────────┐
│ Promise 1 callback   │
│ Promise 2 callback   │
└──────────────────────┘

Callback Queue:
┌──────────────────────┐
│ setTimeout callback  │
└──────────────────────┘

Step 3: Event Loop checks Microtask Queue
Execute ALL microtasks:
Output: "3: Promise 1"
Output: "4: Promise 2"

Microtask Queue: EMPTY

Step 4: Event Loop checks Callback Queue
Execute ONE callback:
Output: "2: Timeout"
```

**Final Output:**

```
1: Start
5: End
3: Promise 1
4: Promise 2
2: Timeout
```

### Complex Example - Mixed Queues:

```javascript
console.log("Script start");

setTimeout(() => {
  console.log("setTimeout 1");
  Promise.resolve().then(() => {
    console.log("Promise inside setTimeout");
  });
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Promise 1");
    setTimeout(() => {
      console.log("setTimeout inside Promise");
    }, 0);
  })
  .then(() => {
    console.log("Promise 2");
  });

console.log("Script end");
```

### Step-by-Step Execution:

```
Step 1: Synchronous Code
Output: "Script start"
Output: "Script end"

State after synchronous code:
Callback Queue: [setTimeout 1]
Microtask Queue: [Promise 1]

Step 2: Execute ALL microtasks
Execute Promise 1:
Output: "Promise 1"
  - Registers setTimeout inside Promise → goes to Web API
  - Returns another promise → Promise 2 goes to Microtask Queue

Microtask Queue: [Promise 2]

Step 3: Continue microtasks
Execute Promise 2:
Output: "Promise 2"

Microtask Queue: EMPTY

Step 4: Execute ONE callback
Execute setTimeout 1:
Output: "setTimeout 1"
  - Registers Promise inside setTimeout → goes to Microtask Queue

Microtask Queue: [Promise inside setTimeout]

Step 5: Execute microtasks (higher priority)
Output: "Promise inside setTimeout"

Microtask Queue: EMPTY

Step 6: Execute next callback
Execute setTimeout inside Promise:
Output: "setTimeout inside Promise"
```

**Final Output:**

```
Script start
Script end
Promise 1
Promise 2
setTimeout 1
Promise inside setTimeout
setTimeout inside Promise
```

---

## Complete Runtime Visualization

### Full Picture - All Components Together:

```
┌─────────────────────────────────────────────────────────────────┐
│            JAVASCRIPT RUNTIME ENVIRONMENT - COMPLETE            │
└─────────────────────────────────────────────────────────────────┘

        ┌──────────────────────────────────────┐
        │      JAVASCRIPT ENGINE (V8)          │
        │  ┌────────────────────────────────┐  │
        │  │       CALL STACK (LIFO)        │  │
        │  │                                │  │
        │  │    ┌─────────────────────┐    │  │
        │  │    │  FEC (if running)   │    │  │
        │  │    ├─────────────────────┤    │  │
        │  │    │        GEC          │    │  │
        │  │    └─────────────────────┘    │  │
        │  │                                │  │
        │  └────────────────────────────────┘  │
        │                                       │
        │  ┌────────────────────────────────┐  │
        │  │         HEAP MEMORY            │  │
        │  │  (Objects, Arrays, Functions)  │  │
        │  └────────────────────────────────┘  │
        └──────────────────────────────────────┘
                        ↑
                        │
        ┌───────────────┴──────────────────────┐
        │           EVENT LOOP                 │
        │  (Continuously monitors & moves      │
        │   tasks from queues to call stack)   │
        └───────────────┬──────────────────────┘
                        │
        ┌───────────────┴──────────────────────┐
        │                                       │
        ▼                                       ▼
┌──────────────────┐                  ┌──────────────────┐
│  MICROTASK QUEUE │                  │  CALLBACK QUEUE  │
│  (High Priority) │                  │  (Low Priority)  │
├──────────────────┤                  ├──────────────────┤
│ • Promises       │                  │ • setTimeout     │
│ • async/await    │                  │ • setInterval    │
│ • queueMicrotask │                  │ • DOM Events     │
│ • MutationObserv │                  │ • I/O Operations │
└────────▲─────────┘                  └────────▲─────────┘
         │                                     │
         │                                     │
         └─────────────┬───────────────────────┘
                       │
                       │ Callbacks registered
                       │
        ┌──────────────▼──────────────────────┐
        │          WEB APIs                   │
        │  (Browser/Node.js Provided)         │
        ├─────────────────────────────────────┤
        │ • setTimeout / setInterval          │
        │ • fetch / XMLHttpRequest            │
        │ • DOM Events (click, scroll, etc.)  │
        │ • localStorage / sessionStorage     │
        │ • console.log                       │
        └─────────────────────────────────────┘
```

---

## Real-World Example - Complete Flow

### Example Code:

```javascript
console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("3");
    return Promise.resolve();
  })
  .then(() => {
    console.log("4");
  });

async function asyncFunc() {
  console.log("5");
  await Promise.resolve();
  console.log("6");
}

asyncFunc();

setTimeout(() => {
  console.log("7");
}, 0);

Promise.resolve().then(() => {
  console.log("8");
});

console.log("9");
```

### Complete Execution Analysis:

#### **Phase 1: Synchronous Code**

```
Line 1: console.log("1") → Output: "1"
Line 3: setTimeout registered → Web API
Line 9: Promise chain registered → Microtask Queue
Line 15: asyncFunc() called
  Line 16: console.log("5") → Output: "5"
  Line 17: await Promise.resolve() → Microtask Queue
Line 23: setTimeout registered → Web API
Line 27: Promise registered → Microtask Queue
Line 31: console.log("9") → Output: "9"

Output so far: 1, 5, 9
```

#### **Phase 2: Microtask Queue (All microtasks)**

```
Microtask Queue:
┌────────────────────────────────┐
│ 1. Promise (line 9) - "3"      │
│ 2. asyncFunc await - "6"       │
│ 3. Promise (line 27) - "8"     │
└────────────────────────────────┘

Execute Promise (line 9):
  Output: "3"
  Returns Promise.resolve() → adds "4" to Microtask Queue

Execute asyncFunc await:
  Output: "6"

Execute Promise (line 27):
  Output: "8"

Microtask Queue still has:
┌────────────────────────────────┐
│ 1. Promise (from "3") - "4"    │
└────────────────────────────────┘

Execute:
  Output: "4"

Microtask Queue: EMPTY

Output so far: 1, 5, 9, 3, 6, 8, 4
```

#### **Phase 3: Callback Queue (One at a time)**

```
Callback Queue:
┌────────────────────────────────┐
│ 1. setTimeout (line 3) - "2"   │
│ 2. setTimeout (line 23) - "7"  │
└────────────────────────────────┘

Execute first callback:
  Output: "2"

Check Microtask Queue: EMPTY

Execute second callback:
  Output: "7"
```

**Final Output:**

```
1
5
9
3
6
8
4
2
7
```

---

## Key Takeaways

### 1. **JavaScript Engine**

- Parses, interprets, and compiles JavaScript code
- Manages memory and execution

### 2. **Execution Context (GEC & FEC)**

- Every code execution happens in an execution context
- Has two phases: Memory Creation and Execution
- GEC is created once; FEC is created per function call

### 3. **Memory Management**

- **Stack**: Primitives and references
- **Heap**: Objects, arrays, functions
- Memory Creation Phase: Variables get `undefined`, functions get full code

### 4. **Event Loop**

- Monitors Call Stack and Queues
- Enables non-blocking asynchronous behavior

### 5. **Web APIs**

- Provided by browser/Node.js
- Handle async operations outside JS engine

### 6. **Queues Priority**

```
1. Synchronous Code (Call Stack)
2. Microtask Queue (ALL tasks)
3. Callback Queue (ONE task)
4. Render (if browser)
5. Repeat
```

### 7. **Microtask Queue > Callback Queue**

- Promises execute before setTimeout
- ALL microtasks execute before ANY callback

---

## Practice Questions

### Question 1:

```javascript
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
```

**What is the output?**

<details>
<summary>Answer</summary>

```
A
D
C
B
```

**Explanation:**

1. "A" and "D" are synchronous → print first
2. "C" is a microtask → executes before callback queue
3. "B" is in callback queue → executes last
</details>

### Question 2:

```javascript
async function test() {
  console.log("1");
  await Promise.resolve();
  console.log("2");
}

test();
console.log("3");
```

**What is the output?**

<details>
<summary>Answer</summary>

```
1
3
2
```

**Explanation:**

1. "1" prints (synchronous)
2. `await` puts "2" in microtask queue
3. "3" prints (synchronous)
4. "2" prints (microtask executes)
</details>

---

## Summary Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    EXECUTION FLOW                           │
└─────────────────────────────────────────────────────────────┘

    JavaScript Code
          ↓
    JS Engine (Parser)
          ↓
    Creates GEC
          ↓
    Memory Creation Phase
    (Variables: undefined, Functions: code)
          ↓
    Execution Phase
    (Assigns values, executes code)
          ↓
    Function Call? → Creates FEC
          ↓
    Async Operation? → Web API
          ↓
    Callback → Callback Queue
    Promise → Microtask Queue
          ↓
    Event Loop
          ↓
    Stack Empty? → Execute Microtasks → Execute Callbacks
          ↓
    Program Ends
```

---

**Congratulations!** You now understand the complete JavaScript Runtime Environment! 🎉
