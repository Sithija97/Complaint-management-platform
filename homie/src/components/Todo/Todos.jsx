import React, { useState, useEffect } from 'react';
import '../../App.css'
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './Todo';
import  db  from '../../firebase';
import firebase from "firebase"


function Todos() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  // when the app loads, we need to listen to database and then we get some data using fetch, 
  useEffect(() => {
    //this code fires when app.js loaded
    db.collection('todos').orderBy("timestamp", "desc").onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data().todos))
      // console.log(snapshot.docs.map(doc => doc.data()))
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })))
    })
  }, [])

  // Function on button add TODo
  const addTodo = (Event) => {
    // preventing default nature of form of refresh
    Event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    // to remove the entered words from input after clicking button
    setInput("");
  }



  return (
    <div className="App">
      {/* Wraping up in form to make sure enter key will submiting the form  */}
      <form >
        <FormControl>
          <InputLabel><span role="img" aria-label="emoji">✅ </span> Write a Task</InputLabel>
          <Input value={input} onChange={Event => setInput(Event.target.value)} />
        </FormControl>

        {/* using material ui */}
        <Button disabled={!input} type="submit" variant="contained" color="primary" onClick={addTodo}>
          Add Todo
        </Button>
        {/* <button onClick={addTodo}>Add Todo </button> */}
      </form>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default Todos;