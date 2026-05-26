# Part 13: JavaScript Runtime & Event Loop

---

## 13.0 What is JavaScript?

JavaScript is a:

| Trait                    | Meaning                                                      |
| ------------------------ | ------------------------------------------------------------ |
| **High-level**           | Abstracts hardware details; no manual memory management      |
| **Single-threaded**      | Only ONE call stack; one thing executes at a time            |
| **JIT-compiled**         | Compiled to machine code at runtime (not ahead of time)      |
| **Dynamically typed**    | Variable types are resolved at runtime                       |
| **Garbage-collected**    | Unused objects are freed automatically (mark-and-sweep)      |
| **Non-blocking / async** | Delegates slow work (I/O, timers) to Web APIs via event loop |

**Where does JS run?**

- **Browser** → JavaScript Engine (V8 in Chrome, SpiderMonkey in Firefox)
- **Server** → Node.js (also uses V8 under the hood)

---

## 13.0.1 How JS Code is Compiled (V8 Engine)

JS is **NOT** purely interpreted — V8 uses a multi-stage pipeline:

```
┌──────────────────────────────────────────────────────────┐
│  SOURCE CODE  (.js file / <script> tag)                  │
└───────────────────────┬──────────────────────────────────┘
                        │
                        ▼
┌──────────────────────────────────────────────────────────┐
│  STEP 1 — TOKENIZER / LEXER                              │
│  Breaks source text into tokens (keywords, identifiers,  │
│  operators, literals …)                                  │
│  e.g.  let x = 5 + 3;                                   │
│        → [let] [x] [=] [5] [+] [3] [;]                 │
└───────────────────────┬──────────────────────────────────┘
                        │
                        ▼
┌──────────────────────────────────────────────────────────┐
│  STEP 2 — PARSER                                         │
│  Converts token stream into an Abstract Syntax Tree      │
│  (AST) — a tree representing the grammar of the code.    │
│  Syntax errors are caught here.                          │
│  Tool to visualise: https://astexplorer.net              │
└───────────────────────┬──────────────────────────────────┘
                        │
                        ▼
┌──────────────────────────────────────────────────────────┐
│  STEP 3 — IGNITION (Interpreter)                         │
│  Walks the AST and produces bytecode — a compact,        │
│  platform-independent instruction set.                   │
│  Bytecode is executed immediately (fast startup).        │
└───────────────────────┬──────────────────────────────────┘
                        │
        (if code is "hot" / called repeatedly)
                        │
                        ▼
┌──────────────────────────────────────────────────────────┐
│  STEP 4 — TURBOFAN (JIT Optimising Compiler)             │
│  Profiles hot bytecode paths and compiles them to        │
│  optimised native machine code for the host CPU.         │
│  If assumptions break (e.g. type changes), TurboFan      │
│  de-optimises back to bytecode (deoptimisation).         │
└──────────────────────────────────────────────────────────┘
```

> **Key takeaway:** JS is first interpreted (fast to start) and then selectively compiled for hot paths (fast to run over time).

---

## 13.0.2 JavaScript Runtime Architecture

The full runtime (e.g. browser) looks like this:

```
╔══════════════════════════════════════════════════════════╗
║              JAVASCRIPT ENGINE  (V8)                    ║
║  ┌─────────────────────┐   ┌──────────────────────────┐ ║
║  │    MEMORY HEAP      │   │      CALL STACK          │ ║
║  │  (object storage)   │   │  (execution contexts)    │ ║
║  └─────────────────────┘   └──────────────────────────┘ ║
╚══════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════╗
║              WEB APIs  (provided by browser/Node)       ║
║   setTimeout │ fetch │ DOM events │ localStorage …      ║
╚══════════════════════════════════════════════════════════╝

╔══════════════╗    ╔══════════════════════════════════════╗
║ MICROTASK    ║    ║ MACROTASK (CALLBACK) QUEUE           ║
║ QUEUE        ║    ║  setTimeout, setInterval, I/O …     ║
║ Promises,    ║    ╚══════════════════════════════════════╝
║ queueMicro.. ║
╚══════════════╝

╔══════════════════════════════════════════════════════════╗
║                   EVENT LOOP                            ║
║  checks: callstack empty? → run microtasks → run 1      ║
║  macrotask → repeat                                     ║
╚══════════════════════════════════════════════════════════╝
```

