import React from 'react';
import './MenuItem.css';

const MenuItem = ({ title, description, image }) => {
    return (
        <div className="menu-item">
            <img src={image} alt={title} className="menu-item-image" />
            <h3 className="menu-item-title">{title}</h3>
            <p className="menu-item-description">{description}</p>
        </div>
    );
};

export default MenuItem;