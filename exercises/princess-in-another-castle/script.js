//playe class with name if type string, totalCoins type number, 
//status of type strin, star of type boolean.
class Player {
  constructor(name) {
    this.name = name;
    this.totalCoins = 0;
    this.status = "Powered Up";
    this.star = false;
    this.gameActive = true;
  }

  //setName of type function - sets name to mario or luigi
  //has a param called namePicked where you pass in Mario or Luigi
  setName(namePicked) {
    switch (namePicked) {
      case "Mario":
        this.name = "Mario";
        break;
      case "Luigi":
        this.name = "Luigi";
        break;
    }
    return this.name;
  }

  //function called gotHit - called whenever player is hit by enemy
  //set status property accordingly. Status goes from "Powered up" to "big" to "small"
  //to "dead"
  //gameActive is set to false if dead
  gotHit() {
    switch (this.status) {
      case "Small":
        this.status = "Dead";
        this.gameActive = false;
        break;
      case "Big":
        this.status = "Small";
        break;
      case "Powered Up":
        this.status = "Big";
        break;
    }
    return this.status;
  }


  //function gotPowerUp is called when a powerup is received and sets status
  gotPowerup() {
    switch (this.status) {
      case "Small":
        this.status = "Powered Up";
        this.star = true;
        break;
      case "Big":
        this.status = "Powered Up";
        this.star = true;
        break;
    }
    return this.status;
  }

  //addCoin of function - adds a coin to totalCoins
  addCoin() {
    return this.totalCoins++;
  }

  //print name function prints name, status, totalCoins, and star properties
  print(name) {
    return `Name: ${this.name} \nStatus: ${this.status} \nStar: ${this.star} \nCoins: ${this.totalCoins} \nGame Active: ${this.gameActive}`;
  }

  //random range function that returns either 0, 1 or 2 
  //if value is 1 call gotHit() on object
  //if the value is 1 call gotPowerUp() on object
  //if value is 2 call addCoin() on object
  //then call print method on object

  randomRange() {
    let random = Math.floor(Math.random() * 3);
    switch (random) {
      case 0:
        return this.gotHit();
        break;
      case 1:
        return this.gotPowerup();
        break;
      case 2:
        return this.addCoin();
        break;
    }
  }
}

function play() {
  let player = new Player("Luigi");
  player.randomRange();
  player.randomRange();
  player.randomRange();
  return player.print(player);
}

console.log(play());