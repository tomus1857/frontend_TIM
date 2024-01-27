import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import DietCard from '../../components/DietCard/DietCard';
import logo from '../../assets/logo.png';
import sportImage from '../../assets/sport.jpg';
import fatImage from '../../assets/fat.jpg';
import vege from '../../assets/vege.jpg';
import dieta_low_carb from '../../assets/dieta_low_carb.jpg';
import low_ig from '../../assets/low_ig.png';
import no_fish from '../../assets/no_fish.jpg';
import polska from '../../assets/polska.jpg';
import home from '../../assets/home.jpg';
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
        description: '\n' +
            'Dieta tłuszczowa polega na ograniczeniu węglowodanów i zwiększeniu spożycia tłuszczów, aby wprowadzić organizm w stan ketozy, co może prowadzić do utraty wagi i poprawy zdrowia metabolicznego.',
        add_info: '1500-3000 kcal',
        meals: '3 posiłki',
        image: fatImage,
        link: '/dieta-tłuszczowa'
    },
    {
        id: 3,
        title: 'Dieta Wege',
        description: 'Dieta wegetariańska wyklucza spożycie mięsa i ryb, skupiając się na produktach roślinnych, takich jak owoce, warzywa, orzechy i rośliny strączkowe, co może przynieść korzyści zdrowotne i środowiskowe.',
        add_info: '1500-3000kcal',
        meals: '3 posiłki',
        image: vege,
        link: '/dieta-wege'
    },
    {
        id: 4,
        title: 'Low Carb',
        description: 'Dieta Low Carb to sposób żywienia charakteryzujący się ograniczeniem spożycia węglowodanów na rzecz większego udziału białka i tłuszczu w diecie, co ma na celu kontrolę poziomu cukru we krwi i wspomaganie utraty wagi.',
        add_info: '1500-3000kcal',
        meals: '5 posiłków',
        image: dieta_low_carb,
        link: '/low-carb'
    },
    {
        id: 5,
        title: 'Low IG',
        description: '\n' +
            'Dieta o niskim indeksie glikemicznym (Low IG) polega na wybieraniu pokarmów, które mają niski indeks glikemiczny, czyli nie powodują gwałtownych wzrostów poziomu glukozy we krwi, co może pomóc w kontrolowaniu apetytu, utrzymaniu stabilnego poziomu energii i regulacji wagi.',
        add_info: '1500-3000kcal',
        meals: '3 posiłki',
        image: low_ig,
        link: '/low-ig'
    },
    {
        id: 6,
        title: 'No Fish',
        description: '\n' +
            'Dieta bez ryb to zazwyczaj dieta wegetariańska, która wyklucza spożycie ryb i owoców morza, skupiając się na produktach roślinnych.',
        add_info: '1500-3000kcal',
        meals: '3 posiłki',
        image: no_fish,
        link: '/no-fish'
    },
    {
        id: 7,
        title: 'Home',
        description: '\n' +
            'Dieta "home" to podejście do żywienia oparte na przygotowywaniu i spożywaniu domowych, świeżych posiłków z naturalnych składników, unikaniu przetworzonej żywności i dbaniu o zdrowe nawyki żywieniowe.',
        add_info: '1500-3000kcal',
        meals: '5 posiłków',
        image: home,
        link: '/home'
    },
    {
        id: 8,
        title: 'Kuchnia Polska',
        description: 'Kuchnia polska to bogata i tradycyjna kuchnia oparta na smakowitych potrawach, takich jak pierogi, bigos, kiełbasa czy placki ziemniaczane, pełna smaków i przypraw, odzwierciedlająca długą historię i kulturę kraju.',
        add_info: '1500-3000kcal',
        meals: '5 posiłków',
        image: polska,
        link: '/polska'
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