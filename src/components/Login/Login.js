import React, { useState } from "react";
import "./Login.css";
import { useNavigate, Link } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { useUserAuth } from '../../context/UserAuthContext';

const LoginButton = () => {
  const [email, setMail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("");
  const { login, googleSignIn, resetPassword } = useUserAuth();
  let navigate = useNavigate();


  const handleChangeEmail = (e) => {
    setMail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    try {
      await login(email, password);
      navigate("/journal");
    } catch (err) {
      setError(err.message);
    }
  }

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    setError("")
    try {
      await googleSignIn();
      navigate("/journal");
    } catch (err) {
      setError(err.message);
    }
  }

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setError("")
    try {
      await resetPassword(email);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="login-container">
      <h2>Welcome! Please login to pen your thoughts</h2>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" className="email" value={email} onChange={handleChangeEmail} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="password" value={password} onChange={handleChangePassword} />
        </div>
        <div>
          <button type="submit">Log In</button>
        </div>
        <div>
          <button type="button" onClick={handlePasswordReset}>Forgot Password</button>
        </div>
        <div>
          <GoogleButton onClick={handleGoogleSignIn} />
        </div>
        <div>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginButton;
