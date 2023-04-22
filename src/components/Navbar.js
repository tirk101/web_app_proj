import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
        <nav className='navbar-container'>
            <Link className='logo' to="/">Logo</Link>
            <div className='nav-links'> 
                <ul>
                    <li><Link to="/">Infomation</Link></li>
                    <li><Link to="/customer">Customer</Link></li>
                    <li><Link to="/provider">Provider</Link></li>
                    <li><Link to="/order">Order</Link></li>
                    <li><Link to="/tracking">Tracking</Link></li>
                    <li><Link to="/status">Status</Link></li>
                    <li><Link to="/login">Log-out</Link></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar