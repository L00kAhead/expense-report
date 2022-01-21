import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpense }) => {
  const [isAdding, setIsAdding] = useState(false);
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    onAddExpense(expenseData);
    setIsAdding(false);
  };

  const addingExpense = () => setIsAdding(true);
  const stopAddingExpense = () => setIsAdding(false);
  return (
    <div className="new-expense">
      {!isAdding && <button onClick={addingExpense}>Add New Expense</button>}
      {isAdding && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCancel={stopAddingExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;
