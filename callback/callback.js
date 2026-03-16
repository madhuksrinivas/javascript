// A callback is a function that is passed as an argument to another function, and then invoked (called back) at a later time. 
// This pattern is fundamental to asynchronous programming in JavaScript.

// Key Characteristics:
// Passed as an argument: A callback is given to another function.
// Executed later: The receiving function decides when to call it.
// Common in async code: Used with APIs like setTimeout, event listeners, or network requests.

// Example: Simple Callback
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}
function afterGreeting() {
  console.log("Nice to meet you!");
}
greet("Alice", afterGreeting); // afterGreeting is a callback passed to greet.
// Output:
// Hello Alice
// Nice to meet you!


// Example: Asynchronous Callback
setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);
// The arrow function is a callback.
// setTimeout executes it later, after 2 seconds.

// Types of Callbacks:
// Type	        Example Use Case
// Synchronous	Array methods like map, filter, reduce
// Asynchronous	setTimeout, setInterval, event listeners, AJAX requests

// Two issues while using callbacks:
// 1 - Callback hell
// When a function is passed as an argument to another function, it becomes a callback function. 
// This process continues and there are many callbacks inside another's Callback function.
// This grows the code horizontally instead of vertically. That mechanism is known as callback hell. 
// 2 - Inversion of control
// The callback function is passed to another callback, this way we lose the control of our code.
// We don't know what is happening behind the scene and the program becomes very difficult to maintain. 
// That process is called inversion of control. 

// Callback Hell: Nested callbacks can make code hard to read and maintain.
// Solution: Use Promises or async/await to flatten and simplify asynchronous code.

// Callback hell is the classic problem of deeply nested callbacks, 
// and the modern solution is to flatten the flow using Promises or async/await.

// 🔴 Callback Hell
getUser(1, user => {
  getPosts(user.id, posts => {
    getComments(posts[0].id, comments => {
      console.log("User:", user);
      console.log("Posts:", posts);
      console.log("Comments:", comments);
    });
  });
});

// Hard to read and maintain.

// Using Promises
getUser(1)
  .then(user => {
    console.log("User:", user);
    return getPosts(user.id);
  })
  .then(posts => {
    console.log("Posts:", posts);
    return getComments(posts[0].id);
  })
  .then(comments => {
    console.log("Comments:", comments);
  })
  .catch(err => console.error(err));

// Each step returns a Promise and next then will catch it
// if a then() is returning a promise, then we have to return it to next then() and log or process it there 
// Errors are handled in one place with .catch().
// The chain is flat and readable.

// Using async/await
async function fetchData() {
  try {
    const user = await getUser(1);
    console.log("User:", user);

    const posts = await getPosts(user.id);
    console.log("Posts:", posts);

    const comments = await getComments(posts[0].id);
    console.log("Comments:", comments);
  } catch (err) {
    console.error(err);
  }
}

fetchData();

// Looks synchronous, but runs asynchronously.
// Easier to debug and reason about.
// No nesting, just sequential steps.

// ✅ Best Practice
// Use Promises for chaining simple async operations.
// Use async/await for more complex flows, especially when you need to handle errors or conditional logic.
// Reserve callbacks for simple synchronous tasks (like array methods) or when working with APIs that don’t support Promises.

//  Currying can also help here by breaking down complex functions into smaller composable ones,
// but the real game-changer for callback hell is Promises and async/await.

// ✅ Takeaway
// Callback Hell/Pyramid of doom: Difficult to read & maintain.
// Promises: Flattened chains, better error handling.
// Async/Await: Cleanest, most readable, modern standard.