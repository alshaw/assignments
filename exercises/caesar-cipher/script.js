var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

//receive two inputs from user
  // 1) The text to be encoded
  // 2) the number position to shift each letter (to the right)

// only shift letters, no characters.
