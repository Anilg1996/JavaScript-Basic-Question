// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student. Input: The first line of the input is the marks of the five subjects mentioned above, respectively. Output: Print the result in 2 decimal places.

// Practice Problem 2

// Sample Input: 75.25, 65, 80, 35.45, 99.50 Output: 71.04


let mathematicsResult = 75.25;
let biologyResult = 65;
let chemistryResult = 80;
let physicsResult = 35.45;
let banglaResult = 99.50;

let totalMarks = mathematicsResult + biologyResult + chemistryResult + physicsResult + banglaResult;

let averageMarks = totalMarks / 5 ;

let averageMarksIn2Deci = averageMarks.toFixed(2);

console.log(parseFloat(averageMarksIn2Deci));