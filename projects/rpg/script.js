var rs = require("readline-sync");
console.log(" 🏹  " + "Welcome this super duper fun game!" + " 🏹 ");
var playerName = rs.question("Whats is your name? ");
console.log("Hello, " + playerName + ". Type 'print' at any time to view your inventory and hp. ");


//losecon is if points read 0;
//wincon is up to you (ex: kill three enemies you win)

// player object
var player = {
  name: playerName,
  hp: 100,
  attack: undefined,
  enemiesKilled: 0,
  inventory: [""]
};

// constructor enemy function to create a blueprint for all enemies
var Enemy = function() {
  this.type = getRandomType();
  this.attack = Math.floor(Math.random() * 20) + 10;
  this.hp = 50;
};

//get inventory item from enemy
function getInventory() {
  var inventory = ["Rubber Duck", "Salsa", "Broom"];
  var getItem = inventory[Math.floor(Math.random() * inventory.length)];
  player.inventory.push(getItem);
};

//generates random enemy
var getRandomType = function() {
  var enemyTypes = ["Ancient Dragon 🐉 ", "Prowler 🐈 ", "Evil Clown 🤡 "];
  var randIndex = Math.floor(Math.random() * enemyTypes.length);
  return enemyTypes[randIndex];
};

//generates random hit points for enemies
Enemy.prototype.genHitPoints = function() {
  switch(this.type) {
    case "Ancient Dragon":
      return Math.floor(Math.random() * 21) + 80;
    case "Prowler":
      return Math.floor(Math.random() * 30) + 50;
    case " Evil Clown":
      return Math.floor(Math.random() * 30) + 20;
  }
};


// while loop continues as long as my hp > 0, or my wincon is not met
while (player.hp > 0 && player.enemiesKilled < 3) {
  var playerCommand = rs.question("Type 'w' to walk... ");
  if (playerCommand === "w") {
    //player walks and has a 40% chance of an enemy appearing
    if(Math.floor(Math.random() * 100) > 60) {
      var enemy = new Enemy();
      console.log(enemy.type + " has appeared!");
      //while enemy hp is not 0, player will have to attack or run 
      while (enemy.hp > 0) {
        var action = rs.question("Type 'a' to attack or 'r' to run. ");
        //if player chooses to attack, get a random number under 50 for attack damage and subtract damage from enemy hp
        if (action === 'a') {
          var attackDamage = Math.floor(Math.random() * (50 - 10 + 1) + 10);
          enemy.hp = enemy.hp - attackDamage;
          //if the enemy hp < 0, enemy dies and player gains enemies killed and inventory from enemy.
          if (enemy.hp <= 0) {
            console.log("You killed the " + enemy.type + "!");
            player.enemiesKilled++;
            getInventory();
            break;
          } else {
            console.log("You hit the " + enemy.type + " for " + attackDamage + "!");
          }
          //subtract enemy attack from player hp
          player.hp = player.hp - enemy.attack;
          console.log(" ❤️  " + "Your hp is " + player.hp);
          //if players hp < 0, player dies and game ends
          if (player.hp <= 0) {
            console.log("The enemy killed you!");
            break;
          }
          //if player chooses to run, choose a random number for a 50% of escaping
        } else if (action === 'r' && Math.floor(Math.random() * 100) > 50) {
          console.log("You escaped! 😸 ");
          break;
        } else {
          console.log("The enemy caught you. You died. ☠️  ");
          player.hp = 0;
          break;
        }
      }
    }
    //print player name, inventory and hp when player types 'print'
  } else if (playerCommand === "print") {
    console.log(player.name + " \n" + " 💰 Your inventory is: " + player.inventory + " \n ❤️ Your hp is: " + player.hp);
  } else {
    console.log("Invalid command, please type 'w' ");
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


