import Header from '../Header/Header';
import Footer from "../Footer/Footer"
import React from 'react';
import styled from 'styled-components';
import professioal from "../../assets/professional.jpeg"
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  background-color: #f9f9f9;
  color: #333;
`;

const h1 = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #2c3e50;
`;

const SubHeader = styled.h2`
  font-size: 1.5em;
  margin-bottom: 40px;
  color: #16a085;
`;

const Text = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  max-width: 800px;
  text-align: center;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  margin: 20px 0;
  border-radius: 10px;
`;

const About = () => {
  return (
    <>
    <Header/>
    <AboutContainer>
      <h1>About MeetMyDoc</h1>
      <SubHeader>Your Health, Our Priority</SubHeader>
      <Text>
        MeetMyDoc is dedicated to connecting patients with top medical professionals from various specialties. Our platform offers a seamless and secure way to book appointments, access medical records, and consult with doctors online. We are committed to improving healthcare accessibility and providing personalized care for everyone.
      </Text>
      <Image src={professioal} alt="Healthcare" />
      <Text>
        Our mission is to bridge the gap between patients and doctors, ensuring that everyone has access to the best medical advice and treatment options. With a user-friendly interface and cutting-edge technology, MeetMyDoc makes healthcare management easy and efficient.
      </Text>
      <Text>
        Join us on our journey to revolutionize healthcare and make quality medical care accessible to all.
      </Text>
    </AboutContainer>
    <Footer/>
    </>
  );
};

export default About;
