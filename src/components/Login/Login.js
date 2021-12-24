import React, { useState } from "react";
import "./Login.css";
import { useNavigate, Link } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { useUserAuth } from '../../context/UserAuthContext';
import Footer from '../Footer/Footer';
// import { browserSessionPersistence, setPersistence} from 'firebase/auth' 

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
      <div className="login-wrapper">
        <h2 className="login-header">Welcome! Please login to pen your thoughts</h2>
        {error && <div className="error-msg">{error}</div>}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-wrapper">
            <label className="login-label" htmlFor="email">Email address</label>
            <input type="email" id="email" className="email" placeholder="Enter Email address" value={email} onChange={handleChangeEmail} />
          </div>
          <div className="input-wrapper">
            <label className="login-label" htmlFor="password">Password</label>
            <input type="password" id="password" className="password" placeholder="Enter password" value={password} onChange={handleChangePassword} />
          </div>
          <div className="input-wrapper forgot-password-wrapper">
            <button type="button" className="forgot-password" onClick={handlePasswordReset}>Forgot Password?</button>
          </div>
          <div>
            <button type="submit" className="btn-login">Log In</button>
          </div>
          <hr></hr>
          <div className="google-btn-wrapper">
            <GoogleButton style={{ width: 317 }} onClick={handleGoogleSignIn} />
          </div>
          <div className="google-btn-wrapper">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default LoginButton;
