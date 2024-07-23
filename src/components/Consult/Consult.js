import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Header from '../Header/Header';
import womenwithphone from '../../assets/a-beautiful-girl-sitting-on-couch-there-is-a-mobil-Wrn9ofaoScijaAkyWZ8J9g-VTkXDwqHSDyDS45ktC_1hg-removebg-preview.png';
import Problem from "../Problems/Problems";
import Footer from "../Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="hero-section">
        <div className="container">
          <div className="text-content">
            <h1>Skip the travel! <br /> Take Online Doctor Consultation</h1>
            <p>Private consultation + Audio call· Starts at just ₹100</p>
            <div className="doctor-info">
              <img src="doctor1.jpg" alt="Doctor 1" className="doctor-img" />
              <img src="doctor2.jpg" alt="Doctor 2" className="doctor-img" />
              <img src="doctor3.jpg" alt="Doctor 3" className="doctor-img" />
              <span>+149 Doctors are online <span className="online-dot">●</span></span>
            </div>
            <div className="button-group">
              <button className="btn btn-primary">Consult Now</button>
              <Link to="/book-appointment">
                <button className="btn btn-outline-success">Book Appointment</button>
              </Link>
            </div>
            <div className="features">
              <p>✔ Verified Doctors</p>
              <p>✔ Free Followup</p>
            </div>
          </div>
          <div className="image-content">
            <img src={womenwithphone} alt="Woman with phone" className="hero-image" />
          </div>
        </div>
      </div>
      <Problem />
      <Footer />
    </>
  );
}

export default App;
