import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from 'react-router-dom'


const LoginButton = () => {

  const email = "shankar0295@gmail.com"
  const password = "123456"

  const [emailId, setMail] = useState(email)
  const [passcode, setPasscode] = useState(password)
  let navigate = useNavigate();


  const handleChangeEmail = (e) => {
    setMail(e.target.value)
    setPasscode(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPasscode(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (e.target[0].value === email && e.target[1].value === password) {
      return navigate("/journal");
    } else {
      alert("Email and password not match")
    }

  }


  return (
    <div className="login-container">
      <h2>Welcome! Please login to pen your thoughts</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email address</label>
        <input type="email" id="email" className="email" value={emailId} onChange={handleChangeEmail} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" className="password" value={passcode} onChange={handleChangePassword} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginButton;
