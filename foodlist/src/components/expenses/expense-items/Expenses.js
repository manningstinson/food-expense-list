import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseItemHeader from "./ExpenseItemHeader";
import "./Expenses.css";
import Card from "../../card/Card";
import ExpensesFilter from "../expense-filter/ExpenseFilter";
//import ExpensesFilter from "../expense-filter/ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterchangehandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseItemHeader></ExpenseItemHeader>
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilter={filterchangehandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          restaurant={expense.restaurant}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
