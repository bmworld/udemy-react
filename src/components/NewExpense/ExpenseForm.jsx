import React, { useState } from 'react';
import './ExpenseForm.css';


function ExpenseForm(props) {

  // Method 1 => seperated Management
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // Method 2 => integerated Management
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })


  const titleChangeHandler = (event) => {
    setEnteredTitle(event.currentTarget.value);
    // console.log(event.target.value);

    // => No.1 객체를 바로 할당하는 것은, lastest state를 보장하지 않는다.

    // setUserInput({
    //   ...userInput, // important // 기존의 객체 값들을 복사해온다 // 복사하지 않은 값 => 증발한다.
    //   enteredTitle: event.currentTarget.value
    // })



    // => No.2 최신상태를 보장하기 위해서, 함수의 return값을 활용한다.
    // 최신상태의 Snapshot에 기반해서 실행하기 때문이다.
    // 따라서 이전 상태에 따라 상태가 업데이트된다면, 이 함수 폼을 사용해야 한다.
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: event.currentTarget.value }; //
    // })
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.currentTarget.value);
    // console.log(event.target.value);

        // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.currentTarget.value
    // })
    // setUserInput((prevState) => {
    //   return {...prevState, enteredAmount: event.currentTarget.value }; //
    // })
    
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.currentTarget.value);
    // console.log(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.currentTarget.value
    // })
    // setUserInput((prevState) => {
    //   return {...prevState, enteredDate: event.currentTarget.value }; //
    // })
  }


  const submitHandler = (event) => {
    event.preventDefault();
    
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    // console.log(expenseData);
    console.log('ExpenseForm.jsx > ' + props.onSaveExpenseData(expenseData))
    
    // initialize Values
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    
  }

  




  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input type="number"  min=".01" step=".1" value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input type="date"  min="2019-01-01" max="2022-04-07" value={enteredDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;