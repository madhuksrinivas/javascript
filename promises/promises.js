// A Promise is an object
// that represents the eventual completion or failure
// of an asynchronous operation.

// A promise has 3 states: pending | fulfilled | rejected.
// Pending: Initial state(empty object set to undefined), operation not finished.
// Fulfilled: Operation completed successfully, value available, updates the empty object.
// Rejected: Operation failed, error available.

// In promises we attach the callback function to promise object, whereas in callback fun we pass it

// Example of a Promise:

let checkEven = new Promise((resolve, reject) => {
  let number = 4;
  number % 2 === 0
    ? resolve("The number is even.")
    : reject("The number is odd.");
});

checkEven
  .then((message) => {
    console.log(message); // prints "The number is even."
    return message; // return the value if you want to use it later
  })
  .then((result) => {
    console.log("Result:", result); // prints "Result: The number is even."
  })
  .catch((error) => console.error(error));

// As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
// A promise resolves only once and it is immutable.
// Using .then() we can control when we call the cb(callback) function.

// To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally.
// Chaining is done using '.then()'
// A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value.
// This returned value will be used by the next .then()

GITHUB_API = "https://api.github.com/users/madhuksrinivas";

const myData = fetch(GITHUB_API)
  .then((res) => {
    if (res.ok) {
      return res.json(); // parse JSON only if success
    } else {
      throw new Error("Network response was not ok: " + res.status);
    }
  }) // parse JSON response
  .then((data) => {
    console.log(data); // use the data
    return data; // return if you want to reuse later
  })
  .catch((err) => console.error(err)); // handle errors

