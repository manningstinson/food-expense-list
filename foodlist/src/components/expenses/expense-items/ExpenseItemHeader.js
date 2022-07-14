
'use-strict'

import Card from "../../card/Card";
import LogoMain from "../../logo/Logo";



function ExpenseItemHeader() {

  return (
    <Card className="expense-item-header">
    <div>
      <div><LogoMain/></div>
      Food Expenses
        <div className="expense__instructions">
          <p>Log your eating out and restaurant expenses here for each day.</p>
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItemHeader;
