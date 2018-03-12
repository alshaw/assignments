//user should be able to pick flowers
//and keep looping if they pick flowers
//user should be able to shoot guns 
//and keep looping if they shoot guns
//user should be able to fight bears 
//and end the program if they select fight bears
//tell them to select an option if they choose cancel

var ask = require("readline-sync");

var options = ['pick flowers', 'shoot guns', 'fight bears'];
var option = 'undecided';

while(option != 'fight bears'){
  ask.keyInSelect(options, "What would you like to do today?: ");
  if(option = 'pick flowers'){
    console.log("You pick some flowers. You make a bouquet.");
  } else {
    console.log("You shoot guns.");
  }
}

console.log("You fought a bear and got beat up!");
