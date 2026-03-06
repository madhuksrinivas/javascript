function throttle(action, waitTime) {
  let lastRunTime = 0; // remembers when the action last ran

  return function(...args) {
    const currentTime = Date.now(); // right now in ms
    const elapsedTime = currentTime - lastRunTime; // how long since last run

    console.log("currentTime:", currentTime, 
                "lastRunTime:", lastRunTime, 
                "elapsedTime:", elapsedTime);

    if (elapsedTime >= waitTime) {
      action.apply(this, args);   // run the action
      lastRunTime = currentTime;  // update the last run time
    }
  };
}

// Usage: throttled scroll handler
const handleScroll = throttle(() => {
  console.log("Scroll action executed at", Date.now());
}, 2000);

window.addEventListener("scroll", handleScroll);


// action → the function you want to throttle (like your scroll handler).
// waitTime → how long you want to wait (in ms) before allowing the next run.
// lastRunTime → remembers the timestamp of the last time the action was executed.
// currentTime → the timestamp right now when the event fires.

// Flow in Plain Words
// You wrap your function with throttle(action, waitTime).
// Every time the event fires (like scrolling), the wrapper runs.
// It checks the current time against the last run time.
// If enough time (waitTime) has passed → run the action.
// If not enough time has passed → skip it.
// After running, update lastRunTime so the next check knows when it last executed.

// Example Console Output (with waitTime = 2000)

// currentTime: 1741177000000 lastRunTime: 0 elapsed: 1741177000000
// Scroll action executed at 1741177000000

// currentTime: 1741177000500 lastRunTime: 1741177000000 elapsed: 500

// currentTime: 1741177002005 lastRunTime: 1741177000000 elapsed: 2005
// Scroll action executed at 1741177002005

