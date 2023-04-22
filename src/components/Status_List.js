import React from 'react';
import './Status_List.css';

function Status_List(props) {
  return (
    <div className='status-list-container'>
        <div className='status-text-container'>
            <p>Location: {props.location}</p>
            <p>Pick up point: {props.pickup}</p>
        </div>
        <button>{props.btn}</button>
    </div>
  )
}

export default Status_List