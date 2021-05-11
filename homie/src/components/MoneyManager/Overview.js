import React, { useEffect, useState } from "react";
import db from "../../firebase";
import "./Money.css";

function Overview() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    db.collection("events").onSnapshot((snapshot) => {
      setEvents(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  });
  return (
    <div>
      {events.map((event) => (
        <>
          <p>{event.data.name}</p>
          <p>{event.data.amount}</p>
          <p>{event.data.date}</p>
        </>
      ))}
    </div>
  );
}

export default Overview;
