import React from 'react';
import ExpenseItem from '../expense-items/ExpenseItem';



const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          restaurant={expense.restaurant}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;