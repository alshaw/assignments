//return a list of everyone older than 18 sorted alphabetically 
//dont use a for loop
//1) sort and filter method
//2) sort and map method


//filter out objects with a property >= 18
//sort the result by last name alphabetically
//(with higher order functions write the callback function first)


var data = ([{
  firstName: "Sarah",
  lastName: "Palin",
  age: 47
}, {
  firstName: "Frank",
  lastName: "Zappa",
  age: 12
}, {
  firstName: "Rick",
  lastName: "Sanchez",
  age: 78
}, {
  firstName: "Morty",
  lastName: "Smith",
  age: 13
}, {
  firstName: "Kyle",
  lastName: "Mooney",
  age: 27
}]);

function idOldEnough(person) {
  return person.age >= 18;
}

function byAlpha(person1, person2) {
  var ln1 = person1.lastName;
  var ln2 = person2.lastName;
  return ln1.localCompare(ln2);
}

//method chain
function sortedOfAge(arr) {
  return arr.filter(isOldEnough).sort(byAlpha);
}

console.log(sortedOfAge(data));

//PART 2

function byAge(person1, person2) {
  var age1 = person1.age;
  var age2 = person2.age;
  return age2 - age1;
}

function toLi(person) {
  return "<li>" + person.firstName + " " + person.lastName + " is" + person.age + "</li>";
}

function ageSortLi(arr) {
  return arr.sort(byAge).map();
}

console.log(ageSortLi(data));











