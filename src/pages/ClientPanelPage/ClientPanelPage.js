import React, { } from 'react';
import Header from "../../components/Header/Header";
import './ClientPanelPage.css';
import Footer from "../../components/Footer/Footer";
import {useNavigate} from "react-router-dom";
function ClientPanelPage() {
    const navigate = useNavigate();
    const handleOrder = () => {
        navigate('/order');
    };

    return (

        <>
            <Header/>
            <div className="home-page">

                <h2>Dane użytkownika</h2>
                <ul>
                    <li>Username: </li>
                    <li>Email: </li>
                    <li>Imię: </li>
                    <li>Nazwisko: </li>
                    <li>Numer Telefonu</li>

                </ul>
                <h2>Diety</h2>
                <h3>Tu będą wyświetlać się diety</h3>
                <h1 className="login-button" onClick={handleOrder}>Zamów dietę</h1>
            </div>
            <Footer />
        </>
    );
}

export default ClientPanelPage;