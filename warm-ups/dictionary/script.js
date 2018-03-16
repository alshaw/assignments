// create a dictionary object
// function shourl either add or find a given word 
// adding: 
// set the word as a property on the object
// setting the definition as a value to that property

//searching:
// check if the dictionary has a property of the word youre looking for

// if im adding a word, i need to provide a definition

function lookItUp(word, dictionary, def) {
  //if(dictionary[word]);
  if (dictionary.hasOwnProperty(word)) {
    return dictionary[word];
  } else {
    dictionary[word] = def;
    return true;
  }
}

var dictionaryEng = {};

console.log(lookItUp("absquatulate", dictionaryEng, "verb: to leave abrubtly"));
console.log(lookItUp("absquatulate", dictionaryEng));

////////////////////////////////////////////
// Another way
var Dictionary = function (language) {
  this.language = language;
  this.content = {}
}

Dictionary.prototype.addWord = function(word, def) {
  if (this.content.hasOwnProperty(word)) {
    throw "That word already exists"
  } else {
    this.content[word] = def;
  }
}








