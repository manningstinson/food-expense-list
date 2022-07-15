//import React from "react";
import "./ExpenseNew.css";
import ExpenseForm from "../../expenses/expense-form/ExpenseForm";

const ExpenseNew = (props) => {
  const saveExpenseDataHander = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHander} />
    </div>
  );
};

export default ExpenseNew;
