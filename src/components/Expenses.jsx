import React from 'react';
import Card from './Card';
import ExpenseItem from './ExpenseItem.jsx';
import './Expenses.css';



function Expenses(props) {

  let list_ExpenseItem = [];
  for(let i =0; i < props.items.length; i++){
    list_ExpenseItem.push(<ExpenseItem
      key= {i} 
      title={props.items[i].title}
      amount={props.items[i].amount}
      date={props.items[i].date}
    ></ExpenseItem>)
  }


  return (
    <Card className='expenses'>
      {list_ExpenseItem}
    </Card>
  )
}

export default Expenses;