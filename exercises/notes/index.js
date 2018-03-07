// let age = 24 - 10;
// if (age < 18) {
//   console.log("you is young")
// } else {
//   console.log("you is old")
// }


//////////////////////
// console.log(5 + 5);

// function sum(x, y) {
//   return x + y;
// }

// console.log(sum(10, 7000));

/////////////////////////////
// For Loops

// var dinnerOptions = ["spaghetti", "fried rice", "burritos"]

// for (var i = 0; i < dinnerOptions.length; i += 2) {
//   console.log(dinnerOptions[i]);
// }

//////////////////////////////////

//Event Listeners

// var button1 = document.getElementById('button1');

// button1.addEventListener('click', colorChange)

// function colorChange(e) {
//   if (button1.style.backgrounColor == 'red') {
//       button1.style.backgrounColor = 'red'
//   } else {
//     (button1.style.backgrounColor = 'white');
//    }
// }

// 


var button = document.getElementById("submit");
var input = document.getElementById("input");
var p = document.getElementById("output");


form.addEventListener("submit", function(event) {
  e.preventDefault();
  var input = event.target.children[0];
  if(input.value.length < 6) {
    alert("Username must containg at least 6 characters.")
  } else {
    p.innerHTML = input.value;
    input = "";
  }
});
