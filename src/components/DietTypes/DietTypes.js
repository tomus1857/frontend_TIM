import React, { useState } from 'react';
import './DietTypes.css';

const DietTypes = () => {
    const [selectedDiet, setSelectedDiet] = useState('standard');

    const dietOptions = [
        { id: 'Dieta-sportowa', name: 'Dieta sportowa' },
        { id: 'Dieta-tłuszczowa', name: 'Dieta tłuszczowa' },
        { id: 'Dieta-wege', name: 'Dieta wege' },
        { id: 'Low-carb', name: 'Low Carb' },
        { id: 'Low-IG', name: 'Low IG' },
        { id: 'No-Fish', name: 'No Fish' },
        { id: 'Home', name: 'Home' },
        { id: 'Kuchnia-polska', name: 'Kuchnia Polska' }
    ];

    const handleSelectDiet = (dietId) => {
        setSelectedDiet(dietId);
    };

    return (
        <div className="diet-types">
            <h3>Rodzaj diety</h3>
            <div className="diet-options">
                {dietOptions.map(option => (
                    <button
                        key={option.id}
                        className={`diet-option ${selectedDiet === option.id ? 'active' : ''}`}
                        onClick={() => handleSelectDiet(option.id)}
                    >
                        {option.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DietTypes;