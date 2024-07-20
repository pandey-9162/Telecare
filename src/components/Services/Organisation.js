import React ,{ useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./style.css";
import Header from "../NavBar/Navbar";
import Footer from '../Footer/Footer';

const Organizations = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

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

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL = 'https://sheet.best/api/sheets/31aa46a8-84b9-43a8-b29c-32b27e050138';
    try {
      await axios.post(scriptURL, formData);
      // toast.success('Form submitted successfully!', {
      //   position: toast.POSITION.TOP_RIGHT
      // });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsModalOpen(false);
    } catch (error) {
      // toast.error('Error submitting form', {
      //   position: toast.POSITION.TOP_RIGHT
      // });
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <div className="faq-container">
        <h2>More About MeetMyDoc</h2>
        <p>MeetMydoc provides tailored telemedicine solutions to organizations, helping them maintain the health and well-being of their workforce. Our services encompass corporate wellness programs, occupational health services, and remote employee healthcare, all designed to support a productive and healthy work environment.

          Our corporate wellness programs aim to enhance employees' overall health, reducing absenteeism and increasing productivity. Through MeetMydoc, organizations can offer virtual health assessments, wellness coaching, and regular health monitoring. Employees can easily access personalized health plans, fitness guidance, and nutritional advice, all facilitated through our user-friendly platform.

          For occupational health, MeetMydoc offers pre-employment health screenings, workplace injury assessments, and health risk assessments. Our telemedicine platform allows for swift and efficient health evaluations, ensuring that employees are fit for duty and that workplaces comply with health and safety regulations.

          Remote employee healthcare is another crucial service provided by MeetMydoc. As remote work becomes more prevalent, ensuring that employees have access to healthcare services regardless of their location is essential. MeetMydoc enables remote consultations, mental health support, and chronic disease management, ensuring that employees remain healthy and productive.

          Overall, MeetMydoc assists organizations in promoting a healthy workforce through accessible, efficient, and comprehensive telemedicine services. By integrating our platform into their operations, organizations can support their employees' health needs, enhance productivity, and reduce healthcare costs through preventive care and early intervention.</p>
        <div className="faq">
          <h2>Why Should Organizations Join MeetMydoc?</h2>
          <p><strong>Q1: How does MeetMydoc enhance employee health and well-being?</strong></p>
          <p>MeetMydoc provides easy access to healthcare services, ensuring that employees can address their health concerns promptly and effectively. Our platform includes services such as virtual health assessments, wellness coaching, and mental health support, which contribute to the overall well-being of employees. Healthier employees are more productive, have lower absenteeism rates, and contribute positively to the workplace environment.</p>

          <p><strong>Q2: How does MeetMydoc provide convenience and accessibility?</strong></p>
          <p>Our telemedicine platform allows employees to connect with healthcare professionals from anywhere, eliminating the need for travel and reducing the time spent on medical appointments. This is especially beneficial for remote employees or those in locations with limited access to healthcare facilities. By offering convenient healthcare solutions, organizations can ensure that their employees’ health needs are met without disrupting their work schedules.</p>

          <p><strong>Q3: How can MeetMydoc help organizations save costs?</strong></p>
          <p>Telemedicine can significantly reduce healthcare costs for organizations by minimizing the need for in-person visits and hospital admissions. MeetMydoc’s services help in early detection and management of health issues, preventing costly medical interventions. Additionally, our corporate wellness programs can reduce long-term healthcare expenses by promoting preventive care and healthy lifestyle choices.</p>

          <p><strong>Q4: What comprehensive health services does MeetMydoc offer?</strong></p>
          <p>MeetMydoc offers a wide range of services tailored to meet the diverse health needs of employees. From primary care and specialist consultations to occupational health services and mental health support, our platform ensures that employees receive holistic care. This comprehensive approach helps organizations address various health concerns efficiently.</p>

          <p><strong>Q5: How does MeetMydoc improve compliance and safety for organizations?</strong></p>
          <p>Our occupational health services, including pre-employment screenings and workplace injury assessments, help organizations maintain compliance with health and safety regulations. By ensuring that employees are fit for duty and that workplaces are safe, organizations can avoid potential legal issues and enhance workplace safety.</p>

          <p><strong>Q6: Are MeetMydoc's solutions scalable for different organization sizes?</strong></p>
          <p>MeetMydoc’s telemedicine services are scalable, making them suitable for organizations of all sizes. Whether you have a small team or a large workforce, our platform can be customized to meet your specific needs, providing flexible healthcare solutions that grow with your organization.</p>

          <p><strong>Q7: How does MeetMydoc ensure data security and privacy?</strong></p>
          <p>We prioritize the security and privacy of our users’ data. MeetMydoc complies with all relevant healthcare regulations, ensuring that employees' health information is protected. Organizations can trust us to handle their employees’ health data with the utmost care and confidentiality.</p>

          <p><strong>Q8: How does MeetMydoc impact employee satisfaction and retention?</strong></p>
          <p>By offering innovative and convenient healthcare solutions, organizations can enhance employee satisfaction and loyalty. Employees who feel supported in their health and well-being are more likely to remain with the company, reducing turnover rates and associated recruitment costs.</p>

          <p><strong>Q9: Can MeetMydoc create customized corporate wellness programs?</strong></p>
          <p>MeetMydoc works with organizations to design and implement customized corporate wellness programs that align with their specific goals and needs. These programs can include health education, fitness challenges, stress management workshops, and more, fostering a culture of health within the organization.</p>

          <p><strong>Q10: How does MeetMydoc offer future-ready healthcare solutions?</strong></p>
          <p>As telemedicine continues to evolve, MeetMydoc stays at the forefront of technological advancements, ensuring that organizations have access to cutting-edge healthcare solutions. By partnering with us, organizations can future-proof their healthcare offerings and provide employees with the best possible care.</p>
        </div>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
        <button className="join-button" onClick={toggleModal}>Join us</button>
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={toggleModal}>&times;</button>
            <h2>Join MeetMyDoc</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Organizations Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} />
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Organizations;
