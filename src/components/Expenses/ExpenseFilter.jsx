import React from 'react';
import './ExpensesFilter.css';

function ExpenseFilter (props) {
  const dropdownChangeHandler = (e) => {
    props.onChangeFilter(e.currentTarget.value);
    // console.log(e.currentTarget.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by Year</label>
        <select onChange={dropdownChangeHandler} value={props.filteredYear}>
          <option value="unselected">선택</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter