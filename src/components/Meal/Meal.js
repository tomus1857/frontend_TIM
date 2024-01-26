import React from 'react';
import './Meal.css';

const Meal = ({ title, description, image, add_info, meals, link }) => {
    return (
        <div className="diet-cardd">
            <img src={image} alt={title} className="diet-image" />
            <div className="diet-info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>

    );
};

export default Meal;