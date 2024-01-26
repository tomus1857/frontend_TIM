import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import DietTypes from '../../components/DietTypes/DietTypes';
import Variant from '../../components/Variant/Variant';
import DatePicker from '../../components/DatePicker/DatePicker'
import './DietaSportowa.css';
import sport_picture from '../../assets/sport_img.jpg';
import Accordion from '../../components/Accordion/Accordion'
import MealPlan from '../../components/MealPlan/MealPlan'

const DietaSportowa = () => {
    const mealPlans = [
        {
            day: 'Poniedziałek',
            meals: [
                {
                    type: 'I Śniadanie',
                    calories: '283',
                    description: 'Twarożek ziołowy, Pieczywo, Ogórek kiszony'
                },
                {
                    type: 'II Śniadanie',
                    calories: '283',
                    description: 'Twarożek ziołowy, Pieczywo, Ogórek kiszony'
                },
                {
                    type: 'Obiad',
                    calories: '283',
                    description: 'Twarożek ziołowy, Pieczywo, Ogórek kiszony'
                },
                {
                    type: 'Podwieczorek',
                    calories: '283',
                    description: 'Twarożek ziołowy, Pieczywo, Ogórek kiszony'
                },
                {
                    type: 'Kolacja',
                    calories: '283',
                    description: 'Twarożek ziołowy, Pieczywo, Ogórek kiszony'
                },
            ]
        },
        {
            day: 'Wtorek',
            meals: [
                {
                    type: 'I Śniadanie',
                    calories: '283',
                    description: 'Twarożek ziołowy, Pieczywo, Ogórek kiszony'
                },
                {
                    type: 'II Śniadanie',
                    calories: '283',
                    description: 'Twarożek ziołowy, Pieczywo, Ogórek kiszony'
                },
                {
                    type: 'Obiad',
                    calories: '283',
                    description: 'Twarożek ziołowy, Pieczywo, Ogórek kiszony'
                },
                {
                    type: 'Podwieczorek',
                    calories: '283',
                    description: 'Twarożek ziołowy, Pieczywo, Ogórek kiszony'
                },
                {
                    type: 'Kolacja',
                    calories: '283',
                    description: 'Twarożek ziołowy, Pieczywo, Ogórek kiszony'
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
                    <h2>Dieta sportowa</h2>
                    <img src={sport_picture} alt="Dieta sportowa logo" className="branding-logo" />
                    <h4>Wylewasz siódme poty na siłowni? Kształtujesz swoją sylwetkę, kondycję lub wytrzymałość? Chcesz schudnąć, ale boisz się, że na diecie redukcyjnej nie będziesz czuć sytości? A może ciężko pracujesz? Właśnie z myślą o Tobie powstała dieta SPORT. To zbilansowana dieta o zwiększonej zawartości białka. Jest ona odpowiednia dla osób aktywnych fizycznie, także tych dążących do wzrostu masy mięśniowej. Większa ilość białka pochodzenia zwierzęcego wpłynie pozytywnie na regenerację oraz odbudowę mięśni. Dieta Sport o wyższej kaloryczności pokryje Twoje zwiększone zapotrzebowanie energetyczne, a jeśli potrzebujesz kaloryczności na redukcję, odpowiednia ilość białka zwiększy poczucie sytości. Dieta Sport składa się z 5 posiłków: śniadanie, II śniadanie, obiad (posiłek przedtreningowy), podwieczorek (posiłek potreningowy) i kolacja. Dostępna w wariantach: 1500, 1800, 2000, 2500, 3000 kcal. </h4>
                </div>

                <div className="content">
                </div>

                <div className="side-panel_var">
                    <Variant />
                    <DietTypes />
                    <DatePicker/>
                </div>

                <div className="accordion">
                    <Accordion title="Szczegóły" content="To jest zawartość akordeonu, która pojawi się po rozwinieciu." />
                </div>
                <div className="accordion_2">
                    <Accordion title="Gdzie dowozimy" content="To jest zawartość akordeonu, która pojawi się po rozwinieciu." />
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

export default DietaSportowa;