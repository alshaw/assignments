function add () {
  var num1 = document.getElementById('firstNumAdd').value;
  var num2 = document.getElementById('secondNumAdd').value;
  num1 = +num1;
  num2 = +num2;
  var sum = document.getElementById('additionSum');
  sum.innerHTML = num1 + num2;
}

function subtract () {
  var num1 = document.getElementById('firstNumSub').value;
  var num2 = document.getElementById('secondNumSub').value;
  num1 = +num1;
  num2 = +num2;
  var sum = document.getElementById('subtractionSum');
  sum.innerHTML = num1 - num2;
}

function multiply () {
  var num1 = document.getElementById('multiplyNumOne').value;
  var num2 = document.getElementById('multiplyNumTwo').value;
  num1 = +num1;
  num2 = +num2;
  var product = document.getElementById('multiplyProduct');
  product.innerHTML = num1 * num2;
}
