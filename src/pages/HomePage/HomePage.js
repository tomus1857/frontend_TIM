import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import DietCard from '../../components/DietCard/DietCard';
import logo from '../../assets/logo.png';
import sportImage from '../../assets/sport.jpg';
import fatImage from '../../assets/fat.jpg';
import wegeImage from '../../assets/wege.jpg';
import './HomePage.css';

const dietsData = [
    {
        id: 1,
        title: 'Dieta Sportowa',
        description: 'Dieta dla sportowców bogata w białko, mało węglowodanów, przeznaczona do budowania masy mięśniowej',
        add_info: '1500-3000kcal',
        meals: '5 posiłków',
        image: sportImage,
        link: '/dieta-sportowa'
    },
    {
        id: 2,
        title: 'Dieta Tłuszczowa',
        description: 'Dieta dla ludzi kochających tłuszcz',
        add_info: '1500-3000 kcal',
        meals: '3 posiłki',
        image: fatImage,
        link: '/dieta-tłuszczowa'
    },
    {
        id: 3,
        title: 'Dieta Wege',
        description: 'Dieta dla ludzi kochających jeść rośliny',
        add_info: '1500-3000kcal',
        meals: '3 posiłki',
        image: wegeImage,
        link: '/dieta-wege'
    },
    {
        id: 3,
        title: 'Dieta Wege',
        description: 'Dieta dla ludzi kochających jeść rośliny',
        add_info: '1500-3000kcal',
        meals: '3 posiłki',
        image: wegeImage,
        link: '/dieta-wege'
    },
    {
        id: 3,
        title: 'Dieta Wege',
        description: 'Dieta dla ludzi kochających jeść rośliny',
        add_info: '1500-3000kcal',
        meals: '3 posiłki',
        image: wegeImage,
        link: '/dieta-wege'
    },
    {
        id: 3,
        title: 'Dieta Wege',
        description: 'Dieta dla ludzi kochających jeść rośliny',
        add_info: '1500-3000kcal',
        meals: '3 posiłki',
        image: wegeImage,
        link: '/dieta-wege'
    },
    {
        id: 3,
        title: 'Dieta Wege',
        description: 'Dieta dla ludzi kochających jeść rośliny',
        add_info: '1500-3000kcal',
        meals: '3 posiłki',
        image: wegeImage,
        link: '/dieta-wege'
    },
    {
        id: 3,
        title: 'Dieta Wege',
        description: 'Dieta dla ludzi kochających jeść rośliny',
        add_info: '1500-3000kcal',
        meals: '3 posiłki',
        image: wegeImage,
        link: '/dieta-wege'
    },
    {
        id: 3,
        title: 'Dieta Wege',
        description: 'Dieta dla ludzi kochających jeść rośliny',
        add_info: '1500-3000kcal',
        meals: '3 posiłki',
        image: wegeImage,
        link: '/dieta-wege'
    },
    {
        id: 3,
        title: 'Dieta Wege',
        description: 'Dieta dla ludzi kochających jeść rośliny',
        add_info: '1500-3000kcal',
        meals: '3 posiłki',
        image: wegeImage,
        link: '/dieta-wege'
    },
    {
        id: 3,
        title: 'Dieta Wege',
        description: 'Dieta dla ludzi kochających jeść rośliny',
        add_info: '1500-3000kcal',
        meals: '3 posiłki',
        image: wegeImage,
        link: '/dieta-wege'
    },
    {
        id: 3,
        title: 'Dieta Wege',
        description: 'Dieta dla ludzi kochających jeść rośliny',
        add_info: '1500-3000kcal',
        meals: '3 posiłki',
        image: wegeImage,
        link: '/dieta-wege'
    },
    {
        id: 3,
        title: 'Dieta Wege',
        description: 'Dieta dla ludzi kochających jeść rośliny',
        add_info: '1500-3000kcal',
        meals: '3 posiłki',
        image: wegeImage,
        link: '/dieta-wege'
    },
    {
        id: 3,
        title: 'Dieta Wege',
        description: 'Dieta dla ludzi kochających jeść rośliny',
        add_info: '1500-3000kcal',
        meals: '3 posiłki',
        image: wegeImage,
        link: '/dieta-wege'
    }
];

const HomePage = () => {
    return (
        <div className="home-page">
            <Header />
            <div className="branding-section">
                <img src={logo} alt="Ananasek Catering Logo" className="branding-logo" />
                <h1>Witaj w Ananasek Catering!</h1>
                <p>Zapewniamy najwyższej jakości usługi cateringowe.</p>
            </div>
            <main className="home-page-main">
                <h3>Nasze Specjały</h3>
                <div className="diets-container">
                    {dietsData.map(diet => (
                        <DietCard key={diet.id} {...diet} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;