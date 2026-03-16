// Promise.allSettled can run multiple promises at once
// unlike Promise.all(), it waits for all Promises to finish and
// gives you the outcome of each, whether it was fulfilled or rejected.

Promise.allSettled([
  fetch("https://api.github.com/users/octocat").then(res => res.json()),
  fetch("https://api.github.com/users/defunkt").then(res => res.json()),
  fetch("https://wrong-url.com").then(res => res.json()),
  fetch("https://api.github.com/users/omega").then((res) => res.json())
])
.then(results => {
  results.forEach(r => console.log(r));
});

// [{r1}, {r2}, {error}, {r4}]