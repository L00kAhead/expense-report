import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expense }) => {
  if (expense.length === 0) {
    return <h2 className="expenses-list__fallback">NO EXPENSES FOUND!</h2>;
  }
  return (
    <ul className="expenses-list">
      {expense.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
      ;
    </ul>
  );
};

export default ExpensesList;
