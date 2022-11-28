import "./ExpenseItem.css";
import ExpenseDate from "./Expensedate";
import Card from "../UI/Card";
import React from "react";


function ExpenseItem(props) {

  return (
    <Card className='expense-item'>
    <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h1>{props.title}</h1>
      </div>
      <div className="expense-item__price">{props.amount}</div>
    
    </Card>
  );
}
export default ExpenseItem;
