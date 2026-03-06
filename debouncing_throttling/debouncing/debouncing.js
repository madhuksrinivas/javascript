function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const handleSearch = debounce((query) => {
  console.log("Searching for:", query);
}, 1000);

document.getElementById("searchBox").addEventListener("input", (e) => {
  handleSearch(e.target.value);
});


// You’re typing into a search box. Every keystroke fires an input event.
// Without debouncing: the app would send a request for "m", then "ma", then "mad", then "madh", etc. → lots of wasted calls.
// With debouncing: the app waits until you stop typing for, say, 1000ms, then sends just one request with the final text.

function debounceDemo(fn, delay) {
  let timer; // keeps track of the scheduled call
  return function(...args) {
    clearTimeout(timer); // cancel previous timer if user types again
    timer = setTimeout(() => fn.apply(this, args), delay); // schedule new call
  };
}

// Step‑by‑Step Execution
// --First keystroke → handleSearch("m") runs.
// clearTimeout(timer) does nothing (no timer yet).
// setTimeout schedules fn("m") after 1000ms.
// --Second keystroke within 1000ms → handleSearch("ma").
// Cancels the previous timer (fn("m") will never run).
// Schedules a new one for fn("ma") after 1000ms.
// --Third keystroke quickly → handleSearch("mad").
// Cancels the "ma" timer.
// Schedules "mad".
// User stops typing → 1000ms passes.
// The last scheduled timer executes.
// Only fn("mad") runs.

// Why It Works
// clearTimeout(timer) ensures only the latest action survives.
// setTimeout delays execution until the user pauses.
// Closure over timer keeps track of the pending call across multiple invocations.

// Visual Timeline (delay = 1000ms)
// Keystroke: m   ma   mad
// Timers:   [m] [ma] [mad]
// Cancel:   m canceled, ma canceled
// Final:    mad runs after 1000ms pause

// ✅ Summary:  
// Debouncing is like saying: “I’ll wait until you stop talking for half a second before I reply.” 
// The code achieves this by canceling old timers and only letting the last one finish.
