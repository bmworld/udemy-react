import React, { useState } from "react";
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    // console.log(expenseData);

    props.onAddExpense(expenseData);
  }

  const startEditingHandler = (e) => {
    // console.log("start editing!");
    setIsEditing(true);
  };


  const stopEditingHandler = (e) => {
    // console.log('stop editing!');
    setIsEditing(false);
  };

  // console.log(isEditing);

  let FilteredExpenseForm = isEditing ? (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onCancel={stopEditingHandler}
    />
  ) : (
    <button onClick={startEditingHandler}>New Add Expense</button>
  ); 


  return (
    <div className='new-expense'> 
      {/* <NewAddedExpenseButton />
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/> */}
      {FilteredExpenseForm}
    </div>
  )
}

export default NewExpense;