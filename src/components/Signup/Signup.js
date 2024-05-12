import React from "react";
import './style.css';
import { Form, Input, message } from "antd";
// import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
const navigate = useNavigate();
  //form handler
const onfinishHandler = async (values) => {
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Registration successful
        message.success("Registration Successful!");
        navigate("/");
      } else {
        // Registration failed
        message.error(data.message);
      }
    } catch (error) {
      // Error occurred during registration
      console.error("Error in registration:", error);
      message.error("Something wrong");
    }
  };
  
  return (
    <>
      <div className="form-container ">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="register-form"
        >
          <h3 className="text-center">Register From</h3>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to="/login" className="m-2">
            Already user login here
          </Link>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </Form>
      </div>
    </>
  );
};

export default Signup;
