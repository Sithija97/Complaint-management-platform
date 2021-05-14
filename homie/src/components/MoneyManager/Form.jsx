import React, { useState } from "react";
import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";

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
            <InputLabel id="demo-simple-select-label">
              income categories
            </InputLabel>
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
          </div>
        );
      case "expense":
        console.log("expense");
        return (
          <div>
            <InputLabel id="demo-simple-select-label">
              expense categories
            </InputLabel>
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
    <div className="container">
      <h3>Form</h3>
      <form>
        <TextField
          label="name"
          name="name"
          value={events.name}
          onChange={handleInputChange}
        />
        <TextField
          label="value"
          name="amount"
          value={events.amount}
          onChange={handleInputChange}
        />

        <InputLabel id="demo-simple-select-label">type</InputLabel>
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

        {gettingCategory(events.type)}

        <TextField
          id="date"
          label="Date"
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

        <Button type="submit" onClick={handleSubmit}>
          Add
        </Button>
      </form>
    </div>
  );
};

export default Form;
