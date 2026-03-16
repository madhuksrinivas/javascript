// You pass an array of Promises into Promise.any().
// It resolves as soon as the first Promise fulfills.
// If all Promises reject, then it rejects with an AggregateError containing all the reasons.

function delayPromise(message, time, succeed = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      succeed ? resolve(message) : reject(message);
    }, time);
  });
}

Promise.any([
  delayPromise("Promise 1 succeeded", 2000),
  delayPromise("Promise 2 failed", 1000, false),
  delayPromise("Promise 3 succeeded", 1000)
])
.then(result => console.log("First success:", result))
.catch(err => console.error("All failed:", err));

// eg: Imagine you’re fetching data from multiple mirrors of an API, 
// but you only care about the first successful response.
