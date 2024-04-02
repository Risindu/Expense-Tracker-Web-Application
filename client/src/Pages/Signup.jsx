import React from 'react'
import './Signup.css'
import {AiFillFacebook, AiFillGoogleCircle, AiFillTwitterCircle, AiOutlineWhatsApp} from 'react-icons/ai'
import expense from '../Assets/expense.png'

export default function Signup() {
  const handleLogin = () => {
    window.location.href = "/login";
  }
  return (
    <div className='wrapper'>
      <div className="Box1">
        <h1 className='head2'>Hello!</h1>
        <p className='para2'>Please Sign up to continue</p>
        <div className="input-text">
          <input type="text" placeholder="UserName" className="input" /><br/>
          <input type="text" placeholder="Email" className="input" /><br/>
          <input type="text" placeholder="Income" className="input" /><br/>
          <input type="text" placeholder="Password" className="input" /><br/>
          <input type="text" placeholder="Confirm Password" className="input" /><br/>
        </div>
        <button className="btn1">Sign Up</button>
        <p className='para4'>or<br/>Login with</p>
        <div className="social">
          <AiFillGoogleCircle/>
          <AiFillFacebook/>
          <AiOutlineWhatsApp/>
          <AiFillTwitterCircle/>
        </div>
        <p className='para4'>I'm already a member!</p>
        <a href='###' className='login'><b>Login</b></a>
      </div>

      
      <div className="Box2">
        <img src={expense} alt="expense" className='img'/>
        <p className='para3'>Already have an account?</p>
        <button className="btn2" onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}
