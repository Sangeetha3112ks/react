import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email && !password) {
            setPopupMessage('Please fill in email and password.');
            setShowPopup(true);
            return;
        }

        if (!email) {
            setPopupMessage('Please fill in email.');
            setShowPopup(true);
            return;
        }

        if (!password) {
            setPopupMessage('Please fill in password.');
            setShowPopup(true);
            return;
        }

        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.email === email && storedUser.password === password) {
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/');
        } else {
            setPopupMessage('Invalid email or password.');
            setShowPopup(true);
        }
    };

    useEffect(() => {
        let timer;
        if (showPopup) {
            timer = setTimeout(() => setShowPopup(false), 3000);
        }
        return () => clearTimeout(timer);
    }, [showPopup]);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="login-container">
            {showPopup && (
                <div className="popup-bottom"><div className="popup-content-bottom"><p>{popupMessage}</p></div></div>
            )}
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div className="password-input">
                        <input
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span
                            className="password-icon"
                            onClick={togglePasswordVisibility}
                        >
                            {passwordVisible ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                        </span>
                    </div>
                    <div className="button-container"><button type="submit" className="login-button">Login</button></div>
                </form>
                <p>Don't have an account? <Link to="/register">Register</Link></p>
                <p className="forgot-password"><Link to="/forgot-password">Forgot Password?</Link></p>
            </div>
        </div>
    );
};

export default Login;