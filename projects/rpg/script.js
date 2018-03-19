var rs = require("readline-sync")
// Console greats player with a fun message
console.log("Welcome this super duper fun game!")
// Console asks players name and stores it
var playerName = rs.question("Whats is your name, player? ")
console.log("Hello, " + playerName);

//losecon is if points read 0;
//wincon is up to you (ex: kill three enemies you win)

// player object
var player = {
  name: playerName,
  hp: 100,
  attack: undefined,
  enemiesKilled: 0
}

// constructor enemy function to create a blueprint for all enemies
var Enemy = function() {
  this.attack = Math.floor(Math.random() * 20) + 10
  this.hp = 50;
  // this.name = 
  //etc.
}

// while loop continues as long as my hp > 0, or my wincon is not met
// while (player.hp > 0 && player.enemiesKilled < 3) {

// }

// console asks user to enter 'w' to walk
// if/else statment - if play enters 'w', a wild enemy has 1/3 chance of appearing
// else - "sorry, try typing 'w'"
