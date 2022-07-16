"use-strict";

import Card from "../../card/Card";
import LogoMain from "../../logo/Logo";
//import ExpenseForm from "../expense-form/ExpenseForm";
import ExpenseNew from "../expense-new/ExpenseNew";

function ExpenseItemHeader() {

const addExpenseHandler = expense => {};

  return (
    <Card className="expense-item-header">
      <div>
        <div>
          <LogoMain />
        </div>
        Food Expenses
        <div className="expense__instructions"> 
          <p>Log your eating out and restaurant expenses here for each day.</p>
        </div>
        <div className="expense__add_new-expense ">
        <ExpenseNew onAddExpense={addExpenseHandler} />
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItemHeader;