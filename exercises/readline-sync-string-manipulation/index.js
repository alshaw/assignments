var rs = require("readline-sync");
// Make one of the inputs all uppercase(i.e., given the string “hello” prints “HELLO”)
var greeting = rs.question('Hi, hey, hello. How are you today? \n');
console.log('Oh, I am also doing ' + greeting.toUpperCase() + '.');

// Report back the number of characters in a given input
var countChar = rs.question('What is your favorite season? \n');
// console.log(countChar ' is ' + ' characters long. \n');

// Concatenate (add) two separate strings together
var favAnimal = rs.question('What is your favorite animal? \n');
console.log('You like ' + greeting.concat() + ' ' + favAnimal);

// Given a long message(more than twenty letters), return only the last half of the message
var funFact = rs.question('Tell me the most fun fact you know. \n');
var lastHalf = funFact.substr(Math.floor(funFact.length / 2));