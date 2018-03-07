var lyrics = ["This", "hit", "that", "ice", "cold",
  "Michelle", "Pfeiffer", "that", "white",
  "gold", "This", "one", "for", "them",
  "hood", "girls", "Them", "good", "girls",
  "straight", "masterpieces", "Stylin'",
  "whilen'", "livin'", "it", "up", "in",
  "the", "city", "Got", "Chucks", "on",
  "with", "Saint", "Laurent", "Gotta", "kiss",
  "myself", "I'm", "so", "pretty"];


function prettyLyrics(arr) {
  return arr.join(' ');
}
console.log(prettyLyrics(lyricsArr));

function reverseLyrics(arr) {
  return arr.reverse().join(" ");
}
console.log(reverseLyrics());

function everyOther(arr) {
  var skip = []; 
  for (var i = 0; i < arr.length; i += 2) {
    skip[push(arr[i])];
  }
  prettyLyrics(skip);
}