import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="navigation">
            <NavLink to="/" className="nav-link" activeClassName="nav-link-active">Home</NavLink>
            <NavLink to="/about" className="nav-link" activeClassName="nav-link-active">About</NavLink>
            <NavLink to="/menu" className="nav-link" activeClassName="nav-link-active">Menu</NavLink>
            <NavLink to="/contact" className="nav-link" activeClassName="nav-link-active">Contact</NavLink>
        </nav>
    );
};

export default Navigation;