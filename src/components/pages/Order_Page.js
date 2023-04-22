import React from 'react';
import { Link } from 'react-router-dom';

function Order_Page() {
  return (
    <div className='container'>
        <div className='left-container'>
          <h1>Order</h1>
          <div className='menu-container'>
            <Link to='/' ><i class="fa-solid fa-user"/></Link>
            <Link to='/provider' ><i class="fa-solid fa-store"/></Link> 
            <Link to='/customer' ><i class="fa-solid fa-cart-shopping"/></Link> 
            <Link to='/status' ><i class="fa-solid fa-list"/></Link>
            <Link to='/login' ><i class="fa-solid fa-right-from-bracket"/></Link>
          </div>
        </div>
        <div className='right-container' style={{justifyContent: 'center'}}>
          <h2 >Menu name</h2>
          <input type="text" style={{width: '580px', height: '50px'}}></input>
          <h2>Amount</h2>
          <select>
            <option>Select your amount</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>

          <Link to='/status'><button>Order</button></Link>
        </div>
    </div>
  )
}

export default Order_Page