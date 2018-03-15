//Generate and store 100 enemies.
//Each enemy should have the following properties:
// 1.type
// 2.hitPoints
// 3.defense

//write a constructor function with three properties: type, hitPoint, and defense.

var Enemy = function () {
  this.type = getRandomType();
  this.hitPoints = this.genHitPoints();
  this.defense = this.hitPoints * 3;
}

var getRandomType = function () {
  var enemyTypes = ["Ancient Dragon", "Prowler", "MightyGrunt"];
  var randIndex = Math.floor(Math.random() * enemyTypes.length)
  return enemyTypes[randIndex];
}

//get random number between x and y 
//Math.floor(Math.random() * ((y-x)+1) + x);

Enemy.prototype.genHitPoints = function () {
  switch(this.type) {
    case "Ancient Dragon":
      return Math.floor(Math.random() * 21) + 80;
    case "Prowler":
      return Math.floor(Math.random() * 30) + 50;
    case "Mighty Grunt":
      return Math.floor(Math.random() * 30) + 20;
  }
}

function printEnemies() {
  for (var i = 0; i < 100; i++) {
    console.log(new Enemy());
  }
}

printEnemies();


