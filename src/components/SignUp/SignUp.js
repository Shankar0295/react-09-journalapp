import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { useUserAuth } from '../../context/UserAuthContext';
import Footer from '../Footer/Footer'


const SignUp = () => {

    const [email, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("");
    const { signUp } = useUserAuth();
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
            await signUp(email, password);
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    }
    return (
        <div className="login-container">
            <div className="login-wrapper">
                <h2 className="login-header">Welcome! Please signup to pen your thoughts</h2>
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
                    <div className="input-wrapper">
                        <button type="submit" className="btn-login">Sign Up</button>
                    </div>
                    <div>
                        Already have an account? <Link to="/">Log In</Link>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}
export default SignUp;