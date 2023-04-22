import React from 'react';
import { Link } from 'react-router-dom';
import Status_List from '../Status_List';

function Status_Page() {
  return (
    <div className='container'>
    <div className='left-container'>
      <h1>Status</h1>
      <div className='menu-container'>
        <Link to='/infomation' ><i class="fa-solid fa-user"/></Link>
        <Link to='/provider' ><i class="fa-solid fa-store"/></Link> 
        <Link to='/customer' ><i class="fa-solid fa-cart-shopping"/></Link> 
        <Link to='/status' ><i class="fa-solid fa-list"/></Link>
        <Link to='/login' ><i class="fa-solid fa-right-from-bracket"/></Link>
      </div>
    </div>
      <div className='right-container'>
        <Status_List location='KFC' pickup='ECC' btn='Delivery..' />
        <Status_List location='MK' pickup='KMITL' btn='Can order' />
        <Status_List location='MK' pickup='HOME' btn='Successfully' />
      </div>
    </div>
  )
}

export default Status_Page