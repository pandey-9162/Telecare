import React, { useState, useEffect, useContext } from 'react';
import './Prescription.css'; 
import axios from 'axios';
import { AuthContext } from '../../AuthContext';
const base_url = 'http://localhost:5000';

const Prescription = () => {
    const [prescription, setPrescription] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        const fetchPrescription = async () => {
            if (!user || !user._id) {
                setLoading(false);
                return;
              }
            
            try {
                const response = await axios.get(`${base_url}/api/prescription`, {
                    params: { userId: user._id },
                    headers: {
                      'Authorization': `Basic ${btoa(`${user.email}:${user.password}`)}`,
                      'Content-Type': 'application/json',
                    },
                  });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }

                const data = await response.json();
                console.log(data);
                setPrescription(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPrescription();
    }, []);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    if (!prescription) {
        return <div className="no-data">No prescription data available.</div>;
    }

    const { doctorName, doctorContact, medications, date } = prescription;
    const patientName = user.name;
    const patientContact = user.mobile_no;
    


    return (
        <div className="prescription-container">
            <header className="prescription-header">
                <h1>Prescription</h1>
                <p className="date">Issued on: {new Date(date).toLocaleDateString()}</p>
            </header>
            <section className="prescription-info">
                <div className="info-section">
                    <h2>Patient Information</h2>
                    <p><strong>Name:</strong> {patientName}</p>
                    <p><strong>Contact:</strong> {patientContact}</p>
                </div>
                <div className="info-section">
                    <h2>Doctor Information</h2>
                    <p><strong>Name:</strong> Dr. {doctorName}</p>
                    <p><strong>Contact:</strong> {doctorContact}</p>
                </div>
                <div className="medications-section">
                    <h2>Medications</h2>
                    <ul>
                        {medications.map((medication, index) => (
                            <li key={index} className="medication-item">
                                <strong>{medication.name}</strong>: {medication.dosage} - {medication.instructions}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <footer className="prescription-footer">
                <button onClick={() => window.print()} className="print-button">Print Prescription</button>
            </footer>
        </div>
    );
};

export default Prescription;
