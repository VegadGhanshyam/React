import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpense=(props)=>{
    const saveExpense=(enterdata)=>{
        const expenseData={
            ...enterdata,
            id:Math.random().toString()
        };
        props.onaddExpense(expenseData)
    }




    return(<div className="new-expense">
   <ExpenseForm onSaveExpense={saveExpense} />
    </div>) 
};

export default NewExpense;