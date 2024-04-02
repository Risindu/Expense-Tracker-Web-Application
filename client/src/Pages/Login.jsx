import React from 'react'
import './Login.css'
import {AiFillFacebook, AiFillGoogleCircle, AiFillTwitterCircle, AiOutlineWhatsApp} from 'react-icons/ai'
import expense from '../Assets/expense.png'
import { useState } from 'react';
import axios from 'axios';


export default function Signup() {

  const handleSignup = () => {
    window.location.href = "/Signup";
  }

 const[email,setEmail] = useState('');
 const[password,setPassword] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/login', {email, password})
    .then(result=>{console.log(result)
      if(result.data === 'Success Login'){
        window.location.href = "/Transaction";
      }else{
        alert(result.data)
      }
    })
    .catch(err=>{console.log(err)})
  }
  
  return (
    <div className='wrapper'>
      <div className="Box3">
        <h1 className='head3'>Welcome Back!</h1>
        <p className='para5'>Login to your Account</p>
        <form onSubmit={handleSubmit}>
        <div className="input-text">
          <input type="text" placeholder="Email" className="input" onChange={(e)=>setEmail(e.target.value)}/><br/>
          <input type="password" placeholder="Password" className="input" onChange={(e)=>setPassword(e.target.value)}/><br/>
          <input type="checkbox" className="checkbox" /><span className='span'>Remember me</span><br/><br/>
          <a href='###' className='forgot'><b>Forgot Password</b></a>
        </div>
        <button className="btn3">Login</button>
        </form>
        <p className='para6'>or<br/>Login with</p>
        <div className="social">
          <AiFillGoogleCircle/>
          <AiFillFacebook/>
          <AiOutlineWhatsApp/>
          <AiFillTwitterCircle/>
        </div>
        <p className='para6'>I'm not a member!</p>
        <a href='/Signup' className='signup'><b>Sign Up</b></a>
      </div>

      <div className="Box4">
        <img src={expense} alt="expense" className='img'/>
        <p className='para7'>Don't have Account?</p>
        <button className="btn4" onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  )
}
