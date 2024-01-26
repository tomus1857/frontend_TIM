import React from 'react';
import './Header.css';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className="header">
            <div className="title-container">
                <h1>Ananasek Catering</h1>
                <p>"Zawsze gotowi, zawsze blisko"</p>
            </div>
            <div className="login-section">
                <FaUserCircle className="login-icon" />
                <Link to="/login">Zaloguj się</Link>
            </div>
        </header>
    );
};

export default Header;