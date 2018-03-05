//.concat()
var concat = function (str1, str2) {
  return str1.concat(str2);
};

console.log("Hi", "there");

//.indexOf()
var indexOf = function () {
  var str = "String";
  return str.indexOf("n");
};

console.log(indexOf());

//.lastIndexOf()
var lastIndexOf = function (str) {
  return str.lastIndexOf("t");
};

console.log(lastIndexOf("Hey I'm a string"));

// .match()
var match = function (str) {
  return str.match(/gr/);
};

console.log(match("What a great day to grate cheese."));

//.replace()
var replace = function (str) {
  return str.replace("cheese", "lemons");
};

console.log(replace("I like cheese"));

//.slice()
var slice = function (str) {
  return str.slice(10, 18);
};

console.log(slice("Cheddar is pretty good"))

//.split()
var split = function (str) {
  return str.split(" ");
};

console.log(split("I'm too hungry to do homework."));

//.toLowerCase()
var toLowerCase = function (str) {
  return str.toLowerCase();
};

console.log(toLowerCase("PLEASE STOP YELLING."));

//.toUpperCase
var toUpperCase = function (str) {
  return str.toUpperCase();
};

console.log(toUpperCase("i can't help it I'm hangry."));

//.substr()
var substr = function (str) {
  return str.substr(10, 15);
};

console.log(substr("Let's get tacos"));