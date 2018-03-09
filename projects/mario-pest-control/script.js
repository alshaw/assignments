//Pricing
var goombaPrice = 5;
var bobOmbPrice = 7; 
var cheepCheepPrice = 11;

//Totals
goombaTotal = document.getElementById('goombaTotal')
bobOmbTotal = document.getElementById('bobOmbTotal')
cheepCheepTotal = document.getElementById('cheepCheepTotal')

var multiply = function (price, quantity) {
  return price * quantity;
}

var totalSum = function () {
  var goombaInput = document.getElementById('goombaInput').value;
  var bobombInput = document.getElementById('bobombInput').value;
  var cheepInput = document.getElementById('cheepInput').value;
  return multiply(goombaPrice, goombaInput) + multiply(bobombPrice, bobombInput) + multiply(cheepCheepPrice, cheepInput);
}

var total = function () {
  var subtotal = document.getElementById('subtotal');
  subtotal.innerHTML = " " + totalSum() + "!";
  subtotal.style.color = "white";
}

var output = function (inputType, price, totalType) {
  inputType = +inputType;
  totalType.innerHTML = inputType * price;
  totalType.style.color = 'white';
}

window.oninput = function () {
  // Inputs Type
  var goombaInput = document.getElementById('goombaInput').value;
  var bobombInput = document.getElementById('bobombInput').value;
  var cheepInput = document.getElementById('cheepInput').value;
  if (goombaInput !== '') {
    output(goombaInput, goombaPrice, goombaTotal);
  } else {
    goombaTotal.innerHTML = '';
  }
  if (bobombInput !== '') {
    output(bobombInput, bobombPrice, bobombTotal);
  } else {
    bobombTotal.innerHTML = '';
  }
  if (cheepInput !== '') {
    output(cheepInput, cheepCheepPrice, cheepTotal);
  } else {
    cheepTotal.innerHTML = '';
  }

  total();
}






