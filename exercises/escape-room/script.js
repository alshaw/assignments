//give user 3 options 
  // 1) put hand in hole
  // 2) Find the key, or
  // 3) Open the door
// They can't open the door unless they find the key first. 
// They die of they put their hand in the hole
console.log("Uh oh, looks like you're trapped in this room. \n Looks like theres a hole over there... ");
var rs = require("readline-sync");
// let name = rs.question("What is your name?");
// if (name) {
//   console.log(name + "Hello " + name);
// }
let game = rs.question("Would you like to put your hand in the hole? Yes or no? ");
let isAlive = true;
while (isAlive) {
  if (game === "no") {
    console.log("Oh good. Putting your hand in a strange hole probably would have killed you.");
  } else if (game === "yes") {
    console.log("You died ");
    break;
  }
  let question1 = rs.question("Should we try to find the key? ");
  if (question1 === "yes") {
    console.log("Good choice. Looks like it's actually right under your foot. ");
  } else if (question1 === "no") {
    console.log("You should rethink that decision ");
    break;
  }
  let question2 = rs.question("Should we try to open the door? ");
  if (question2 === "yes") {
    console.log("Good choice! You're free ");
    break;
  } else if (question2 === "no") {
    console.log("Sorry. You live in this room forever now. ");
    break;
  }

}