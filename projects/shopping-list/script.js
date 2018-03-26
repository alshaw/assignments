var list = document.getElementById("items"); 
var form = document.getElementById("form");

function domStuff (buyItem) {
  let listItem = document.createElement("div");
  let title = document.createElement("p");
  title.innerHTML = buyItem.title;

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "X";
  deleteButton.addEventListener("click", 
  function(event) {
    list.removeChild(listItem);
  });
  listItem.appendChild(title);
  listItem.appendChild(deleteButton);
  list.appendChild(listItem);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var myData = {
    title: form.title.value,
  };
  console.log(myData);
  domStuff(myData);
  form.reset();
});
