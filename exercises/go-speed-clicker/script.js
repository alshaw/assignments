// var button = document.getElementById("button");
// var countClicks = 0;

// window.addEventListener("click", function (button) {
//   console.log("I clicked");
//   countClicks++
// });


// sessionStorage.setItem("click", click);
// console.log(sessionStorage.getItem("click", click));

function clickCounter() {
  if(typeof(Storage) !== "undefined") {
    if(localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickCount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "You have clicked " + localStorage.clickcount + " time(s).";
  }
}