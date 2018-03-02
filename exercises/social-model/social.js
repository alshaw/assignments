var dogWalker = {
  name: "Allie",
  age: 26,
  favoritePark: "Sugarhouse Park",
  picksUpPoop: true,
  barksBackAtDogs: function() {
    console.log("BORK BORK");
  },
  cuddlesDogs: function() {
    console.log("She is smothering me! Please help!");
  },
  favoriteDogs: [
    {
      name: "Buzz",
      age: 9,
      hobbies: ["Running", "Napping", "Staring at squirrels"],
      favoriteCampingSpot: [
        {
          campName: "Joshua Tree",
          squirrels: false
        }
      ]
    },
    {
      name: "Major",
      age: 2,
      hobbies: ["Cuddling", "Making sad eyes at people", "Zoomies"],
      favoriteCampingSpot: [
        {
          campName: "Moab",
          squirrels: false
        }
      ]
    },
    {
      name: "Darwin",
      age: 5,
      hobbies: ["Napping", "Stealing food", "Napping"],
      favoriteCampingSpot: [
        {
          campName: "Mount Laguna",
          squirrels: true
        }
      ]
    },
    {
      name: "Rumi",
      age: 3,
      hobbies: ["Eating", "Treats", "Eating Again"],
      favoriteCampingSpot: [
        {
          campName: "John Muir Wilderness",
          squirrels: true
        }
      ]
    }
  ] 
};

dogWalker.barksBackAtDogs();
dogWalker.cuddlesDogs();

