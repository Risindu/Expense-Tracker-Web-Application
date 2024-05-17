
import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';

const Greeting = ({ username }) => {
  const [date, setDate] = useState(new Date());
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const updateGreeting = () => {
      const hour = date.getHours();
      if (hour < 12) {
        setGreeting('Good Morning');
      } else if (hour < 17) {
        setGreeting('Good Afternoon');
      } else if (hour < 21) {
        setGreeting('Good Evening');
      } else {
        setGreeting('Good Night');
      }
    };

    updateGreeting();
    const timer = setInterval(updateGreeting, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <h4 className="name1">
      {greeting}, {username}
    </h4>
  );
};

export default Greeting;