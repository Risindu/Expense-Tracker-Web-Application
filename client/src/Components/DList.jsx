import React, { useState, useEffect } from 'react';
import './DList.css';
import axios from 'axios';
import food from '../Assets/food.png';
import sub from '../Assets/sub.png';
import shop from '../Assets/shop.png';
import car from '../Assets/car.png';
import Moment from 'react-moment';

export default function DList({ selectedPeriod }) {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    async function fetchExpenses() {
      try {
        const user_id = localStorage.getItem('user_id');
        const response = await axios.get(`http://localhost:5000/expenses?user_id=${user_id}&period=${selectedPeriod}`);
        setExpenses(response.data);
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    }

    fetchExpenses();
  }, [selectedPeriod]); // Trigger fetchExpenses whenever selectedPeriod changes

  return (
    <div className='list'>
      {expenses.map(expense => (
        <div className="expense" key={expense._id}>
          <div className='icon'>
            {expense.category === 'Foods' && <img src={food} alt='food' className='expen' />}
            {expense.category === 'Subscription' && <img src={sub} alt='subscription' className='expen' />}
            {expense.category === 'Shopping' && <img src={shop} alt='shopping' className='expen' />}
            {expense.category === 'Transport' && <img src={car} alt='transportation' className='expen' />}
          </div>
          <div className='reason'>
            <p className='thing'>{expense.category}</p>
            <p className='reas'>{expense.description}</p>
          </div>
          <div className="details">
            <p className="price">-Rs.{expense.amount.toFixed(2)}</p>
            <p className="time">{<Moment format="MMMM Do YYYY">{expense.date}</Moment>}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
