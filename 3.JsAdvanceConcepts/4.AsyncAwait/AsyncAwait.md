==========================

## JavaScript Async

==========================

- "`async` and `await` make promises easier to write"
- `async` makes a function return a Promise
- `await` makes a function wait for a Promise

### Async Syntax

- The keyword async before a function makes the function return a promise:

**Example**
async function myFunction() {
return "Hello";
}

### Definition

- `Async/Await` is a syntactic sugar built on top of promises, providing a cleaner and more readable way to write asynchronous code.
- `async functions` return a promise, and await pauses the execution of the async function until the promise is resolved.

### Advantages of Async and Await

- Improved Readability: Async and Await allow asynchronous code to be written in a synchronous style, making it easier to read and understand.
- Error Handling: Using try/catch blocks with async/await simplifies error handling.
- Avoids Callback Hell: Async and Await prevent nested callbacks and complex promise chains, making the code more linear and readable.
- Better Debugging: Debugging async/await code is more intuitive since it behaves similarly to synchronous code.
