import React from "react";
import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;

// What we have gained with this?
//     - Extract code duplication from Expenses and ExpenseItem
//     - Also the JSX HTML code <div> container.

/* -------------------COMPOSITION : 
Whenever combining component we are using composition.
And this is another aspect of composition.We compose our ExpenseItem component
by using card as a wrapper,by using some built-in HTML elements,
and by then all the putting in the ExpenseDate.And all these components and elements are composed together
to form the overall ExpenseItem component which then again, is used in other components
to in the end overall, build the overall user interface.
*/
