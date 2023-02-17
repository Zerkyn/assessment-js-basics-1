//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

//CODE HERE
// this variable makes a copy of the faveColors array using the slice method
let colorCopy = faveColors.slice(0, faveColors.length)

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE
// this adds the color purple to the faveColors array
colorCopy.push('purple')

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]

//CODE HERE
// this splice method gets the numbers 2, 3, & 4 from the array
let middleNums = numbers.splice(1, 3)

//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]

// CODE HERE

let answers = []

for (let i = 0; i < bigOrSmallArray.length; i++) {
  //this checks if the numbers in bigOrSmallArray are greater or less than 100
  if (bigOrSmallArray[i] > 100) {
    //this adds the word big if the number is greater than 100
    answers.push('big')
  } else {
    // this adds the word small if the number is less than 100
    answers.push('small')
  }
}
console.log(answers)