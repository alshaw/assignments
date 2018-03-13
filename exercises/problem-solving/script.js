//Function that takes an array of numbers and returns the largest
// (without using Math.max())

function largestNumber([a, b, c, d, e, f, g, h, i, j]) {
  var arr = [a, b, c, d, e, f, g, h, i, j];
  var largest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(largestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


//Function that takes an array of words and a character
//and returns each word that has that letter present

function lettersWithStrings(arr, x) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(x) !== -1) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
console.log(lettersWithStrings(["lemons", "zoo", "zonkers", "dogz", "beer"], "z"));

//Function that takes num1 and num2 and returns
//whether num1 is divisible by num2
var isDivisible = function (number) {
  if (isNaN(number)) {
    return "Your input was not a number!"
  }
  else if (number % 2 === 0) {  
    return true;
  } 
  else {
    return false;
  }
};
console.log(isDivisible(3));
