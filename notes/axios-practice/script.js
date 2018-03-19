// axios.get("https://api.vschool/io/allie/todo").then(function(response) {
//   console.log(response.data);
//   var todoList = document.getElement("todos");
//   todoList.innerHTML += "<li>" + response.data[0].title + "</li>"
// });

// allows user to see the list of their todos
axios.get("https://api.vschool.io/allie/todo")
.then(function (response) {
  console.log(response.data);
  var todoList = document.getElementById("todo");
  for (var i = 0; i < response.data.length; i++) {
  todoList.innerHTML += "<li>" + response.data[i].title + "</li>"
  }
});

var myData = {
  title: "",
  price: "",
  description: ""
};

var form = document.getElementById("form")
var title = document.getElementById("title")
var price = document.getElementById("price")
var description = document.getElementById("description")

title.addEventListener("input", function(event){
  myData.title = event.target.value;
})

price.addEventListener("input", function(event) {
  myData.price = event.target.value;
})

description.addEventListener("input", function(event) {
  myData.description = event.target.value;
})

form.addEventListener("submit", function(e){
  e.preventDefault();
  console.log(myData);
  axios.post("https://api.vschool.io/allie/todo", myData)
    .then(function (response) {
      console.log(response.data);
      var todoList = document.getElementById("todo");
      todoList.innerHTML += "<li>" + response.data.title + "</li>"
    })
})

//var button = document.createElement("button")
//button.innerText = "X";

//button.addEventListener("click", function(e) {
    
//})




