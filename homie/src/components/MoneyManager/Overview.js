import React, { useEffect, useState } from "react";
import db from "../../firebase";
import "./Money.css";

function Overview() {
  const [events, setEvents] = useState([]);

   useEffect(() => {

   });
  return (
    <div>
      {events.map((event) => {
          return (
            <div>
              {/* here we need to display the data */}
            </div>
          );
        })}
    </div>
  );
}

export default Overview;
