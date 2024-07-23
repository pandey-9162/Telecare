import React, { useState, useEffect, useContext } from 'react';
import './style.css'; // Add some basic styling
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { AuthContext } from '../../AuthContext';
<<<<<<< HEAD
const base_url = "https://meetmydoc-backend-3.onrender.com" ;//"https://meetmydoc-backend-2.onrender.com";
=======
const base_url = "http://localhost:5000" ;//"https://meetmydoc-backend-2.onrender.com";
>>>>>>> 662f45eec6fadad3460acc935d5167bf34093408

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch(`${base_url}/api/appointments?userId=${user._id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAppointments(data);
      } catch (err) {
        setError('Failed to fetch appointments');
      } finally {
        setLoading(false);
      }
    };

    if (user && user._id) {
      fetchAppointments();
    }
  }, [user]);

  const now = new Date();
  const upcomingAppointments = appointments.filter(appointment => new Date(appointment.slot) > now);
  const pastAppointments = appointments.filter(appointment => new Date(appointment.slot) <= now);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Header />
      <div className="my-appointments">
        <h1>My Appointment</h1>
        <div className="appointment-section">
          <h4>Upcoming Appointments</h4>
          {upcomingAppointments.length > 0 ? (
            upcomingAppointments.map(appointment => (
              <div key={appointment._id} className="appointment-card">
                <p><strong>Doctor:</strong> Dr. {appointment.doctor.name}</p>
                <p><strong>Date & Time:</strong> {new Date(appointment.slot).toLocaleString()}</p>
                <p><strong>Link:</strong> <a href={appointment.eventLink} target="_blank" rel="noopener noreferrer">Join Meeting</a></p>
              </div>
            ))
          ) : (
            <p>No upcoming appointments</p>
          )}
        </div>

        <div className="appointment-section">
          <h4>Past Appointments</h4>
          {pastAppointments.length > 0 ? (
            pastAppointments.map(appointment => (
              <div key={appointment._id} className="appointment-card">
                <p><strong>Doctor:</strong> Dr. {appointment.doctor.name}</p>
                <p><strong>Date & Time:</strong> {new Date(appointment.slot).toLocaleString()}</p>
              </div>
            ))
          ) : (
            <p>No past appointments</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyAppointment;
