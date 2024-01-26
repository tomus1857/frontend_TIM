import React from 'react';
import sport from '../../assets/sport.jpg';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './MenuPage.css';
import Meal from "../../components/Meal/Meal";
import {Link} from "react-router-dom";


const MenuPage = () => {
    const dietsData = [
        {
            id: 1,
            title: 'Owsianka na mleku',
            description: 'Schobowy wraz z ziemniaczkami z podsmażaną surówką',
            image: sport,
        },
        {
            id: 1,
            title: 'Owsianka na mleku',
            description: 'Schobowy wraz z ziemniaczkami z podsmażaną surówką',
            image: sport,
        },
        {
            id: 1,
            title: 'Owsianka na mleku',
            description: 'Schobowy wraz z ziemniaczkami z podsmażaną surówką',
            image: sport,
        },
        {
            id: 1,
            title: 'Owsianka na mleku',
            description: 'Schobowy wraz z ziemniaczkami z podsmażaną surówką',
            image: sport,
        },
        {
            id: 1,
            title: 'Owsianka na mleku',
            description: 'Schobowy wraz z ziemniaczkami z podsmażaną surówką',
            image: sport,
        }
        ]
    return (
        <div className="menupage">
            <Header/>
            <div className="firstsection">
                <div className="menuItem">
                    <h2>Śniadania</h2>
                    <h4>Przedstawiamy nasze menu, menu można zamówić na każdą okazję taką jak wesele, catering dietetyczny lub uroczystości domowe</h4>
                    <h4>Jeśli chcieliby państwo otrzymać dietę określonego rodzaju zalecamy najpierw skontaktować się z naszym lekarzem</h4>
                    <div className="diets-container">
                        {dietsData.map(diet => (
                            <Meal key={diet.id} {...diet} />
                        ))}
                    </div>
                    <h2>II śniadania</h2>
                    <div className="diets-container">
                        {dietsData.map(diet => (
                            <Meal key={diet.id} {...diet} />
                        ))}
                    </div>
                    <h2>Obiady</h2>
                    <div className="diets-container">
                        {dietsData.map(diet => (
                            <Meal key={diet.id} {...diet} />
                        ))}
                    </div>
                    <h2>Podwieczorek</h2>
                    <div className="diets-container">
                        {dietsData.map(diet => (
                            <Meal key={diet.id} {...diet} />
                        ))}
                    </div>
                    <h2>Kolacja</h2>
                    <div className="diets-container">
                        {dietsData.map(diet => (
                            <Meal key={diet.id} {...diet} />
                        ))}
                    </div>
                    <h2>Skontaktuj się z nami!</h2>
                    <p>Możesz się z nami skontaktować mailowo lub telefonicznie Pozwoli nam to lepiej przygotować się do szczegółowego omówienia Twojego zamówienia.</p>
                    <p>Aby to uczynić zapraszamy do sekcji</p>
                    <Link to='/contact' className="diet-card-link1">
                        <h3>Kontakt</h3>
                    </Link>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default MenuPage;