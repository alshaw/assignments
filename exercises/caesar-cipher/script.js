var rs = require('readline-sync');
var input = rs.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(rs.question('How many letters would you like to shift? '));
