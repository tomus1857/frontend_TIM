import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './DietaFat.css';
import fat from '../../assets/fat.jpg';
import Accordion from '../../components/Accordion/Accordion'
import MealPlan from '../../components/MealPlan/MealPlan'

const DietaFat = () => {
    const mealPlans = [
        {
            day: 'Poniedziałek',
            meals: [
                {
                    type: 'Posiłek 1',
                    calories: '900',
                    description: 'Omlet z czterema jajkami (320 kcal)\n' +
                        'Plastry boczku (250 kcal)\n' +
                        'Awokado (240 kcal)\n' +
                        'Pełnoziarnisty chleb (80 kcal)\n' +
                        'Masło orzechowe (180 kcal)'
                },
                {
                    type: 'Posiłek II',
                    calories: '600',
                    description: 'Sałatka z tuńczykiem w oliwie z oliwek (400 kcal)\n' +
                        'Oliwki (50 kcal)\n' +
                        'Jajko na twardo (70 kcal)\n' +
                        'Rukola i pomidory (80 kcal)'
                },
                {
                    type: 'Posiłek III',
                    calories: '1500',
                    description: 'Indyk pieczony (400 kcal)\n' +
                        'Masło klarowane (120 kcal)\n' +
                        'Bataty z masłem (300 kcal)\n' +
                        'Warzywa grillowane w oliwie z oliwek (200 kcal)\n' +
                        'Orzechy włoskie (480 kcal)'
                }
            ]
        },
        {
            day: 'Wtorek',
            meals: [
                {
                    type: 'Posiłek I',
                    calories: '1000',
                    description: 'Jajecznica na maśle (3 duże jaja, 30g masła): około 400 kcal\n' +
                        'Jaja: 3x70 kcal = 210 kcal\n' +
                        'Masło: 30g = około 190 kcal\n' +
                        'Avocado (1 duże): około 320 kcal\n' +
                        'Boczek (100g): około 250 kcal\n' +
                        'Ser pełnotłusty (50g): około 200 kcal'
                },
                {
                    type: 'Posiłek II',
                    calories: '1000',
                    description: 'Stek wołowy (200g): około 500 kcal\n' +
                        'Sos na bazie śmietany (100g): około 300 kcal\n' +
                        'Warzywa gotowane na parze z masłem (np. brokuły, 100g): około 150 kcal\n' +
                        'Warzywa: 50 kcal\n' +
                        'Masło: 100 kcal\n' +
                        'Oliwki (50g): około 80 kcal'
                },
                {
                    type: 'Posiłek III',
                    calories: '1000',
                    description: 'Łosoś pieczony (200g): około 400 kcal\n' +
                        'Orzechy włoskie (50g): około 350 kcal\n' +
                        'Sałatka grecka z dużą ilością oliwy (150g): około 250 kcal\n' +
                        'Warzywa i ser feta: 150 kcal\n' +
                        'Oliwa z oliwek: 100 kcal'
                }
            ]
        },

    ];
    return (
        <>
            <Header/>
            <div className="body">

                <div className="main-container">
                    <div className="content_img">
                        <h2>Dieta tłuszczowa</h2>
                        <img src={fat} alt="Dieta tluszczowa logo" className="branding-logo" />
                        <h4>Czy chcesz się przekonać, że jedząc tłuszcz można spalać tłuszcz? Z rozrzewnieniem wspominasz słowa babci „mięsko zjedz, a ziemniaczki możesz zostawić”?A może po prostu nie czujesz się dobrze po węglowodanowym posiłku? Przedstawiamy idealne rozwiązanie! Diety, dzięki którym poczujesz się lekko, będziesz pełen energii i poprawisz swoje samopoczucie! Polecane dla osób chcących szybko zredukować masę ciała, szczególnie skumulowaną w postaci tkanki tłuszczowej, dla osób, które nie uzyskały satysfakcjonujących efektów spadku wagi w trakcie stosowania tradycyjnych diet, mimo dobrego stanu zdrowia. Idealna dla osób, które chcą wyeliminować z diety węglowodany, oraz dla tych, którzy lubią połączenia niewielkiej ilości warzyw z produktami białkowymi. </h4>
                    </div>

                    <div className="content">
                    </div>


                    <div className="accordion">
                        <Accordion title="Szczegóły" content="Czym jest dieta ketogeniczna?
                        Dieta ketogeniczna to dieta wysokotłuszczowa, odpowiedniobiałkowa, niskowęglowodanowa, w proporcjach 80-85% tłuszczu, około 15% białka, około 5% węglowodanów. Dieta ketogeniczna charakteryzuje się restrykcją węglowodanów, a nie spożywaniem dużych ilości tłuszczu. Dieta składa się z 3 sycących posiłków w 3 rozpiętościach kalorycznych 1500 kcal, 2200 kcal oraz 3000 kcal. Dieta ketogeniczna występuje w dwóch wariantach Keto z potrawami mięsnymi oraz rybnymi i Keto Wege + Fish bez mięsa, w które występują posiłki z rybą." />
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

export default DietaFat;