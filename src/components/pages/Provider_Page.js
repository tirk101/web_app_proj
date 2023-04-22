import React from 'react';
import { Link } from 'react-router-dom';
import './Provider_Page.css';

function Provider_Page() {
  return (
    <div className='container'>
        <div className='left-container'>
          <h1>Provider</h1>
          <div className='menu-container'>
            <Link to='/' ><i class="fa-solid fa-user"/></Link>
            <Link to='/provider' ><i class="fa-solid fa-store"/></Link> 
            <Link to='/customer' ><i class="fa-solid fa-cart-shopping"/></Link> 
            <Link to='/status' ><i class="fa-solid fa-list"/></Link>
            <Link to='/login' ><i class="fa-solid fa-right-from-bracket"/></Link>
          </div>
        </div>
        <div className='right-container'>
          <h2>Location</h2>
          <select>
            <option>Select your location</option>
            <option>KFC</option>
            <option>BBQ</option>
            <option>MK</option>
          </select>
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
          <h2>Pickup point</h2>
          <select>
            <option>Select where is a pickup point</option>
            <option>ECC</option>
            <option>KMITL</option>
            <option>HOME</option>
          </select>

          <Link to='/tracking'><button>Open for service</button></Link>
        </div>
    </div>
  )
}

export default Provider_Page