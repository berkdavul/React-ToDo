import React, { useState } from "react";
import { useNavigate } from "react-router";
import classes from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const navigate = useNavigate();

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    if (enteredTitle===("") || enteredDate===("") || enteredDescription===(""))
      event.preventDefault();
    else {
      const expenseData = {
        title: enteredTitle,
        description: enteredDescription,
        date: new Date(enteredDate),
      };

      props.onSaveExpenseData(expenseData);
      setEnteredTitle("");
      setEnteredDescription("");
      setEnteredDate("");

      if (enteredTitle && enteredDate && enteredDescription) {
        navigate("/products");
      } else {
        return props.onYes;
      }
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.newexpensecontrols}>
        <div className={classes.newexpensecontrol}>
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={classes.newexpensecontrol}>
          <label>Description</label>
          <input
            type="text"
            min="0.01"
            step="0.01"
            value={enteredDescription}
            onChange={descriptionChangeHandler}
          />
        </div>
        <div className={classes.newexpensecontrol}>
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2025-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className={classes.newexpenseactions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Plan</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
