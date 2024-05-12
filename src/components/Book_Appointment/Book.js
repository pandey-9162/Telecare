import React from 'react';
import './style.css'; 
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
const Book = () => {
  return (
    <>
    <Header/>
    <div className="appointment-container">
    <div className="header">
      <h1>Book an Appointment</h1>
    </div>
    <div className="appointment-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" />
      </div>
      <div className="form-group">
        <label htmlFor="time">Time:</label>
        <input type="time" id="time" />
      </div>
      <button className="btn-book">Book Appointment</button>
    </div>
    
    </div>
      
    </>
  );
};

export default Book ;


