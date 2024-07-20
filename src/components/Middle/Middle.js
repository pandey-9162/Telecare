import React from 'react';
import './style.css';
import cart1 from '../../assets/telecare.jpg';
import cart2 from '../../assets/4.jpg';
import cart3 from '../../assets/5.jpg';
import { Link } from 'react-router-dom';

const Middle = () => {
  return (
    <div className='block'>
      <div className="lines" style={{ textAlign: 'center', margin: '20px' }}>
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


      <p className='m-3 fs-1' style={{ textAlign: 'center', fontStyle: "oblique", fontWeight: "bolder", color: "black" }}>Our services</p>

      <div className='cart-container'>
        <div className='cart'>
          <img src={cart1} class="cart-img" alt="Skyscrapers" />
          <div class="cart-body">
            <h2 class="cart-title">INDIVIDUALS</h2>
            <p class="cart-desc">
              MeetMydoc offers a wide range of telemedicine services for individuals, connecting them with healthcare professionals from the comfort of their homes. Services include primary care for routine check-ups and chronic disease management, specialist consultations in fields like cardiology and dermatology, and mental health support with licensed therapists. MeetMydoc ensures timely and convenient medical consultations, enhancing healthcare access and continuity for all patients.
              MeetMydoc revolutionizes clinical care by offering a wide range of telemedicine services that ensure patients receive timely and expert medical attention.
              MeetMydoc allows patients to schedule online consultations. 

            </p>
            <Link to="/more-about-meetmydoc"><button className='cart-button'>Know more</button></Link>
          </div>
        </div>
        <div className='cart'>
          <img src={cart2} class="cart-img" alt="Skyscrapers" />
          <div class="cart-body">
            <h2 class="cart-title">ORGANISATIONS</h2>
            <p class="cart-desc">
              MeetMydoc provides comprehensive telemedicine solutions tailored to organizations, focusing on enhancing employee health and well-being through accessible and efficient virtual healthcare services. Our offerings include corporate wellness programs, occupational health services, and remote employee healthcare, all designed to support a productive and healthy workforce. With features like virtual health assessments, wellness coaching, pre-employment screenings, and mental health support, MeetMydoc helps organizations maintain compliance with health regulations, reduce healthcare costs, and boost employee satisfaction and retention. We are inviting you.we will happy if u join us.</p>
            <Link to="/service/organization"><button className='cart-button'>Know more</button></Link>
          </div>
        </div>
        <div className='cart'>
          <img src={cart3} class="cart-img" alt="Skyscrapers" />
          <div class="cart-body">
            <h2 class="cart-title">CLINICIANS</h2>
            <p class="cart-desc">
              MeetMydoc revolutionizes clinical care by offering a wide range of telemedicine services that ensure patients receive timely and expert medical attention. Our platform connects patients with healthcare professionals for primary care, specialist consultations, and mental health support. Through secure video consultations, patients can access routine check-ups, expert opinions from specialists, and ongoing mental health care from the comfort of their homes. MeetMydoc enhances the clinical experience by providing convenient, efficient, and high-quality care, reducing the need for travel and long wait times while ensuring comprehensive and continuous health management.</p>
            <Link to="/more-about-meetmydoc"><button className='cart-button'>Know more</button></Link>
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