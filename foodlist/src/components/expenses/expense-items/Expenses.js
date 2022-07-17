import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../../card/Card";
import ExpensesFilter from "../expense-filter/ExpenseFilter";
import "./Expenses.css";
import ExpensesList from "../expense-list/ExpenseList"
//import Chart from "../expense-chart/ExpenseChart";

//import ExpensesFilter from "../expense-filter/ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');
  const filterchangehandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
   return expense.date.getFullYear().toString() ===filteredYear;
  });

    //return expense.date.getFullYear().toString() === filteredYear;
  

  let expenseContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        restaurant={expense.restaurant}
      />
    ));
  }

    return (
      <div>
        <Card className='expenses'>
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterchangehandler}
          />
          {/* <ExpensesChart expenses={filteredExpenses} /> */}
          <ExpensesList items={filteredExpenses} />
        </Card>
      </div>
    );
  };
  
  export default Expenses;
