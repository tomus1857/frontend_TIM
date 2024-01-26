import React from 'react';

const MenuPage = () => {
    // Przykładowe dane menu
    const menuItems = [
        { id: 1, name: "Sałatka Cezar", description: "Klasyczna sałatka z kurczakiem", price: "25 zł" },
        { id: 2, name: "Pizza Margherita", description: "Tradycyjna włoska pizza", price: "20 zł" },
        { id: 3, name: "Risotto", description: "Risotto z grzybami", price: "30 zł" },
        // Dodaj więcej pozycji
    ];

    return (
        <div>
            <h2>Our Menu</h2>
            <ul>
                {menuItems.map(item => (
                    <li key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuPage;