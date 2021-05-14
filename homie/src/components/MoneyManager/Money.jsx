import React from "react";
import Form from "./Form";
import Report from "./Report";
import "./Money.css";
import Overview from "./Overview";

function Money() {
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
