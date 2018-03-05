// The parameter weekday is true if it is a weekday, and the parameter vacation 
// is true if we are on vacation. We sleep in if it is not a weekday or we're on 
// vacation. Return true if we sleep in.

// var sleepIn = function (weekday, vacation) {
//   if (weekday) {
//     return sleepIn = false;
//   } else {
//     return sleepin = true;
//   }
// };


//////////////////////////////////////////////////////

// Given an int n, return the absolute difference between n and 21,
// except return double the absolute difference if n is over 21.

// var diff21 = function (n) {

// };

/////////////////////////////////////////////////////
//given an int n, return true if it is within 10 of 100 or 200

nearHundred = function (n) {
  return Math.abs(n - 100) <= 10 || Math.abs(n - 200) <= 10;
};