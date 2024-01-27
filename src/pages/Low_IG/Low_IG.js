import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Low_IG.css';
import low_ig from '../../assets/low_ig.png';
import Accordion from '../../components/Accordion/Accordion'
import MealPlan from '../../components/MealPlan/MealPlan'

const Low_IG = () => {
    const mealPlans = [
        {
            day: 'Poniedziałek',
            meals: [
                {
                    type: 'Posiłek 1',
                    calories: '1000',
                    description: 'Owsianka na mleku z orzechami i jagodami (100g płatków owsianych, 250ml mleka, 50g orzechów, garść jagód): około 700 kcal\n' +
                        'Kanapki z chleba pełnoziarnistego (2 kromki) z pastą jajeczną (2 jaja, łyżka majonezu) i plasterkami pomidora: około 300 kcal'
                },
                {
                    type: 'Posiłek II',
                    calories: '1000',
                    description: 'Grillowany łosoś (200g) z quinoa (100g) i mieszanką warzyw na parze (brokuły, marchewka, 200g): około 700 kcal\n' +
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
                    description: 'Jajecznica z 4 jaj z dodatkiem szpinaku i pomidorów, podana na 2 kromkach chleba pełnoziarnistego: około 600 kcal\n' +
                        'Smoothie z kefiru (300ml), jagód (100g) i łyżki masła orzechowego: około 400 kcal'
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
                        <h2>Dieta Low IG</h2>
                        <img src={low_ig} alt="Dieta tluszczowa logo" className="branding-logo" />
                        <h4>Marzysz o szczupłej i zgrabnej sylwetce? Chcesz utrzymać swoją masę ciała lub zrzucić kilka zbędnych kilogramów? Twoim celem jest ograniczenie lub wyeliminowanie z diety mięsa? Dieta SLIM jest właśnie dla Ciebie. Jest ona odpowiednia dla osób mało / średnio aktywnych fizycznie, dążących do utraty zbędnych kilogramów lub utrzymania aktualnej masy ciała oraz wszystkich chcących ograniczyć spożywanie posiłków mięsnych lub całkowicie z nich zrezygnować. Znajduje w niej więcej białka pochodzenia roślinnego w formie sałatek, koktajli i zup. Dieta Slim składa się z 3 posiłków. Dostępna jest w wariantach: 1500 - 3000 kcal. </h4>
                    </div>

                    <div className="content">
                    </div>


                    <div className="accordion">
                        <Accordion title="Szczegóły" content="Dieta o obniżonym indeksie glikemicznym została stworzona dla osób, które w swojej diecie chciałyby ograniczyć ilość cukrów prostych. Jest ona odpowiednia dla osób z nadwagą i otyłością jako dieta redukcyjna. Rekomendowana dla osób, które zmagają się lub są obarczone dużym ryzykiem zaburzeń gospodarki węglowodanowej jak np. insulinooporność. Regularne posiłki o obniżonym indeksie glikemicznym pomagają ustabilizować poziom glukozy we krwi, dzięki czemu zapobiegają pojawianiu się napadów głodu i chęci na słodycze oraz spadkom energii w ciągu dnia.Należy jednak pamiętać, że odpowiedź organizmu na zastosowaną dietę jest zawsze kwestią indywidualną. Przed zmianą diety zalecamy konsultację z lekarzem oraz monitorowanie swojego stanu zdrowia.Dzienny jadłospis diety o obniżonym indeksie glikemicznym składa się z 3 różnorodnych posiłków bazujących na produktach o niskim i średnim indeksie glikemicznym. Dla urozmaicenia smaku dań mogą się w nich znaleźć produkty o wysokim IG w proporcjach, które pozwalają na zachowanie niskiego indeksu całego posiłku. W diecie LOW IG znajduje się mięso, ryby, nabiał, jaja, warzywa i niektóre owoce, kasze, ryż, produkty pełnoziarniste, orzechy oraz oleje roślinne np. oliwa. Dieta ta występuje w 5 wariantach kalorycznych: 1500 - 3000 kcal." />
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

export default Low_IG;