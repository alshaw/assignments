const express = require("express");
const uuid = require("uuid");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;
let todos = require("./todos.js");


// middleware
app.use(bodyParser.json());


// routes
app.route("/todos")
  .get((req, res) => {
    res.status(200).send(todos);
  })

  // post request
  .post((req, res) => {
    const newTodo = req.body;
    newTodo._id = uuid();
    todos.push(newTodo);
    res.status(201).send(newTodo);
  });

  // get one request
app.route("/todos/:id")
  .get((req, res) => {
    const { id } = req.params;
    console.log(id);
    const foundTodo = todos.filter(todo => todo._id === id)[0];
    res.status(200).send(foundTodo);
  })

  // edit/put one request
  .put((req, res) => {
    const { id } = req.params;
    const editedTodo = req.body;
    todos = todos.map(todos => todo._id === id ? editedTodo = {...todo, ...editedTodo } :
    todo);
    res.status(200).send(editedTodo);
  })

  // delete one request
  .delete((req, res) => {
    const { id } = req.params;
    todos = todos.filter(todo => todo._id !== id);
    res.status(204).send();
  })

app.listen(port, () => console.log("Server running on port " + port));