import React, {useState} from "react";
import Expenses from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
const Dummy = [
  {
    id:"e1",
    title: "BMW",
    amount: 3800000,
    date: new Date(2020, 7, 14),
  },
  {
    id:"e2",
    title: "maruti",
    amount: 800000,
    date: new Date(2021, 4, 12),
  },
  {
    id:"e4",
    title: "Audi",
    amount: 2800000,
    date: new Date(2022, 7, 18),
  },
];

function App() {
  const[expenses,setExpenses]=useState(Dummy);
  

  const addExpense=expense=>{
    setExpenses((prevExpense)=>{
      return[expense,...prevExpense]
    })
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense  onaddExpense={addExpense}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
