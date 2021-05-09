import React, { useEffect, useState } from "react";
import db from "../../firebase";

function Money() {
  const [incomes, setIncome] = useState([]);
  const [expenses, setExpense] = useState([]);

  const total_income =() => {
    let sum = 0
    incomes.map(income => {
      sum += income.data.amount
    })
    console.log('sum: '+sum)
  }
  useEffect(() => {
    db.collection("incomes").onSnapshot((snapshot) => {
      setIncome(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    db.collection("expenses").onSnapshot((snapshot) => {
      setExpense(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    total_income()
  },[incomes, expenses]);
  return (
    <div className="App">
      <h3>Money</h3>
      {incomes.map((income) => (
        <>
          <p>{income.data.name}</p>
          <p>{income.data.amount}</p>
        </>
      ))}
    </div>
  );
}

export default Money;
