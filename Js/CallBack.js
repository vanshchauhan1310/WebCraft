// console.log("Step 1"); // Runs immediately
// console.log("Step 2"); // Waits for Step 1 to finish
// console.log("Step 3"); // Waits for Step 2 to finish


// console.log("Start"); // Runs immediately

// setTimeout(() => {
//   console.log("Middle (after 2 seconds)"); // Runs later
// }, 2000);

// console.log("End"); // Runs immediately (doesn’t wait for timeout)



// // 1. Define the task (eating)
// function eatLunch(AfterLunch) {
//   console.log("Eating lunch...");
//   setTimeout(() => {
//     console.log("Finished eating!");
//     AfterLunch(); // This is the "call me back" part
//   }, 3000); // Wait 3 seconds (like eating takes time)
// }

// // 2. Define what to do after (watch movie)
// function watchMovie() {
//   console.log("Ok Now i Have to call my friend ");
// }

// // 3. Start the process
// eatLunch(watchMovie);

// 1. "Ordering pizza" - Creating a promise
const pizzaPromise = new Promise((resolve, reject) => {
  const pizzaIsAvailable = false; // Change to false to see rejection
  
  setTimeout(() => {
    if (pizzaIsAvailable) {
      resolve("🍕 Pepperoni pizza is ready!");
    } else {
      reject("😢 Sorry, no pizza today");
    }
  }, 5000); // Wait 2 seconds (like cooking time)
});

// 2. "What to do when ready" - Using the promise
pizzaPromise
  .then(message => console.log(message)) // Runs if resolved
  .catch(error => console.log(error));   // Runs if rejected