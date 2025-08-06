import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>Sign In</h1>
        <form>
            <input type='text' placeholder='your name' />
            <input type='email' placeholder='your email' />
            <input type='password' placeholder='your password' />
            <button type='submit'>Login</button>
            <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="">Remember me</label>
            </div>
             <p>Need Help?</p>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
