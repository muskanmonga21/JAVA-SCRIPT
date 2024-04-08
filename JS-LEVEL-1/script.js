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
// CHALLENGE //
// let name1 = Mark;
// let name2 = John;

// BMI = mass/height**2=mass/(height*height)   [mass is in kg and height in meter]

// let markHighBMI = Mark > John;
// DATA - 1
const markMass = 78;
const markHeight = 1.69;
const BMIOfMark = markMass / markHeight ** 2;

const johnMass = 92;
const johnHeight = 1.95;
const BMIOfJohn = johnMass / johnHeight ** 2;

const markHighBMI = BMIOfMark > BMIOfJohn;
console.log(BMIOfMark, BMIOfJohn, markHighBMI);
// DATA - 2
const massOfMark = 95;
const heightOfMark = 1.88;
const BMIMark = massOfMark / heightOfMark ** 2;

const massOfJohn = 85;
const heightOfJohn = 1.76;
const BMIJohn = massOfJohn / heightOfJohn ** 2;

const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

// 1st PART

console.log(
  "Mark's BMI " + BMIOfMark + " is higher than John's " + BMIOfJohn + " !"
);

// 2nd PART

const msgNew1 = `Mark's BMI  ${BMIMark} is higher than Jjohn's  ${BMIJohn}!`;
console.log(msgNew1);

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
