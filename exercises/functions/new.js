// Write a function that accepts two numbers as parameters, and returns the sum.
// var add = function(a, b) {
//   return a + b;
// };
// console.log(add(6, 4));


// Write a function that accepts three numbers as parameters, 
// and returns the largest of those numbers.
// var largestNumber = function(a, b, c) {
//   return Math.max(a, b, c);
// };

// console.log(largestNumber(7, 8, 10));


// Write a function that accepts one number as a parameter, 
// and returns whether that number is even or odd. 
// (Return the string "even" or "odd");
// var evenOrOdd = function (a) {
//   if (a % 2 === 0)
//     return "Even";
//   else
//     return "Odd";
// };

// console.log(evenOrOdd(6));


// Write a function that accepts a string as a parameter.
// If the length of the string is less than or equal to twenty 
// characters long, return the string concatenated with itself(string + string).
// If the string is more than twenty characters long, return the first half of the string.

// function stringLength(str) {
//     if (str.length <= 20) {
//         return str + str;
//     } else if (str.length > 20) {
//         var halfStr = str.length / 2;
//         return str.slice(0, halfStr);
//     }
// }

// var stringLength = function(str) {
//     if (str.length <= 20) {
//         return str + str;
//     } else if (str.length > 20) {
//         var halfStr = str.length / 2;
//         return str.slice(0, halfStr);
//     }
// };

// console.log(stringLength('Oh hai Mark. oh hai hai hai hai'));

// Write a function that accepts a string as a parameter. Return the most frequently occuring letter in that string.

// function frequentLetters(str) {
//     var chars = str.split("");
//     var letterCount = {};
//     var maxCount; 

//     for (var i = 0; i < chars.length; i++) {
//         if (letterCount[chars[i]] === undefined) {
//             letterCount[chars[i]] = 1;
//         } else {
//             letterCount[chars[i]]++;
//         }
//     }
//     for (var i in letterCount) {
//         if (maxCount === undefined) {
//             maxCount = i;
//         } else if (letterCount[i] > letterCount[maxCount]) {
//             maxCount = i;
//         }
//     }
//     return maxCount;
// }

// console.log(frequentLetters("Hai hai hihihihi"));

////////////////////////////////////

// function addToPage(x, y) {
//   document.getElementById('results').innerHTML += add(1, 2)
// }

// var z = 45

// addToPage(4);

// function add(y) {
//   z = 2
//   return x + y
// }

