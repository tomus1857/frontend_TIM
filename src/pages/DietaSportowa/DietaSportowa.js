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
                    calories: '500',
                    description: 'Omlet z trzema jajkami (210 kcal)\n' +
                        'Pełnoziarnisty chleb (80 kcal)\n' +
                        'Awokado (160 kcal)\n' +
                        'Jogurt naturalny (50 kcal) '
                },
                {
                    type: 'II Śniadanie',
                    calories: '200',
                    description: 'Owoce: 1 banan (105 kcal), Orzechy włoskie (95 kcal)'
                },
                {
                    type: 'Obiad',
                    calories: '700',
                    description: 'Grillowana pierś z kurczaka (250 kcal)\n' +
                        'Brązowy ryż (215 kcal)\n' +
                        'Warzywa gotowane na parze (135 kcal)\n' +
                        'Sos pomidorowy (100 kcal)'
                },
                {
                    type: 'Podwieczorek',
                    calories: '200',
                    description: 'Serek twarogowy z miodem (200 kcal)'
                },
                {
                    type: 'Kolacja',
                    calories: '1400',
                    description: 'Pieczony łosoś (400 kcal)\n' +
                        'Kasza jaglana (220 kcal)\n' +
                        'Brokuły (55 kcal)\n' +
                        'Sos czosnkowy (50 kcal)\n' +
                        'Sałata z pomidorem i ogórkiem (75 kcal)'
                },
            ]
        },
        {
            day: 'Wtorek',
            meals: [
                {
                    type: 'I Śniadanie',
                    calories: '500',
                    description: 'Owsianka z płatków owsianych (320 kcal)\n' +
                        'Jogurt naturalny (80 kcal)\n' +
                        'Nasiona chia (100 kcal)'
                },
                {
                    type: 'II Śniadanie',
                    calories: '300',
                    description: 'Shake proteinowy (300 kcal)'
                },
                {
                    type: 'Obiad',
                    calories: '700',
                    description: 'Duszony indyk (250 kcal)\n' +
                        'Quinoa (220 kcal)\n' +
                        'Warzywa (130 kcal)\n' +
                        'Sos vinaigrette (100 kcal)'
                },
                {
                    type: 'Podwieczorek',
                    calories: '200',
                    description: 'Marchewka i seler naciowy z hummusem (200 kcal)'
                },
                {
                    type: 'Kolacja',
                    calories: '1300',
                    description: 'Wołowina grillowana na patelni (500 kcal)\n' +
                        'Ziemniaki pieczone (300 kcal)\n' +
                        'Brokuły (100 kcal)\n' +
                        'Sos pieczarkowy (200 kcal)'
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


                    <div className="accordion">
                        <Accordion title="Szczegóły" content='Dieta sportowa to plan żywieniowy dostosowany do potrzeb osób aktywnych fizycznie, szczególnie sportowców. Oto kilka ogólnych zasad i szczegółów diety sportowej:
                        Wysoki poziom białka: Białko jest niezbędne do odbudowy i wzrostu mięśni, dlatego sportowcy często spożywają większe ilości białka niż osoby nieaktywne. Źródła białka to mięso, ryby, drób, jaja, produkty mleczne i roślinne alternatywy, takie jak tofu i seitan.
                        Węglowodany: Węglowodany są głównym źródłem energii dla sportowców, dlatego ważne jest, aby dostarczać odpowiednią ilość węglowodanów, aby zaspokoić zapotrzebowanie energetyczne. Zdrowe źródła węglowodanów to pełnoziarniste produkty zbożowe, warzywa, owoce i strączki.
                        Tłuszcze: Tłuszcze stanowią również ważny składnik diety sportowców, zapewniając energię i pomagając wchłaniać niektóre witaminy. Zdrowe tłuszcze można znaleźć w oliwie z oliwek, orzechach, nasionach, awokado i rybach.
                        Hydratacja: Nawodnienie jest kluczowe podczas aktywności fizycznej. Sportowcy powinni regularnie pić wodę, aby uniknąć odwodnienia, a także dostarczać elektrolitów, szczególnie podczas długotrwałego wysiłku.
                        Mikroelementy i witaminy: Sportowcy potrzebują również odpowiednich ilości mikroelementów, takich jak żelazo, magnez, wapń i witaminy, aby zachować zdrowie i wydolność organizmu.' />
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

export default DietaSportowa;