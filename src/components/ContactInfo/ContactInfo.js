import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
    return (
        <div className="contact-info">
            <h1>Ananasek Catering</h1>
            <address>
                al. Jana Pawła II 27, <br />
                00-867 Warszawa
            </address>
            <h2>Godziny otwarcia:</h2>
            <p><strong>poniedziałek:</strong> 8:00-20:00</p>
            <p><strong>wtorek:</strong> 8:00-20:00</p>
            <p><strong>środa:</strong> 8:00-20:00</p>
            <p><strong>czwartek:</strong> 8:00-20:00</p>
            <p><strong>piątek:</strong> 8:00-20:00</p>
            <p><strong>sobota:</strong> Zamknięte</p>
            <p><strong>niedziela:</strong> 10:00-16:00</p>
        </div>
    );
};

export default ContactInfo;