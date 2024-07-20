import React from 'react';
import "./style.css";
import { AuthContext } from '../../AuthContext';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons';


function Footer() {
    const {user} = React.useContext(AuthContext);

    return (
        <footer className="footer-main">
            <div className='footer-section'>
                <div className='footer-card'>
                    <h5>Important Link</h5>
                    <ul>
                        <li><a href="/aboutus">About us</a></li>
                        <li><a href="/footer">Contact us</a></li>
                        <li><a href="/footer">Terms and conditions</a></li>
                        <li><a href="/footer">Privacy policy</a></li>
                    </ul>
                </div>
                <div className='footer-card'>
                <h5>For Doctor</h5>
                <ul >
                <li><a href="/service/organization">Join Our Network</a></li>
                <li><a href="/more-about-meetmydoc">How It Works</a></li>
                <li><a href="/more-about-meetmydoc">Benefits</a></li>
                    </ul>
                </div>
                <div className='footer-card'>
                    <h5>For Patient</h5>
                    <ul>
                        <li><a href={user ? '/consult' : '/login'}>Find a Doctor</a></li>
                        <li><a href={user?'/book-appointment' : '/login'}>Book an Appointment</a></li>
                        <li><a href="/more-about-meetmydoc">FAQs</a></li>
                    </ul>
                </div>
                
                <div className='footer-card'>
                    <h5>Our Contact</h5>
                    <ul className="contact-info">
                <li><a href='#'><FontAwesomeIcon icon={faEnvelope} /> info@meetmydoc.com</a></li>
                <li><a href='#'><FontAwesomeIcon icon={faPhone} /> +916299624192</a></li>
                    </ul>
                </div>
            </div>
            <div className="social">
            <div className="text">
                    <span className="fs-3 ">Connect with us on social media:</span>
            </div>
            <div className='social-icon'>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-twitter "></i>
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            
          </div>
            <div className="footer-bottom">
          <p>&copy; 2024 MeetMyDoc. All rights reserved.</p>
        </div>
        </footer>
    );
}

export default Footer;
