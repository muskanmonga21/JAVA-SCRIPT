"use strict";

// ac = 21;
// console.log(ac);
// it will not work when strict rule is used

let hasDL = false;
const passTest = true;

if (passTest) hasDL = true;
if (hasDL) console.log("I can Drive ");

// RESERVED WORDS
// interface, private
// const if =23;

// CALLING
function login() {
  // RUNNING
  console.log("muskan");
}

// INVOKING FUNCTION
login();
login();
login();
login();
login();

// CREATING A FUNCTION

function smoothie(oranges, pineapple, beetroot) {
  console.log(oranges, pineapple, beetroot);
  const bowl = `Smoothie Bowl of ${oranges} oranges , ${pineapple} pineapple and ${beetroot} beetroot`;
  return bowl;
}

const pineappleBowl = smoothie(1, 2, 1);
console.log(pineappleBowl);

const beetrootBowl = smoothie(2, 0, 4);
console.log(beetrootBowl);

// FUNCTION DECLARATION //

// In this function we can use the var before writing the function

const age1 = calcAge1(1995);
function calcAge1(birthYear) {
  // one way to write it
  // const age = 2023 - birthYear;
  // return age;

  // or we can simplly use
  return 2023 - birthYear;
}

// const age1 = calcAge1(1995);
console.log(age1);

// FUNCTION EXPRESSION //

// In this function we can NOT use the var before writing the function

const calcAge2 = function (birthYear) {
  return 2045 - birthYear;
};
// By printing calcAge2 the whole function will be printed as the function is written in the var
console.log(calcAge2);

const age2 = calcAge2(2002);
console.log(age2);
console.log(age1, age2);

// ARROW FUNCTION //

// In this function we can NOT use the var before writing the function

const calcage3 = (birthYear) => 2030 - birthYear;
const age3 = calcage3(2000);
console.log(age3);

const yearsUntilRetirement = (birthYear, fisrstNAme) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  // return retirement
  return `${fisrstNAme} retires in ${retirement} years.`;
};
console.log(yearsUntilRetirement(2002, "Muskan"));
console.log(yearsUntilRetirement(2005, "Bhumika"));

// FUNCTION CALLING OTHER FUNCTIONS

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);

  console.log(apples, oranges);
  const juice = `Make juice with ${applePieces} pices of apples and ${orangesPieces} piece of oranges.`;
  return juice;
}
console.log(fruitProcessor(4, 6));

const calAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearUntilRetirement = (birthYear, firstname) => {
  const age = calAge(birthYear);
  const retiermentAt = 65 - age;
  if (retiermentAt > 0) {
    console.log(`${firstname} retires in ${retiermentAt} years.`);
    return retiermentAt;
  } else {
    console.log(`${firstname} has already retired 😊`);
    return -1;
  }
};

console.log(yearUntilRetirement(1990, "muskan"));
console.log(yearUntilRetirement(1970, "other"));

// ARRAY //
const friend1 = "Rachel";
const friend2 = "Joey";
const friend3 = "Phoebe";

const friends = ["Rachel", "Monica", "Phoebe", "Chandler", "Joey", "Ross"];
console.log(friends);

console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

const years = new Array(1990, 1994, 1996, 2000, 2023);
console.log(years);

friends[2] = "Ursella";
console.log(friends);

// friends = ['mike', 'bob']   is not valid

const firstName = "Muskan";
const info = [
  firstName,
  "Monga",
  2024 - 2002,
  "Student",
  "has",
  friends,
  "friends",
];

console.log(info);
console.log(info.length);

// EXCERSICE //

const calcAge = function (birthyear) {
  return 2024 - birthyear;
};

const year = [1990, 2002, 2014, 2020];
const age01 = calcAge(year[0]);
const age02 = calcAge(year[1]);
const age03 = calcAge(year[2]);
const age04 = calcAge(year[year.lenght - 1]);
console.log(age01, age02, age03, age04);

const ages = [
  calcAge(year[0]),
  calcAge(year[1]),
  calcAge(year[2]),
  calcAge(year[year.length - 1]),
];
console.log(ages);

const friend = ["Rachel", "Remi", "David", "Tony", "Ben"];
console.log(friend);

// ADD ELEMENT IN ARRAY
// At the end
const addLength = friend.push("Ross");
console.log(friend);
console.log(addLength);

// In the start
friend.unshift("Jack");
console.log(friend);

// REMOVE ELEMENT FROM ARRAY
// Remove the last array
const popped = friend.pop();
console.log(popped);
console.log(friend);

// Remove from the start
friend.shift();
console.log(friend);

console.log(friend.indexOf("David"));
if (friend.includes("David")) {
  console.log("Your friend name is David");
}

// OBJECT //

const about = {
  firstName: "Muskan",
  lastName: "Monga",
  age: 2024 - 2002,
  job: "Student",
  like: "Coding",
  friend: ["Rachel", "Remi", "David", "Tony", "Ben"],
};

console.log(about);

// To access a certain variable from the object
// DOT NOTATION
console.log(about.age);

// BRACKET NOTATION
console.log(about["like"]);

const nameKey = "Name";
console.log(about["first" + nameKey]);
console.log(about["last" + nameKey]);

// In this case dot notation will not work
// console.log(about."last" + nameKey)

// Prompt
const interestedIn = prompt(
  "What do you want to know about Muskan? Choose between firstName, lastName, age, job, like and friend"
);

if (about[interestedIn]) {
  console.log(about[interestedIn]);
} else {
  console.log("Wrong Request!! Put the option correctly as it shows.");
}

about.location = "SIRSA";
about["X-handle"] = "@mongamuskan0";
console.log(about);

// CHALLENGE //
// bhavya has 3 freinds and his best friend is called micheal

const bhavya = {
  firstName: "Bhavya",
  friends: ["Micheal", "Steven", "Peter"],
};
console.log(bhavya);
console.log(bhavya["firstName"]);

console.log(
  `${bhavya["firstName"]} has ${bhavya.friends.length} freinds and his best friend is called ${bhavya.friends[0]}`
);
