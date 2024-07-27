import React, { useState, useEffect, useContext } from 'react';
import DoctorCard from '../DoctorCard/Doctorcard';
import './style.css';
import { AuthContext } from '../../AuthContext';
import axios from 'axios'; 

const base_url = "http://localhost:5000";

const DoctorsList = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useContext(AuthContext);
    const [credits, setCredits] = useState(user?.credits || 0);

    useEffect(() => {
        const fetchCredit = async () => {
            if (!user || !user._id) {
                setLoading(false);
                return;
            }
            try {
                const response = await axios.get(`${base_url}/api/point`, {
                    params: { userId: user._id },
                });
                if (response.data && response.data.credit !== undefined) {
                    setCredits(response.data.credit);
                } else {
                    // console.error('Invalid credits response:', response);
                    setError('Invalid credits response');
                }
            } catch (error) {
                // console.error('Error fetching credits:', error);
                setError(error.message || 'Error fetching credits');
            } finally {
                setLoading(false);
            }
        };

        fetchCredit();
    }, [user]);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await fetch(`${base_url}/api/doctors`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setDoctors(data);
            } catch (error) {
                console.error('Error fetching doctors:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchDoctors();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
        <div className='px-3 py-3'>Hii {user.name} Your credit point {credits}</div>
        <div className="doctor-heading">
            <h2>Our Experts</h2>
            {doctors.length > 0 ? (
                doctors.map((doctor, index) => (
                    <DoctorCard
                        key={doctor._id || index}
                        doctor={doctor}
                        credits={credits} 
                    />
                ))
            ) : (
                <div>No doctors found</div>
            )}
        </div>
        </>
    );
};

export default DoctorsList;
