//given a string with parentheses, write a function that returns true if every 
//opening parenthesis has a closing paranthesis

// there are too many closing, too many opening
// there is a closing without an opening

// represent an opening paran with -1
// represent closing with +1

const balanceParen = str => {
  let counter = 0;
  for(let i = 0; i < str.length; i++) {
    switch(str[i]) {
      case "(":
        counter--;
        break;
      case ")":
        counter++;
        if (counter > 0) return false;
    }
  }
  return counter === 0;
}

console.log(balanceParen("((()())"));