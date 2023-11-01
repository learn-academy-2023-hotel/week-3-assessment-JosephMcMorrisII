// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

 //const fibonacciLength1 = 6
// // Expected output: [1, 1, 2, 3, 5, 8]

// describe("myFibonacci", () => {
//   it("returns an array containing the Fibonacci sequence", () => {})
//   expect(myFibonacci(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
// })

//const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

// const myFibonacci = (fibonacciLength1) => {
//   const newArray = [1, 1]
//   let index = 0
//   for (let i = 1; i < fibonacciLength1 - 1; i ++) {
//     let sum = newArray [index] + newArray[i]
//     newArray.push(sum)
//     index ++
//   }   
//   return newArray
// }
// console.log(myFibonacci(fibonacciLength1))

// Pseudo code: 
// input: a number greater than 2
// Output: array containing the Fibonacci sequence and the number of elements is going to correlate to the number you assign it.
// Create a new function called myFibonacci
// Create a new variable that is the starting point for the new array
// Set variable index = 0
// Create a for loop to iterate a new array thats correlates to have 6 elements in the new array
// Create a new placeholder for the new values for the new array
// Add those new values to the end of the existing array
// Add 1 to the index each iteration



// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// describe("myObjectValues", () => {
//   it("returns an array of values sorted from least to greatest",() => {
//   expect(myObjectValues(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
//   expect(myObjectValues(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
//   })
// })

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}

// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

function myObjectValues(obj) {
  const values = Object.values(obj);
  values.sort((a, b) => a - b);
  return values;
}

console.log(myObjectValues(studyMinutesWeek1))
console.log(myObjectValues(studyMinutesWeek2))
// Pseudo code:

// input: obj
// output: Return array of objects from least to greatest
// Create a new function called myObjectValues
// The `Object.values(obj)` method is used to extract all the values of the properties and store them in an array.
// use dot notation .sort to get arrange the values from least to greatest
