import React from 'react';
import NavBar from './NavBar/Navbar';
import About from './About/About';
import Middle from './Middle/Middle';
import maxresdefault from '../assets/maxresdefault1.jpg';

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
      <img src={maxresdefault} class="d-block w-100" alt=""/>
      <div class="carousel-caption custom-caption">
        <h1 className='text-dark' >Hello users...</h1>
        <p className='text-dark fs-1'>Healthier should always be <br/> within reach.</p>
        <span className='btn btn-outline-danger fs-2 px-4 py-2'>Care now</span>
      </div>
    </div>
  </div>
</div>
      <Middle/>
      <About/>
    </div>
  );
}
