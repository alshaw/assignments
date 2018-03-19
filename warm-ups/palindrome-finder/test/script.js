// function that accepts a string as an argument 
// returns true if string is a palindrome 
// will return true regardless of capitalization, spaces or puncuation
// returns false if it is not a palindrome

// should be test driven
// assert library in chai

var chai = require("chai");
var assert = chai.assert;
var isPalindrome = require("./main");

//describe is a test suite
describe("A Palindrome finder", function() {
  it("should identify a palindrome", function() {
    assert.isTrue(isPalindrome("abba"));
    assert.isTrue(isPalindrome("aba"));
    assert.isTrue(isPalindrome("a"));
    assert.isFalse(isPalindrome("abc"));
    // it should work even when there are spaces, symbols, and capitals.
  });
  it("should identify a palindrome with spaces", function() {
    assert.isTrue(isPalindrome("star rats"));
    assert.isTrue(isPalindrome("starr ats"));
    assert.isFalse(isPalindrome("i have a space"));
  });
  it("should identify a palindrome with capitals", function () {
    assert.isTrue(isPalindrome("Star Rats"));
    assert.isFalse(isPalindrome("CAPital"));
  });
  it("should identify a palindrome with symbols", function () {
    assert.isTrue(isPalindrome("star!rats"));
    assert.isFalse(isPalindrome("a*b!c"));
  });
  it("should identify a palindrome with symbols, caps, and spaces", function () {
    assert.isTrue(isPalindrome("StarRats!"));
    assert.isFalse(isPalindrome("Star, Rats!"));
  });
})
