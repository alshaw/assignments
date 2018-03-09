var rs = require("readline-sync");

//prompts
// get one number
var num1 = rs.question("pick an integer.");
// get another number
var num2 = rs.question("pick another integer.");
// choose operation
var operations = ["+", "-", "*", "/"];
var index = readLinSync.keyInSelect(operations, "Choose the operation you wish to perform");

//chooser function 
  // selects which arithmetic function to perform, 
  // and calls it using the numbers as arguments

//arithmetic functions

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function subtract(x, y) {
  return x - y;
}