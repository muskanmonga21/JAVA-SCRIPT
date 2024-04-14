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
