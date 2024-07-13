import React, { useState , useEffect } from "react";
import { Link,useNavigate } from 'react-router-dom';
import "./style.css"; 

const Register = () => {
  const navigate = useNavigate() ;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const { name, email, password } = formData;

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

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        // Handle success (e.g., redirect to login page or show success message)
        console.log('User registered successfully:', data);
        alert("User registered successfully!")
        navigate('/');
      } else {
        // Handle error (e.g., show error message)
        console.error('Registration error:', data);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };
  

  return (
    <>
      {/* <Header /> Your header component */}
      <div className="register-container">
        <div id="welcome-heading" style={{ opacity: 1 }}>{welcomeMessage}</div>        <div className="register-content">
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
            <button type="submit" className="btn-register">Register</button>
          </form>
          <div className="login-link">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
      {/* <Footer /> Your footer component */}
    </>
  );
};

export default Register;
