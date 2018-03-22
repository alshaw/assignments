var rs = require("readline-sync");
console.log("Welcome this super duper fun game!");
var playerName = rs.question("Whats is your name, player? ");
console.log("Hello, " + playerName);


//losecon is if points read 0;
//wincon is up to you (ex: kill three enemies you win)

// player object
var player = {
  name: playerName,
  hp: 100,
  attack: undefined,
  enemiesKilled: 0,
  inventory: []
};

// constructor enemy function to create a blueprint for all enemies
var Enemy = function() {
  this.type = getRandomType();
  this.attack = Math.floor(Math.random() * 20) + 10;
  this.hp = 50;
  //etc.
};

var getRandomType = function() {
  var enemyTypes = ["Ancient Dragon", "Prowler", "MightyGrunt"];
  var randIndex = Math.floor(Math.random() * enemyTypes.length);
  return enemyTypes[randIndex];
};

Enemy.prototype.genHitPoints = function() {
  switch(this.type) {
    case "Ancient Dragon":
      return Math.floor(Math.random() * 21) + 80;
    case "Prowler":
      return Math.floor(Math.random() * 30) + 50;
    case "Mighty Grunt":
      return Math.floor(Math.random() * 30) + 20;
  }
};

// function printEnemies() {
//   for (var i = 0; i < 100; i++) {
//     console.log(new Enemy());
//   }
// }


// while loop continues as long as my hp > 0, or my wincon is not met
while (player.hp > 0 && player.enemiesKilled < 3) {
  var playerCommand = rs.question("Type 'w' to walk... ");

  if (playerCommand === "w") {
    if(Math.floor(Math.random() * 100) > 60) {
      var enemy = new Enemy();
      console.log(enemy.type + " has appeared!");

      while (enemy.hp > 0) {
        var action = rs.question("Type 'a' to attack or 'r' to run. ")

        if (action === 'a') {
          var attackDamage = Math.floor(Math.random() * (50 - 10 + 1) + 10);
          enemy.hp = enemy.hp - attackDamage;
          if (enemy.hp <= 0) {
            console.log("You killed the " + enemy.type);
            player.enemiesKills++;

          } else {
            console.log("You hit the " + enemy.type + " for " + attackDamage);
          }
          player.hp = player.hp - enemy.attack;
          console.log("Your hp is " + player.hp);
          if (player.hp <= 0) {
            console.log("You died");
            break;
          }
        } else if (action === 'r') {
          console.log("You escaped!");
        }
      }
    }
  } else if (playerCommand === "info") {
    console.log("Your inventory is: " + player.inventory);
  } else {
    console.log("please type 'w' you twat");
  }
}

//function startBattle() {
// enemy is random
// user can attack or run
// if attacking choose random attack power between a min and max
// if running, you will choose a random number between 1 and 2 

//after player attacks or runs the enemy attacks back for random damage amount
// if play kills enemy you can give the player HP and a special item stored in inventory

//if the enemy kills play the console prints a cool death message and game ends(break)
//Inventory: when player kills enemies, they get inventory items
//}


// if user enter print in the console. the console prints the player name, hp and inventory

// introduction()
// gameLoop() {
//   battleLoop()
// }




