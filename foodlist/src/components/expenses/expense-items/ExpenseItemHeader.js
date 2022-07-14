"use-strict";

import Card from "../../card/Card";
import LogoMain from "../../logo/Logo";
import ExpenseNew from "../expense-new/ExpenseNew";

function ExpenseItemHeader() {
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
          <ExpenseNew />
          <div className="expense__motivation__section">
          This is a section to be motivated.
        </div>

        </div>
       
      </div>
    </Card>
  );
}

export default ExpenseItemHeader;
