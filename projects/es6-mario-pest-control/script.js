//Totals
goombaTotal = document.getElementById('goombaTotal')
bobombTotal = document.getElementById('bobombTotal')
cheepCheepTotal = document.getElementById('cheepCheepTotal')

//Pricing
const goombaPrice = 5;
const bobombPrice = 7;
const cheepCheepPrice = 11;


//multiply price and amount of baddies
multiply = (price, amount) => {
  return price * amount;
}

//get total sum of all baddies
totalSum = () => {
  var goombaInput = document.getElementById('goombaInput').value;
  var bobombInput = document.getElementById('bobombInput').value;
  var cheepCheepInput = document.getElementById('cheepCheepInput').value;
  return multiply(goombaPrice, goombaInput) + multiply(bobombPrice, bobombInput) + multiply(cheepCheepPrice, cheepCheepInput);
}

// display baddie amount
output = (inputType, price, totalType)  => {
  inputType = +inputType;
  totalType.innerHTML = inputType * price;
}

// display grand total
total = () => {
  var subtotal = document.getElementById('subtotal');
  subtotal.innerHTML = " " + totalSum();
}

//oninput occurs when an element gets user input
window.oninput = () => {
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
