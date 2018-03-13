// find the frequency of all the letters in a given phrase and print them to the console.
// loop thru the string 
// for each letter, add to its count


var phrase = 'Buzzworth is the cutest doggy of all time';

function getFrequency (str) {
  var output = {};
  for (var i = 0; i < str.length; i++) {
    var char = str.charAt(i);
    if (output[char]) {
      output[char]++;
    } else {
      output[char] = 1;
    }
  }
  return output;
}

console.log(getFrequency(phrase));



// Ben's solution

// //output
// var output = {
//   s: 3,
//   l: 4,
//   i: 2,
//   m: 2,
//   e: 2
// };

// //input
// var input = "I dont know what to put in here"
// var output = {};

// // for (var i = 0; i < input.length; i++) {
// //   var currentLtr = input[i];
// //   output[currentLtr] = // some value;
// // };

// var ltr = "s";
// output[ltr] = 0;
// console.log(output);
// if(output.hasOwnProperty(ltr)) {
//   console.log(output[ltr]);
// } else {
//   console.log("object does not have that property")
// }
















