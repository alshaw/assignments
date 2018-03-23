const names = ['buzz', 'allie', 'beans'];

const fullNames = names.map(function (name) {
  return `${name} shaw`;
});

const fullNames2 = names.map((name) => {
  return `${name} shaw`;
});

//can also do it without parantheses after param
const fullNames3 = names.map(name => {
  return `${name} shaw`;
})

//implicit return
const fullNames4 = names.map(name => `${name} shaw`);
console.log(fullNames4 + " 😃 ");