import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem.jsx";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
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

  const filteredExpenses = props.items.filter( expense => {
    const thisExpenseYear = expense.date.getFullYear().toString();
    console.log(thisExpenseYear);
    console.log(filteredYear);
    if (filteredYear === "unselected" || filteredYear === thisExpenseYear) {
      return expense;
    }
    
  });
  console.log(filteredExpenses);

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* Component를 배열안에서 여러 개를 동시에 넣을 수 있다. */}
        {/* {[<Test />, <Test />,<Test />, <Test />,]} */}

        {/* // * 노가다 VER. */}
        {/* {list_ExpenseItem} */}
        {/* // * Udemy강사님 VER. */}
        {filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount + 2}
              date={expense.date}
            />
          );
        })}

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
