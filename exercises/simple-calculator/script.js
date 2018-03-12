function add () {
  var num1 = document.getElementById('addNumOne').value;
  var num2 = document.getElementById('addNumTwo').value;
  num1 = +num1;
  num2 = +num2;
  var sum = document.getElementById('additionSum');
  sum.innerHTML = num1 + num2;
}

function subtract () {
  var num1 = document.getElementById('subNumOne').value;
  var num2 = document.getElementById('subNumTwo').value;
  num1 = +num1;
  num2 = +num2;
  var sum = document.getElementById('subtraction');
  sum.innerHTML = num1 - num2;
}

function multiply () {
  var num1 = document.getElementById('multiplyNumOne').value;
  var num2 = document.getElementById('multiplyNumTwo').value;
  num1 = +num1;
  num2 = +num2;
  var product = document.getElementById('multiply');
  product.innerHTML = num1 * num2;
}
