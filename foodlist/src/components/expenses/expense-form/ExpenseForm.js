
import { useState } from "react";
import "./ExpenseForm.css";

//import TextField from "@mui/material/TextField";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredRestaurant, setEnteredRestaurant] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const restaurantChangeHandler = (event) => {
    setEnteredRestaurant(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate + 'T00:00:00'),
      restaurant: enteredRestaurant
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredRestaurant('');
  };

  return (
    <form onSubmit={submitHandler}>
      <p>Please enter your expenses here.</p>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Food</label>
          <input type="text" 
          value={enteredTitle}
          onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount($)</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-07-01"
            max="2025-07-01"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Restaurant</label>
          <input type="text"
          value={enteredRestaurant} 
          onChange={restaurantChangeHandler} />
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
