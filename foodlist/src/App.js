//importing required modules
import React, { useState } from "react";
import Expenses from "../src/components/expenses/expense-items/Expenses";
import ExpenseNew from "./components/expenses/expense-new/ExpenseNew";
import Card from "./components/card/Card";
import LogoMain from "./components/logo/Logo";

//initialiing expense array with one entry.
const InitalizeExpenseList = [
  {
    id: "e1",
    title: "Hamburger",
    amount: 15.99,
    restaurant: "Black Walnut Cafe",
    date: new Date(2022, 8, 2),
  },

  {
    id: "e2",
    title: "Soup & Salad",
    amount: 16.01,
    restaurant: "Black Walnut Cafe",
    date: new Date(2022, 8, 2),
  },
];

//Variables used on this page (expenses, setExpenses, addExpenseHandler, setExpenses, prevExpenses)

//Uses an arrow function to set a const variable to an array that includes max two entries expenses, setExpenses which are used in the useState Arguement. 

const App = () => {
  const [expenses, setExpenses] = useState(InitalizeExpenseList);


//Setting a variable called addExpenseHandler with an arrow function that sets setExpenses 
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

//The return statement within the const App variable that uses the useState to initalize (add the first entry of the expense list).  It also includes the Card component that serves as a wrapper to ensure each all other compoenents display properly.

//Each div element has its ownn class for styling purposes and is nested in the Card component. 

  return (
    <Card className="expense-item-header">
      <div className="wrapper">
        <div>
          <LogoMain />
        </div>
        <div className= "expense__instructions_heading"><h3>Food Expenses</h3></div>
        <div className="expense__instructions_subheading" >
          <p> Log your eating out and restaurant expenses here for each day. </p>
        </div>
        <div className = "expense__add_new-expense"  >
          <ExpenseNew onAddExpense={addExpenseHandler} />
        </div>
      <div>
          <Expenses items={expenses} />
        </div>
      </div>
    </Card>
  );
};

export default App;
