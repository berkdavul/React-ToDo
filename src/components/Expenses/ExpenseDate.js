import React from 'react';

import classes from './ExpenseDate.module.css';

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className={classes.expensedate}>
      <div className={classes.expensedatemonth}>{month}</div>
      <div className={classes.expensedateyear}>{year}</div>
      <div className={classes.expensedateday}>{day}</div>
    </div>
  );
};

export default ExpenseDate;
