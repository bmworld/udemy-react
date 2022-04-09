import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <p className="expenses-list__fallback"> Found No Expenses.</p>;
  };


  return (
    <ul className="expenses-list">
      {props.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount + 2}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
}
export default ExpensesList;