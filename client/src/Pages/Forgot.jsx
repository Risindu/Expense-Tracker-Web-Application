import React from 'react'
import './Forgot.css'
import expense from '../Assets/expense.png'

export default function Signup() {
  return (
    <div className='wrapper'>
      <div className="Box5">
        <h1 className='head4'>Forgot Password?</h1>
        <p className='para8'> Create a new Password your<br/>Account below</p>
        <div className="input-text">
          <input type="text" placeholder="New Password" className="input" /><br/>
          <input type="text" placeholder="Confirm Password" className="input" /><br/>
        </div>
        <button className="btn5">Create Password</button><br/><br/>
        <button className="btn6">Cancel</button>
        <p className='para9'>Back to</p>
        <a href='###F' className='login'><b>Login</b></a>
      </div>

      
      <div className="Box6">
        <img src={expense} alt="expense" className='img'/>
        <p className='para10'>Don't have an Account?</p>
        <button className="btn7">Sign Up</button>
      </div>
    </div>
  )
}
