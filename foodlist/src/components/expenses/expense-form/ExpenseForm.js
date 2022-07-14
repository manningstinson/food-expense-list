import React from "react";
import "./ExpenseForm.css";
//import TextField from "@mui/material/TextField";

const ExpenseForm = () => {

    return (
    
    <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
          <label>Title</label>
            <input type='text'/>
          </div>
    
          <div className="new-expense__control">
        <label>Amount</label>
            <input type='number' min="0.01" step="0.01"/>
          </div>
    
          <div className="new-expense__control">
           <label>Date</label>
            <input type= 'date' min="2022-07-01" max="2025-07-01"/>
          </div>
    
          <div className="new-expense__control">
            <label>Restaurant</label>
            <input type= 'text'/>
          </div>
          
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
      );

}


export default ExpenseForm;
