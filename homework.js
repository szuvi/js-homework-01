"use strict";
// 1) From years in array check for leap years [1974, 1900, 1985, 2000]

const testArray1 = [1974, 1900, 1985, 2000];

for (let i = 0; i < testArray1.length; i++) {
  const year = testArray1[i];
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`1) ${year} is a leap year`);
  }
}

// 2) Calculate factorial of 7.

let factorial;

for (let i = 0; i <= 7; i++) {
  if (i === 0) {
    factorial = 1;
  } else {
    factorial *= i;
  }
}
console.log(`2) factorial of 7 is: ${factorial}`);

// 3) Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]

const testArray2 = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let oddSum = 0;

for (let i = 0; i < testArray2.length; i++) {
  const currNum = testArray2[i];
  if (currNum % 2 === 1) {
    oddSum += currNum;
  }
}
console.log(`3) oddSum of the odd numbers is ${oddSum}`);

// 4) Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.

const testArray3 = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let lowest;
let highest;

for (let i = 0; i < testArray3.length; i++) {
  const currNum = testArray3[i];
  if (lowest == undefined || currNum < lowest) {
    lowest = currNum;
  }
  if (highest == undefined || currNum > highest) {
    highest = currNum;
  }
}
console.log(`4) highest value is ${highest}, lowest value is ${lowest}`);

// 5) Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’].

const testArray4 = ["Karol", "Adam", "Rogowski", "Politechnika", "Super", "Weekend"];
let longest;

for (let i = 0; i < testArray4.length; i++) {
  const currString = testArray4[i];
  if (longest == undefined || currString.length > longest.length) {
    longest = currString;
  }
}
console.log(`5) longest string is "${longest}"`);

// 6) Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98].

const testArray5 = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let highestIndexArr;
let highest2;

for (let i = 0; i < testArray5.length; i++) {
  const currNum = testArray5[i];
  if (highest2 == undefined || currNum > highest2) {
    highestIndexArr = [i]; // resets highest indexes array and adds current index to it
    highest2 = currNum;
  } else if (highest2 === currNum) {
    highestIndexArr.push(i);
  }
}
console.log(`6) indexes of highest value are: ${highestIndexArr}`);

// 7) Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]

const testArray6 = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let evenSum = 0;
let numOfEvenNums = 0;

for (let i = 0; i < testArray6.length; i++) {
  const currNum = testArray6[i];
  if (currNum % 2 === 0) {
    evenSum += currNum;
    numOfEvenNums++;
  }
}
const avgOfEvenNums = evenSum / numOfEvenNums;

console.log(`7) average value of even numbers is ${avgOfEvenNums}`);

// 8) Calculate average value of items at even indexes. Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]

const testArray7 = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let evenIndexSum = 0;
let numOfEvenIndex = 0;

for (let i = 2; i < testArray7.length; i += 2) {
  evenIndexSum += testArray7[i];
  numOfEvenIndex++;
}

const avgOfEvenIndex = evenIndexSum / numOfEvenIndex;

console.log(`8) average value of items at even indexes is ${avgOfEvenIndex}`);

// 9) With a given start value of 0. Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]

const testArray8 = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let calculation = 0;

for (let i = 0; i < testArray8.length; i++) {
  const currNum = testArray8[i];
  if (currNum % 2 === 0) {
    calculation += currNum;
  } else {
    calculation -= currNum;
  }
}

console.log(`9) the result of the given calculation is: ${calculation}`);
