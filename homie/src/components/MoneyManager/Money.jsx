import React, { useEffect, useState } from "react";
import Form from "./Form";
import Report from "./Report";
import "./Money.css";
import Overview from "./Overview";
import db from "../../firebase";
function Money() {
  const [inflows, setInflows] = useState([]);
  const [outflows, setOutflows] = useState([]);
  const [savings, setSavings] = useState([]);

  let sumIncome = 0;
  let sumExpense = 0;
  let sumSavings = 0;

  // getting total inflows
  const getTotalInflows = () => {
    inflows.map((inflow) => {
      sumIncome += parseInt(inflow.data.amount, 10);
    });
    // console.log("sumIncome", sumIncome);
  };

  // getting total outflows
  const getTotalOutflows = () => {
    outflows.map((outflow) => {
      sumExpense += parseInt(outflow.data.amount, 10);
    });
    // console.log("sumExpense", sumExpense);
  };

  // getting total savings
  const getTotalSavings = () => {
    savings.map((saving) => {
      sumSavings += parseInt(saving.data.amount, 10);
    });
    // console.log("sumSavings", sumSavings);
  };
  useEffect(() => {
    db.collection("events")
      .where("type", "==", "income")
      .onSnapshot((snapshot) => {
        setInflows(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    db.collection("events")
      .where("type", "==", "expense")
      .onSnapshot((snapshot) => {
        setOutflows(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    db.collection("events")
      .where("type", "==", "saving")
      .onSnapshot((snapshot) => {
        setSavings(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, [db, getTotalInflows(), getTotalOutflows(), getTotalSavings()]);

  // console.log("events: ", events);
  // console.log("inflows", inflows);
  // console.log("outflows", outflows);
  // console.log("savings", savings);
  return (
    <div className="money">
      <div className="overview">
        <Overview income={sumIncome} expense={sumExpense} saving={sumSavings}/>
      </div>
      <div className="report">
        <Report income={sumIncome} expense={sumExpense} saving={sumSavings}/>
      </div>
      <div className="form">
        <Form />
      </div>
    </div>
  );
}

export default Money;
