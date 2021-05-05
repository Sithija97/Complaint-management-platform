import React, { useState } from "react";
import {
    Button,
    Card,
    FormControl,
    TextField,
} from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
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
            <List><ListItem button>
                <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary='primary' />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="edit" >
                        <EditIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" >
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem></List>
        </div>
    );
}

export default Todos;
