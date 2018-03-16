var pokeList = document.getElementById("poke-list");

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var jsonData = xhr.responseText;
    var data = JSON.parse(jsonData);
    console.log(data);
    var pokeData = data.objects[0].pokemon;
    console.log(pokeData);
    for (var i = 0; i < pokeData.length; i++) {
      var pokeObj = pokeData[i];
      var li = document.createElement("li");
      li.innerHTML = pokeObj.name;
      pokeList.appendChild(li);
    }
  }
}


xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();