---

## 13.1 Execution Context

An **Execution Context** is the environment in which JavaScript code runs. It contains information about variables, functions, and the scope chain.

**Types:**

- **Global Execution Context (GEC)** — created once when the script first runs
- **Function Execution Context (FEC)** — created every time a function is called
- **Eval Execution Context** — rarely used

---

### 13.1.1 Hoisting (Creation Phase)

**Global Execution Context (GEC)** — what happens when the script first runs:

#### Phase 1 — Creation Phase _(before any code executes)_

| Step | What happens                                                                                                     |
| ---- | ---------------------------------------------------------------------------------------------------------------- |
| a    | Creates the global object → `window` (browser) / `global` (Node)                                                 |
| b    | Creates `this` → bound to the global object                                                                      |
| c    | Sets up Memory Heap → allocates space for all vars & functions                                                   |
| d    | **Hoisting** — `var` → `undefined`, function declarations → full body stored, `let`/`const` → Temporal Dead Zone |

#### Phase 2 — Execution Phase _(line by line)_

| Step | What happens                                                           |
| ---- | ---------------------------------------------------------------------- |
| e    | Runs code top-to-bottom                                                |
| f    | Assigns actual values to variables                                     |
| g    | Invokes functions (each call creates a new Function Execution Context) |

```js
console.log("Hoisted var:", hoistedVar); // undefined (not an error)
console.log("Hoisted function:", hoistedFunction()); // works!

var hoistedVar = "I am hoisted";

function hoistedFunction() {
  return "Function is hoisted completely";
}

console.log("After execution:", hoistedVar); // "I am hoisted"

// let/const have Temporal Dead Zone
// console.log(inTDZ); // ReferenceError: Cannot access before initialization
let inTDZ = "Now initialized";
console.log("After initialization:", inTDZ);
```

**Output:**

```
Hoisted var: undefined
Hoisted function: Function is hoisted completely
After execution: I am hoisted
After initialization: Now initialized
```

---

### 13.1.2 Function Execution Context

Each function call creates its own execution context with its own scope.

```js
function demonstrateContext() {
  var localVar = "I'm local";

  function innerFunction() {
    console.log("Access from inner:", localVar); // can access outer scope
  }

  innerFunction();
  return localVar;
}

console.log("Function result:", demonstrateContext());
// console.log(localVar); // ReferenceError: localVar is not defined
```

**Output:**

```
Access from inner: I'm local
Function result: I'm local
```

---

### 13.1.3 Call Stack (LIFO — Last In, First Out)

The **Call Stack** is a data structure inside the JS engine that:

- Tracks WHERE the program is in its execution
- Each function call **PUSHES** a new Execution Context onto the stack
- Each function return **POPS** the context off the stack
- The bottom of the stack is always the **GEC**
- When the stack is empty, the event loop can hand off queued work

**Stack visualisation** for `levelOne()` → `levelTwo()` → `levelThree()`:

```
┌──────────────┐
│  levelThree  │  ← pushed 3rd (popped first)
├──────────────┤
│  levelTwo    │  ← pushed 2nd
├──────────────┤
│  levelOne    │  ← pushed 1st
├──────────────┤
│  GEC (main)  │  ← always at the bottom
└──────────────┘
```

> **Stack Overflow:** if a function keeps calling itself with no exit condition, the stack keeps growing until the engine throws `"Maximum call stack size exceeded"`.

```js
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

levelOne();
```

**Output:**

