import React from 'react';
import sport from '../../assets/sport.jpg';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './MenuPage.css';
import Meal from "../../components/Meal/Meal";
import {Link} from "react-router-dom";
import logo from "../../assets/logo.png";
import jajecznica from "../../assets/jajecznica.jpg";
import owsianka from "../../assets/owsianka.jpeg";
import pomidor from "../../assets/pomidor.jpg";
import manna from "../../assets/manna.JPG";
import szpinak from "../../assets/szpinak.jpg";
import jogurt from "../../assets/jogurt.jpg";
import schabowy from "../../assets/schabowy.jpg";
import zurek from "../../assets/zurek.jpg";
import pierogi from "../../assets/pierogi.jpg";
import bigos from "../../assets/bigos.jpg";
import grecku from "../../assets/grecku.jpg";
import awokado1 from "../../assets/awokado1.jpeg";


const MenuPage = () => {
    const dietsData_sniadanie = [
        {
            id: 1,
            title: 'Jajecznica z boczkiem i chlebem',
            description: 'Jajecznica przygotowana z jajek, podsmażonego boczku i cebuli, podawana z kromką chleba',
            image: jajecznica,
        },
        {
            id: 2,
            title: 'Płatki owsiane z owocami',
            description: 'Płatki owsiane gotowane na mleku lub wodzie, podawane z pokrojonymi owocami, takimi jak jabłka, banany czy jagody.',
            image: owsianka,
        },
        {
            id: 3,
            title: 'Kanapka z serem i pomidorem',
            description: 'Klasyczna kanapka z plasterkami sera, plastry pomidora i masłem lub majonezem, podawana z ogórkiem kiszonym.',
            image: pomidor,
        },
        {
            id: 4,
            title: 'Kasza manna z masłem i cukrem',
            description: 'Kasza manna gotowana na mleku z dodatkiem masła i cukru, często podawana z dżemem lub miodem.',
            image: manna,
        },
        ]
    const dietsData_IIsniadanie = [
        {
            id: 1,
            title: 'Omlet ze szpinakiem i pomidorami',
            description: 'Omlet z jajek, szpinakiem i pomidorami, podawany z chlebem.',
            image: szpinak,
        },
        {
            id: 2,
            title: 'Jogurt z owocami i orzechami',
            description: 'Jogurt z owocami (np. banany, truskawki, maliny) i posypany orzechami włoskimi lub migdałami.',
            image: jogurt,
        }
    ]
    const dietsData_obiad = [
        {
            id: 1,
            title: 'Bigos',
            description: 'Składa się głównie z kiszonej kapusty, mięsa (najczęściej kiełbasy i wieprzowiny) oraz suszonych grzybów.',
            image: bigos,
        },
        {
            id: 2,
            title: 'Pierogi',
            description: 'Są to placki z ciasta, które można nadziewać różnymi składnikami, takimi jak mięso, kapusta i grzyby, ser, kartofle lub owoce.',
            image: pierogi,
        },
        {
            id: 3,
            title: 'Kotlet schabowy',
            description: 'To kotlet schabowy, czyli panierowana i smażona kotlet wieprzowy, często podawany z ziemniakami i surówką z kiszonej kapusty.',
            image: schabowy,
        },
        {
            id: 4,
            title: 'Żurek',
            description: 'To tradycyjna polska zupa na bazie zakwasu żytniego, często gotowana z białą kiełbasą i jajkiem.',
            image: zurek,
        },
    ]
    const dietsData_kolacja = [
        {
            id: 1,
            title: 'Ryba po grecku',
            description: 'Grillowany filet rybny podany z sosem pomidorowym i warzywami, inspirowany kuchnią grecką.',
            image: grecku,
        },
        {
            id: 2,
            title: 'Sałatka z kurczakiem i awokado',
            description: 'Sałatka z grillowanym kurczakiem, awokado, sałatą i pomidorami, podana z lekkim dressingiem.',
            image: awokado1,
        }
    ]

    return (
        <div className="menupage">
            <Header/>
            <div className="branding-section">
                <img src={logo} alt="Ananasek Catering Logo" className="branding-logo" />
                <h2>Posiadamy różnorodne menu, każdy znajdzie coś dla siebie.</h2>
            </div>
            <div className="firstsection">
                <div className="menuItem">
                    <h4>Przedstawiamy nasze menu, menu można zamówić na każdą okazję taką jak wesele, catering dietetyczny lub uroczystości domowe</h4>
                    <h4>Jeśli chcieliby państwo otrzymać dietę określonego rodzaju zalecamy najpierw skontaktować się z naszym lekarzem</h4>
                    <h2>Śniadania</h2>
                    <div className="diets-container">
                        {dietsData_sniadanie.map(diet => (
                            <Meal key={diet.id} {...diet} />
                        ))}
                    </div>
                    <h2>II śniadania</h2>
                    <div className="diets-container">
                        {dietsData_IIsniadanie.map(diet => (
                            <Meal key={diet.id} {...diet} />
                        ))}
                    </div>
                    <h2>Obiady</h2>
                    <div className="diets-container">
                        {dietsData_obiad.map(diet => (
                            <Meal key={diet.id} {...diet} />
                        ))}
                    </div>
                    <h2>Kolacja</h2>
                    <div className="diets-container">
                        {dietsData_kolacja.map(diet => (
                            <Meal key={diet.id} {...diet} />
                        ))}
                    </div>
                    <h2>Skontaktuj się z nami!</h2>
                    <h5>Podane powyżej dania są najczęściej wybierane przez naszych klientów odnośnie przyjęć i dowozu do domu, jeśli nie ma na stronie Twojego ulubionego dania, skontaktuj się z nami a je skomponujemy i dostarczymy</h5>
                    <p>Możesz się z nami skontaktować mailowo lub telefonicznie Pozwoli nam to lepiej przygotować się do szczegółowego omówienia Twojego zamówienia.</p>
                    <p>Aby to uczynić zapraszamy do sekcji</p>
                    <Link to='/contact' className="diet-card-link1">
                        <h3>Kontakt</h3>
                    </Link>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default MenuPage;