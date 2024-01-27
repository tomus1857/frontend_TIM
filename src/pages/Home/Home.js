import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Home.css';
import home from '../../assets/home.jpg';
import Accordion from '../../components/Accordion/Accordion'
import MealPlan from '../../components/MealPlan/MealPlan'

const Home = () => {
    const mealPlans = [
        {
            day: 'Poniedziałek',
            meals: [
                {
                    type: 'I Śniadanie',
                    calories: '600',
                    description: 'Owsianka z mlekiem, bananem i garścią orzechów (50g płatków owsianych, 200ml mleka, 1 banan, 20g orzechów) '
                },
                {
                    type: 'II Śniadanie',
                    calories: '300',
                    description: 'Jogurt naturalny z mieszanką świeżych owoców i łyżką miodu (200g jogurtu, mix owoców)'
                },
                {
                    type: 'Obiad',
                    calories: '900',
                    description: 'Grillowana pierś z kurczaka (200g) z ryżem (100g) i dużą porcją mieszanych warzyw (brokuły, marchewka, kukurydza)'
                },
                {
                    type: 'Podwieczorek',
                    calories: '400',
                    description: 'Kanapki z pełnoziarnistego chleba (2 kromki) z serem, pomidorem i sałatą'
                },
                {
                    type: 'Kolacja',
                    calories: '800',
                    description: 'Makaron pełnoziarnisty (100g) z sosem bolońskim (mięso mielone 150g, sos pomidorowy) i startym serem'
                },
            ]
        },
        {
            day: 'Wtorek',
            meals: [
                {
                    type: 'I Śniadanie',
                    calories: '600',
                    description: 'Jajecznica z 3 jaj z pomidorami, papryką i cebulą, podawana z pełnoziarnistym tostem (2 kromki)'
                },
                {
                    type: 'II Śniadanie',
                    calories: '300',
                    description: 'Smoothie z kefiru (200ml), banana i garści jagód'
                },
                {
                    type: 'Obiad',
                    calories: '900',
                    description: 'Stek wołowy (200g) z pieczonymi ziemniakami (200g) i surówką z kapusty'
                },
                {
                    type: 'Podwieczorek',
                    calories: '400',
                    description: 'Sałatka owocowa z sezonowych owoców z dodatkiem orzechów (np. jabłko, gruszka, orzechy włoskie)'
                },
                {
                    type: 'Kolacja',
                    calories: '800',
                    description: 'Pieczona pierś z indyka (200g) z kaszą gryczaną (100g) i gotowanymi warzywami (np. groszek, marchewka)'
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
                        <h2>Dieta Home</h2>
                        <img src={home} alt="Dieta sportowa logo" className="branding-logo" />
                        <h4>Nie masz czasu, aby przygotować sobie jedzenie do pracy? Jesz w pośpiechu przypadkowe posiłki? Jesteś ciągle głodny, bo podjadasz niezdrowe przekąski? A może chcesz zadbać o zdrową dietę swoich rodziców lub dzieci? Dzięki tej opcji znajdziesz i wybierzesz coś odpowiedniego właśnie dla Ciebie. Idealne zestawy do pracy, na uczelnię, w podróż służbową czy do szkoły. </h4>
                    </div>

                    <div className="content">
                    </div>


                    <div className="accordion">
                        <Accordion title="Szczegóły" content='Dieta "home" skupia się na przygotowywaniu posiłków domowych z naturalnych, nieprzetworzonych składników, eliminując gotowe produkty i fast foody, a także promując zdrowe nawyki żywieniowe, takie jak regularne posiłki i kontrola porcji.' />
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

export default Home;