import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Transaction() {
  const navigate = useNavigate();
  const [username, setUserName] = useState('');

  axios.defaults.withCredentials = true;
  useEffect(() => {
    // Retrieve username from local storage
    const storedUsername = localStorage.getItem('username');
    axios.get('http://localhost:5000/transaction')
    .then(res=>{
      if(res.data.Status === 'Success'){
        //Only visitors can access the transaction page
        setUserName(storedUsername);
        navigate('/Transaction')
      }else{
          navigate('/')
        }
      })
    .catch(err=>{console.log(err)})
  })
  return (
    <div>
        <Navbar/>
        <h1 className='tran'>Transaction</h1>
        <p>Welcome {username}</p>
    </div>
  )
}
