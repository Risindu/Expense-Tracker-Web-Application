import React from 'react';
import './Edit.css';
import Moment from 'react-moment';

export default function Edit({ transaction }) {
  return (
    <div className="edit-container">
      <div className="edit">
        <div className="edit-details">
          <p className="edit-category">{transaction.category}</p>
          <p className="edit-description">{transaction.description}</p>
        </div>
        <div className="edit-details">
          <p className="edit-amount">-Rs.{transaction.amount.toFixed(2)}</p>
          <p className="edit-date"><Moment format="MMMM Do YYYY">{transaction.date}</Moment></p>
        </div>
        <div className="edit-icons">
          <button className="edit-button">Edit</button>
          <button className="delete-button">Delete</button>
        </div>
      </div>
    </div>
  );
}
