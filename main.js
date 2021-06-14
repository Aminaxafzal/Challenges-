// // Challenge 01: Write a function splitBill() that lets you know how much 
// // you need to pay to split any bill between you and your friends. 
// // It should return a message with a number. 

// // Write your code below:

// function splitBill(amount, numPeople) {
//     return `each person needs to pay ${amount / numPeople}`
// }


// // Testing your solution
// console.log(splitBill(10, 2))
// console.log(splitBill(16, 4))
// console.log(splitBill(350, 9))


// Challenge 02: Write a countdown function with a hard-coded starting number inside closure
// Stretch goal: Write a countdown function that can count from a provided number,
// with a provided step

//a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

// a closure lets you remember a value 

// // Start
// function countdown() {
//     let countFromNum = 11;
//     return function decrease() {
//       countFromNum -= 1;
//       return countFromNum;
//     }
//   }
  
//   const countingDown = countdown();
  
//   console.log(countingDown());
//   console.log(countingDown());
//   console.log(countingDown());


  // Challenge 03 callbacks and fat arrow functions 

//   const username = 'john';

// const capitalize = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`;  
 
// function greetUser(name, callback) {
//   return callback(capitalize(name));  
// }

// const result = greetUser(username, (name) => {
//   return `Hi there, ${name}!`;
// });

//const result = greetUser(username, name => `Hi there, ${name}!`);

// console.log(result);


// Challenge: Rewrite your first function from a previous challnge to be an arrow function. 
// Stretch goal: Rewrite counting down closure in arrow function form. 


// Challenge start/ fat arrow functions 
// const splitBill = (amount, numPeople) => `Each person needs to pay ${amount / numPeople}`

// console.log(splitBill(10, 2));
// console.log(splitBill(10, 4));
// console.log(splitBill(10, 5));


// // Stretch goal start
// const countdown = (startingNumber, step) => {
//   let countFromNum = startingNumber + step;
//   return () => {
//     countFromNum -= step;
//     return countFromNum;
//   }
// }

// const countingDown = countdown(20, 2);

// console.log(countingDown());
// console.log(countingDown());
// console.log(countingDown());
