import React from 'react';
import './DietCard.css';
import { Link } from 'react-router-dom';

const DietCard = ({ title, description, image, add_info, meals, link }) => {
    return (
        <div className="diet-card">
            <img src={image} alt={title} className="diet-image1" />
            <div className="diet-info">
                <Link to={link} className="diet-card-link">
                <h3>{title}</h3>
                </Link>
                <p>{description}</p>
            </div>
            <div className="diet-details">
                <div className="calories">{add_info}</div>
                <div className="meals">{meals}</div>
            </div>
        </div>

    );
};

export default DietCard;