import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './AboutPage.css';
import logo from '../../assets/logo.png';
import about_1 from '../../assets/about_1.jpg';
import about_2 from '../../assets/about_2.jpeg';
import gessler from '../../assets/gessler.jpg';
import zr1 from '../../assets/zr1.png';
import zr2 from '../../assets/zr2.png';
import zr3 from '../../assets/zr3.png';
import zr4 from '../../assets/zr4.png';

const AboutPage = () => {
    return (
        <div className="about-page">
            <Header />
            <div className="branding-section">
                <img src={logo} alt="Ananasek Catering Logo" className="branding-logo" />
                <h1>Nasza firma działa na rynku od 1998 roku</h1>
                <p>Zapewniamy najwyższej jakości usługi cateringowe.</p>
                <img src={about_1} alt="Ananasek Catering Logo" className="branding-logo" />
                <img src={about_2} alt="Ananasek Catering Logo" className="branding-logo" />
                <h2>Specjalizujemy się w obsłudze wesel i produkcji cateringów dla osób prywatnych</h2>
                <h3>Działalność na rynku: Ananasek Catering istnieje na rynku od 1998 roku, co oznacza, że ma ponad 20 lat doświadczenia w branży cateringowej.</h3>
                <h1>Znane gwiazdy i celebryci</h1>
                <img src={gessler} alt="Ananasek Catering Logo" className="branding-logo" />
                <p>Nasza firma jest niezmiernie dumna z tego, że otrzymaliśmy oficjalną certyfikację smaku od uznanej kucharki, Pani Magdy Gessler. To prestiżowe wyróżnienie jest potwierdzeniem, że nasze dania są nie tylko smaczne, ale także spełniają najwyższe standardy kulinarne. </p>
                <h1>Cechuje nas: </h1>
            </div>

            <div className="container">
                <div className="text-section">
                    <h2>Różnorodność</h2>
                    <p>Nasi kucharze pracowali wcześniej w renomowanych trójmiejskich restauracjach. Mamy specjalistów kuchni tajskiej, włoskiej, francuskiej jak i regionalnej – polskiej. U nas nie tylko zjesz jak u mamy, ale także wybierzesz się w podróż po kuchniach świata. Posiadamy ponad 300 unikatowych menu!</p>
                </div>
                <div className="image-section">
                    <img src={zr1} alt="Ananasek Catering Logo" className="branding-logo" />
                </div>
                <div className="text-section">
                    <h2>Zdrowie</h2>
                    <p>Do naszych posiłków nie dodajemy żadnych konserwantów! Całość jest przygotowywana zgodnie z zasadami zdrowego żywienia. Jedzenie przechodzi obróbkę w technice konwekcji, co zapewnia wysoką przyswajalność i minimalny spadek wartości odżywczych. Jeśli do tej pory nie dbałeś o dietę, po tygodniu z naszym jedzeniem powinieneś czuć się lżej i mieć lepsze samopoczucie.</p>
                </div>
                <div className="image-section">
                    <img src={zr2} alt="Ananasek Catering Logo" className="branding-logo" />
                </div>
                <div className="text-section">
                    <h2>Najniższe ceny</h2>
                    <p>Nie powinni się jednak Państwo martwić o jakość oferowanych przez nas produktów. Działamy na niskiej marży, a naszym hasłem jest zdrowa żywność w cenie dostępnej dla każdego. Istnieje możliwość zamówienia pakietów próbnych, celem zapoznania się z oferowanym przez nas jedzeniem.</p>
                </div>
                <div className="image-section">
                    <img src={zr3} alt="Ananasek Catering Logo" className="branding-logo" />
                </div>
                <div className="text-section">
                    <h2>Czas</h2>
                    <p>Wszystkie posiłki przyjadą do Twojego domu/miejsca pracy w nocy – tak, byś rano mógł cieszyć się śniadaniem. Czas zaoszczędzony na przygotowaniu jedzenia można przeznaczyć na rozwój, bliskich, hobby. Posiłki dostarczamy w atestowanych pojemnikach, które można podgrzewać w mikrofali.</p>
                </div>
                <div className="image-section">
                    <img src={zr4} alt="Ananasek Catering Logo" className="branding-logo" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;