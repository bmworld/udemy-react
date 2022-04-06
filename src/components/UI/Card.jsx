import React from 'react';
import './Card.css'

// props.children 은, Card를... html build-in Tag처럼, 닫는태그로 활용할 수 있게 한다.
const Card = (props) => {
  const classes ='card ' + props.className;
  return (
    <div className={classes}>{props.children}</div>
  )
}

export default Card;