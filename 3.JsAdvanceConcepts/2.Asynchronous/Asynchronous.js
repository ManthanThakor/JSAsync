//=====================
//!  Asynchronous JavaScript
//=====================

console.log("Start");

setTimeout(() => {
  console.log("I am non-blocking, i will execute after 2 sec");
}, 2000);

console.log("End");
// Output:-
// Start
// End
// I am non-blocking, i will execute after 2 sec

//=====================
//! setTimeout()
//=====================

function greet() {
  console.log("Hello, this message is delayed by 2 seconds!");
}

setTimeout(greet, 2000); // 2000 milliseconds = 2 seconds

let timeoutId = setTimeout(() => {
  console.log("This will not be printed!");
}, 3000);

clearTimeout(timeoutId); // Cancels the timeout before it executes

//=====================
//! setInterval()
//=====================

// setInterval(() => {
//      console.log("Hello, this message will run after every 2 seconds!");
// }, 2000);

// --------------
let count = 0;
function counter() {
  count++;
  console.log("Counter: " + count);
  if (count === 5) {
    clearInterval(intervalId); // Stops the interval after 5 executions
  }
}

let intervalId = setInterval(counter, 1000); // Executes every second
