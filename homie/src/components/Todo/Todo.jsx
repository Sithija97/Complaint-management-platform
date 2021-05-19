import React from "react";
import "./Todos.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Card } from "@material-ui/core";
import db from "../../firebase";

function Todo({ title, description, key }) {
  const deleteTodo = () => {
    console.log(key)
  }
  return (
    <div>
      <Card className="CardView">
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary"/>
            </ListItemIcon>
            <ListItemText primary={title} secondary={key} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit">
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon/>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Card>
    </div>
  );
}

export default Todo;
