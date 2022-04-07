import React, { useState }  from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem.jsx';
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";




function Expenses(props) {

  const [ filteredYear, setFilteredYear ] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
    // console.log('Expenses.js: ' + selectedYear);
  }

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
    <>
      <Card className='expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {list_ExpenseItem}
      </Card>
    </>
  )
}

export default Expenses;