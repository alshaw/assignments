function fizzBuzz() {
  numbers = [];
  for (var i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      numbers.push('fizzbuzz')
    } else if (i % 3 === 0) {
      numbers.push('fizz')
    } else if (i % 5 === 0) {
      numbers.push('buzz')
    } else {
      numbers.push(i)
    }
  }
  return numbers;
}

console.log(fizzBuzz());


