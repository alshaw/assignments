var str = "ima string"
sessionStorage.setItem("str", str);
var num = 10;
sessionStorage.setItem("num", num);
var bool = true;

var obj = {
  name: "Billy",
  age: 45,
  cars: [{
      year: 2002,
      make: "Toyota",
      model: "Camry"
    },
    {
      year: 2018,
      make: "Tesla",
      model: "Roadster"
    }
  ]
}

sessionStorage.getItem("obj", JSON.stringify(str));