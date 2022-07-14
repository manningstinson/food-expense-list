
import ExpenseDate from "../../expenses/expense-date/ExpenseDate";
import Card from "../../card/Card";
import "./ExpenseItem.css";



 function ExpenseItem(props) {
    return (
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__restaurant__name">
          <h2>{props.restaurant}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
      </Card>
    );
  }
  

export default ExpenseItem



