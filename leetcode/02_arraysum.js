/*  Write a function that takes in an array of numbers and returns the sum of all the numbers in the array. */

const sumOfArray = (arr) => arr.reduce((a,b) => a+b, 0);

const array1 = [1,2,3,4,20];

const sum = sumOfArray(array1);
console.log("Sum : ", sum)