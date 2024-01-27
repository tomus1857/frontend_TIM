import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login'); // Przekierowuje użytkownika do strony logowania po wylogowaniu
    };
    const handleClient = () => {
        navigate('/client-panel'); // Przekierowuje użytkownika do strony logowania po wylogowaniu
    };

    return (
        <header className="header">
            <div className="title-container">
                <h1>Ananasek Catering</h1>
                <p>"Zawsze gotowi, zawsze blisko"</p>
            </div>
            <div className="login-section">
                <FaUserCircle className="login-icon" />
                {isAuthenticated ? (
                    <div>
                        <button onClick={handleClient}> Panel klienta</button>
                        <button onClick={handleLogout} className="logout-button">Wyloguj</button>
                    </div>
                ) : (
                    <Link to="/login">Zaloguj się</Link>
                )}
            </div>
        </header>
    );
};

export default Header;