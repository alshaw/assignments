//Given an array of numbers, return a new array 
//that has only the numbers that are 5 or greater.
function findNumbers(x) {
  return x >= 5;
};

function fiveAndGreaterOnly(arr) {
  return arr.filter(findNumbers);
};

console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

//Given an array of numbers, return a 
//new array that only includes the even numbers.
function evens(x) {
  return x % 2 === 0;
};

function evensOnly(arr) {
  return arr.filter(evens);
};

console.log(evensOnly([3, 6, 8, 2]));

//Given an array of strings, return a new array that only includes 
//those that are 5 characters or fewer in length
function fiveChars(x) {
  return x.length <= 5;
};

function fiveCharactersOrFewerOnly(arr) {
  return arr.filter(fiveChars);
};

console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));

//Given an array of people objects, return a new array that has filtered 
//out all those who don't belong to the club.
var peopleWhoBelongInTheClub = [
  {
    name: "Angelina Jolie",
    member: true
  },
  {
    name: "Eric Jones",
    member: false
  },
  {
    name: "Paris Hilton",
    member: true
  },
  {
    name: "Kayne West",
    member: false
  },
  {
    name: "Bob Ziroll",
    member: true
  }
];

function whoBelongs(obj) {
  return obj.member === true;
}

function peopleWhoBelongToTheIlluminati(arr) {
  return arr.filter(whoBelongs);
}

console.log(peopleWhoBelongToTheIlluminati(peopleWhoBelongInTheClub));

//Filter out all the people who are not old 
//enough to see The Matrix (younger than 18)
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
]

function underEighteen(obj) {
  return obj.age >= 18;
}
function ofAge(arr) {
  return arr.filter(underEighteen);
}

console.log(ofAge(people));