import React, { useState } from 'react';
import './LoginPage.css';
import Header from "../../components/Header/Header"; // Utwórz i zaimportuj odpowiedni plik CSS
import Footer from '../../components/Footer/Footer';
import logo from "../../assets/logo.png";


function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiUrl = 'http://localhost:8080/api/login';

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: email, password: password }),
            });

            if (response.ok) {
                const data = await response.json();
                // Zakładając, że token jest zwracany w polu 'token' w odpowiedzi JSON
                localStorage.setItem('token', data.token); // Zapisanie tokena do localStorage

                window.location.href = '/'; // Przekierowanie na stronę główną
            } else {
                // Nieudane logowanie, ustawienie komunikatu o błędzie
                setLoginError('Nieprawidłowa nazwa użytkownika lub hasło.');
            }
        } catch (error) {
            console.error('Error:', error);
            setLoginError('Wystąpił błąd podczas logowania.');
        }
    };

    return (
        <>
            <Header />
            <div className="login-page">
                <div className="register">
                    <h2>Nie masz jeszcze konta?</h2>
                    <h2><a href="/register" >Zarejestruj się</a></h2>
                </div>
                <div className="login-form">
                    <h2>Zaloguj się</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Nazwa użytkownika *</label>
                            <input
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
                    {loginError && <div className="login-error" color="red">{loginError}</div>}
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
}

export default LoginForm;