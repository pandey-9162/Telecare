import React, { useState, useContext, useEffect } from "react";
import { Link,  useNavigate  } from 'react-router-dom';
import { AuthContext } from '../../AuthContext'; 
import "./style.css"; 

const Login = () => {
  const { login } = useContext(AuthContext); 
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const [welcomeMessage, setWelcomeMessage] = useState("Welcome to MeetMyDocs");
  const messages = ["Welcome to MeetMyDocs", "Hello user!", "Enjoy your stay!"];
  
  useEffect(() => {
    let messageIndex = 0;
    const interval = setInterval(() => {
      messageIndex = (messageIndex + 1) % messages.length;
      setWelcomeMessage(messages[messageIndex]);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if(!data) console.log("no data");
      if (response.ok) {
        console.log('User logged in successfully:', data);
        login(data);
        alert("You logged in successfully") 
        navigate('/');
      } else {
        // Handle error (e.g., show error message)
        console.error('Login error:', data);
        alert("Enter correct credentials")
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <>
      {/* <Header /> header component */}
      <div className="register-container">
      <div id="welcome-heading" style={{ opacity: 1 }}>{welcomeMessage}</div>        
        <div className="register-content">
          <h2>Log In</h2>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input placeholder="Email Address" type="email" id="email" name="email" value={email} onChange={onChange} required className="input-field" />
            </div>
            <div className="form-group">
              <input placeholder="Password" type="password" id="password" name="password" value={password} onChange={onChange} required className="input-field" />
            </div>
            <button type="submit" className="btn-register">Log In</button>
          </form>
          <div className="login-link">
              Don't have an account? <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
      {/* <Footer /> footer component */}
    </>
  );
};

export default Login;
