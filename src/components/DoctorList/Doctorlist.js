import React, { useEffect, useState } from 'react';
import DoctorCard from '../DoctorCard/Doctorcard';
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import './style.css';

const DoctorsList = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/doctors');
                console.log('Response:', response);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('Fetched doctors:', data);
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

    // console.log('Doctors list:', doctors);

    return (
        <>
        <Header/>
        <div className="doctor-heading">
            <h2 className=''>Our Experts</h2>
            {doctors.length > 0 ? (
                doctors.map((doctor, index) => (
                    <DoctorCard key={doctor._id || index} doctor={doctor} />
                ))
            ) : (
                <div>No doctors found</div>
            )}
        </div>
        <Footer/>
        </>
    );
};

export default DoctorsList;