```
Level 1 - Pushed onto stack
Level 2 - Pushed onto stack
Level 3 - Pushed onto stack
Level 3 - Now popping...
Level 2 - Back in execution
Level 1 - Back in execution
```

---

### 13.1.4 Scope Chain

Each execution context has access to its outer environment, creating a chain of scopes.

```js
var globalVar = "Global";

function outerFunc() {
  var outerVar = "Outer";

  function middleFunc() {
    var middleVar = "Middle";

    function innerFunc() {
      var innerVar = "Inner";
      console.log("Inner:", innerVar); // own scope
      console.log("Middle:", middleVar); // parent scope
      console.log("Outer:", outerVar); // grandparent scope
      console.log("Global:", globalVar); // global scope
    }
    innerFunc();
  }
  middleFunc();
}

outerFunc();
```

**Output:**

```
Inner: Inner
Middle: Middle
Outer: Outer
Global: Global
```

---

### 13.1.5 Closure and Execution Context

A **closure** is an inner function that retains access to its outer function's variables even after the outer function has returned.

```js
function createCounter() {
  let count = 0; // lives in createCounter's execution context

  return function () {
    count++; // inner function keeps reference to outer context
    return count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log("Counter 1:", counter1()); // 1
console.log("Counter 1:", counter1()); // 2
console.log("Counter 2:", counter2()); // 1  ← separate context
console.log("Counter 1:", counter1()); // 3
```

**Output:**

```
Counter 1: 1
Counter 1: 2
Counter 2: 1
Counter 1: 3
```

---

## 13.2 Memory Heap

The **Memory Heap** is the region of unstructured memory used for:

- Storing **objects**, **arrays**, and **functions** (reference types)
- **Primitives** (number, string, boolean, etc.) live on the **stack frame**

### Stack vs Heap

| Stack (primitive values)           | Heap (reference values)                   |
| ---------------------------------- | ----------------------------------------- |
| `let a = 42` → stores `42`         | `const obj = { x: 1 }` → stores reference |
| `let b = a` → **copies** the value | `const b = obj` → **same** memory address |
| Changing `a` does NOT affect `b`   | Changing `b.x` ALSO changes `obj.x` ⚠️    |

> This is called **pass by value** (primitives) vs **pass by reference** (objects).

```js
// Stack: primitives are copied by value
let stackA = 42;
let stackB = stackA;
stackA = 99;
console.log("stackB unchanged:", stackB); // 42

// Heap: objects are copied by reference
const heapObj = { x: 1 };
const heapRef = heapObj;
heapRef.x = 99;
console.log("heapObj.x also changed:", heapObj.x); // 99

// Deep copy to avoid shared reference
const deepCopy = { ...heapObj };
deepCopy.x = 0;
console.log("heapObj.x after deep copy:", heapObj.x); // 99 (unchanged)
```

### Garbage Collection (Mark-and-Sweep)

JS automatically frees memory using a **Mark-and-Sweep** algorithm:

1. **MARK** — starting from the GEC, the GC marks every reachable object
2. **SWEEP** — anything NOT marked is considered unreachable → memory freed

An object becomes eligible for collection when **no variable or closure holds a reference to it**.

```js
function createTemp() {
  const temp = { data: "I will be collected" };
  return temp.data; // 'temp' object itself is unreachable after return
}
console.log(createTemp()); // temp object collected after this line
```

---

## 13.3 Web APIs

**Web APIs** are NOT part of the JS engine — they are provided by the **browser** (or Node.js C++ bindings) and run **outside** the call stack.

**When you call a Web API function:**

1. The call is handed off to the browser environment
2. The JS engine is **free** to continue executing synchronous code
3. When the API finishes, its callback is placed in the **Callback Queue**

**Common Web APIs:**

