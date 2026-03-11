// A closure is a function that “remembers” variables from its outer scope even after that outer function has finished executing.
// This allows powerful features like data privacy, encapsulation, and maintaining state across function calls.

// What is a Closure?
// Definition: A closure is the combination of a function and its lexical environment (the scope in which it was created).
// Key Idea: Inner functions can access variables defined in their outer functions, even after the outer function has returned.
// Created Automatically: Every time you define a function in JavaScript, a closure is formed at creation time.

function outer() {
  let count = 0; // variable in outer scope

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const closureFunc = outer();
closureFunc(); // 1
closureFunc(); // 2
closureFunc(); // 3

// Why Use Closures?
// Data Privacy: Variables inside closures aren’t directly accessible from outside, acting like private variables.
// Stateful Functions: Useful for counters, caches, or maintaining state without global variables.
// Callbacks & Async Code: Commonly used in event handlers, promises, and setTimeout/setInterval.
// Functional Programming: Enables currying and partial application.

// Things to Watch Out For
// Memory Usage: Closures keep variables alive, which can lead to higher memory consumption if not managed carefully.
// Debugging Complexity: Variables may not behave as expected if multiple closures reference the same scope.
// Overuse Risk: While powerful, closures can make code harder to read if used excessively.