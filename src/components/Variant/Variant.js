import React, { useState } from 'react';
import './Variant.css';

const VariantsSelector = () => {
    const variants = [
        { id: 1, kcal: '1500 KCAL' },
        { id: 2, kcal: '1800 KCAL' },
        { id: 3, kcal: '2000 KCAL' },
        { id: 4, kcal: '2500 KCAL' },
        { id: 5, kcal: '3000 KCAL' }
    ];

    const [selectedVariant, setSelectedVariant] = useState(variants[0].id);

    return (
        <div className='variants-selector'>
            <h2>Wybierz wariant</h2>
            <div className='variants-grid'>
                {variants.map(variant => (
                    <button
                        key={variant.id}
                        className={`variant ${selectedVariant === variant.id ? 'selected' : ''}`}
                        onClick={() => setSelectedVariant(variant.id)}
                    >
                        {variant.kcal}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default VariantsSelector;