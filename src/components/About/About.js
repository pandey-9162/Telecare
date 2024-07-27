import React from 'react';
import './style.css';
import teamMemberImg2 from "../../assets/Capture.JPG";
import teamMemberImg1 from "../../assets/team1.JPG";

const About = () => {
    return (
        <div className="about-container">
            <section className="intro">
                <h2>About MeetMyDoc</h2>
                <p>MeetMyDoc is not just a platform; it’s a vision to revolutionize healthcare delivery. We connect patients with healthcare professionals efficiently and effectively, bridging gaps and removing barriers to quality care. Our aim is to ensure that healthcare is not only accessible but also simplified, bringing the power of modern medicine to every doorstep, from bustling urban centers to remote rural areas.</p>
                <p>In a world where health needs can be unpredictable, MeetMyDoc stands as a beacon of reliability, offering an intuitive, user-friendly interface that connects individuals with the best medical professionals, whenever and wherever they need it.</p>
            </section>

            <section className="mission">
                <h2>Our Mission</h2>
                <p>Our mission is to redefine healthcare accessibility by providing a seamless, comprehensive experience for users to find, consult, and manage their healthcare needs effortlessly. We strive to enhance the quality of healthcare through cutting-edge technology and innovative solutions, ensuring that every individual, from urban to rural regions across India, has access to top-notch medical care.</p>
                <p>We envision a future where healthcare is not constrained by geography or socio-economic status, making quality medical support universally accessible and consistently reliable.</p>
            </section>

            <section className="features">
                <h2>Key Features</h2>
                <ul>
                    <li><strong>Comprehensive Doctor Listings:</strong> Access a wide range of healthcare professionals from various specialties.</li>
                    <li><strong>Easy Booking:</strong> Schedule consultations with just a few clicks.</li>
                    <li><strong>Secure Payment:</strong> Convenient and secure payment options for recharges and consultations.</li>
                    <li><strong>User-Friendly Interface:</strong> Navigate our platform with ease and efficiency.</li>
                    <li><strong>Medicine Delivery:</strong> 
                        <ul>
                            <li><strong>Metropolitan Cities:</strong> Medicine delivered to your doorstep within 2 hours.</li>
                            <li><strong>Smaller Cities:</strong> Medicine delivered within 24 hours.</li>
                        </ul>
                    </li>
                    <li><strong>Emergency Services:</strong> Immediate transportation to the nearest healthcare facility in critical situations.</li>
                </ul>
            </section>

            <section className="team">
                <h2>Meet Our Team</h2>
                <div className="team-members">
                    <div className="team-member">
                        <img src={teamMemberImg1} alt="Abhishek Pandey" className="team-member-img" />
                        <div className="team-member-info">
                            <h3>Abhishek Pandey</h3>
                            <p>Founder & CTO</p>
                            <p>Abhishek is passionate about leveraging technology to improve healthcare accessibility and quality, bringing his vision to life through MeetMyDoc.</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={teamMemberImg2} alt="Durgesh Sharma" className="team-member-img" />
                        <div className="team-member-info">
                            <h3>Durgesh Sharma</h3>
                            <p>Co-Founder & CEO</p>
                            <p>Durgesh leads the technology team, focusing on innovative solutions and platform development to ensure a smooth and cutting-edge healthcare experience.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact">
                <h2>Contact Us</h2>
                <p>Have questions or feedback? Reach out to us at:</p>
                <p><strong>Email:</strong> <a href="mailto:meetmydoc100@gmail.com">meetmydoc100@gmail.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+916299624192">+91 6299624192</a></p>
            </section>
        </div>
    );
};

export default About;
