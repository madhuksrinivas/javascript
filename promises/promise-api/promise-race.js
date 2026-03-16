// You pass an array of Promises into Promise.race().
// it returns the result for the promise which ever is settled first (either fulfilled or rejected).

// The “winner” of the race determines the outcome.

// Imagine you want to fetch data from multiple mirrors of an API, 
// but you only care about the fastest response:

function delayPromise(message, time, succeed = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      succeed ? resolve(message) : reject(message);
    }, time);
  });
}

Promise.race([
  delayPromise("promise 1 settled", 3000),
  delayPromise("promise 2 settled", 2000, false), // fails first
  delayPromise("promise 3 settled", 1000)
])
.then(result => console.log("Winner:", result))
.catch(err => console.error("First failure:", err));

// Here, whichever server responds first wins the race, and you don’t wait for the others.