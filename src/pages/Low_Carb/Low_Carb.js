import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Low_Carb.css';
import dieta_low_carb from '../../assets/dieta_low_carb.jpg';
import Accordion from '../../components/Accordion/Accordion'
import MealPlan from '../../components/MealPlan/MealPlan'

const Low_Carb = () => {
    const mealPlans = [
        {
            day: 'Poniedziałek',
            meals: [
                {
                    type: 'Posiłek 1',
                    calories: '400',
                    description: 'Jajecznica (2 duże jaja) na maśle z szpinakiem: około 250 kcal\n' +
                        'Pół awokado: około 120 kcal\n' +
                        'Kilka plasterków ogórka: około 30 kcal'
                },
                {
                    type: 'Posiłek II',
                    calories: '400',
                    description: 'Sałatka grecka (ser feta, pomidory, ogórek, oliwki, oliwa z oliwek): około 400 kcal'
                },
                {
                    type: 'Posiłek III',
                    calories: '500',
                    description: 'Pieczony łosoś (150g): około 350 kcal\n' +
                        'Warzywa gotowane na parze z masłem (np. brokuły, 100g): około 150 kcal'
                },
                {
                    type: 'Posiłek IV',
                    calories: '300',
                    description: 'Migdały (40g): około 240 kcal\n' +
                        'Jogurt naturalny gęsty (bez cukru, 100g): około 60 kcal'
                },
                {
                    type: 'Posiłek V',
                    calories: '500',
                    description: 'Grillowany kurczak (150g): około 300 kcal\n' +
                        'Sałatka z mieszanych liści z oliwą z oliwek (100g): około 150 kcal\n' +
                        'Kilka plasterków czerwonej papryki: około 50 kcal'
                }
            ]
        },
        {
            day: 'Wtorek',
            meals: [
                {
                    type: 'Posiłek I',
                    calories: '400',
                    description: 'Jogurt naturalny pełnotłusty (200g) z garścią malin: około 400 kcal'
                },
                {
                    type: 'Posiłek II',
                    calories: '300',
                    description: 'Twaróg (150g) z pestkami dyni (30g): około 300 kcal'
                },
                {
                    type: 'Posiłek III',
                    calories: '500',
                    description: 'Łosoś pieczony (150g) z sałatką ze świeżym szpinakiem i awokado: około 500 kcal'
                },
                {
                    type: 'Posiłek IV',
                    calories: '300',
                    description: 'Plasterki szynki (100g) z ogórkiem: około 300 kcal'
                },
                {
                    type: 'Posiłek V',
                    calories: '500',
                    description: 'Frittata z warzywami (jaja, papryka, cebula, szpinak): około 500 kcal'
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
                        <h2>Dieta Low Carb</h2>
                        <img src={dieta_low_carb} alt="Dieta tluszczowa logo" className="branding-logo" />
                        <h4>Czy chcesz się przekonać, że jedząc tłuszcz można spalać tłuszcz? Z rozrzewnieniem wspominasz słowa babci „mięsko zjedz, a ziemniaczki możesz zostawić”?A może po prostu nie czujesz się dobrze po węglowodanowym posiłku? Przedstawiamy idealne rozwiązanie! Diety, dzięki którym poczujesz się lekko, będziesz pełen energii i poprawisz swoje samopoczucie! Polecane dla osób chcących szybko zredukować masę ciała, szczególnie skumulowaną w postaci tkanki tłuszczowej, dla osób, które nie uzyskały satysfakcjonujących efektów spadku wagi w trakcie stosowania tradycyjnych diet, mimo dobrego stanu zdrowia. Idealna dla osób, które chcą wyeliminować z diety węglowodany, oraz dla tych, którzy lubią połączenia niewielkiej ilości warzyw z produktami białkowymi. </h4>
                    </div>

                    <div className="content">
                    </div>


                    <div className="accordion">
                        <Accordion title="Szczegóły" content="Dieta LOW CARB jest dietą o obniżonej zawartości węglowodanów. Dieta składa się z 5 posiłków w wariantach kalorycznych 1500 kcal - 3000 kcal. W porównaniu do diety ketogenicznej jest zwiększony udział białka 20-22%, obniżona zawartość tłuszczu około 60% , a udział węglowodanów w diecie stanowi około 20%. Występują produkty zbożowe, przykładowo pieczywo żytnie, ryż oraz różnego rodzaju kasze.Dieta LOW CARB może być stosowana przed dietą ketogeniczną w okresie adaptacji w celu zmniejszenia zależności organizmu od węglowodanów. Dieta opiera się na białku pochodzenia zwierzęcego: mięso, ryby, jaja. Występują warzywa oraz owoce o niskim indeksie glikemicznym, przykładowo szpinak, jarmuż, kalafior, brokuł, kapusta kiszona, ogórki kiszone, maliny, jagody, borówki. Występują tłuszcze takie jak oliwa z oliwek, olej kokosowy, olej MCT, olej z awokado, masło klarowane. W wersji Keto występuje także smalec.Tak jak w przypadku zmiany diety na nową należy wcześniej skontrolować swój stan zdrowia z lekarzem prowadzącym." />
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

export default Low_Carb;