| API                          | Purpose                         |
| ---------------------------- | ------------------------------- |
| `setTimeout` / `setInterval` | Timer callbacks                 |
| `fetch` / `XMLHttpRequest`   | Network requests                |
| DOM events                   | `click`, `keypress`, `scroll` … |
| `localStorage` / `IndexedDB` | Storage                         |
| `Geolocation`, `WebSocket`   | Other browser features          |

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout callback executed");
}, 0);

console.log("End");
```

**Output:**

```
Start
End
Timeout callback executed    ← even with 0ms, goes through the event loop
```

---

## 13.4 Callback Queue vs Microtask Queue

Once the call stack is empty, the **Event Loop** processes queued work. There are **two queues** with different priorities:

### Microtask Queue _(higher priority)_

- `Promise` `.then` / `.catch` / `.finally`
- `queueMicrotask()`
- `MutationObserver` callbacks
- → **ALL** microtasks are drained **before** the next macrotask runs

### Macrotask Queue _(lower priority — also called Callback / Task Queue)_

- `setTimeout` / `setInterval` callbacks
- I/O callbacks (file read, network)
- UI rendering (between tasks in browsers)
- → **ONE** macrotask runs per event loop cycle, then microtasks drain again

### Event Loop Cycle

```
┌───────────────────────────────────────────────────────┐
│  1. Execute all synchronous code (fill call stack)    │
│  2. Call stack is now empty                           │
│  3. Drain the entire Microtask Queue                  │
│  4. Run ONE Macrotask from the Callback Queue         │
│  5. Drain the Microtask Queue again (if new ones)     │
│  6. Repeat from step 4                                │
└───────────────────────────────────────────────────────┘
```

```js
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
```

**Output:**

```
1. Synchronous start
2. Synchronous end
3. Microtask - Promise 1
4. Microtask - Promise 2
5. Macrotask - setTimeout
```

---

## 13.5 Event Loop Priority Example

> Rule: **Sync code → drain Microtasks → run 1 Macrotask → drain Microtasks → …**

```js
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

Promise.resolve().then(() => console.log("5. Promise 3 (Microtask)"));

setTimeout(() => {
  console.log("8. setTimeout 2 (Macrotask)");
  Promise.resolve().then(() => console.log("9. Promise in setTimeout"));
}, 0);

Promise.resolve().then(() => console.log("6. Promise 4 (Microtask)"));

console.log("2. Script end");
```

**Output:**

```
1. Script start
2. Script end
3. Promise 1 (Microtask)
4. Promise 2 (Microtask)
5. Promise 3 (Microtask)
6. Promise 4 (Microtask)
7. setTimeout (Macrotask)
8. setTimeout 2 (Macrotask)
9. Promise in setTimeout
```

---

## 13.6 queueMicrotask

`queueMicrotask()` schedules a function directly onto the microtask queue. It behaves identically to `Promise.resolve().then(...)` but is more explicit.

```js
console.log("Synchronous");

queueMicrotask(() => {
  console.log("Microtask via queueMicrotask");
});

Promise.resolve().then(() => {
  console.log("Microtask via Promise");
});
// Both are microtasks, executed in the order they were queued
```

**Output:**

```
Synchronous
Microtask via queueMicrotask
Microtask via Promise
```

---

## Summary

| Component           | Role                                                        |
| ------------------- | ----------------------------------------------------------- |
| **Call Stack**      | Executes synchronous code (LIFO); one context at a time     |
| **Memory Heap**     | Stores objects/arrays/functions; GC frees unreachable ones  |
| **Web APIs**        | Handle async work outside the JS engine without blocking    |
| **Microtask Queue** | Promises, `queueMicrotask` — runs **before** any macrotask  |
| **Macrotask Queue** | `setTimeout`, `setInterval`, I/O — one per event loop cycle |
| **Event Loop**      | Coordinates: Call Stack → Microtasks → Macrotask → repeat   |

**Priority order:**

```
Synchronous code  →  Microtask Queue  →  Macrotask Queue
     (highest)                              (lowest)
```
