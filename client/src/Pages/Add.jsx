import React from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './Add.css';




export default function Add() {
  const [user_id, setUserID] = useState('');
  axios.defaults.withCredentials = true;
  useEffect(() => {
    // Retrieve username from local storage
    const storedUserid = localStorage.getItem('user_id');
    axios.get('http://localhost:5000/home')
    .then(res=>{
      if(res.data.Status === 'Success'){
        //Only visitors can access the home page
        setUserID(storedUserid);
        navigate('/add')
      }else{
          navigate('/')
        }
      })
    .catch(err=>{console.log(err)})
  })  
axios.defaults.withCredentials = true;  
const handleSubmit = (e) => {
  e.preventDefault();
  axios.post('http://localhost:5000/add', {user_id,amount, category, description, type}).then(result=>{
    if(result.data.Status === 'Transaction Added'){
      navigate('/home')
    }else{
      alert("Can't Add Transaction")
    }
  }).catch(err=>{console.log(err)});
}

const navigate = useNavigate();
const [amount, setAmount] = useState('');
const [category, setCategory] = useState('');
const [description, setDescription] = useState('');
const [type, setType] = useState('');



  return (
    <div className='add'>
      <Navbar />
      <h1 className="addtrans">Add Transaction</h1>
      <div className="addbox">
        <div className="information">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Rs." className="detail" onChange={(e)=>setAmount(e.target.value)}/><br/>
                <select className='selection' onChange={(e)=>setCategory(e.target.value)}>
                    <option value="Category">Category</option>
                    <option value="Foods">Foods</option>
                    <option value="Subscriptions">Subscriptions</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Transport">Transport</option>
                </select>
                <br/>
                <textarea className='descri' placeholder='Description' onChange={(e)=> setDescription(e.target.value)}/>
                <br/>
                <div className="select">
                    <label><input type='radio' name="select" value="income" onChange={(e)=> setType(e.target.value)}></input>Income</label>
                    <label><input type='radio' name="select" value="expense" onChange={(e)=> setType(e.target.value)}></input>Expense</label><br/>
                </div>
                <div className="addbtn">
                    <button className='addbutton' type='submit'>ADD</button>
                </div>
            </form>
        </div>
      </div>

    </div>
  )
}
