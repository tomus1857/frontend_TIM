import React, { useState } from 'react';
import './ContactPage.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import konsultant from "../../assets/konsultant.jpg";
import ContactInfo from "../../components/ContactInfo/ContactInfo";

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        numer_telefonu: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Tutaj możesz dodać logikę do wysyłania formularza, np. przez API
        console.log(formData);
    };

    return (
        <div className="mainsection">
            <Header/>
            <h2>Wyślij zgłoszenie do nas, a swój problem opisz w wiadomości</h2>
            <div className="contact-container">
                <h1>Kontakt</h1>
                <h2>Wyślij do nas zapytanie a na pewno oddzwonimy</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                    <label htmlFor="name">Imię i nazwisko</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <label htmlFor="email">Numer telefonu</label>
                    <input
                        type="numer_telefonu"
                        id="numer_telefonu"
                        name="Numer telefonu"
                        value={formData.numer_telefonu}
                        onChange={handleChange}
                    />

                    <label htmlFor="message">Wiadomość</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />

                    <button type="submit">Wyślij</button>
                </form>
            </div>
            <div className="contactdata">
                <h2>Lub zadzwoń, nasi konsultanci pracują 24/7</h2>
                <img src={konsultant} alt="Ananasek Catering Logo" className="konsultant" />
                <ContactInfo/>
            </div>
            <Footer/>
        </div>
    );
}

export default ContactPage;