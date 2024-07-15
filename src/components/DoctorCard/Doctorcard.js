import React, { useContext, useState } from 'react';
import './style.css';
import { AuthContext } from "../../AuthContext";
import { useNavigate } from 'react-router-dom';
const base_url = "https://meetmydoc-backend-1.onrender.com";
const DoctorCard = ({ doctor }) => {
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate(); 

    const [credits, setCredits] = useState(user ? user.credits : 0);
    if (!doctor) {
        console.error("Doctor data is undefined or null");
        return null;
    }

    const { name, photo, speciality, experience, rating, about, availableSlots } = doctor;

    const handleSlotClick = async (slot) => {
        const userEmail = user.email;
        const credit = user.credits;

        if(credit>0 && slot != "booked") {
            try {
                const response = await fetch(`${base_url}/api/schedule-meeting`, {
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
                if(data.message ==="Meeting scheduled successfully"){
                    const newCredits = credit-1
                    setCredits(newCredits);
                    const updatedUser = { ...user, credits: newCredits };
                    setUser(updatedUser);
                    localStorage.setItem('user', JSON.stringify(updatedUser));
                    }              
                    alert(data.message);
                    navigate("/my-appointment");
            } catch (error) {
                console.error('Error scheduling meeting:', error);
                alert('Failed to schedule meeting');
            }    
        }
        
        else {
            if(slot ==="booked")alert("Already Occupied");
            else 
            alert("You don't have enough credits to schedule a meeting");
            navigate("/mycredit");
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
