// CHALLENGE //
// let name1 = Mark;
// let name2 = John;

// BMI = mass/height**2=mass/(height*height)   [mass is in kg and height in meter]

// let markHighBMI = Mark > John;
// DATA - 1
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const BMIOfMark = markMass / markHeight ** 2;
const BMIOfJohn = johnMass / johnHeight ** 2;
const markHighBMI = BMIOfMark > BMIOfJohn;
console.log(BMIOfMark, BMIOfJohn, markHighBMI);
// DATA - 2
const massOfMark = 95;
const heightOfMark = 1.88;
const massOfJohn = 85;
const heightOfJohn = 1.76;

const BMIMark = massOfMark / heightOfMark ** 2;
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

// CHALLENGE 3 //
//  DATA
// const dolphin = [96, 108, 89];
// const dolphinBonus1 = [97, 112, 101];
// const dolphinBonus2 = [97, 112, 101];
// const koala = [88, 91, 110];
// const koalaBonus1 = [109, 95, 123];
// const koalaBonus2 = [109, 95, 106];

const dolphinavg = 96 + 108 + 89 + 97 + 112 + 101 + 97 + 112 + 101;
console.log(dolphinavg / 9);
const koalaavg = 88 + 91 + 110 + 109 + 95 + 123 + 109 + 95 + 106;
console.log(dolphinavg / 9);

// compare avg scores
if (dolphinavg > koalaavg) {
  console.log("Dolphin wins!!");
} else if (dolphinavg < koalaavg) {
  console.log("Koala Wins!!");
} else {
  console.log("It's a Draw!");
}

// JS-LEVEL-2 //
//  CHALLENGE-1 //
// Data1
const dolphinScores = [44, 23, 71];
const koalaScores = [65, 54, 49];
console.log(dolphinScores.length);
// Calculate average score
const calcAverage = {
  avgDolphins: 44 + 23 + 71 / dolphinScores.length,
  avgKoalas: 65 + 54 + 49 / koalaScores.length,
};
console.log(calcAverage);

if (calcAverage.avgDolphins >= 2 * calcAverage.avgKoalas) {
  console.log(
    `Dolphins win (${calcAverage.avgDolphins} vs ${calcAverage.avgKoalas})`
  );
} else if (calcAverage.avgDolphins <= 2 * calcAverage.avgKoalas) {
  console.log(
    `Koalas win (${calcAverage.avgKoalas} vs ${calcAverage.avgDolphins})`
  );
}

// Data2
const dolphinScore = [85, 54, 41];
const koalaScore = [23, 34, 27];
console.log(dolphinScores.length);
// Calculate average score
const calcAvg = {
  avgDolphin: 85 + 54 + 41 / dolphinScore.length,
  avgKoala: 23 + 34 + 27 / koalaScore.length,
};
console.log(calcAvg);

if (calcAvg.avgDolphin >= 2 * calcAvg.avgKoala) {
  console.log(`Dolphins win (${calcAvg.avgDolphin} vs ${calcAvg.avgKoala})`);
} else if (calcAvg.avgDolphin <= 2 * calcAvg.avgKoala) {
  console.log(`Koalas win (${calcAvg.avgKoala} vs ${calcAvg.avgDolphin})`);
}
