//function that returns the number of times that the string "code"
//appears anywhere in the given string, except we'll accept any letter in 
//place of the "d". (example: "cope" and "cooe" will work)

// find "code" in a string

////////////////////////////////////////////
function countCode(str) {
  var count = 0;
  for (var i = 0; i < str.length - 3; i++) {
    if (str[i] + str[i + 1] + str[i + 3] === 'coe') {
      count++;
    }
  }
  return count;
}
console.log(countCode("codekqwmxwicodelllskcope"));
/////////////////////////////////////////////

// ben's regex way
function countCode(str) {
  var count = 0;
  var regEx = /co\we/g;
  while(regEx.exec(str)){
    count++
  }
  return count;
}


console.log(countCode("codezeecodezipidoodacope"));



