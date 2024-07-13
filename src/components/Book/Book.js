import React, { useState } from 'react';
import './style.css';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBookAppointment = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.date || !formData.time) {
      alert('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/schedule-meeting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        alert('Meeting scheduled successfully');
        navigate('/booking', { state: { meetingDetails: data } });
      } else {
        alert('Failed to schedule meeting');
      }
    } catch (error) {
      console.error('Error scheduling meeting:', error);
      alert('An error occurred while scheduling the meeting');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="appointment-container">
        <div className="header">
          <h1>Book an Appointment</h1>
        </div>
        <form className="appointment-form" onSubmit={handleBookAppointment}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" value={formData.date} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time:</label>
            <input type="time" id="time" name="time" value={formData.time} onChange={handleInputChange} required />
          </div>
          <button type="submit" className="btn-book" disabled={isLoading}>
            {isLoading ? 'Booking...' : 'Book Appointment'}
          </button>
        </form>
      </div>
    </>
  );
};

export default AppointmentForm;
