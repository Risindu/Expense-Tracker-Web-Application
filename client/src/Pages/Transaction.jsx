import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Edit from '../Components/Edit';
import './Transaction.css';
import axios from 'axios';
import Moment from 'react-moment';
import { useNavigate } from 'react-router-dom';

export default function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/add');
  }

  useEffect(() => {
    async function fetchTransactions() {
      try {
        const user_id = localStorage.getItem('user_id');
        const response = await axios.get(`http://localhost:5000/transactions/today?user_id=${user_id}`); // Use the new endpoint
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    }
  
    fetchTransactions();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="htran">
        <h1 className='tran'>Transaction</h1>
      </div>
      <div className='trbutton'>
        <button className='trbtn' onClick={handleClick}>Add Transaction</button>
      </div>
      <div className="trantoday">
        <h4 className='today'>Today</h4>
      </div>
      {Array.isArray(transactions) && transactions.map(transaction => (
        <Edit key={transaction._id} transaction={transaction} />
      ))}
    </div>
  );
}
