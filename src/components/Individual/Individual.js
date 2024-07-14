import React from 'react';
import "./style.css";
import Header from "../NavBar/Navbar";
import Footer from '../Footer/Footer';
const Individual = () => {
  const faqs = [
    {
      question: "What is telemedicine?",
      answer: "Telemedicine involves the use of electronic communications and software to provide clinical services to patients without an in-person visit. It is used for follow-up visits, management of chronic conditions, medication management, specialist consultation, and a host of other clinical services that can be provided remotely via secure video and audio connections."
    },
    {
      question: "How does MeetMydoc work?",
      answer: "MeetMydoc allows patients to schedule online consultations with doctors. Patients can select a doctor, book a time slot, and join a video call for their consultation. Doctors can manage their schedules, view patient history, and conduct video consultations through the platform."
    },
    {
      question: "Is telemedicine secure?",
      answer: "Yes, telemedicine platforms like MeetMydoc use secure, encrypted communication channels to ensure that patient data and consultations are confidential and compliant with privacy regulations."
    },
    {
      question: "What do I need for a telemedicine appointment?",
      answer: "You need a device with a camera and microphone (like a smartphone, tablet, or computer), a stable internet connection, and a quiet, private space for your consultation."
    },
    {
      question: "Can I get a prescription through MeetMydoc?",
      answer: "Yes, doctors on MeetMydoc can prescribe medications based on the consultation. Prescriptions can be sent electronically to your preferred pharmacy."
    },
    {
      question: "Are telemedicine appointments covered by insurance?",
      answer: "Coverage for telemedicine services varies by insurance provider and policy. Please check with your insurance company to understand your coverage."
    }
  ];

  return (
    <>
    <Header/>
    <div className="faq-container">
      <h2>More About Telemedicine</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
    <Footer/>
    </>
  );
};

export default Individual;
