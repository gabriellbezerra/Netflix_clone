//import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'

const Login = () => {

  const [signState, setSignState] = useState("Sign In")

  return (
    <div className='login'>
      <img src={logo} className='login_logo' alt='' />
      <div className="login_form">
        <h1>{signState}</h1>
        <form >
          {signState==="Sign Up" ? (
              <>
                <input type='text' placeholder='Your Name'/>
              </>
          ): null}
          <input type='email' placeholder='Your email'/>
          <input type='password' placeholder='password'/>
          <button>{signState}</button>
          <div className="form_help">
            <div className="remember">
              <input type='checkbox'/>
              <label htmlFor=''>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form_switch">
          {signState==="Sign In" ? (
            <>
              <p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now </span></p>
            </>
          ):null}
          {signState==="Sign Up" ? (
            <>
              <p>Already have account? <span onClick={()=>{setSignState("Sign In")}}>Sign In</span></p>
            </>
          ):null}
        </div>
      </div>
    </div>
  )
}

export default Login