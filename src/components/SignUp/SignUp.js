import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { useUserAuth } from '../../context/UserAuthContext';


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
            <h2>Welcome! Please signup to pen your thoughts</h2>
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
                    <button type="submit">Sign Up</button>
                </div>
                <div>
                    Already have an account? <Link to="/">Log In</Link>
                </div>
            </form>
        </div>
    )
}
export default SignUp;