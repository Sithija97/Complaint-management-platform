import React, { useState } from "react";
import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import "./Money.css";

function Form() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h3>Form</h3>
      <form>
        <TextField
          label="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="value"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <InputLabel id="demo-simple-select-label">type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          onChange={(e) => setType(e.target.value)}
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
