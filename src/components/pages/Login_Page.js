import React from 'react';
import { Link } from 'react-router-dom';
import './Login_Page.css';

function Login_Page() {
  return (
    <>
        <div className='text-container'>
          <Link to="/login"><h1>NAME</h1></Link>
          <h2><Link to="/register">SIGN UP</Link></h2>
        </div>
        <div className='login-container'>
          <h1>LOGIN</h1>
          <p>Hey, Enter your details to get sign in to your account</p>
          <input type="text" placeholder='Enter Username' value=''></input>
          <input type="text" placeholder='Password'></input>
          <Link to="/"><button>Sign in</button></Link>
          <p>Don't have an account? <Link to="/register">Sign up</Link></p>
        </div>
    </>
  )
}

export default Login_Page