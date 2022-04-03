import React from 'react';
import Expenses from './components/Expenses';

function App() {
  
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];


  // 순수 REACT 문법
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', null, "Let's get started~~!!!!"),
  //   React.createElement(Expenses, {items: expenses}),
  // )

  /// 반환할 때, 오직 1개의 wrapper 가 있어야 하는 이유는.
  // return에서 반환할 수 있는 Element가 오직 1개만 가능하기 떄문이다.
  // React.createElement(...) <---- String이 아니라, 엘리먼트기 때문에 2개 이상 반환이 불가능하다는거.



  // JSX 문법
  return (
    <main>
      <h2>Let's get started!!!!</h2>
      <Expenses items={expenses}/>
    </main>
  );
}

export default App;
 