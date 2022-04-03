import './ExpenseDate.css';


export default function ExpenseDate( props ) {
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('en-US', {month:'long'});
    const day = props.date.toLocaleString('en-US', {day:'2-digit'});
    return(
        <u0l className='expense-date'>
        <li className='expense-date__month'>{month}</li>
        <li className='expense-year'>{year}</li>
        <li className='expense-date__day'>{day}</li>
      </u0l>
    )
}