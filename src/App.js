import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import MenuPage from './pages/MenuPage/MenuPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Navigation from './components/Navigation/Navigation';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import DietaSportowa from './pages/DietaSportowa/DietaSportowa';
import DietaFat from './pages/DietaFat/DietaFat';
import DietaWege from './pages/DietaWege/DietaWege';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ClientPanelPage from "./pages/ClientPanelPage/ClientPanelPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import Low_Carb from "./pages/Low_Carb/Low_Carb";
import Low_IG from "./pages/Low_IG/Low_IG";
import No_Fish from "./pages/No Fish/No_Fish";
import Home from "./pages/Home/Home";
import Polska from "./pages/Kuchnia_Polska/polska";

function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dieta-sportowa" element={<DietaSportowa />} />
                <Route path="/dieta-tłuszczowa" element={<DietaFat />} />
                <Route path="/dieta-wege" element={<DietaWege />} />
                <Route path="/low-carb" element={<Low_Carb />} />
                <Route path="/low-ig" element={<Low_IG />} />
                <Route path="/no-fish" element={<No_Fish />} />
                <Route path="/home" element={<Home />} />
                <Route path="/polska" element={<Polska />} />
                <Route path="/client-panel" element={<ClientPanelPage/>}/>
                <Route path="/order" element={<OrderPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
