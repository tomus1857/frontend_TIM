import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import MenuPage from './pages/MenuPage/MenuPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Navigation from './components/Navigation/Navigation';
import LoginPage from './pages/LoginPage/LoginPage';
import DietaSportowa from './pages/DietaSportowa/DietaSportowa';
import DietaFat from './pages/DietaFat/DietaFat';
import DietaWege from './pages/DietaWege/DietaWege';

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
                <Route path="/dieta-sportowa" element={<DietaSportowa />} />
                <Route path="/dieta-tłuszczowa" element={<DietaFat />} />
                <Route path="/dieta-wege" element={<DietaWege />} />
            </Routes>
        </Router>
    );
}

export default App;
