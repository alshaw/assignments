var button = document.getElementById("button")
var countClicks = 0;

window.addEventListener("click", function (button) {
  console.log("I clicked");
  countClicks++
});


sessionStorage.setItem("click", click);
console.log(sessionStorage.getItem("click", click));