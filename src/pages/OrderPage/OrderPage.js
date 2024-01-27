import React, { useState } from 'react';
import Header from "../../components/Header/Header";
import './OrderPage.css';
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import DietTypes from "../../components/DietTypes/DietTypes";
import Variant from "../../components/Variant/Variant";
import DietPlanner from "../../components/DietPlanner/DietPlanner";
import logo from "../../assets/logo.png";

function OrderPage() {
    const navigate = useNavigate();
    const [numberOfDays, setNumberOfDays] = useState(30); // Domyślna liczba dni
    const [excludeWeekends, setExcludeWeekends] = useState(false); // Domyślnie nie pomijamy weekendów
    const [cena, setCena] = useState(numberOfDays * 75); // Początkowa cena

    const handleOrder = () => {
        navigate(`/order`);
    };

    const handleDietPlannerChange = (newCena) => {
        setCena(newCena);
    };

    return (
        <div className="glowna">
            <Header/>
            <div className="divek">
                <div className="orderpage1">
                    <div className="branding-section">
                        <img src={logo} alt="Ananasek Catering Logo" className="branding-logo" />
                        <h5>Najlepszy catering pod słońcem</h5>
                        <h1>Zapraszamy do wyboru diety z poniższych dostępnych</h1>
                    </div>

                    <div className="home-page">
                        <div className="wybor">
                            <h2>Wybór diety</h2>
                            <DietTypes/>
                        </div>
                        <h2>Kaloryczność</h2>
                        <Variant/>
                        <h2>Czas trwania diety</h2>
                        <DietPlanner
                            numberOfDays={numberOfDays}
                            excludeWeekends={excludeWeekends}
                            onChange={handleDietPlannerChange}
                        />
                        <h2>Cena za dzien cateringu jest stała i wynosi 75 zł</h2>
                        <h2>Za ten Catering zapłacisz</h2>
                        <h2>{cena} zł</h2>
                    </div>
                </div>
                <button className="login-button1" onClick={handleOrder}>Zamów dietę</button>
            </div>
            <Footer />
        </div>
    );
}

export default OrderPage;
