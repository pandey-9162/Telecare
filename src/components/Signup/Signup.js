import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./style.css"; 
import { AuthContext } from "../../AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const base_url = 'http://localhost:5000';

const Register = () => {
  const { login } = useContext(AuthContext); 
  const navigate = useNavigate();
 const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobileNo: "",
    age: ""
  });

  const { name, email, password, mobileNo, age } = formData;

  const [welcomeMessage, setWelcomeMessage] = useState("Welcome to MeetMyDocs");
  const messages = ["Welcome to MeetMyDocs", "Hello user!", "Enjoy your stay!"];

  useEffect(() => {
    let messageIndex = 0;
    const interval = setInterval(() => {
      messageIndex = (messageIndex + 1) % messages.length;
      setWelcomeMessage(messages[messageIndex]);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const showToastMessage = () => {
    toast.success("Registation Successfull!", {
      position: 'top-right',
    });
  };
  
  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log('Submitting form data:', formData);
    try {
      const response = await fetch(`${base_url}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      // console.log('Server response:', data);
      if (response.ok) {
        // console.log('User registered successfully:', data);
        showToastMessage();
        login(data);
        setTimeout(() => navigate('/'), 2000);
      } else {
        // console.error('Registration error:', data);
        alert('Registration failed. Please try again.');
      }
    } catch (err) {
      console.error("Error:", err);
      alert('An error occurred. Please check your internet connection and try again.');
    }
  };

  return (
    <>
      <ToastContainer/>
      {/* <Header /> Your header component */}
      <div className="register-container">
        <div id="welcome-heading" style={{ opacity: 1 }}>{welcomeMessage}</div>
        <div className="register-content">
          <h2>Register</h2>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input placeholder="Name" type="text" id="name" name="name" value={name} onChange={onChange} required className="input-field" />
            </div>
            <div className="form-group">
              <input placeholder="Email Address" type="email" id="email" name="email" value={email} onChange={onChange} required className="input-field" />
            </div>
            <div className="form-group">
              <input placeholder="Password" type="password" id="password" name="password" value={password} onChange={onChange} required className="input-field" />
            </div>
            <div className="form-group">
              <input placeholder="Mobile Number" type="tel" id="mobileNo" name="mobileNo" value={mobileNo} onChange={onChange} required className="input-field" />
            </div>
            <div className="form-group">
              <input placeholder="Age" type="number" id="age" name="age" value={age} onChange={onChange} required className="input-field" />
            </div>
            <button type="submit" className="btn-register">Register</button>
          </form>
          <div className="login-link">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
