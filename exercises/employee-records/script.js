var employees = [];

var jane = new Employee("Jane", "Carpenter", "600,00");
var lisa = new Employee("Lisa", "Mechanic", "800,000");
var allie = new Employee("Allie", "Astronaut", "20,000", "Part time");

function Employee(name, title, salary, status = "Full Time") {
  this.name = name;
  this.title = title;
  this.salary = salary;
  this.status = status;
};

Employee.prototype.printEmployeeForm = function () {
  console.log("Name: " + this.name + ", Job Title: " + this.title + ", Salary: " + this.salary + ", Status: " + this.status);
};


jane.printEmployeeForm();
lisa.printEmployeeForm();
allie.printEmployeeForm();

employees.push(jane, lisa, allie);

console.log(employees);