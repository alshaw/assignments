// create a function that takes a string and checks if it has the same number of x's and o's and returns either true or false
// check each char in str to see if x or o
// count how many of each
// check to see if num of x's === num of o's

function sameNumber(str) {
  var xCount = 0;
  var oCount = 0;
  //for loop that loops thru string
  for (i = 0; i < str.length; i++) {
    // check each char in str to see if x or o
    if (str[i] === "x" || str[i] === "X") {
      xCount++;
    } else if (str[i] === "o" || str[i] === "O") {
      oCount++;
    }
  }
  if (xCount === oCount) {
    return true;
  } else {
    return false;
  }
  //checks to see if it has the same number of x's and o's
  //returns true or false
}

let testCases = [
  "",
  // true
  "xox",
  // false,
  "oxo",
  // false,
  "xoxo",
  // true,
  "XxOO",
  // true
]

console.log(sameNumber(testCases[4]));

