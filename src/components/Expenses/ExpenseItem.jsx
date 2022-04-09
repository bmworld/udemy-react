import React, { useState } from "react";
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate';
import "./ExpenseItem.css";
// 중괄호 사이에는 기본 자바스크립트 표현을 사용할 수 있다.
function ExpenseItem(props) {
  
  let [title, setTitle] = useState(props.title);

  // console.log('ExpenseItem evaluated by React !');
  
  // const clickHandler = () => {
  //   setTitle('Updated !');
  // }


  return (
    <div>
      <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </div>

  );
}

export default ExpenseItem;
