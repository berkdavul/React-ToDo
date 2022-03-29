import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import classes from './ExpenseItem.module.css';

const ExpenseItem = (props) => {
  return (
    <li>
      <Card >
        <div className={classes.expenseitem}>
        <ExpenseDate date={props.date} />
        <div className={classes.expenseitemdescription}>
          <div className={classes.expenseitemprice}>{props.title}</div>
          <h2>{props.description}</h2>
        </div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
