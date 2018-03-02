// Prelims
// for loop the prints to the console numbers 0 through 9
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// for loop that prints to the console 9 through 0
//INCOMPLETE
// for (var i = 9; i < 10; i++) {
//   console.log(i);
// }


// for loop that prints fruits to the console
// var fruits = ["kiwis", "strawberries", "oranges", "peaches", "bananas"]
// console.log(fruits);

/////////////////////////////////////////////
// Bronze

// for loop that will push the numbers 0 through 9 to an array
// var numbers = [];
// for (var i = 0; i < 10; i++) {
//   numbers.push(i);
// }

// console.log(numbers);

// for loop that prints to the console only even numbers 0 through 100
// for (var i = 0; i < 101; i +=2) {
//   console.log(i);
// }

// for loop that will push every other fruit to an array
// var fruits = ["kiwis", "strawberries", "oranges", "peaches", "bananas"]
// for (var i = 0; i < fruits.length; i += 2) {
//   console.log(fruits[i]);
// }

/////////////////////////////////////////////////
// Silver
// var peopleArray = [
//   {
//     name: "Harrison Ford",
//     occupation: "Actor"
//   },
//   {
//     name: "Justin Bieber",
//     occupation: "Singer"
//   },
//   {
//     name: "Vladimir Putin",
//     occupation: "Politician"
//   },
//   {
//     name: "Oprah",
//     occupation: "Entertainer"
//   }
// ];

// loop that will print out all of the names of all of the people array
// for (var i = 0; i < peopleArray.length; i++) {
//   console.log(peopleArray[i].name);
// }

// loop that pushes the names into a a names array, and the occupations into an occupations array.
// names = [];
// occupation = [];

// write a loop that pushes every other name to an array starting with "Harrison Ford", and every other occuaption to another array statign with "Singer"

/////////////////////////////////////////////
// Gold

// 1. Create an array that mimics a grid like the following using for loops

// 2. Create an array that mimics a grid like the following using for loops
var output = [];
for (var i = 0; i < 3; i++) {
  output.push([]);
  for (var j = 0; j < 3; i++){
    output.push([i]);
  }
}

console.log(output);

