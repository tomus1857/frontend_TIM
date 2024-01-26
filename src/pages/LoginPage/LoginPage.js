import React, { useState } from 'react';
import './LoginPage.css';
import Header from "../../components/Header/Header"; // Utwórz i zaimportuj odpowiedni plik CSS
import Footer from '../../components/Footer/Footer';
import logo from "../../assets/logo.png";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Logowanie, {email, password}')
    };

    return (
        <>
        <Header />
        <div className="login-page">
            <div className="register">
                <h2>Nie masz jeszcze konta?</h2>
                <p>Zarejestruj się</p>
            </div>
            <div className="login-form">
                <h2>Zaloguj się</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Adres e-mail *</label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Hasło *</label>
                        <input
                            type="password"
                            id="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="login-button">Zaloguj się</button>
                </form>
                <div className="login-links">
                    <a href="/forgot-password">Nie pamiętasz hasła?</a>
                </div>
            </div>
            <div className="branding-section">
                <img src={logo} alt="Ananasek Catering Logo" className="branding-logo" />
            </div>
        </div>
        <Footer />
        </>
    );
};

export default LoginPage;