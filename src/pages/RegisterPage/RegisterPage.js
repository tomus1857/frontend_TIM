import React, { useState } from 'react';
import './RegisterPage.css'; // Asumując, że istnieje plik CSS dla tej strony
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';

function RegisterForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstname, setFirstName] = useState('');
    const [surname, setSurName] = useState('');
    const [phonenum, setPhoneNum] = useState('');
    const [registerError, setRegisterError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setRegisterError('Hasła nie są identyczne.');
            return;
        }

        const apiUrl = 'http://localhost:8080/api/register';

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    confirmPassword: confirmPassword, // Upewnij się, że to pole jest obsługiwane po stronie API
                    email: email,
                    firstname: firstname, // Poprawiona literówka
                    surname: surname,
                    phonenum: phonenum
                }),
            });

            if (response.ok) {
                window.location.href = '/login'; // Przekierowanie na stronę logowania
            } else {
                const data = await response.json();
                setRegisterError(data.error || 'Wystąpił błąd podczas rejestracji.');
            }
        } catch (error) {
            console.error('Error:', error);
            setRegisterError('Wystąpił błąd podczas rejestracji.');
        }
    };

    return (
        <>
            <Header />
            <div className="login-page">
                <div className="login-form">
                    <h2>Rejestracja</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Nazwa użytkownika *</label>
                            <input
                                type="text"
                                id="username"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-mail *</label>
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
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Potwierdź hasło *</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstName">Imię *</label>
                            <input
                                type="text"
                                id="firstName"
                                required
                                value={firstname}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="surName">Nazwisko *</label>
                            <input
                                type="text"
                                id="surName"
                                required
                                value={surname}
                                onChange={(e) => setSurName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNum">Numer telefonu</label>
                            <input
                                type="text"
                                id="phoneNum"
                                value={phonenum}
                                onChange={(e) => setPhoneNum(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="login-button">Zarejestruj się</button>
                        {registerError && <div className="login-error">{registerError}</div>}
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default RegisterForm;
