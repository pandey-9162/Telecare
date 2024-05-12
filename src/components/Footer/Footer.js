import React from 'react';
import "./style.css";

function Footer() {
    return (
        <footer className="footer-main">
            <section className="social">
                <div className="text">
                    <span className="fs-3" >Connect with us on social media:</span>
                </div>
                <div className='social-icon'>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </section>

            <section className="">
                <div className="container text-center text-md-start mt-5">
                    {/* Grid row */}
                    <div className="row mt-3">
                        {/* Grid column */}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            {/* Content */}
                            <p className=" fw-bold mb-4 fs-1">
                                MeetMyDoc
                            </p>
                            <p className='fs-2'>
                                Telecare provides 
                                Teleconsultation,
                                Remote Monitoring,
                                Telemedicine App,
                                Online Prescriptions
                            </p>
                        </div>
    
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* Links */}
                            <p className="fw-bold mb-4 fs-1">
                                Services
                            </p>
                            <p className='fs-2'>
                                <a href="#!" className="text-reset">Teleconsultation</a>
                            </p>
                            <p className='fs-2'>
                                <a href="#!" className="text-reset">Remote Monitoring</a>
                            </p>
                            <p className='fs-2'>
                                <a href="#!" className="text-reset">Telemedicine App</a>
                            </p>
                            <p className='fs-2'>
                                <a href="#!" className="text-reset">Online Prescriptions</a>
                            </p>
                        </div>
                        
                         <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            
                            <p className="fw-bold mb-4 fs-1">
                                Quick Links
                            </p>
                            <p className='fs-2'>
                                <a href="#!" className="text-reset">About Us</a>
                            </p>
                            <p className='fs-2'>
                                <a href="#!" className="text-reset">Services</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Contact Us</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">FAQs</a>
                            </p>
                        </div> 
                        
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <p className="fw-bold mb-4 fs-1">Contact</p>
                            <p className='fs-2'><i className="fas fa-home me-3"></i>Boys Hostel 2</p>
                            <p className='fs-2'>
                                <i className="fas fa-envelope me-3"></i>
                                info@meetmydoc.com
                            </p>
                            <p className='fs-2'><i className="fas fa-phone me-3"></i>6299624192</p>
                            <p className='fs-2'><i className="fas fa-print me-3"></i>9915491558</p>
                        </div>

                    </div>
                  
                </div>
            </section>
            
            <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                © {new Date().getFullYear()} Telecare | All Rights Reserved | Developed by <a className="text-reset fw-bold" href="https://yourwebsite.com/">AD</a>
            </div>
            {/* Copyright */}
        </footer>
    );
}

export default Footer;
