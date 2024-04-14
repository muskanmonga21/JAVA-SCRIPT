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
