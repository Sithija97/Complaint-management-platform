import React, { useState } from "react";
import {
    Button,
    Card,
    FormControl,
    TextField,
} from "@material-ui/core";
import "./Todos.css";
import Todo from "./Todo";

function Todos() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="App">
            <form action="" >
                <Card className='CardView'>
                    <FormControl >
                        <TextField
                            label="Read Only" />
                    </FormControl> <t />
                    <FormControl >
                        <TextField
                            label="Read Only" />
                    </FormControl>
                    <Button variant="contained" color="primary">
                        Add Todo
                </Button>
                </Card>
            </form>
            <Todo/>
        </div>
    );
}

export default Todos;
