//This gets hoisted to the top. Don't use this one.
// function sayHi() {
//   console.log("Hey there!");
// }
// sayHi()

// another way to declare functions
// var sayHi = function() {
//   console.log("Hey there!");
// };

// sayHi()

///////////////////////////////////
//Parameters
// var sayHi = function(name) {
//   console.log("Hey " + name);
// };

// sayHi("allie");

//////////////////////////////////
// var add = function(a, b) {
//   return a + b;
// };

// var sum = add(2, 4);
// console.log(add(sum, 10));

///////////////////////////////////
//variables declared in a function only exist in a function, they are scoped to the function
// var name = "Django";

// var modifyName = () {
//   name = "CLONE WARS WAS THE BEST STAR WARS";
// }
// modifyName();
// console.log(name);
///////////////////////////////////////
var titleCaseAllArrayItems = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    var currMovie = arr[i];
    var titleCased = titleCaseIt(currMovie);
    console.log(titleCased);
  }
}

var titleCaseIt = function (str) {
  return str.split(" ").map(function (item) {
    return item[0].toUpperCase() + item.slice(1);
  }).join(" ");
}

var movies = ["a river runs through it", "star wars", "step brothers", "the matrix"];
var books = ["a river runs through it", "star wars", "where the red fern grows", "moby dick"];

titleCaseAllArrayItems(movies);
titleCaseAllArrayItems(books);