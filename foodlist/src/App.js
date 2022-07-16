import React, { useState } from 'react';
import Expenses from "../src/components/expenses/expense-items/Expenses";
import ExpenseNew from "./components/expenses/expense-new/ExpenseNew";

const InitalizeExpenseList = [
  {
    id: "e1",
    title: "Hamburger",
    amount: 123.59,
    restaurant: "Black Walnut Cafe",
    date: new Date(2022, 2, 12),
  },
  
];



const App = () => {
  const [expenses, setExpenses] = useState(InitalizeExpenseList);
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
    return [expenses, ...prevExpenses];

  });
  };
  

  return (
    <div>
      <ExpenseNew onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};




export default App;
