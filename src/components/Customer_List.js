import React from 'react'
import './Customer_List.css';
import { useNavigate } from 'react-router-dom';

function Customer_List(props) {
    const navigate = useNavigate()
  
    const handleClick = () => {
      navigate('/order')
    }
  
    return (
      <div className='customer-list-container'>
          <div className='customer-text-container'>
              <p>Location: {props.location}</p>
              <p>Total amount of orders: {props.total_amount}</p>
              <p>Remaining amount of orders: {props.total_amount-props.booked_amount}</p>
              <p>Booked amount of orders: {props.booked_amount}</p>
              <p>Pick up point: {props.pickup}</p>
          </div>
          <button onClick={handleClick}>{props.btn}</button>
      </div>
    )
}

export default Customer_List