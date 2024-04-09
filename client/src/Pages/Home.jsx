import React, { useEffect } from 'react'
// import Dash1 from '../Components/Dash1'
// import Dash2 from '../Components/Dash2'
import Navbar from '../Components/Navbar'
import './Home.css'
// import DList from '../Components/DList'
// import Latest from '../Components/Latest'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Moment from 'react-moment';



export default function Home() {
  const date = new Date();
  const navigate = useNavigate();
  const [username, setUserName] = useState('');

  axios.defaults.withCredentials = true;
  useEffect(() => {
    // Retrieve username from local storage
    const storedUsername = localStorage.getItem('username');
    axios.get('http://localhost:5000/home')
    .then(res=>{
      if(res.data.Status === 'Success'){
        //Only visitors can access the home page
        setUserName(storedUsername);
        navigate('/home')
      }else{
          navigate('/')
        }
      })
    .catch(err=>{console.log(err)})
  })

  return (
    <div className='home'>
      <Navbar/>
      <div className='dash'>
        <h4 className='date1'><Moment format="MMMM Do YYYY">{date}</Moment></h4>
        <h4 className="name1">Good Morning,<br/>{username}</h4>
      </div>
      <div className="maindash">
        <div className="dashboard1">
          {/* <Dash1/> */}
        </div>
        <div className="dashboard2">
          {/* <Dash2/> */}
        </div>
      </div>

      <div className="late">
        {/* <Latest/> */}
      </div>
      {/* <DList/> */}

      
    </div>

  )
}
