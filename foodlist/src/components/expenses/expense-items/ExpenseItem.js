import { useState } from "react";
import ExpenseDate from "../../expenses/expense-date/ExpenseDate";
import Card from "../../card/Card";
import "./ExpenseItem.css";
//import ExpenseNew from "../expense-new/ExpenseNew";

  
  // Must be called directly in the sub-component function. 
  // Always returns two elements (1st - current state value, 2nd - updating the value)

const ExpenseItem = (props) => {
 //function clickHandler() {}

  const [title, setTitle] = useState(props.title);
  console.log('Expense Item'); 
  const onClickHandler = () => {setTitle('Updated!');
  console.log(title);
};
 
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__restaurant__name">
        <h2>{props.restaurant}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={onClickHandler}>Change Title </button>
    </Card>
  );
}

export default ExpenseItem
