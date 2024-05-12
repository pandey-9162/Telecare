import React from 'react';
import './style.css'; 
import Header from '../Header/Header';
import profile from '../../assets/img.jpeg';
import { Link } from 'react-router-dom';
const Appointment = () => {
  return (
    <>
    <Header/>
    {/* <div className="appointment-container">
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
    
    </div> */}
     <div className='Doc-Component'>
        <div className='Profile-pic'>
          <img src={profile}/>
          <h2>Dr. John</h2>
        </div>
        <div className='detail'>
          <h3>Cardiology</h3>
          <p>Experience: 5yr</p>
          <p>lorem lorem lorem lorem </p>
          <Link to="/book-appointment/book">
            <button>Book Slot</button>
          </Link>
        </div>
     </div>
      
    </>
  );
};

export default Appointment ;


