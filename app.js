console.log("Conditionals study");
console.dir(document);

if (1 > 0) {
    console.log("1 is more than 0");
}

if (7 < 4) {console.log("1 < 0");}
//it doesn't work because the statement is false

let (myAge = 18);

let (legalDrivingAge = 17);

const section = document.querySelector("section");

if (age > legalDrivingAge) {console.log("you can drive");}

let isRoadlegal = false;

if (age > legalDrivingAge) {isRoadlegal = True;}

console.log("Im i road legal", isRoadlegal);


//if ...else
let (age = 17);

let (legalDrivingAge = 17);


if (age > legalDrivingAge) {console.log("You're old enough to drive");}

else if (age === legalDrivingAge) {console.log("you are just old enough to drive");}

else console.log("you can't drive");

///if ..else if ....else
let (age = 17);
let (legalDrivingAge = 17);
if (age > legalDrivingAge) {console.log("You're old enough to frive");}
else if (age === legalDrivingAge) {console.log("You're just old enough to drive");}
else {console.log("You can't drive yet");}

let age = 17;
let movieRating = "18";

if (age < 18) {
  console.log("You cannot watch any movie!");
} else if (age === 18) {
  if (movieRating === "18") {
    console.log("You can watch the movie!");}
}