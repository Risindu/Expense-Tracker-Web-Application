import React from 'react'
import './Login.css'
import {AiFillFacebook, AiFillGoogleCircle, AiFillTwitterCircle, AiOutlineWhatsApp} from 'react-icons/ai'
import expense from '../Assets/expense.png'

export default function Signup() {
  return (
    <div className='wrapper'>
      <div className="Box3">
        <h1 className='head3'>Welcome Back!</h1>
        <p className='para5'>Login to your Account</p>
        <div className="input-text">
          <input type="text" placeholder="Email" className="input" /><br/>
          <input type="text" placeholder="Password" className="input" /><br/>
          <input type="checkbox" className="checkbox" /><span className='span'>Remember me</span><br/><br/>
          <a href='###' className='forgot'><b>Forgot Password</b></a>
        </div>
        <button className="btn3">Login</button>
        <p className='para6'>or<br/>Login with</p>
        <div className="social">
          <AiFillGoogleCircle/>
          <AiFillFacebook/>
          <AiOutlineWhatsApp/>
          <AiFillTwitterCircle/>
        </div>
        <p className='para6'>I'm not a member!</p>
        <a href='###' className='signup'><b>Sign Up</b></a>
      </div>

      
      <div className="Box4">
        <img src={expense} alt="expense" className='img'/>
        <p className='para7'>Don't have Account?</p>
        <button className="btn4">Sign Up</button>
      </div>
    </div>
  )
}
