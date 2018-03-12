const readline = require('readline-sync');
let input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
let shift = parseInt(readline.question('How many letters would you like to shift? '));

let shiftedInput = input => {
  let string = '';
  let charcode = 0;

  for (let i = 0; i < input.length; i++) {
    let letters = /([A-Za-z])/g.test(input[i]);
    if (letters) {
      charcode = 97 + (input[i].charCodeAt() + shift - 97) % 26;
    } else {
      charcode = input[i].charCodeAt();
    }
    string += String.fromCharCode(charcode);
  }
  console.log(string);
}

shiftedInput(input);