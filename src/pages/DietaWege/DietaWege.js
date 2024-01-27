import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './DietaWege.css';
import vege from '../../assets/vege.jpg';
import Accordion from '../../components/Accordion/Accordion'
import MealPlan from '../../components/MealPlan/MealPlan'

const DietaWege = () => {
    const mealPlans = [
        {
            day: 'Poniedziałek',
            meals: [
                {
                    type: 'Posiłek 1',
                    calories: '800',
                    description: 'Owsianka z mlekiem i owocami (100g płatków owsianych, 250ml mleka, banan, garść jagód): około 600 kcal\n' +
                        'Orzechy włoskie (30g): około 200 kcal'
                },
                {
                    type: 'Posiłek II',
                    calories: '900',
                    description: 'Makaron pełnoziarnisty z sosem pomidorowym i serem (100g makaronu, 200g sosu, 50g sera): około 600 kcal\n' +
                        'Sałatka z roszponki, pomidorków cherry, ogórka, oliwy i sera feta (150g): około 300 kcal\n'
                },
                {
                    type: 'Posiłek III',
                    calories: '800',
                    description: 'Warzywne curry z tofu (200g tofu, mieszanka warzyw, łyżka oleju, ryż brązowy 75g): około 700 kcal\n' +
                        'Jogurt naturalny (150g) z łyżką miodu: około 100 kcal'
                }
            ]
        },
        {
            day: 'Wtorek',
            meals: [
                {
                    type: 'Posiłek I',
                    calories: '800',
                    description: 'Jajecznica z pomidorami i szpinakiem (3 jaja, 100g szpinaku, 1 duży pomidor, łyżka oleju): około 400 kcal\n' +
                        'Chleb pełnoziarnisty (2 kromki) z awokado (1/2 sztuki) i serem (30g): około 400 kcal'
                },
                {
                    type: 'Posiłek II',
                    calories: '900',
                    description: 'Ciecierzyca na curry z ryżem (150g ciecierzycy, 75g ryżu, warzywa, łyżka oleju): około 600 kcal\n' +
                        'Hummus (100g) z surowymi warzywami (np. marchewka, papryka): około 300 kcal'
                },
                {
                    type: 'Posiłek III',
                    calories: '800',
                    description: 'Pizza wegetariańska z dużą ilością warzyw (średnia porcja): około 700 kcal\n' +
                        'Koktajl owocowy (np. jabłko, kiwi, szklanka soku pomarańczowego): około 100 kcal'
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
                        <h2>Dieta vege</h2>
                        <img src={vege} alt="Dieta tluszczowa logo" className="branding-logo" />
                        <h4>Marzysz o szczupłej i zgrabnej sylwetce? Chcesz utrzymać swoją masę ciała lub zrzucić kilka zbędnych kilogramów? Twoim celem jest ograniczenie lub wyeliminowanie z diety mięsa? Dieta SLIM jest właśnie dla Ciebie. Jest ona odpowiednia dla osób mało / średnio aktywnych fizycznie, dążących do utraty zbędnych kilogramów lub utrzymania aktualnej masy ciała oraz wszystkich chcących ograniczyć spożywanie posiłków mięsnych lub całkowicie z nich zrezygnować. Znajduje w niej więcej białka pochodzenia roślinnego w formie sałatek, koktajli i zup. Dieta Vege składa się z 3 posiłków: śniadanie, obiad, kolacja. Dostępna jest w wariantach: 1500, 1800, 2000, 2500, 3000 kcal. </h4>
                    </div>

                    <div className="content">
                    </div>


                    <div className="accordion">
                        <Accordion title="Szczegóły" content="To dieta zbilansowana pod kątem makroskładników, zawierająca produkty ze wszystkich grup (mięso, ryby, nabiał, jaja, warzywa, owoce, produkty węglowodanowe). Dieta STANDARD o odpowiednio dobranej kaloryczności może być dobrym wyborem na redukcję masy ciała." />
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

export default DietaWege;