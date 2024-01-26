import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './AboutPage.css';
import logo from '../../assets/logo.png';
import about_1 from '../../assets/about_1.jpg';
import about_2 from '../../assets/about_2.jpeg';
const AboutPage = () => {
    return (
        <div className="about-page">
            <Header />
            <div className="branding-section">
                <img src={logo} alt="Ananasek Catering Logo" className="branding-logo" />
                <h1>Nasza firma działa na rynku od 1998 roku</h1>
                <p>Zapewniamy najwyższej jakości usługi cateringowe.</p>
                <img src={about_1} alt="Ananasek Catering Logo" className="branding-logo" />
                <img src={about_2} alt="Ananasek Catering Logo" className="branding-logo" />
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;