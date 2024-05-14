🧩 JS: Conditionals

🧩 JS: Conditionals
Completion requirements

Conditionals
Overview
If this... then that

Conditionals are how we make decisions in our code. They're how your weather app uses the local temperature and cloud cover to decide whether to show a bright sun or rain clouds.

It goes like this: "IF (condition is true) THEN {do this thing} ELSE {do this other thing}".

If (it's raining), { take an umbrella }. Otherwise, { leave it at home }. If (isSunny === true) { showSun() } else { showClouds() }

Class Plan
Demo: Demonstration of conditionals and how they work
Workshop: Write some code to make some simple decisions
Topics
What is a conditional?
How to write a conditional
How to use a conditional
Boolean values
Resources
MDN: Conditional statements
MDN: if...else
MDN: Comparison operators
Workshop
All conditionals evaluate to true or false. Computers are binary in that way. We set a condition that we expect to be true, and if it is we run a block of code (wrapped in {}).

If you're asked whether ten is greater than five, you would say yes, that's true. If you're asked whether ten is less than five, you would so no, that's false.

In JavaScript you can think of it in the same way.

The name "James" is greater than 6 characters in length. True or false? False

The name "James" is less than 6 characters long. True or false? True

if this... then that
The if statement is one of the most fundamental and most powerful constructs in computer programming.

if (1 > 0) {
  console.log("1 is greater than 0");
}

let age = 10;
let legalDrivingAge = 17;

if (age > legalDrivingAge) {
  console.log("You can drive!");
}
 
// assume you're not old enough to drive
let isRoadLegal = false; // boolean does change after checks

// set age and legal driving age
const age = 18; // const: age doesn't change during the running program
const legalDrivingAge = 17;

if (age > legalDrivingAge) {
  isRoadLegal = true;
}

console.log("Am I road legal?", isRoadLegal);
 
The if statement takes a condition, and if that condition is true, it runs the code inside the curly brackets.

if... else
The else block adds an alternative block of code to run when the condition evaluates to false. It's the alternative branch to run. In a weather app, if it's sunny, show the sun image. else show the clouds image.

let age = 10;
let legalDrivingAge = 17;

if (age > legalDrivingAge) {
  console.log("You can drive!");
} else {
  console.log("You can't drive yet!");
}
 
if ... else if... else
You can extend this with a number of checks in succession using the else if statement.

let age = 17;
let legalDrivingAge = 17;

if (age > legalDrivingAge) {
  console.log("You're old enough to drive!");
} else if (age === legalDrivingAge) {
  console.log("You're just old enough to drive!");
} else {
  console.log("You can't drive yet!");
}
 
🎯 Check the age against all the movie ratings. Add an age and a movieRating variable and write a set of if, if else, and else statements to log out whether someone is allowed in to the cinema to watch a movie. The UK ratings are U, PG, 12, 15, and 18.

let age = 17;
let movieRating = "PG";

if (age > 17) {
  console.log("You can watch any movie!");
} else if (age === 17) {
  if (movieRating === "PG") {
    console.log("You can watch the movie!");
  }
  // ...
}
 
const vs let
There are two primary ways to declare a variable in JavaScript: const and let. They're similar, except const values are not allowed to change during the execution of the code.

Your answer
