// PART 9: ASYNC PROGRAMMING

// 9.1 Callbacks
// A callback is a function passed as an argument to another function

function greetAsync(name, callback) {
  setTimeout(() => {
    const message = `Hello, ${name}!`;
    callback(message);
  }, 1000);
}

greetAsync("Alice", (message) => {
  console.log("Callback result:", message);
});

// 9.2 Promises
// A Promise represents a value that may be available now, later, or never

function fetchUserPromise(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, name: `User ${userId}` });
      } else {
        reject(new Error("Invalid user ID"));
      }
    }, 500);
  });
}

// Using .then() and .catch()
fetchUserPromise(5)
  .then((user) => {
    console.log("Promise resolved:", user);
  })
  .catch((error) => {
    console.error("Promise rejected:", error.message);
  });

// 9.3 Async / Await
// async/await is cleaner syntax built on top of Promises

async function getUsersAsync() {
  try {
    console.log("Starting async operation...");
    const user1 = await fetchUserPromise(30);
    console.log("Got user:", user1.name);
    return user1;
  } catch (error) {
    console.error("Async function error:", error.message);
  }
}

getUsersAsync();

// 9.4 Promise.all
// Waits for all promises to resolve (or any to reject)

const userPromises = [
  fetchUserPromise(10),
  fetchUserPromise(11),
  fetchUserPromise(12),
];

Promise.all(userPromises).then((users) => {
  console.log(
    "Promise.all result:",
    users.map((u) => u.name),
  );
});

// ─────────────────────────────────────────────
// EXPECTED OUTPUT  (async — order depends on timing)
// ─────────────────────────────────────────────
// Starting async operation...              ← runs immediately (sync part of async fn)
// --- after ~500ms ---
// Promise resolved: { id: 5, name: 'User 5' }
// Got user: User 30
// Promise.all result: [ 'User 10', 'User 11', 'User 12' ]
// --- after ~1000ms ---
// Callback result: Hello, Alice!
