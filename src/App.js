import ExpenseItem from './components/ExpenseItem.jsx';

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


  let List_ExpenseItem = [];
  
  for(let i =0; i < expenses.length; i++){
    List_ExpenseItem.push(<ExpenseItem
      key= {i} 
      title={expenses[i].title}
      amount={expenses[i].amount}
      date={expenses[i].date}
    ></ExpenseItem>)
  }



  return (
    <div>
      <h2>Let's get started!!!!</h2>
      {List_ExpenseItem}
    </div>
  );
}

export default App;
 