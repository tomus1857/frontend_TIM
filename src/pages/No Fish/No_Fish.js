import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './No_Fish.css';
import no_fish from '../../assets/no_fish.jpg';
import Accordion from '../../components/Accordion/Accordion'
import MealPlan from '../../components/MealPlan/MealPlan'

const No_Fish = () => {
    const mealPlans = [
        {
            day: 'Poniedziałek',
            meals: [
                {
                    type: 'Posiłek 1',
                    calories: '1000',
                    description: 'Owsianka na mleku z orzechami i jagodami (100g płatków owsianych, 300ml mleka, 50g orzechów, garść jagód): około 700 kcal\n' +
                        'Jajecznica z 3 jaj z dodatkiem szpinaku i pomidorów, podana z 2 kromkami chleba pełnoziarnistego: około 300 kcal'
                },
                {
                    type: 'Posiłek II',
                    calories: '1000',
                    description: 'Grillowany kurczak (200g) z quinoa (100g) i mieszanką warzyw na parze (brokuły, marchewka, 200g): około 700 kcal\n' +
                        'Sałatka z roszponki, pomidorów, ogórka, oliwek i sera feta (150g), z oliwą z oliwek: około 300 kcal'
                },
                {
                    type: 'Posiłek III',
                    calories: '1000',
                    description: 'Stek wołowy (200g) z pieczonymi batatami (200g) i sałatką ze świeżego szpinaku (100g), pomidorów i oliwy z oliwek: około 800 kcal\n' +
                        'Mus z awokado i kakao (awokado, 2 łyżki kakao, łyżka miodu): około 200 kcal'
                }

            ]
        },
        {
            day: 'Wtorek',
            meals: [
                {
                    type: 'Posiłek I',
                    calories: '1000',
                    description: 'Pancakes pełnoziarniste (3 sztuki) z syropem klonowym i garścią jagód: około 600 kcal\n' +
                        'Smoothie z kefiru (300ml), banana i łyżki masła orzechowego: około 400 kcal'
                },
                {
                    type: 'Posiłek II',
                    calories: '1000',
                    description: 'Pieczona pierś z kurczaka (200g) z brązowym ryżem (100g) i dużą porcją warzyw (brokuły, marchewka, groszek, 300g): około 700 kcal\n' +
                        'Jogurt naturalny (250g) z mieszanką orzechów (50g) i łyżką miodu: około 300 kcal'
                },
                {
                    type: 'Posiłek III',
                    calories: '1000',
                    description: 'Pieczony indyk (200g) z kaszą gryczaną (100g) i warzywami (papryka, cukinia, 200g): około 700 kcal\n' +
                        'Sałatka caprese (mozzarella, pomidory, bazylia, oliwa z oliwek, 150g): około 300 kcal'
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
                        <h2>Dieta No Fish</h2>
                        <img src={no_fish} alt="Dieta tluszczowa logo" className="branding-logo" />
                        <h4>Marzysz o szczupłej i zgrabnej sylwetce? Chcesz utrzymać swoją masę ciała lub zrzucić kilka zbędnych kilogramów? Twoim celem jest ograniczenie lub wyeliminowanie z diety mięsa? Dieta No Fish jest właśnie dla Ciebie. Jest ona odpowiednia dla osób mało / średnio aktywnych fizycznie, dążących do utraty zbędnych kilogramów lub utrzymania aktualnej masy ciała oraz wszystkich chcących ograniczyć spożywanie posiłków mięsnych lub całkowicie z nich zrezygnować. Znajduje w niej więcej białka pochodzenia roślinnego w formie sałatek, koktajli i zup. Dieta Slim składa się z 3 posiłków. Dostępna jest w wariantach:1500 - 3000 kcal </h4>
                    </div>

                    <div className="content">
                    </div>


                    <div className="accordion">
                        <Accordion title="Szczegóły" content="To dieta dla osób, które chciałyby korzystać z diety slim, ale nie lubią ryb, krewetek oraz innych owoców morza. Dieta zawiera posiłki mięsne, nabiał, jaja oraz produkty będące źródłem białka roślinnego jak soczewica, ciecierzyca czy soja. Znajdują się w niej również produkty z pozostałych grup tzn. różne rodzaje kasz i ryżu, pieczywo, warzywa i owoce, nasiona i orzechy oraz oleje roślinne." />
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

export default No_Fish;