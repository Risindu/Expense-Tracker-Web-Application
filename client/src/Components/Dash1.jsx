import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import './Dash1.css';

export default function Dash1() {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const user_id = localStorage.getItem('user_id');
        const response = await axios.get(`http://localhost:5000/transactions?user_id=${user_id}`);
        const { totalIncome, transactions } = response.data;

        // Calculate total expense
        let expense = 0;
        transactions.forEach(transaction => {
          if (transaction.type === 'expense') {
            expense += transaction.amount;
          }
        });

        setTotalIncome(totalIncome);
        setTotalExpense(expense);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <Chart
        type='donut'
        width={350}
        height={250}
        series={[totalIncome, totalExpense]}
        options={{
          labels: ['Income', 'Expense'],
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                },
              },
            },
          },
          colors: ['#00B7FC', '#EF2708'], 
        }}
      />
    </div>
  );
}
