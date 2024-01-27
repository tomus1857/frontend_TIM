import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import './ClientPanelPage.css';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

function ClientPanelPage() {
    const navigate = useNavigate();
    const handleOrder = () => {
        navigate('/order');
    };

    // Przykładowe dane użytkownika i diety pobrane z backendu
    const [userData, setUserData] = useState({
        username: 'PrzykładowyUzytkownik',
        email: 'przykladowy@email.com',
        firstName: 'Jan',
        lastName: 'Kowalski',
        phoneNumber: '123-456-789',
    });

    const [dietData, setDietData] = useState([
        { id: 1, name: 'Dieta nr 1', description: 'Opis diety nr 1' },
        { id: 2, name: 'Dieta nr 2', description: 'Opis diety nr 2' },
        { id: 3, name: 'Dieta nr 3', description: 'Opis diety nr 3' },
    ]);

    // Tu możesz użyć useEffect do pobrania danych z backendu

    return (
        <>
            <Header />
            <div className="client-panel-page">
                <div className="user-data">
                    <h2>Dane użytkownika</h2>
                    <table>
                        <tbody>
                        <tr>
                            <td>Username:</td>
                            <td>{userData.username}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{userData.email}</td>
                        </tr>
                        <tr>
                            <td>Imię:</td>
                            <td>{userData.firstName}</td>
                        </tr>
                        <tr>
                            <td>Nazwisko:</td>
                            <td>{userData.lastName}</td>
                        </tr>
                        <tr>
                            <td>Numer Telefonu:</td>
                            <td>{userData.phoneNumber}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="diet-data">
                    <h2>Diety</h2>
                    {dietData.map((diet) => (
                        <div key={diet.id} className="diet-item">
                            <h3>{diet.name}</h3>
                            <p>{diet.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <h1 className="login-button" onClick={handleOrder}>Zamów dietę</h1>
            <Footer />
        </>
    );
}

export default ClientPanelPage;