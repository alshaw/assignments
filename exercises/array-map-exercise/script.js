//array of numbers that are doubles of the first array
function doubleNumbers(x) {
  return x * 2;
};

function doubleArr(arr) {
  return arr.map(doubleNumbers);
};

console.log(doubleArr([2, 5, 100]));

//take an array and make them strings
function stringItUp(x) {
  return x.toString();
};

function arrToString(arr) {
  return arr.map(stringItUp);
};
console.log(arrToString([2, 5, 100]));

//capitalize each of an array of names
function capitalizeNames(arr) {
  return arr.charAt(0).toUpperCase() + arr.slice(1).toLowerCase();
};

function capitalizeFirst(arr) {
  return arr.map(capitalizeNames);
};

console.log(capitalizeFirst(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]))

//array of strings of the names
function namesOnly(arr) {
  return arr.name;
};

var people = [
  {
    name: "Angelina Jolie",
    age: 80
  },
  {
    name: "Eric Jones",
    age: 2
  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kayne West",
    age: 16
  },
  {
    name: "Bob Ziroll",
    age: 100
  }
];
function justNames(arr) {
  return arr.map(namesOnly);
}
console.log(justNames(people));

// whether or not they can go to the matrix
function makeStrings(obj) {
  if (obj.age >= 18) {
    return obj.name + " can go to the Matrix!"
  } else if (obj.age < 18) {
    return obj.name + " canNOT got to the Matrix!"
  }
}


var movieGoers = [
  {
    name: "Angelina Jolie",
    age: 80
  },
  {
    name: "Eric Jones",
    age: 2
  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kayne West",
    age: 16
  },
  {
    name: "Bob Ziroll",
    age: 100
  }
];

function oldEnough(arr) {
  return arr.map(makeStrings);
};

console.log(oldEnough(movieGoers));

//an array of the names in h1s, and the ages in h2s

function putInHeadings(obj) {
  return "<h1>" + obj.name + "<h1>" + "<h2>" + obj.age + "<h2>";
};

function readyToPutInTheDom(arr) {
  return arr.map(putInHeadings);
};
console.log(readyToPutInTheDom(movieGoers));