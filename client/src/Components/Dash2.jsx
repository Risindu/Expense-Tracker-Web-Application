import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import './Dash2.css';

export default function Dash2() {
  const [categoryExpenses, setCategoryExpenses] = useState([]);

  useEffect(() => {
    async function fetchExpenses() {
      try {
        const user_id = localStorage.getItem('user_id');
        const response = await axios.get(`http://localhost:5000/expenses?user_id=${user_id}`);
        setCategoryExpenses(response.data);
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    }

    fetchExpenses();
  }, []);

  const categories = categoryExpenses.map(expense => expense.category);
  const amounts = categoryExpenses.map(expense => expense.amount);

  return (
    <div className="container1">
      <Chart
        type='donut'
        width={550}
        height={350}
        series={amounts}
        options={{
          labels: categories,
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                },
              },
            },
          },
          colors: ['#FCFF33', '#129702', '#0045B5', '#FD0054', '#FE7F00'], 
        }}
      />
    </div>
  );
}
