const name = 'John'
let age = 101
let pets = ["cat", "dog"]

const petObjects = []

for (let i = 0; i < pets.length; i++) {
  let pet = { type: pets[i] }
  if (pets[i] === "cat") {
    const name = "fluffy"
  } else {
    const name = "spot"
  }
  pet.name = name
  petObjects.push(pet)
}
console.log(petObjects);


//rewrite as an arrow function
//Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, 
//and not starting an object, so the : will be an unexpected symbol.
const vegetables = carrots.map(function (carrot) {
  return { type: "carrot", name: carrot }
})


//rewrite this using a fat arrow function:
friends = people.filter(function (person) {
  return !!person.friendly
})

//rewrite using a fat arrow function
friends = people.filter(function(person){
  return !!person.friendly
})

//rewrite the following functions to be fat arrow functions:

function doMathSum(a, b) {
  return a + b
}

var produceProduct = function(a, b) {
  return a * b
}

//write a function that takes a firstName, a lastName, an age and returns a string like the following:
//Hi Kat Stark, how does it feel to be 40?
//firstName should default to "Jane"
//lastName should default to "Doe"
//age should default to 100





//use the shorthand syntax to make the following code block take up one line

const dogs = animals.fitler((animal) => {
  if(animal.type === "dog"){
    return true
  } else {
    return false
  }
});


//write a function that will take location and name and output this if location="Hawaii" and name="Janice"
//Hi Janice!
//Welcome to Hawaii
//I hope you are enjoying your stay. Please ask the president of Hawaii is you need anything
//(use template literals)











