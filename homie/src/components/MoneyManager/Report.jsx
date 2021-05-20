import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "./Money.css";
import "./InnerStyles.css";
import db from "../../firebase";

function Report({ income, expense, saving }) {

  const data = {
    labels: ["inflows", "outflows", "savings"],
    datasets: [
      {
        label: "My First Dataset",
        data: [income, expense, saving],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="container">
      <h3>Report</h3>
      {/* {console.log('in report')}
          {console.log(events)} */}
      <Doughnut data={data} />
    </div>
  );
}

export default Report;
