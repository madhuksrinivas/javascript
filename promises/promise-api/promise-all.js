// Promise.all() - allows to run multiple asynchronousn tasks in parallel
// and wait until all of them are finished.

// How it works
// - you pass an array of Promises into Promise.all([p1,p2,p3])
// it waits untill each & every promise is resolved
// If all succeed - returns the array of results.
// If all/anyone rejected - the whole Promise.all() rejects immediately with that error.

// Feature	             Benefit
// Parallel execution	 Runs tasks at the same time, faster overall
// Collective result	 Returns all results in one array
// Error handling	     If one fails, you catch it immediately
// Clean code	         Avoids deeply nested .then() chains

// Imagine fetching data from multiple APIs at once:

Promise.all([
  fetch("https://api.github.com/users/octocat")
    .then((res) => res.json()),
  fetch("https://api.github.com/users/defunkt")
    .then((res) => res.json()),
  // fetch("https://wrong-url.com")
  //   .then((res) => res.json()),
  fetch("https://api.github.com/users/omega")
    .then((res) => res.json()),
])
  .then((users) => console.log("Results:", users))
  .catch((err) => console.error("Unexpected error:", err)); // returns runtime error.

