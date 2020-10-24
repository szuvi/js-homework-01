"use strict";

// No input verification in functions

// 1) From years in array check for leap years [1974, 1900, 1985, 2000]

function returnLeapYears(arr) {
  let leapYears = arr.filter((year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
  return leapYears;
}

// 2) Calculate factorial of n

function calcFactorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return calcFactorial(n - 1) * n;
  }
}

// 3) Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]

function calcSumOfOdd(arr) {
  let sum = arr.reduce((acc, item) => {
    if (item % 2 === 1) {
      acc += item;
    }
    return acc;
  }, 0);
  return sum;
}

// 4) Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.

function calcHighLow(arr) {
  let returnObj = arr.reduce((acc, item) => {
    if (typeof acc.highest !== "number" || item > acc.highest) {
      acc.highest = item;
    }
    if (typeof acc.lowest !== "number" || item < acc.lowest) {
      acc.lowest = item;
    }
    return acc;
  }, {});
  return returnObj;
}

// 5) Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’].

function returnLongestStr(arr) {
  let longest = arr.reduce((acc, item) => {
    return item.length > acc.length ? item : acc;
  });
  return longest;
}

// 6) Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98].

function returnInexesOfHighest(arr) {
  let retObj = arr.reduce((acc, item, index) => {
    if (typeof acc.highest !== "number" || item > acc.highest) {
      acc.indexes = [index];
      acc.highest = item;
    } else if (item === acc.highest) {
      acc.indexes.push(index);
    }
    return acc;
  }, {});
  return retObj.indexes;
}

// 7) Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]

function calcAvgOfEven(arr) {
  let evenNumbers = arr.filter((item) => item % 2 === 0);
  let sum = evenNumbers.reduce((acc, item) => (acc += item));
  return sum / evenNumbers.length;
}

// 8) Calculate average value of items at even indexes. Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]

function calcAvgOfEvenIdx(arr) {
  let numsAtEvenIdx = arr.filter((item, index) => index > 0 && index % 2 === 0);
  let sum = numsAtEvenIdx.reduce((acc, item) => (acc += item));
  return sum / numsAtEvenIdx.length;
}

// 9) With a given start value of 0. Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]

function calcOddEven(arr) {
  let returnArr = arr.reduce((acc, item) => {
    if (item % 2 === 0) {
      acc += item;
    } else {
      acc -= item;
    }
    return acc;
  }, 0);
  return returnArr;
}

// Test cases

console.log(`1) leap years: ${returnLeapYears([1974, 1900, 1985, 2000])}`);
console.log(`2) factorial of 7: ${calcFactorial(7)}`);
console.log(`3) sum of odd items is: ${calcSumOfOdd([1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98])}`);
let ex4result = calcHighLow([1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98]);
console.log(
  `4) the lowest number is ${ex4result.lowest}, the highest number is ${ex4result.highest}`
);
console.log(
  `5) longest string is: "${returnLongestStr([
    "Karol",
    "Adam",
    "Rogowski",
    "Politechnika",
    "Super",
    "Weekend",
  ])}"`
);
console.log(
  `6) indexes of highest numbers are: ${returnInexesOfHighest([
    1,
    6,
    23,
    8,
    4,
    98,
    3,
    7,
    3,
    98,
    4,
    98,
  ])}`
);
console.log(
  `7) average of even numbers is: ${calcAvgOfEven([1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98])}`
);
console.log(
  `8) average of numbers at even indexes: ${calcAvgOfEvenIdx([
    1,
    6,
    23,
    8,
    4,
    98,
    3,
    7,
    3,
    98,
    4,
    98,
  ])}`
);
console.log(
  `9) result of calculation is: ${calcOddEven([1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98])}`
);
