import React, { useState } from 'react';
import './DietTypes.css';

const DietTypes = () => {
    const [selectedDiet, setSelectedDiet] = useState('standard');

    const dietOptions = [
        { id: 'standard', name: 'Standard' },
        { id: 'wege', name: 'Wege' },
        { id: 'low-carb', name: 'Low Carb' },
        { id: 'keto', name: 'Keto' },
        { id: 'paleo', name: 'Paleo' },
        // Dodaj więcej opcji diety według potrzeb
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