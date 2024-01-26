import React from 'react';
import './MealPlan.css';

const Meal = ({ mealType, calories, description }) => (
    <div className="meal">
        <h3>{mealType}</h3>
        <p>({calories} kcal)</p>
        <p>{description}</p>
    </div>
);

const MealPlan = (props) => {
    return (
        <div className="meal-plan">
            {props.meals.map((meal, index) => (
                <Meal key={index} mealType={meal.type} calories={meal.calories} description={meal.description} />
            ))}
        </div>
    );
};

export default MealPlan;