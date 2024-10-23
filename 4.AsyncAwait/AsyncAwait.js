// ===========================
//! A basic async function
// ===========================

async function sayHello() {
  return "Hello, World!";
}

// Using the async function
sayHello().then((message) => console.log(message)); // Logs: Hello, World!

// ===========================

// console.log(`one`);

function myDisplayer(some) {
  //   console.log(some);
}
// console.log(`two`);

async function myFunction() {
  let result = "hello how are u";
  return result;
}
myFunction().then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);

// console.log(`three`);

// ===========================

// ===========================
//! Using Await with a Promise
// ===========================

const fetchData1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = false;
    if (success) {
      resolve("fetch data successfully");
    } else {
      reject("something went wrong");
    }
  }, 2000);
});

const fetchData1andProcess = async () => {
  try {
    console.log("fetching data .....");
    const data = await fetchData1;
    console.log(data);
    console.log("Data processed");
  } catch (error) {
    console.error(error);
  }
};

fetchData1andProcess();
