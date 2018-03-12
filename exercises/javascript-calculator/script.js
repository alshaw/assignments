var rs = require("readline-sync")

var num1 = rs.question("What is the first number? ");
var num2 = rs.question("What is the second number? ");
var operator = rs.question("What is the operator? ");

var math = function (num1, num2, operator) {
  return num1 + " " + operator + " " + num2;
}

var result = function (num1, num2, operator) {
    if (operator === '+') {
      return "The result is " + add(num1, num2);
    } else if (operator === '-') {
      return "The result is " + subtract(num1, num2);
    } else if (operator === '*') {
      return "The result is " + multiply(num1, num2);
    } else if (operator === '/') {
      return "The result is " + divide(num1, num2);
    } else {
      return "Please enter a valid operator."
    }
  } 

var add = function (num1, num2) {
  return +num1 + +num2
}

var subtract = function (num1, num2) {
  return +num1 - +num2
}

var multiply = function (num1, num2) {
  return +num1 * +num2
}

var divide = function (num1, num2) {
  return +num1 / +num2
}

console.log(result(num1, num2, operator));