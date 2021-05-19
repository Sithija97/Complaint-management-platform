import React, { useEffect, useState } from "react";
import db from "../../firebase";
import "./Money.css";
import "./InnerStyles.css";

function Overview() {
  const [events, setEvents] = useState([]);
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
    console.log("sumIncome", sumIncome);
  };

  // getting total outflows
  const getTotalOutflows = () => {
    outflows.map((outflow) => {
      sumExpense += parseInt(outflow.data.amount, 10);
    });
    console.log("sumExpense", sumExpense);
  };

  // getting total savings
  const getTotalSavings = () => {
    savings.map((saving) => {
      sumSavings += parseInt(saving.data.amount, 10);
    });
    console.log("sumSavings", sumSavings);
  };
  useEffect(() => {
    db.collection("events")
      .orderBy("date", "desc")
      .onSnapshot((snapshot) => {
        setEvents(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
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

  console.log("events: ", events);
  console.log("inflows", inflows);
  console.log("outflows", outflows);
  console.log("savings", savings);
  return (
    <>
      <div className="container">
        <h3>Overview</h3>
        <p>inflows : {sumIncome}</p>
        <p>outflows : {sumExpense}</p>
        <p>savings : {sumSavings}</p>
      </div>
      <h3>Past events</h3>
      <div className="container">
        {events.map((event) => (
          <div className="data">
            <p>{event.data.name}</p>
            <p>{event.data.amount}</p>
            <p>{event.data.type}</p>
            <p>{event.data.category}</p>
            <p>{event.data.date}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Overview;
