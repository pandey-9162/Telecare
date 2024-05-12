import React from 'react';
import './style.css';
import cart1 from '../../assets/telecare.jpg';
import cart2 from '../../assets/4.jpg';
import cart3 from '../../assets/5.jpg';

const Middle = () => {
  return (
    <div className='container'>
      <div className="text" style={{ textAlign: 'center', margin: '20px'}}>
        <p className='fs-1 px-4 py-4 mt-5'>
        For your <span className='span1'>physical health</span>. 
        For your <span className='span2'>mental health</span>. <br/> 
        For <span className='span3'>clinicians</span>. 
        For <span className='span4'>hospitals</span>. 
        For all of it in one place. For life.
        </p>
      </div>

      {/* <div className='main'>
            <div id='' className='div1'>
              <h2>Individual</h2> 
              <h3>Anytime Anywhere</h3>
              <h3>Anything Care</h3>
              <p className='abt-individual'>Our telecare services offer a seamless connection between patients and healthcare providers, 
               ensuring access to quality care from the comfort of home. Empowering individuals to manage their well-being with confidence and convenience.</p>
               <button><span style={{ textDecoration: "none" }}>How We Work</span></button>
            </div>
            <div id='' className='div1'>
              <h2>Individual</h2> 
              <h3>Anytime Anywhere</h3>
              <h3>Anything Care</h3>
              <p className='abt-individual'>Our telecare services offer a seamless connection between patients and healthcare providers, 
               ensuring access to quality care from the comfort of home. Empowering individuals to manage their well-being with confidence and convenience.</p>
              <button><span style={{ textDecoration: "none" }}>How We Work</span></button>
            </div>
            <div id='' className='div1'>
              <h2>Individual</h2> 
              <h3>Anytime Anywhere</h3>
              <h3>Anything Care</h3>
              <p className='abt-individual'>Our telecare services offer a seamless connection between patients and healthcare providers, 
               ensuring access to quality care from the comfort of home. Empowering individuals to manage their well-being with confidence and convenience.</p>
               <button><span style={{ textDecoration: "none" }}>How We Work</span></button>
            </div>
        </div> */}
  <p className='m-3 font-weight-bold display-3'>Our services</p>
  <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={cart1} class="card-img-top cart-img" alt="Skyscrapers"/>
      <div class="card-body">
        <h2 class="card-title">INDIVIDUALS</h2>
        <p class="card-text">
          Anytime, anywhere, anything care. 
          Our telecare services offer a seamless connection between patients and healthcare providers,
          ensuring access to quality care from the comfort of home.
        </p>
      </div>
    </div>
  </div>
  <div class="col ">
    <div class="card h-100">
      <img src={cart2} class="card-img-top cart-img" alt="Los Angeles Skyscrapers"/>
      <div class="card-body">
      <h2 class="card-title">CLINICIANS</h2>
        <p class="card-text">
          Quality care start here. 
          Join us for the flexibility to work remotely and connect with patients from anywhere, allowing you to balance your professional and personal life seamlessly.
          </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={cart3} class="card-img-top cart-img" alt="Palm Springs Road"/>
      <div class="card-body">
      <h2 class="card-title">ORGANISATIONS</h2>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This card has even longer content than the first to show
          that equal height action.
        </p>
      </div>
    </div>
  </div>
</div>


<div class="text-center">
  <div class="card-body2 mt-5">
    <p class="card-title2">A high-quality care experience—anywhere, Anytime.</p>
    <p class="card-text2">It started with a simple yet revolutionary idea. That everyone should have access to the best healthcare anywhere in the world on their terms. That includes you.</p>
    <a href="#" class="btn btn-primary">About us</a>
  </div>
</div>

</div>
  );
};

export default Middle;