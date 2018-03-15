// var myName = "John Doe";
// console.log(name);

// function nameCheck() {
//   try {
//     var name = myName;
//     console.log(myName);
//   } catch (err) {
//     console.log(err);
//   }
// }
// nameCheck();


// function movieCheck(age) {
//   if (age < 0) {
//     throw "Error cannot be less than 0";
//   } else if (age <= 12) {
//     console.log("You can see PG movies");
//   } else if (age >= 13 && age < 18) {
//     console.log("You can see PG-13 movies");
//   } else if (age >= 18) {
//     console.log("You can see R rated movies");
//   }
// }
// movieCheck(-1);  

// function checkAge() {
//   try {
//     var age = movieCheck();
//     console.log(age);
//   } catch(err) {
//     console.log(err);
//   }
// }
// checkAge();


/////////////////////////////////////////////

// 1a) Write a function that returns the sum of two numbers.
// Throw an error if either argument is not of the data type number:

// function sum(x, y) {
//   //check data types first and throw error
//   if (typeof x !== "number" || typeof y !== "number") {
//     throw "Input must be a number"
//   }
//   return x + y;
// }


// 1b) Call the sum function inside a try block using "1" and "2" as arguments. 
// Use console.log within a catch block to inform the user of the error.
// try {
//   sum("1", "2");
// } catch(err) {
//   console.log(err);
// }

// 2a) Given a user object, write a function called login 
//that takes a username and password as parameters.
//Throw an error if either of them don't match. 
//Otherwise, log to the console a message saying "login successful!"

var user = { username: "sam", password: "123abc" };
function login (username, password) {
  if (user.username !== username || user.password !== password) {
    throw "Your username or password is incorrect"
  } else (user.username === username || user.password === password) {
    console.log("Login successful!");
  }
  return login();
}

// 2b) Call the login function within a try block.
//In one instance use the correct credentials, 
//and in another use incorrect ones.
//Make sure you see the appropriate message!

try {
  login("sam", "123abc");
  console.log(login)
} catch(err) {
  console.log(err);
}
