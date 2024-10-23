// =======================
// ## Creating a Promise:
// =======================

// You create a promise using the Promise constructor, which takes a function (called the executor) with two parameters, resolve and reject.

const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation was successful!"); // fulfilled
  } else {
    reject("Operation failed!"); // rejected
  }
});
// =======================
// ## Consuming a Promise:
// =======================

// To handle the result of a promise, you can use .then(), .catch(), and .finally() methods.

// then(): Executes when the promise is fulfilled.
// catch(): Executes when the promise is rejected.
// finally(): Executes regardless of the outcome (whether fulfilled or rejected).

myPromise
  .then((result) => {
    // console.log(result); // logs "Operation was successful!"
  })
  .catch((error) => {
    // console.log(error); // logs "Operation failed!" if rejected
  })
  .finally(() => {
    // console.log("Promise finished."); // runs no matter what
  });

//=============================
// other examples of promise Random Number
//=============================

const riskyOperation = new Promise((resolve, reject) => {
  let success = Math.random() > 0.5; // 50% chance of success
  if (success) {
    // resolve("Operation succeeded!");
  } else {
    // reject("Operation failed!");
  }
});

riskyOperation
  .then((result) => console.log(result)) // logs success message
  .catch((error) => console.error(error)); // logs error if rejected

//=============================
// delayedMessage
//=============================

let delayedMessage = new Promise((reject, resolve) => {
  setTimeout(() => {
    const errorOccurred = false;

    if (errorOccurred) {
      reject("Something happened");
    } else {
      resolve("EveryThing is ok : Hello after 2 seconds!");
    }
  }, 2000);
});

delayedMessage
  .then((result) => {
    // console.log(result);
  })
  .catch((error) => {
    // console.error(error);
  });

//=============================
//   Chaining Promises:
// You can chain multiple promises together to perform asynchronous operations one after the other.
//=============================
const makeTea = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let notReady = false; // Change this based on your logic
      if (!notReady) {
        //? Corrected to check if tea is ready
        // resolve("Tea is ready!");
      } else {
        // reject("Tea is not ready!");
      }
    }, 1000);
  });
};

const addSugar = (tea) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let sugarAdded = Math.random() > 0.5; // 50% chance of success
      if (sugarAdded) {
        // resolve(`${tea} Sugar added.`);
      } else {
        // reject(`${tea} but Failed to add sugar!`);
      }
    }, 1000);
  });
};

makeTea()
  .then((result) => {
    console.log(result); // logs "Tea is ready!" after 1 second
    return addSugar(result); // returns a new promise
  })
  .then((result) => console.log(result)) // logs either "Tea is ready! Sugar added." or an error message
  .catch((error) => console.error(error)); // logs error if rejected

//=============================
//   Promise with Promise.all:
// You can run multiple asynchronous operations in parallel and wait for all of them to finish using Promise.all.
//=============================

const fetchData1 = new Promise((resolve) =>
  setTimeout(() => resolve("Data 1 fetched"), 1000)
);
const fetchData2 = new Promise((resolve) =>
  setTimeout(() => resolve("Data 2 fetched"), 2000)
);
const fetchData3 = new Promise((resolve) =>
  setTimeout(() => resolve("Data 3 fetched"), 3000)
);

const promiseAll = Promise.all([fetchData1, fetchData2, fetchData3]);

promiseAll
  .then((results) => {
    // console.log(results); // logs ["Data 1 fetched", "Data 2 fetched", "Data 3 fetched"] after 3 seconds
  })
  .catch((error) => console.error(error));

// ================================
//! Promise.allSettled();
// Promise.allSettled() is a method that takes an iterable of Promise objects and, once all of the given promises have either resolved or rejected, returns a single Promise that resolves to an array of objects. Each object corresponds to the outcome of each promise, containing the status ("fulfilled" or "rejected") and the value or reason.
// ================================

function fetchData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id % 2 === 0) {
        resolve(`Data for ID ${id}`);
      } else {
        reject(`Error fetching data for ID ${id}`);
      }
    }, 1000);
  });
}

// Array of promises
const promises = [
  fetchData(1), // This will reject
  fetchData(2), // This will resolve
  fetchData(3), // This will reject
  fetchData(4), // This will resolve
];

// Using Promise.allSettled
Promise.allSettled(promises).then((results) => {
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      //   console.log(`Success: ${result.value}`);
    } else {
      //   console.log(`Failed: ${result.reason}`);
    }
  });
});

// ================================
// Promise with Promise.race:
// Promise.race returns the result of the first promise that resolves (or rejects) out of a group of promises.
// ================================

const fastTask = new Promise((resolve) =>
  setTimeout(() => resolve("Fast task finished"), 1000)
);
const slowTask = new Promise((resolve) =>
  setTimeout(() => resolve("Slow task finished"), 3000)
);

Promise.race([fastTask, slowTask])
  .then((result) => console.log(result)) // logs "Fast task finished" after 1 second
  .catch((error) => console.error(error));

// ================================
//! Promise.any()
// Promise.any() takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfills, returns a single promise that resolves with the value from that promise. If no promises in the iterable fulfill (i.e., all of the given promises are rejected), then it returns a promise that is rejected with an AggregateError, a new subclass of Error that groups together all the errors.
// ================================

const promise1 = Promise.reject("Error 1");
const promise2 = Promise.reject("Error 2");
const promise3 = new Promise((resolve) => setTimeout(resolve, 100, "Success"));

Promise.any([promise1, promise2, promise3])
  .then((value) => {
    console.log(value); // "Success"
  })
  .catch((error) => {
    console.log(error);
  });

// ================================
//! Promise.resolve() and Promise.reject()
// These methods create a resolved or rejected promise, respectively.
// ================================

const resolvedPromise = Promise.resolve("Resolved!");
const rejectedPromise = Promise.reject("Rejected!");

resolvedPromise.then((value) => console.log(value)); // "Resolved!"

rejectedPromise.catch((error) => console.log(error)); // "Rejected!"
