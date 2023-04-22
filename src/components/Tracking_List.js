import React from 'react';
import './Tracking_List.css';

function Tracking_List(props) {
  return (
    <div className='tracking-list-container'>
        <p>Menu name: {props.menu}</p>
        <p>Amount: {props.amount}</p>
    </div>
  )
}

export default Tracking_List