const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
require("dotenv").config();

app.use(cors());
app.use(express.json());

//Route

//create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const {
      rows: [createTodo],
    } = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *;",
      [description]
    );
    res.json(createTodo);
  } catch (err) {
    console.error(err.message);
  }
});
//get all todo

app.get("/todos", async (req, res) => {
  try {
    const { rows: allTodo } = await pool.query("SELECT * FROM todo;");
    res.json(allTodo);
  } catch (err) {
    console.error(err.message);
  }
});

//get a todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { rows: todoById } = await pool.query(
      "SELECT description FROM todo WHERE todo_id = $1;",
      [id]
    );
    res.json(todoById);
  } catch (err) {
    console.error(err.message);
  }
});
//update a todo

app.patch("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const { rows: updateTodo } = await pool.query(
      "UPDATE todo SET description=$1 WHERE todo_id=$2;",
      [description, id]
    );
    res.json(updateTodo);
  } catch (err) {
    console.error(err.message);
  }
});

//delete a todo

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const { rows: deleteTodo } = await pool.query(
      "DELETE FROM todo WHERE todo_id = $1",
      [id]
    );
    res.json(`deleted message ${id}`);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started");
});
