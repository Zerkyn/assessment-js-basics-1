//////////////////PROBLEM 1////////////////////
/* Create a variable called 'myName' with a value that is your name as a string. */

//CODE HERE 
// declared and set the myName variable to my name
const myName = 'Ryan'

//////////////////PROBLEM 2////////////////////
/* Create a variable called 'faveNum' with a value that is your favorite number. */

//CODE HERE
// declared and set the faveNum variable to a number
let faveNum = 5

//////////////////PROBLEM 3////////////////////
/* Create a variable called 'lovesCode' and assign it a boolean value. */

//CODE HERE
// declared a lovesCode and set it to true
let lovesCode = true

//////////////////PROBLEM 4////////////////////
/*
  Write an if-statement that checks if the faveNum variable is 
  equal to 13. If it is, console.log('lucky 13!'). 
  If it's not, console.log('not lucky 13').
*/

//CODE HERE
// this checks to see if faveNum equaled 13
if (faveNum === 13) {
  //this prints "lucky 13" if set true
  console.log('lucky 13!')
} else {
  //this prints not "lucky 13" if set to false
  console.log('not lucky 13')
}

//////////////////PROBLEM 5////////////////////
/*
  Write a for loop that prints out your faveNum 5 times.
*/

//CODE HERE
// this runs a loop 5 times and prints faveNum each loop
for (let i = 0; i < 5; i++) {
  console.log(faveNum)
}