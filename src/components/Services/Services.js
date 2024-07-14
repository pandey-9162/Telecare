import React from 'react';
import './style.css';

const OurServices = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      
      <section className="service-section">
        <h2>Individual Services</h2>
        <p>MeetMydoc offers a range of telemedicine services tailored to individual patients. Our platform allows you to consult with healthcare professionals from the comfort of your home, ensuring that you receive the medical attention you need without the inconvenience of travel.</p>
        <h3>Primary Care</h3>
        <p>Our primary care services include routine check-ups, preventive care, and management of chronic conditions. MeetMydoc enables you to book appointments, receive medical advice, and get prescriptions refilled quickly and efficiently.</p>
        <h3>Specialist Consultations</h3>
        <p>We provide access to specialists in various fields such as cardiology, dermatology, and neurology. Through MeetMydoc, you can schedule virtual consultations with experts who can diagnose and manage specific health issues.</p>
        <h3>Mental Health Support</h3>
        <p>Mental health is crucial for overall well-being. Our platform offers sessions with licensed therapists and psychiatrists who can help with issues such as anxiety, depression, and stress management.</p>
        <h3>How MeetMydoc Helps</h3>
        <p>MeetMydoc streamlines the process of accessing individual healthcare services. Our user-friendly interface makes it easy to find and book appointments with healthcare providers, attend virtual consultations, and manage your health records online.</p>
        <button className='More-Details'>More Details</button>
      </section>
      
      <section className="service-section">
        <h2>Clinical Services</h2>
        <p>MeetMydoc supports clinical practices by offering tools for telehealth consultations, patient management, and streamlined administrative processes.</p>
        <h3>Telehealth Consultations</h3>
        <p>Our platform allows clinicians to conduct video consultations, reducing the need for in-person visits and making healthcare more accessible to patients. Clinicians can review patient histories, provide diagnoses, and follow up on treatment plans.</p>
        <h3>Patient Management</h3>
        <p>MeetMydoc helps clinics manage patient records, appointment schedules, and treatment plans efficiently. Our platform ensures that all patient data is secure and easily accessible to authorized personnel.</p>
        <h3>Administrative Tools</h3>
        <p>We provide clinics with tools to handle billing, insurance claims, and other administrative tasks, reducing the workload on staff and allowing them to focus more on patient care.</p>
        <h3>How MeetMydoc Helps</h3>
        <p>MeetMydoc enhances the efficiency of clinical operations by integrating telemedicine into everyday practice. Our platform reduces no-show rates, improves patient engagement, and ensures continuity of care through seamless communication and record-keeping.</p>
        <button className='More-Details'>More Details</button>
      </section>
      
      <section className="service-section">
        <h2>Organizational Services</h2>
        <p>MeetMydoc offers comprehensive telemedicine solutions for organizations, including corporate wellness programs, occupational health services, and remote employee healthcare.</p>
        <h3>Corporate Wellness Programs</h3>
        <p>Our corporate wellness programs aim to improve the health and well-being of employees. MeetMydoc provides virtual health assessments, wellness coaching, and regular health monitoring to help employees stay healthy and productive.</p>
        <h3>Occupational Health Services</h3>
        <p>We offer occupational health services to ensure that employees are fit to work and that workplaces are safe. This includes pre-employment health screenings, workplace injury assessments, and health risk assessments.</p>
        <h3>Remote Employee Healthcare</h3>
        <p>For organizations with remote or dispersed workforces, MeetMydoc offers telemedicine solutions that provide employees with access to healthcare services regardless of their location. This includes virtual consultations, mental health support, and chronic disease management.</p>
        <h3>How MeetMydoc Helps</h3>
        <p>MeetMydoc assists organizations in maintaining a healthy workforce by providing accessible healthcare services and wellness programs. Our platform supports employees’ health needs, enhances productivity, and reduces healthcare costs through early intervention and continuous care.</p>
        <button className='More-Details'>More Details</button>
      </section>
    </div>
  );
};

export default OurServices;
