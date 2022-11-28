import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expense.css";
import Expensefilter from "./Expensefilter";
import ExpenseChart from "./ExpenseChart";
import ExpensesList from "./Expenselist";

const Expenses = (props) => {
  const [filteryear, setyear] = useState("2020");

  const filterYearChange = (selectedYear) => {
    setyear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteryear;
  });

  return (
    <div>
      <Card className="Expenses">
        <h2>Let's go!!!!!</h2>
        <p>This is also available</p>
        <Expensefilter
          selected={filteryear}
          onChangefilter={filterYearChange}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;
