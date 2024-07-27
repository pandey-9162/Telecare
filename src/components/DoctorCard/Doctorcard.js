import React, { useState, useContext } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

const base_url = "http://localhost:5000";

const DoctorCard = ({ doctor, credits }) => {
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [userCredits, setUserCredits] = useState(credits);

    if (!doctor) {
        console.error("Doctor data is undefined or null");
        return null;
    }

    const { name, photo, speciality, experience, rating, about, availableSlots } = doctor;

    const handleSlotClick = async (slot) => {
        if (userCredits > 0 && slot !== "booked") {
            try {
                const response = await fetch(`${base_url}/api/schedule-meeting`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userEmail: user.email,
                        doctorId: doctor._id,
                        slot: slot,
                    }),
                });
                const data = await response.json();
                if (data.message === "Meeting scheduled successfully") {
                    const newCredits = userCredits - 1;
                    setUserCredits(newCredits);
                    const updatedUser = { ...user, credits: newCredits };
                    setUser(updatedUser);
                    localStorage.setItem('user', JSON.stringify(updatedUser));
                    alert(data.message);
                    navigate("/my-appointment");
                } else {
                    alert(data.message);
                }
            } catch (error) {
                // console.error('Error scheduling meeting:', error);
                alert('Failed to schedule meeting');
            }
        } else {
            if (slot === "booked") {
                alert("Already Occupied");
            } else {
                alert("You don't have enough credits to schedule a meeting");
                navigate("/mycredit");
            }
        }
    };

    // return (
    //     <div className="doctor-card">
    //         <div className="doctor-photo">
    //             <img src={photo || 'https://via.placeholder.com/100'} alt={name} />
    //         </div>
    //         <div className="doctor-details">
    //             <h5>{name}</h5>
    //             <p><strong>Speciality:</strong> {speciality}</p>
    //             <p><strong>Experience:</strong> {experience}</p>
    //             <p><strong>Rating:</strong> {rating}</p>
    //             <p><strong>About:</strong> {about}</p>
    //         </div>
    //         <div className="doctor-slots">
    //             <h6>Available Slots:</h6>
    //             {availableSlots.map((slot, index) => (
    //                 <button onClick={() => handleSlotClick(slot)} key={index} className="slot-button">{slot}</button>
    //             ))}
    //         </div>
    //     </div>
    // );
    return (
        <article className="doctor-card">
            <header className="doctor-card-header">
                <img 
                    src={photo || 'https://via.placeholder.com/100'} 
                    alt={`Photo of Dr. ${name}`} 
                    className="doctor-photo"
                />
                <h2 className="doctor-name">{name}</h2>
            </header>
            <section className="doctor-details">
                <p><strong>Speciality:</strong> {speciality}</p>
                <p><strong>Experience:</strong> {experience}</p>
                <p><strong>Rating:</strong> {rating}</p>
                <p><strong>About:</strong> {about}</p>
            </section>
            <section className="doctor-slots">
                <h3>Available Slots:</h3>
                <div className="slots-container">
                    {availableSlots.map((slot, index) => (
                        <button 
                            onClick={() => handleSlotClick(slot)} 
                            key={index} 
                            className={`slot-button ${slot === "booked" ? 'booked' : ''}`} 
                            aria-label={`Book slot at ${slot}`}
                            disabled={slot === "booked"}
                        >
                            {slot}
                        </button>
                    ))}
                </div>
            </section>
        </article>
    );
};

export default DoctorCard;
