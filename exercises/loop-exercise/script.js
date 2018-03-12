//Function that accepts a string as input and loops to 
//print out each letter individually.
function individualLetter(str) {
  var letter = "";
  for (var i = 0; i < str.length; i++) {
    letter = str[i];
    console.log(letter);
  }
}
individualLetter("Woah check this out");

//Write a function that accepts a string and a single character
//as input. Loop through the string and print the position
//of the first occurence of the specified character.
//if character is not found, return error message.
function position(str, a) {
  for (var i = 0; i < str.length; i++) {
    if (i === a) {
      return str.indexOf(i);
    } else if (str.indexOf(i) < 0) {
      return "character not found";
    }
  }
}
console.log(position("Whats up", "p"));

//Function that accepts an array of numbers as a parameter
//Quit function when the number 42 is found.
//Let user know if 42 is not found
function hitchHiker(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 42) {
      return "42 is the answer to the Ultimate Question of Life, the Universe, and Everything";
    }
  }
  return "42 was not found. I always thought something was fundamentally wrong with the universe";
}

console.log(hitchHiker([4, 3, 5, 6, 2, 42, 9, 7]));


//Function that accepts 10 numbers in an array and prints
//the smallest number of the ten without using Math.min()
function smallestNumber([a, b, c, d, e, f, g, h, i, j]) {
  var arr = [a, b, c, d, e, f, g, h, i, j];
  var smallest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

console.log(smallestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
