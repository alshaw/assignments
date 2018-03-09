// arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function chessBoardGen() {
//   var output = []
//   for (var i = 0; i < 8; i++) {
//     output.push(i)
//   }
//   return output;
// }

// console.log(chessBoardGen());

/////////////////////////////
//NESTED LOOPS
//create array
//fill array with arrays
//each of the inner arrays will have 3 x's
//inject the arrays with 'x's into the bigger array
//return bigger array
//the array will have 3 rows and 3 strings each

function chessBoardGen(num) {
  var output = []
  for (var i = 0; i < num; i++) {
    output.push([])
    for (var j = 0; j < num; j++) {
      output[i].push('X');
    }
  }
  return output;
}

console.log(chessBoardGen(8));