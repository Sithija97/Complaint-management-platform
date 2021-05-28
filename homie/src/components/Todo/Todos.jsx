import React, { useState } from "react";
import { Button, Card, FormControl, TextField } from "@material-ui/core";
import "./Todos.css";
import Todo from "./Todo";
import { useEffect } from "react";
import db from "../../firebase";

function Todos() {
  // todos - read
  const [todos, setTodo] = useState([]);

  // todo fields - write
  const [title, setTitle] = useState("");

  useEffect(() => {
    // reading todos from db
    db.collection("todos").onSnapshot((snapshot) => {
      setTodo(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  },[db]);

  const handleSubmit = (e) => {
    // writing todos
    e.preventDefault();
    console.log("title:" + title);
    db.collection("todos").add({
      title: title,
    });
  };

  return (
    <div className="todos">
      <Card className="CardView todoForm CardViewAdder ">
        <form className="todoField">
          <FormControl>
            <TextField
              type="text"
              label="Todo"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>
          <Button
            className="addButton"
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            +
          </Button>
        </form>
      </Card>
      {console.log(todos)}
      {todos.map((todo) => (
        console.log(todo.id),
        <Todo
          key={todo.id}
          title={todo.data.title}
        />
      ))}
    </div>
  );
}

export default Todos;
