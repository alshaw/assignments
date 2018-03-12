var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

function foreception(arr, str) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + ":");
    for (var j = 0; j < str.length; j++) {
      newArr.push(str[j]);
    }
  }
  return newArr;
}
console.log(foreception(people, alphabet));