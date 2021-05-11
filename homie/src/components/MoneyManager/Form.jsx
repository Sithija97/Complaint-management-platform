import React, { useState } from "react";
import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import "./Money.css";
import db from "../../firebase";

const Form = (props) => {

    const initialStateValues = {
      name: '',
      amount: 0,
      type: '',
    };

    const [events, setEvents] = useState(initialStateValues);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEvents({ ...events, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(events);

      db.collection('events').add({
        name: events.name,
        amount: events.amount,
        type: events.type,
      })
      console.log('added event')
      setEvents({ ...initialStateValues });
    };

    return (
      <div>
        <h3>Form</h3>
        <form>
          <TextField
            label="name"
            name='name'
            value={events.name}
            onChange={handleInputChange}
          />
          <TextField
            label="value"
            name='amount'
            value={events.amount}
            onChange={handleInputChange}
          />

          <InputLabel id="demo-simple-select-label">type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name='type'
            value={events.type}
            onChange={handleInputChange}
          >
            <MenuItem value={"income"}>income</MenuItem>
            <MenuItem value={"expense"}>expenses</MenuItem>
            <MenuItem value={"saving"}>savings</MenuItem>
          </Select>
          <Button type="submit" onClick={handleSubmit}>
            Add
        </Button>
        </form>
      </div>
    );
  }

  export default Form;
