import React, { useEffect, useState } from 'react';
import DoctorCard from '../DoctorCard/Doctorcard';
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import './style.css';
const base_url = "http://localhost:5000" ;// "https://meetmydoc-backend-2.onrender.com";

const DoctorsList = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await fetch(`${base_url}/api/doctors`);
<<<<<<< HEAD
=======
                // console.log('Response:', response);
>>>>>>> 662f45eec6fadad3460acc935d5167bf34093408
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
<<<<<<< HEAD
=======
                // console.log('Fetched doctors:', data);
>>>>>>> 662f45eec6fadad3460acc935d5167bf34093408
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
