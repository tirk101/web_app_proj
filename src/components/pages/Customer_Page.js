import React from 'react';
import { Link } from 'react-router-dom';
import Customer from '../Customer_List';


function Customer_Page() {
  return (
    <div className='container'>
    <div className='left-container'>
      <h1>Customer</h1>
      <div className='menu-container'>
        <Link to='/infomation' ><i class="fa-solid fa-user"/></Link>
        <Link to='/provider' ><i class="fa-solid fa-store"/></Link> 
        <Link to='/customer' ><i class="fa-solid fa-cart-shopping"/></Link> 
        <Link to='/status' ><i class="fa-solid fa-list"/></Link>
        <Link to='/login' ><i class="fa-solid fa-right-from-bracket"/></Link>
      </div>
  </div>
    <div className='right-container'>
      <Customer location='KFC' total_amount='5' booked_amount='2' pickup='ECC' btn='Order' />
      <Customer location='MK' total_amount='6' booked_amount='3' pickup='KMITL' btn='Order' />
      <Customer location='MK' total_amount='8' booked_amount='4' pickup='HOME' btn='Order' />
    </div>
  </div>
  )
}

export default Customer_Page