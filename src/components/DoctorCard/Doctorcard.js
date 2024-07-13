import React, { useContext } from 'react';
import './style.css';
import { AuthContext } from "../../AuthContext";

const DoctorCard = ({ doctor }) => {
    const { user } = useContext(AuthContext);

    if (!doctor) {
        console.error("Doctor data is undefined or null");
        return null;
    }

    const { name, photo, speciality, experience, rating, about, availableSlots } = doctor;

    const handleSlotClick = async (slot) => {
        const userEmail = user.email; // Replace with the actual user's email
        try {
            const response = await fetch('http://localhost:5000/api/schedule-meeting', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userEmail,
                    doctorId: doctor._id,
                    slot: slot,  
                }),
            });
            const data = await response.json();
            alert(data.message);
        } catch (error) {
            console.error('Error scheduling meeting:', error);
            alert('Failed to schedule meeting');
        }
    };

    return (
        <div className="doctor-card">
            <div className="doctor-photo">
                <img src={photo || 'https://via.placeholder.com/100'} alt={name} />
            </div>
            <div className="doctor-details">
                <h5>{name}</h5>
                <p><strong>Speciality:</strong> {speciality}</p>
                <p><strong>Experience:</strong> {experience}</p>
                <p><strong>Rating:</strong> {rating}</p>
                <p><strong>About:</strong> {about}</p>
            </div>
            <div className="doctor-slots">
                <h6>Available Slots:</h6>
                {availableSlots.map((slot, index) => (
                    <button onClick={() => handleSlotClick(slot)} key={index} className="slot-button">{slot}</button>
                ))}
            </div>
        </div>
    );
};

export default DoctorCard;
