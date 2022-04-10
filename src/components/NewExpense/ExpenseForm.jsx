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

    if(!enteredTitle || !enteredAmount || !enteredDate ) {
      alert('빈칸없이 입력해주세요.');
      return;
    }

    // console.log(enteredAmount)
    // console.log(+enteredAmount)
    // console.log(typeof +enteredAmount === typeof Number(enteredAmount));
    
    const expenseData = {
      title: enteredTitle,
      // amount: Number(enteredAmount),
      amount: +enteredAmount, // ! +기호를 붙이면, Number Type으로 변환된다.
      date: new Date(enteredDate)
    }

    // console.log('ExpenseForm.jsx > ' + props.onSaveExpenseData(expenseData))
    props.onSaveExpenseData(expenseData);
    // initialize Values
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    props.onCancel();
    
  }

  // 필요가 없다...?? 어차피 랜더가 되면, 기존에 갖고 있던 값이 사라지기 떄문에....??
  // const cancelHandler = (e) => {
  //   form 사라진다 / 초기화된다 // New Add Expense 버튼 나타난다.
  //   props.onCancel();
  //   setEnteredTitle("");
  //   setEnteredAmount("");
  //   setEnteredDate("");
  // }


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0"
            step=".1"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-05-07"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        {/* <button type="button" onClick={cancelHandler}>Cancel</button> */}
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;