var form = document.getElementById("submit");
var p = document.getElementById("output");
var input = document.getElementById("input1");
var input = document.getElementById("input2");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(input.valueAsNumber + input.valueAsNumber);
});