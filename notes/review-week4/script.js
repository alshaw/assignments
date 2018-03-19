var contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function(e){
  e.preventDefault();
  var newTodo = {
    title: todoForm.title.value,
    price: todoForm.price.value,
    description: todoForm.description.value
  }
  axios.post("https://api.vschool.io/bob/todo", newTodo).then(function(response) {
    document.getElementById("todos").innerHTML += "<li>" + response.data + "</li>"
  });
});
