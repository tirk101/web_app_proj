import React from 'react';
import { Link } from 'react-router-dom';
import Tracking_List from '../Tracking_List';
import './Tracking_Page.css';

function Tracking_Page() {
  return (
    <div className='container'>
    <div className='left-container'>
      <h1>Tracking</h1>
      <div className='menu-container'>
        <Link to='/infomation' ><i class="fa-solid fa-user"/></Link>
        <Link to='/provider' ><i class="fa-solid fa-store"/></Link> 
        <Link to='/customer' ><i class="fa-solid fa-cart-shopping"/></Link> 
        <Link to='/status' ><i class="fa-solid fa-list"/></Link>
        <Link to='/login' ><i class="fa-solid fa-right-from-bracket"/></Link>
      </div>
    </div>
      <div className='right-container' style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
        <div className='tracking-container'>
          <Tracking_List menu='Wing-zap' amount='3' />
          <Tracking_List menu='Wing-zap' amount='4' />
          <Tracking_List menu='Papaya salad' amount='1' />
        </div>
        
        <div className='btn-container' style={{display: 'flex', justifyContent: 'space-between'}}>
          <button>Stop take orders</button>
          <Link to='/provider' ><button>Finish delivery</button></Link>
        </div>  
        </div>
    </div>
  )
}

export default Tracking_Page