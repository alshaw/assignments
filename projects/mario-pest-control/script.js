//Pricing
var goombaPrice = 5;
var bobombPrice = 7; 
var cheepCheepPrice = 11;

//Totals
goombaTotal = document.getElementById('goombaTotal')
bobombTotal = document.getElementById('bobombTotal')
cheepCheepTotal = document.getElementById('cheepCheepTotal')

var multiply = function (price, quantity) {
  return price * quantity;
}

var totalSum = function () {
  var goombaInput = document.getElementById('goombaInput').value;
  var bobombInput = document.getElementById('bobombInput').value;
  var cheepCheepInput = document.getElementById('cheepCheepInput').value;
  return multiply(goombaPrice, goombaInput) + multiply(bobombPrice, bobombInput) + multiply(cheepCheepPrice, cheepCheepInput);
}

var total = function () {
  var subtotal = document.getElementById('subtotal');
  subtotal.innerHTML = " " + totalSum();
}

var output = function (inputType, price, totalType) {
  inputType = +inputType;
  totalType.innerHTML = inputType * price;
}

window.oninput = function () {
  // Input Type
  var goombaInput = document.getElementById('goombaInput').value;
  var bobombInput = document.getElementById('bobombInput').value;
  var cheepCheepInput = document.getElementById('cheepCheepInput').value;
  if (goombaInput !== '0') {
    output(goombaInput, goombaPrice, goombaTotal);
  } else {
    goombaTotal.innerHTML = '';
  }
  if (bobombInput !== '0') {
    output(bobombInput, bobombPrice, bobombTotal);
  } else {
    bobombTotal.innerHTML = '';
  }
  if (cheepCheepInput !== '0') {
    output(cheepCheepInput, cheepCheepPrice, cheepCheepTotal);
  } else {
    cheepCheepTotal.innerHTML = '';
  }

  total();
}






