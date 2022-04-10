import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpenseChart";
// import Test from './TestComponent';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('unselected');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // ! map()을 사용하면 List를 Return 하기에 더욱 효율적이고 직관적으로 할 수 있다.

  //  노가다 Ver.
  // let list_ExpenseItem = [];
  // for(let i =0; i < props.items.length; i++){
  //   list_ExpenseItem.push(<ExpenseItem
  //     key= {i}
  //     title={props.items[i].title}
  //     amount={props.items[i].amount}
  //     date={props.items[i].date}
  //   ></ExpenseItem>)
  // }

  const filteredExpenses = props.items.filter( (expense) => {
    const thisExpenseYear = expense.date.getFullYear().toString();
    if (filteredYear === "unselected" || filteredYear === thisExpenseYear) return expense;
  });


  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>

        {/* Component를 배열안에서 여러 개를 동시에 넣을 수 있다. */}
        {/* {[<Test />, <Test />,<Test />, <Test />,]} */}

        {/* // * Udemy강사님 VER. */}
        <ExpensesList items={filteredExpenses} />

        {/* // * 노가다 VER. */}
        {/* {list_ExpenseItem} */}

        {/* // * Filtered Expense적용하기 노가다 VER. */}
        {/* {props.items.map((expense) => {
          if (filteredYear === 'unselected') {
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            )
          } else if (expense.date.getFullYear().toString() === filteredYear) {
            // console.log(typeof expense.date.getFullYear());
            // console.log(expense.date.getFullYear());
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          }

          })} */}
      </Card>
    </>
  );
}

export default Expenses;
