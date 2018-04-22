class Team {
  constructor(name, population) {
    this.name = name;
    this.population = population;
  }
}

const penguins = new Team("Penguins", 1000000);
const communists = new Team("Communists", 1000000);

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const hit = (party1, party2) => {
  let damage = random(0, 500000);
  party1.population -= damage;
  return console.log(`The ${party1.name} nuke hit the ${party2.name} and killed ${damage} of the ${party2.name} population. 
  Their population is now ${party2.population}.`);
};
const miss = (party1, party2) => {
  return console.log(`The ${party1.name} nuke missed the ${party2.name}'s territory!`);
};

const sendNuke = (party1, party2, onHit, onMiss) => {
  let hitOrMiss = random(0, 1);
  if (hitOrMiss === 1) {
    onHit(party1, party2);
  } else {
    onMiss(party1, party2);
  }
};

let penguinsNuke = random(0, 1);

while (penguins.population >= 0 && communists.population >= 0) {
  if (penguinsNuke === 1) {
    sendNuke(penguins, communists, hit, miss);
    penguinsNuke = 0;
  } else {
    sendNuke(communists, penguins, hit, miss);
    penguinsNuke = 1;
  }

  if (penguins.population < 0) {
    console.log(`The communists have won this one. Sorry penguins.`);
  }
  if (communists.population < 0) {
    console.log(`The penguins have wn this one. Sorry communists.`);
  }
}
