import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  const expenseFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
    return "" + expense.date.getFullYear() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onExpenseFiltered={expenseFilterHandler}
        />
        <ExpensesList expense={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
