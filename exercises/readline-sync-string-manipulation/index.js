var rs = require("readline-sync");
// Make one of the inputs all uppercase(i.e., given the string “hello” prints “HELLO”)
var greeting = rs.question('Hi, hey, hello. How are you today? \n');
console.log('Oh, I am also doing ' + greeting.toUpperCase() + '.');

// Report back the number of characters in a given input
var favSeason = rs.question('What is your favorite season? \n');
console.log("Your favorite season has " + favSeason.length + " letters in it!");

// Concatenate (add) two separate strings together
var favAnimal = rs.question('What is your favorite animal? \n');
console.log('You like ' + greeting.concat() + ' ' + favAnimal);

// Given a long message(more than twenty letters), return only the last half of the message
var funFact = rs.question('Tell me the most fun fact you know. \n');

var halfFact = function (funFact) {
  if (funFact.length >= 20) {
    var shortFact = funFact.length / 2;
  } else {
    return funFact;
  }
  return funFact.slice(shortFact, funFact.length);
}

console.log(halfFact(funFact) +  " is only half of your fact");

var location = rs.question("What is favorite number between 0 and " + funFact.length + '\n');

var favNumber = function (funFact, location) {
  return funFact.slice(location, funFact.length);
}

console.log(favNumber(funFact, location));