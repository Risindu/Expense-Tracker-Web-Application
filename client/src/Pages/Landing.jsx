import React from 'react'
import './Landing.css'
import pic1 from "../Assets/pic1.jpg";

export default function Landing() {
  return (
    <div>
      <h1 className="heading">EXPENSE TRACKING</h1>
      <p className="subheading">Fin-fit is the ultimate tool for managing your money and staying on <br /> top of your expenses.you can quickly input and categorize your<br />expense, set and track a budget</p>
      <div className="container">
        <div className="Btn1">
          <button className="btn">Sign Up</button>
        </div>
        <div className="Btn2">
          <button className="btn">Login</button>
        </div>
      </div>
      <div className="pic">
        <img src={pic1} alt="" className="pic1" />
        </div>
    </div>
      
  )
}
