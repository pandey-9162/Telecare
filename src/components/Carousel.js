import React from 'react';
import NavBar from './NavBar/Navbar';
import cover from "../assets/cover1.jpg";
import { Link } from 'react-router-dom';
import "./login.css"

export default function Carousel() {
  return (
    <div id="main" className="main-div" data-bs-ride="carousel">
      <NavBar />

      <div id="carouselExampleCaptions" class="carousel slide" data-mdb-ride="carousel" data-mdb-carousel-init>
          <div class="carousel-indicators">
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={cover} class="d-block w-100" alt=""/>
      <div class="carousel-caption custom-caption">
        <h1 className='carousel-heading' >Your Health, Our Priority</h1>
        <p className='fs-3'>Access quality healthcare anytime, anywhere</p>
        <Link to="/consult" className="">
        <button className='carousel-button'> Get Started!
        </button>
        </Link>
      </div>
    </div> 
  </div>
</div>
      {/* <About/> */}
    </div>
  );
}

