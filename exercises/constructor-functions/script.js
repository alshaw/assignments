// object literal
// constructor functions uses capital letters

// var obj = {
//   key: value
// }

var user1 = {
  name: "allie",
  email: "allie@gmail.com",
  password: "sssssss"
}

//function expression
// var User = function() {

// }

// function declaration
function User1(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
}

let allie = new User("allie", "allie@gmail.com", "ssssss")
console.log(allie)

function addToDatabase(user) {
  database.push(user);
}

function displayDatabase() {
  console.log(database);
}

function creatNewUser(name, email, password) {
  
}















