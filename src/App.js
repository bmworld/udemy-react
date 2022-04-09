import React,{ useState }  from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// 수업자료 
// https://github.com/academind/react-complete-guide-code/tree/04-react-state-events



const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 122.12,
    date: new Date(2021, 8, 22),
  },
  {
    id: "e5",
    title: "The Dream",
    amount: 450,
    date: new Date(2019, 5, 12),
  },
];



const App = () => {
  const [expenses, setExpenses] =useState(DUMMY_EXPENSES);
  // console.log(expenses);


  const addExpenseHandler = (expense) => {
    // setExpenses([expense, ...expense]); // 새로운 지출을 배열의 첫번째 인자로, 두번째 인자는 새로운 배열의 나머지를 기존 요소들로 채워준다.
    // console.log(expense)
    setExpenses((prevExpenses) => {
      // return [...prevExpenses, expense]; // * 배열을 만드는 순서: PrevItem, NewItem
      return [expense, ...prevExpenses]; // * 배열을 만드는 순서: NewItem, PrevItem
    });
  
    
  }

  // const addExpenseHandler = (expense) => {
  //   console.log('In app.js')
  //   console.log(expense)
    
  // }




  // 순수 REACT 문법
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', null, "Let's get started~~!!!!"),
  //   React.createElement(Expenses, {items: expenses}),
  // )

  /// 반환할 때, 오직 1개의 wrapper JSX Element가 있어야 하는 이유는.
  // return에서 반환할 수 있는 Element가 오직 1개만 가능하기 떄문이다.
  // React.createElement(...) <---- String이 아니라, 엘리먼트기 때문에 2개 이상 반환이 불가능하다는거.

  // JSX 문법
  return (
    <main>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </main>
  );
};

export default App;
