//1. avoid exceeding maximun call stack  by having a base case ====> a way out of the recursion

//2. call the function inside itself

const factorial = num => {
  if (num === 1) 
    return 1;
  else 
    return num * factorial(num - 1);
}

console.log(factorial(6));

const gameOf3 = (n, counter = 0) => {
  if (n === 1 ) 
    return counter;
  else if(n % 3 === 0) 
    return gameOf3(n / 3, counter + 1);
  else if((n + 1) % 3 === 0)
    return gameOf3((n + 1) / 3, counter + 1);
  else 
    return gameOf3((n - 1) / 3, counter + 1);
}
console.log(gameOf3(2));