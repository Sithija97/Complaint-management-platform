import React, { useState } from "react";
import {
  Button,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import RemoveFromQueueIcon from '@material-ui/icons/RemoveFromQueue';
import "./Money.css";
import "./InnerStyles.css";
import db from "../../firebase";

const Form = (props) => {
  const initialStateValues = {
    name: "",
    amount: 0,
    type: "",
    category: "",
    date: "2021-05-01",
  };

  const [events, setEvents] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEvents({ ...events, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(events);

    db.collection("events").add({
      name: events.name,
      amount: events.amount,
      type: events.type,
      category: events.category,
      date: events.date,
    });
    console.log("added event");
    setEvents({ ...initialStateValues });
  };

  const gettingCategory = (type) => {
    switch (type) {
      case "income":
        console.log("income");
        return (
          <div>
            <ListItem button className="form_elements">
              <ListItemIcon>
                <RemoveFromQueueIcon />
              </ListItemIcon>
              <ListItemText primary={"income categories :"} />
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="category"
                value={events.category}
                onChange={handleInputChange}
              >
                <MenuItem value={"selling"}>selling</MenuItem>
                <MenuItem value={"award"}>award</MenuItem>
                <MenuItem value={"interest"}>interest</MenuItem>
                <MenuItem value={"salary"}>salary</MenuItem>
                <MenuItem value={"gifts"}>gifts</MenuItem>
                <MenuItem value={"other"}>other</MenuItem>
              </Select>
            </ListItem>      
          </div>
        );
      case "expense":
        console.log("expense");
        return (
          <div>
            <ListItem button className="form_elements">
              <ListItemIcon>
                <RemoveFromQueueIcon />
              </ListItemIcon>
              <ListItemText primary={"expense categories :"} />
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="category"
                value={events.category}
                onChange={handleInputChange}
              >
                <MenuItem value={"food"}>food</MenuItem>
                <MenuItem value={"bills"}>bills</MenuItem>
                <MenuItem value={"transportation"}>transportation</MenuItem>
                <MenuItem value={"shopping"}>shopping</MenuItem>
                <MenuItem value={"entertainment"}>entertainment</MenuItem>
                <MenuItem value={"travel"}>travel</MenuItem>
                <MenuItem value={"health"}>health</MenuItem>
                <MenuItem value={"familiy"}>familiy</MenuItem>
                <MenuItem value={"education"}>education</MenuItem>
                <MenuItem value={"fees"}>fees</MenuItem>
                <MenuItem value={"business"}>business</MenuItem>
                <MenuItem value={"other"}>other</MenuItem>
              </Select>
            </ListItem>
          </div>
        );
      case "saving":
        console.log("savings");
        break;
      default:
        break;
    }
  };

  return (
    <div className="form_container">
      <h3>Form</h3>
      <form>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button className="form_elements">
            <ListItemIcon>
              <RemoveFromQueueIcon />
            </ListItemIcon>
            <ListItemText primary={"name :"} />
            <TextField
              // label="name"
              name="name"
              value={events.name}
              onChange={handleInputChange}
            />
          </ListItem>
          <ListItem button className="form_elements">
            <ListItemIcon>
              <RemoveFromQueueIcon />
            </ListItemIcon>
            <ListItemText primary={"amount :"} />
            <TextField
              //label="value"
              name="amount"
              value={events.amount}
              onChange={handleInputChange}
            />
          </ListItem>
          <ListItem button className="form_elements">
            <ListItemIcon>
              <RemoveFromQueueIcon />
            </ListItemIcon>
            <ListItemText primary={"type :"} />
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="type"
              value={events.type}
              onChange={handleInputChange}
            >
              <MenuItem value={"income"}>income</MenuItem>
              <MenuItem value={"expense"}>expenses</MenuItem>
              <MenuItem value={"saving"}>savings</MenuItem>
            </Select>
          </ListItem>
          {gettingCategory(events.type)}
          <ListItem button className="form_elements">
            <ListItemIcon>
              <RemoveFromQueueIcon />
            </ListItemIcon>
            <ListItemText primary={"date :"} />
            <TextField
              id="date"
              // label="Date"
              type="date"
              defaultValue="2021-05-01"
              className="textField"
              name="date"
              value={events.date}
              onChange={handleInputChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </ListItem>
          <ListItem button className="form_elements">
            <Button disabled={!events.amount}  type="submit" onClick={handleSubmit}>
              Add
            </Button>
          </ListItem>
        </List>
      </form>
    </div>
  );
};

export default Form;
