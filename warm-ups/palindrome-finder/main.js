function isPalindrome(str) {
  var removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
  var checkPalindrome = removeChar.split("").reverse().join("");
  return (removeChar === checkPalindrome);
}

console.log(isPalindrome("Race $$$car"));

module.exports = isPalindrome;