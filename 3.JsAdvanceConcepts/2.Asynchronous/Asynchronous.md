========================

## Asynchronous JavaScript

========================

- "I will finish later!"
- Functions running in parallel with other functions are called asynchronous
- A good example is JavaScript setTimeout()

- JavaScript is single-threaded, meaning it can only execute one operation at a time. However, asynchronous programming allows you to perform tasks (like fetching data or waiting for a timeout) without blocking the main thread. This is crucial for building responsive web applications.

========================

## setTimeout()

========================

- Purpose: Executes a function once, after a specified delay.
- Syntax: setTimeout(callback, delay)
- callback: The function to execute after the delay.
- delay: Time in milliseconds after which the function will be executed.

========================

## setInterval()

========================

- Purpose: Executes a function repeatedly at a specified interval (until it is cleared).
- Syntax: setInterval(callback, delay)
- callback: The function to execute at every interval.
- delay: Time in milliseconds between each execution.

========================

## Key Differences between setTimeout() and setInterval():

========================

- Execution:

* setTimeout(): Runs the function only once after the specified delay.
* setInterval(): Runs the function repeatedly after every specified delay.

- Clearing:

* You can use clearTimeout() to stop a setTimeout() before it triggers.
* You can use clearInterval() to stop the repeated execution of setInterval().
