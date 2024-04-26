// PHASE - 1 //

let js = "Amazing";
// if(js === "Amazing") alert("Javascript is FUN!!");

console.log(34 + 77 + 45 + 45 - 54 - 76);

console.log("Muskan");
console.log(23);

let firstName = "Bhumika";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Valid VARIABLES//
// let first = "Bhumika";
// let firstNamePerson;
// // [This is called camel case (FirstNamePerson)]
// letfirst_name_person;
// let_function;
// birthYear = 2019

// INVALID VARIABLES//
// let function = 23;
// let bhumika&bhumi = "SAME";
// let new = 25;
// let 1;

let person = "Bhumika";
let PI = 3.14;
console.log(PI);

let myFirstJob = "Coder";
let myCurrentJob = "teacher";

letjob1 = "Programmer";
let job2 = "Teacher";

console.log(myFirstJob);
console.log(job2);

// PHASE - 2 //

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof false);
console.log(typeof javascriptIsFun);

let elvishYadav = false;
console.log(typeof elvishYadav);
console.log(typeof "elvishYadav");

let year;
console.log(year);
console.log(typeof year);

year = 2024;
console.log(year);
console.log(typeof year);

// DAY 02
// let, const, var//
// PHASE - 1

let age = 40;
console.log(age);
age = 57;
console.log(age);

const birthYear = 1995;

job = "Advocate";
var job = "Coder";
console.log(job);

secondName = "Arora";
console.log(secondName);

const now = 2045;
const ageBhumika = now - 2024;
const ageMuskan = now - 2021;
console.log(ageBhumika, ageMuskan);

console.log(ageBhumika * 2, ageMuskan / 10, 6 ** 3);
console.log(ageBhumika * 4, ageMuskan / 10, 4 ** 2);
// 4 ** 2 means 4 to the power of 2 = 4 * 4 * 4

const theFirstName = "Bhumika";
const lastName = "Bhatia";
console.log(firstName + " " + lastName);

let x = 10 + 10 - 25; // 5
x += 40; // x = x + 10 = 45
x *= 5; // x = x * 4 = 174

x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// Comparison operator
console.log(ageBhumika > ageMuskan); // >, <, >=, <=
console.log(ageMuskan >= 21);

const isFullAge = ageMuskan >= 21;

console.log(now - 1995 > now - 2020);

const then = 2030;
const ageNarula = then - 2005;
const ageMonga = then - 2002;
console.log(ageNarula, ageMonga);

let z, y;
z = y = 45 - 10 - 5 + 6 * 2;
console.log(z, y);

const averageAge = (ageNarula + ageMonga) / 2;
console.log(averageAge);

const nameFirst = "Muskan";
const myJob = "Web Developer";
const yearBirth = 2002;
const futureYear = 2039;

const msg =
  "I'm " +
  nameFirst +
  " , a " +
  (futureYear - yearBirth) +
  " years old " +
  myJob +
  " !";
console.log(msg);

const msgNew = `I'm ${nameFirst}, a ${
  futureYear - yearBirth
} years old ${myJob} !`;
console.log(msgNew);

console.log(`Just a regular string.....`);

// \n\ to write anything in multiple lines.
console.log(
  "String with \n\
can be done \n\
in multiple \n\
lines. "
);

const ageIs = 18;
if (ageIs >= 20) {
  console.log("Bhumika can drive, hopefully safely now");
} else {
  const yearLeft = 20 - ageIs;
  console.log("Bhumika is driving safely now");
}

// DAY - 4 //

let currYear = "2024";
console.log("In 10 years, it will be " + currYear + 10);
let curYear = 2024;
console.log("In 10 years, it will be " + curYear + 10);
console.log("In 10 years, it will be " + Number(currYear) + 10);
// [In each case it current year will become string because of +]

console.log(Number(currYear) + 10);

console.log(typeof NaN);

// console.log(Number(Br1237));
console.log(String(20), 20);

// PRIORITY [*, /, +, -]

// TYPE COERCION //
console.log("25" - "10" - 5); //10
console.log("25" + "10" + 5); //25105
console.log("25" * "2"); //50
console.log("46" / 2); //23
console.log("46" > "2"); //true

console.log("25" + "10" - 5); // 2507
console.log("25" - "10" + 5); // 20
console.log("25" - "10" + "5"); //  155
console.log(2 + 3 + 4 + "5"); // 95

// Day - 5 //

// 5 falsy value: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Bhavya"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't Spend it all :) ");
} else {
  console.log("Get a job");
}

let height;
if (height) {
  console.log("YaY! height is defined");
} else {
  console.log("height is undefined");
}

// Equality operator == vs ===

const ageToBe = 21;
if (ageToBe === 21) console.log("You just became an adult :D");

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite == 22) {
//   console.log("Cool! 22 is an amazing number!");
// } else if (favourite === 6) {
//   console.log("6 is a cool number");
// } else if (favourite === 8) {
//   console.log("8 is a cool number!");
// } else {
//   console.log("Number is not 22 or 8 or 6");
// }

// !== (loose), !=== (Strict)

// if (favourite !== 22) console.log("Why not 22?");

// DAY 6 //

const hasDL = true;
// const hasGoodVision = false;

// && [AND], || [OR], ! [NOT]

// console.log(hasDL && hasGoodVision);
// console.log(hasDL || hasGoodVision);
// console.log(!hasDL);

// const hasGoodVision = true;
// const shouldDrive = hasDL && hasGoodVision;
// if (hasDL && hasGoodVision) {
//   console.log("Bhumika is now able to drive");
// } else {
//   console.log("Someone else should drive....");
// }

// const isTried = true;
// console.log(hasDL && hasGoodVision && !isTried);

const day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("Go to goa");
    console.log("Go to coding meetup");
    break;
  case "Tuesday":
    console.log("Prepare meetup details");
    break;
  case "Wednesday":
    console.log("Write code example");
    break;
  case "Thrusday":
    console.log("DO the correction needed");
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
} else if (day === "tuesday") {
} else if (day === "wednesday") {
} else {
  console.log("Not a valid day!!!");
}

const theAge = 23;

// age >= 18
//   ? console.log("I like to drink Wine🍷")
//   : console.log("I like to drink Water💧");

const drink = age >= 18 ? "I like to drink Wine🍷" : "I like to drink Water💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine🍷";
} else {
  drink2 = "Water💧";
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "Wine🍷" : "Water💧"}`);

// CHALLANGE 4 //
// DATA
