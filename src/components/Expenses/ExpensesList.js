import React from 'react';

import ExpenseItem from './ExpenseItem';
import classes from './ExpensesList.module.css';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className={classes.expenseslistfallback}>Found no plan.</h2>;
  }
  return (
    <ul className={classes.expenseslist}>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          description={expense.description}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
