import "../Expenses/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2 className="expense-item__title">{currentTitle}</h2>
        <div className="expense-item__price">$ {amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;

//prop object : destructured ->  {title, amount, date}
/* <h2>{prop.title}</h2> */
