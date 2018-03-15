var rs = require("readline-sync")
console.log("welcome to my game!")
var playerName = rs.question("Whats is your name, player?");
//losecon is if points read 0;
//wincon is up to you (ex: kill three enemies you win)

//while loop continues as long as my hp > 0, or my wincon is not met

var player = {
  name: playerName,
  hp: 100,
  attack: undefined,
  enemiesKilled = 0
}

var Enemy = function() {
  this.attack = Math.floor(Math.random() * 20) + 10
  this.hp = 50;
  //etc.
}

while (player.hp > 0 && player.enemiesKilled < 3) {

}

