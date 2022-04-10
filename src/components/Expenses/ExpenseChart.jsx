import React from 'react';
import Chart from '../Chart/Chart';

function ExpenseChart(props) {
  
  const chartDataPoints = [
    { label: 'Jan', value: 0},
    { label: 'Feb', value: 0},
    { label: 'Mar', value: 0},
    { label: 'Apr', value: 0},
    { label: 'May', value: 0},
    { label: 'Jun', value: 0},
    { label: 'Jul', value: 0},
    { label: 'Aug', value: 0},
    { label: 'Sep', value: 0},
    { label: 'Oct', value: 0},
    { label: 'Nov', value: 0},
    { label: 'Dec', value: 0},

  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => jan => 0
    // console.log(expense);
    // console.log(chartDataPoints[expenseMonth]);
    chartDataPoints[expenseMonth].value += expense.amount;
    // * 해당 chartDataPoints의 N번째 = getMonth값으로 구한다.
    // * 유저가 입력한 amount값을 chartDataPoints의 value로 기입한다.
  }
  // console.log(chartDataPoints);


  return (
    <Chart dataPoints= {chartDataPoints} />
  )
}

export default ExpenseChart