import React from "react";
import "./login.css";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
const navigate = useNavigate();
const [email,setEmail] = React.useState('');
const [password, setPassword] = React.useState('');
const onfinishHandler = (e) => {
  console.log(e.target.email.value);
}

  return (
    <div className="form-container ">
      <Form
        layout="vertical"
        onFinish={onfinishHandler}
        className="register-form"
      >
        <h3 className="text-center">Login From</h3>

        <Form.Item label="Email" name="email">
          <Input type="email" required />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" required />
        </Form.Item>
        <Link to="/register" className="m-2">
          Not a user Register here
        </Link>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </Form>
    </div>
  );
};


