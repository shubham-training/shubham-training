import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enterdAmount, setEnterdAmount] = useState("");
  const [enterdDate, setEnterdDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //     enteredTitle:'',
  //     enterdAmount:'',
  //     enterdDate:''
  // });

  const titleChangehandler = (event) => {
    setEnteredTitle(event.target.value);
    //setUserInput({
    //...userInput,
    //enteredTitle: event.target.value,
    //});
    // setUserInput((prevState) => {
    //     return{...prevState,  enteredTitle: event.target.value}
    // });
  };

  const amountChangehandler = (event) => {
    setEnterdAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value,
    // });
    // setUserInput((prevState) => {
    //     return{...prevState,  enteredAmount: event.target.value}
    // });
  };

  const dateChangehandler = (event) => {
    setEnterdDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enterdDate: event.target.value,
    // });
    // setUserInput((prevState) => {
    //     return{...prevState,  enterdDate: event.target.value}
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enterdAmount,
      date: new Date(enterdDate),
    };

    props.onsaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnterdAmount('');
    setEnterdDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangehandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterdAmount}
            onChange={amountChangehandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enterdDate}
            onChange={dateChangehandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
