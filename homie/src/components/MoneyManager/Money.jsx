import React from "react";
import Form from "./Form";
import Report from "./Report";
import "./Money.css";
import Overview from "./Overview";

function Money() {
  // const setArrayElement = (doc) => {
  //   console.log(doc)
  //   setEvents(( prevEvents ) => {
  //     return [
  //       {doc},
  //       ...prevEvents
  //     ];
  //   })
  //   console.log(events)
  // }

  // useEffect(() => {
  //   const data = db.collection("events").doc('').onSnapshot((snapshot) => {
  //     console.log(snapshot)
  //   })
  //   console.log("data",data);
  // })

  return (
    <div className="money">
      <div className="overview">
        <Overview />
      </div>
      <div className="report">
        <Report />
      </div>
      <div className="form">
        <Form />
      </div>
    </div>
  );
}

export default Money;
