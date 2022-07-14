
import ExpenseItem from "./ExpenseItem";
import ExpenseItemHeader from "./ExpenseItemHeader";
import "./Expenses.css";
import Card from "../card/Card";

function Expenses(props) {

    return (
        <Card className = "expenses">
          <ExpenseItemHeader></ExpenseItemHeader>
          <ExpenseItem
            title={props.items[0].title}
            amount={props.items[0].amount}
            restaurant={props.items[0].restaurant}
            date={props.items[0].date}
          ></ExpenseItem>
          <ExpenseItem
            title={props.items[1].title}
            amount={props.items[1].amount}
            restaurant={props.items[1].restaurant}
            date={props.items[1].date}
          ></ExpenseItem>
          <ExpenseItem
            title={props.items[2].title}
            amount={props.items[2].amount}
            restaurant={props.items[2].restaurant}
            date={props.items[2].date}
          ></ExpenseItem>
          <ExpenseItem
            title={props.items[3].title}
            amount={props.items[3].amount}
            restaurant={props.items[3].restaurant}
            date={props.items[3].date}
          ></ExpenseItem>
         
        </Card>
      );
}

export default Expenses