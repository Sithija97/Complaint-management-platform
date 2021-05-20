import React, { useEffect, useState } from "react";
import db from "../../firebase";
import "./Money.css";
import "./InnerStyles.css";
import Report from "./Report";

function Overview({income, expense, saving}) {

  const [events, setEvents] = useState([]);
 
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
  }, [db]);
  return (
    <>
      <div className="container">
        <h3>Overview</h3>
        <p>inflows : {income}</p>
        <p>outflows : {expense}</p>
        <p>savings : {saving}</p>
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
