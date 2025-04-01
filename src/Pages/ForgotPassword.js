import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ForgotPassword.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ForgotPassword = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState(location.state?.email || '');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email && !password && !confirmPassword) {
            setPopupMessage('Please fill in email, password, and confirm password.');
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

        if (!confirmPassword) {
            setPopupMessage('Please fill in confirm password.');
            setShowPopup(true);
            return;
        }

        if (password !== confirmPassword) {
            setPopupMessage('Passwords do not match.');
            setShowPopup(true);
            return;
        }

        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.email === email) {
            const updatedUser = { ...storedUser, password: password };
            localStorage.setItem('user', JSON.stringify(updatedUser));
            setPopupMessage('Password changed.');
            setShowPopup(true);
        } else {
            setPopupMessage('User not found.');
            setShowPopup(true);
        }
    };

    useEffect(() => {
        let timer;
        if (showPopup) {
            timer = setTimeout(() => {
                setShowPopup(false);
                if (popupMessage === 'Password changed.') {
                    navigate('/login');
                }
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [showPopup, navigate, popupMessage]);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    return (
        <div className="forgot-password-container">
            {showPopup && (
                <div className="popup-bottom"><div className="popup-content-bottom"><p>{popupMessage}</p></div></div>
            )}
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    readOnly={!!location.state?.email}
                />

                <div className="password-input">
                    <input
                        type={passwordVisible ? "text" : "password"}
                        placeholder="New Password"
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

                <div className="password-input">
                    <input
                        type={confirmPasswordVisible ? "text" : "password"}
                        placeholder="Confirm New Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <span
                        className="password-icon"
                        onClick={toggleConfirmPasswordVisibility}
                    >
                        {confirmPasswordVisible ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                    </span>
                </div>

                <button type="submit">Change Password</button>
            </form>
        </div>
    );
};

export default ForgotPassword;