function greet(name) {
  let message = `Hello Good Morning ${name}`;
  return message;
}

function processUserInput(callbackGreet) {
  const name = "DEVIL";
  const fullMessage = callbackGreet(name);
  return fullMessage;
}

console.log(processUserInput(greet));

// -----------------------

function myDisplayer(some) {
  return `The sum of two value ${some}`;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  let result = myCallback(sum);
  return result;
}

console.log(myCalculator(5, 5, myDisplayer));

// -----------------------
// this below code is also call back
// -----------------------

// document.getElementById("myButton").addEventListener("click", (event) => {
//   console.log("Button clicked!", event);
// });

// Callback Hell

// asyncOperation1((result1) => {
//   asyncOperation2(result1, (result2) => {
//     asyncOperation3(result2, (result3) => {
//       console.log(result3);
//     });
//   });
// });
// asyncOperation1(1);

//! above problem ^
//! below solution !_!

function asyncOperation1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("result from op1"), 1000);
  });
}

function asyncOperation2(result1) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${result1} + result from op2`), 1000);
  });
}

function asyncOperation3(result2) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${result2} + result from op3`), 1000);
  });
}

// Chaining Promises
asyncOperation1()
  .then((result1) => asyncOperation2(result1))
  .then((result2) => asyncOperation3(result2))
  .then((result3) => console.log(result3));
