import React from 'react'
import { Link } from 'react-router-dom'
import './Register_Page.css';

function Register_Page() {
  return (
    <>
        <div className='text-container'>
          <Link to="/login"><h1>NAME</h1></Link>
        </div>
        <div className='register-container'>
          <h1>SIGN UP</h1>
          <input type="text" placeholder='Enter Firstname'></input>
          <input type="text" placeholder='Enter Lastname'></input>
          <input type="text" placeholder='Enter Username'></input>
          <input type="text" placeholder='Password'></input>
          <input type="text" placeholder='Confirm Password'></input>
          <Link to="/login"><button>Sign up</button></Link>
          <p>Already have an account? <Link to="/login">Sign in</Link></p>
        </div>
    </>
  )
}

export default Register_Page