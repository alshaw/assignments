rs = require("readline-sync")

function cipher(str, shift) {
  let output = "";
  for (let i = 0; i < str.length; i++) {
    shift = shift % 26
    if (str.charCodeAt(i) + shift > 122) {
      output += String.fromCharCode((str.charCodeAt(i) + shift - 26));
    } else {
      output += String.fromCharCode((str.charCodeAt(i) + shift));
    }
  }
  return output
}

let string = rs.question("What would you like to encode? ");
let shiftStr = rs.question("Enter your favorite number. ")
let shift = Number(shiftStr)
console.log("Encoded: " + cipher(string, shift));
