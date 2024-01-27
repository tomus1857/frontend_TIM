import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './polska.css';
import polska from '../../assets/polska.jpg';
import Accordion from '../../components/Accordion/Accordion'
import MealPlan from '../../components/MealPlan/MealPlan'

const Polska = () => {
    const mealPlans = [
        {
            day: 'Poniedziałek',
            meals: [
                {
                    type: 'I Śniadanie',
                    calories: '600',
                    description: 'Jajecznica na boczku (3 jaja, 50g boczku) z 2 kromkami chleba żytniego'
                },
                {
                    type: 'II Śniadanie',
                    calories: '300',
                    description: 'Kanapka z chleba żytniego z twarogiem i rzodkiewką'
                },
                {
                    type: 'Obiad',
                    calories: '900',
                    description: 'Rosół z makaronem (200ml) i pierogi ruskie (5 sztuk)'
                },
                {
                    type: 'Podwieczorek',
                    calories: '400',
                    description: 'Jabłko pieczone z cynamonem i łyżką miodu'
                },
                {
                    type: 'Kolacja',
                    calories: '800',
                    description: 'Kotlet schabowy (150g) z ziemniakami (200g) i surówką z białej kapusty'
                },
            ]
        },
        {
            day: 'Wtorek',
            meals: [
                {
                    type: 'I Śniadanie',
                    calories: '600',
                    description: 'Płatki owsiane na mleku z suszonymi owocami (50g płatków, 200ml mleka, garść suszonych owoców)'
                },
                {
                    type: 'II Śniadanie',
                    calories: '300',
                    description: 'Twaróg z szczypiorkiem i rzodkiewką na kromce chleba razowego'
                },
                {
                    type: 'Obiad',
                    calories: '900',
                    description: 'Gołąbki z mięsem i ryżem w sosie pomidorowym (2 sztuki) z ziemniakami (200g)'
                },
                {
                    type: 'Podwieczorek',
                    calories: '400',
                    description: 'Kisiel owocowy z bitą śmietaną'
                },
                {
                    type: 'Kolacja',
                    calories: '800',
                    description: 'Bigos (250g) podawany z kawałkiem chleba żytniego'
                },

            ]
        },

    ];
    return (
        <>
            <Header/>
            <div className="body">

                <div className="main-container">
                    <div className="content_img">
                        <h2>Kuchnia Polska</h2>
                        <img src={polska} alt="Dieta sportowa logo" className="branding-logo" />
                        <h4>Cenisz tradycyjną polską kuchnię i nie chcesz rezygnować z ulubionych potraw? Stworzyliśmy rozwiązanie idealne dla Ciebie! Wybierz dietę opartą na klasycznych daniach i domowych smakach mając przy tym pewność, że jest ona odpowiednio zbilansowana. To my będziemy kontrolować ilość kalorii, abyś z nimi nie przesadził! Tradycyjne pieczenie, schabowe, ukochane naleśniki i pierogi, a także idealnie przyrządzone podroby? </h4>
                    </div>

                    <div className="content">
                    </div>


                    <div className="accordion">
                        <Accordion title="Szczegóły" content='Cenisz tradycyjną polską kuchnię i nie chcesz rezygnować z ulubionych potraw? Stworzyliśmy rozwiązanie idealne dla Ciebie! Wybierz dietę opartą na klasycznych daniach i domowych smakach mając przy tym pewność, że jest ona odpowiednio zbilansowana. To my będziemy kontrolować ilość kalorii, abyś z nimi nie przesadził! Tradycyjne pieczenie, schabowe, ukochane naleśniki i pierogi, a także idealnie przyrządzone podroby? ' />
                    </div>
                    <div className="accordion_2">
                        <Accordion title="Gdzie dowozimy" content="Dowozimy na terenie całej Warszawy i okolic (do 15 km od granicy Warszawy)" />
                    </div>

                    <h1>Przykładowe menu</h1>
                    {mealPlans.map((mealPlan, index) => (
                        <div key={index}>
                            <h2>{mealPlan.day}</h2>
                            <MealPlan meals={mealPlan.meals} />
                        </div>
                    ))}
                </div>
                <Footer/>
            </div>
        </>

    );
};

export default Polska;