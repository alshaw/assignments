// find the frequency of all the letters in a given phrase and print them to the console.

var phrase = 'slimy smelly solution';

function getFrequency (str) {
  var freq = [];
  for (var i = 0; i < str.length; i++) {
    var char = str.charAt(i);
    if (freq[char]) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }
  }
  return freq;
}

console.log(getFrequency(phrase));