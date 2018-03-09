var form = document.getElementById("submit");
var nameInput = document.getElementById("firstName");
var nameInput = document.getElementById("lastName");
var femaleBox = document.getElementById("female");
var maleBox = document.getElementById("male");
var otherBox = document.getElementById("other");

//this is just an object to store user input data
//we define it in terms of what is meaningful to use as humans
var data = {
  firstName: "",
  gender: [],
  age: ""
};

// these event listeners just track the user activity and add data to 
// the data to the appropriate part fo the data object
nameInput.addEventListener("input", function (event) {
  data.firstName = event.target.value;
  console.log(data);
});

function setGender(event) {
  // user clicks on checkbox
  // if its checked, add to the array
  console.log(event.target.name);
  if (event.target.checked) {
    data.gender.push(event.target.name);
  } else {
    // if its not checked remove from the array
    //find where string is
    var index = data.gender.indexOf(event.target.name)
    // splice the string out of the array from the index
    data.gender.splice(index, 1);
  }
  console.log(data.gender);
}

femaleBox.addEventListener("change", setGender);
maleBox.addEventListener("change", setGender);
otherBox.addEventListener("change", setGender);

//send off the information now that it has been collected.
form.addEventListener("submit", function () {
  alert("First Name: " + data.firstName + "\n" + 
  data.gender.join(", ");
});