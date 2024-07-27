import React, { useContext } from 'react';
import NavBar from './NavBar/Navbar';
import cover from "../assets/cover1.jpg";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import "./login.css";

export default function Carousel() {
  const { user } = useContext(AuthContext); 
  const navigate = useNavigate(); 

  const handleGetStartedClick = () => {
    if (user) {
      navigate('/consult');
    } else {
      navigate('/login');
    }
  };

  return (
    <div id="main" className="main-div" data-bs-ride="carousel">
      <div id="carouselExampleCaptions" className="carousel slide" data-mdb-ride="carousel" data-mdb-carousel-init>
        <div className="carousel-indicators"></div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={cover} className="d-block w-100" alt="" />
            <div className="carousel-caption custom-caption">
              <h1 className='carousel-heading'>Your Health, Our Priority</h1>
              <p className='fs-3'>Access quality healthcare anytime, anywhere</p>
              <button className='carousel-button' onClick={handleGetStartedClick}> Get Started!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
