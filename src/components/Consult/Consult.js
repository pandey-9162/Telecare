import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import womenwithphone from '../../assets/a-beautiful-girl-sitting-on-couch-there-is-a-mobil-Wrn9ofaoScijaAkyWZ8J9g-VTkXDwqHSDyDS45ktC_1hg-removebg-preview.png';
import Problem from "../Problems/Problems";
import doctor1 from '../../assets/doctor1.jpeg'
import doctor2 from '../../assets/doctor2.jpeg'
import doctor3 from '../../assets/doctor3.jpeg'

function App() {
  return (
    <>
      <div className="hero-section">
        <div className="container">
          <div className="text-content">
            <h1>Skip the travel! <br /> Take Online Doctor Consultation</h1>
            <p>Private consultation + Audio call· Starts at just ₹100</p>
            <div className="doctor-info">
              <img src={doctor1} alt="Doctor 1" className="doctor-img" />
              <img src={doctor2} alt="Doctor 2" className="doctor-img" />
              <img src={doctor3} alt="Doctor 3" className="doctor-img" />
              <span>+149 Doctors are Available <span className="online-dot">●</span></span>
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
    </>
  );
}

export default App;
