import React from 'react'
import './Signup.css'
import {AiFillFacebook, AiFillGoogleCircle, AiFillTwitterCircle, AiOutlineWhatsApp} from 'react-icons/ai'
import expense from '../Assets/expense.png'
import { useState } from 'react';
import axios from 'axios';

export default function Signup() {
  const handleLogin = () => {
    window.location.href = "/login";
  }

  //create use state for the form data
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [income, setIncome] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //create a function to handle the form submission
  const handleSubmit = (e) => {
      e.preventDefault();
    if(password !== confirmPassword){
      alert('passwords do not match')
      return;
    }else{  
    axios.post('http://localhost:5000/signup', {username, email, income, password,confirmPassword})
    .then(result=>{console.log(result)
    window.location.href = "/login";})
    .catch(err=>{console.log(err)})
    }
  }

  return (
    <div className='wrapper'>
      <div className="Box1">
        <h1 className='head2'>Hello!</h1>
        <p className='para2'>Please Sign up to continue</p>
        <form onSubmit={handleSubmit}>
        <div className="input-text"> 
          <input type="text" placeholder="UserName" className="input" onChange={(e)=>setUsername(e.target.value)} required/><br/>
          <input type="text" placeholder="Email" className="input" onChange={(e)=>setEmail(e.target.value)} required/><br/>
          <input type="password" placeholder="Password" className="input" onChange={(e)=>setPassword(e.target.value)} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/><br/>
          <input type="password" placeholder="Confirm Password" className="input" onChange={(e)=>setConfirmPassword(e.target.value)}pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/><br/>
          <input type="text" placeholder="Income" className="input" onChange={(e)=> setIncome(e.target.value)} required/><br/>
          <button type='submit' className="btn1">Sign Up</button>
        </div>
        </form>
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
