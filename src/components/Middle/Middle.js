import React from 'react';
import './style.css';
import cart1 from '../../assets/telecare.jpg';
import cart2 from '../../assets/4.jpg';
import cart3 from '../../assets/5.jpg';
// import '@fortawesome/fontawesome-free/css/all.min.css';

const Middle = () => {
  return (
    <div className='block'>
      <div className="lines" style={{ textAlign: 'center', margin: '20px'}}>
        <p className='slogan'>
        For your <span className='span1'>physical health</span>, 
        For your <span className='span2'>mental health</span>, 
        For <span className='span3'>clinicians</span>,
        For <span className='span4'>hospitals</span>, 
        For all of it in one place. For life.
        </p>
      </div>

    <div className="feature-highlight">
      <div className="feature">
        <i className="fas fa-user-md"></i>
        <h3>24/7 Access to Doctors</h3>
        <p>Consult with doctors anytime, anywhere.</p>
      </div>
      <div className="feature">
        <i className="fas fa-lock"></i>
        <h3>Secure and Private</h3>
        <p>Your consultations are safe and confidential.</p>
      </div>
      <div className="feature">
        <i className="fas fa-stethoscope"></i>
        <h3>Expert Medical Advice</h3>
        <p>Receive advice from experienced professionals.</p>
      </div>
      <div className="feature">
        <i className="fas fa-pills"></i>
        <h3>Convenient Prescriptions</h3>
        <p>Get your prescriptions delivered to your door.</p>
      </div>
    </div>
  
 
<p className='m-3 fs-1' style={{ textAlign: 'center', fontStyle:"oblique", fontWeight:"bolder", color:"black"}}>Our services</p>

<div className='cart-container'>
<div className='cart'>
    <img src={cart1} class="cart-img" alt="Skyscrapers"/>
    <div class="cart-body">
        <h2 class="cart-title">INDIVIDUALS</h2>
        <p class="cart-desc">
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This card has even longer content than the first to show
          that equal height action.
        </p>
        <button className='cart-button'>Know more</button>
      </div>
  </div>
  <div className='cart'>
    <img src={cart2} class="cart-img" alt="Skyscrapers"/>
    <div class="cart-body">
        <h2 class="cart-title">ORGANISATIONS</h2>
        <p class="cart-desc">
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This card has even longer content than the first to show
          that equal height action.
        </p>
        <button className='cart-button'>Know more</button>
      </div>
  </div>
  <div className='cart'>
    <img src={cart3} class="cart-img" alt="Skyscrapers"/>
    <div class="cart-body">
        <h2 class="cart-title">CLINICIANS</h2>
        <p class="cart-desc">
          Quality care start here. 
          Join us for the flexibility to work remotely and connect with patients from anywhere, allowing you to balance your professional and personal life seamlessly.
        </p>
        <button className='cart-button'>Know more</button>
    </div>
  </div>
</div>


  <div class="text-center">
    <p class="fs-1">A high-quality care experience—anywhere, Anytime.</p>
    <p class="fs-4">It started with a simple yet revolutionary idea. That everyone should have access to the best healthcare anywhere in the world on their terms. That includes you.</p>
    <button type="button" class="btn btn-outline-success">About us</button>
  </div>


</div>
  );
};

export default Middle;