import React, { useState } from 'react';
import './Latest.css';
import arrow from '../Assets/arrow.png';

export default function Latest({ onTimePeriodChange }) {
  const [selectedPeriod, setSelectedPeriod] = useState('Today');

  const handleTimePeriodClick = (period) => {
    setSelectedPeriod(period);
    // Call the callback function passed from the parent component
    onTimePeriodChange(period);
  };

  return (
    <div className='lateTrans'>
      <div className="latest">
        <h4 className='trans'>Latest Transaction</h4>
        <a href='/transaction' className='all'>View All</a>
        <img src={arrow} alt="arrow" className="arrow"/>
      </div>
      <div className="setbutton">
        <button className={`timebutton ${selectedPeriod === 'Today' ? 'active' : ''}`} onClick={() => handleTimePeriodClick('Today')}>Today</button>
        <button className={`timebutton ${selectedPeriod === 'Week' ? 'active' : ''}`} onClick={() => handleTimePeriodClick('Week')}>Week</button>
        <button className={`timebutton ${selectedPeriod === 'Month' ? 'active' : ''}`} onClick={() => handleTimePeriodClick('Month')}>Month</button>
        <button className={`timebutton ${selectedPeriod === 'Year' ? 'active' : ''}`} onClick={() => handleTimePeriodClick('Year')}>Year</button>
      </div>
    </div>
  );
}
