import React from "react";
import ExpenseDate from './ExpenseDate';
import "./ExpenseItem.css";

// 중괄호 사이에는 기본 자바스크립트 표현을 사용할 수 있다.
function ExpenseItem(props) {


  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
