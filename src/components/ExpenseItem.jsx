import React from "react";
import "./ExpenseItem.css";

// 중괄호 사이에는 기본 자바스크립트 표현을 사용할 수 있다.
function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = "297.67";

  return (
    <div className="expense-item">
      <div>{expenseDate.toDateString()}</div>
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
