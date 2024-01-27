import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './DietPlanner.css';
import { addDays, isWeekend } from 'date-fns';

function DietPlanner() {
    const [numberOfDays, setNumberOfDays] = useState(30); // Domyślnie 30 dni
    const [excludeWeekends, setExcludeWeekends] = useState(false);
    const [highlightedDays, setHighlightedDays] = useState([]);

    useEffect(() => {
        updateHighlightedDays();
    }, [numberOfDays, excludeWeekends]);

    const updateHighlightedDays = () => {
        let days = [];
        let dayCounter = 0;
        let dayIndex = 0;

        while(dayCounter < numberOfDays) {
            let day = addDays(new Date(), dayIndex);
            if(excludeWeekends && (isWeekend(day))) {
                dayIndex++;
                continue;
            }
            days.push(day);
            dayCounter++;
            dayIndex++;
        }

        setHighlightedDays(days);
    };

    // Funkcja pomocnicza do wyróżnienia dni w kalendarzu
    const isDayHighlighted = date => {
        return highlightedDays.some(
            highlightedDay =>
                date.getDate() === highlightedDay.getDate() &&
                date.getMonth() === highlightedDay.getMonth() &&
                date.getFullYear() === highlightedDay.getFullYear()
        );
    };

    return (
        <div className="diet-planner">
            <h2>Planowanie diety</h2>
            <div>
                <label htmlFor="numberOfDays">Liczba dni diety:</label>
                <input
                    type="number"
                    id="numberOfDays"
                    min="1"
                    value={numberOfDays}
                    onChange={(e) => setNumberOfDays(parseInt(e.target.value) || 0)}
                />
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={excludeWeekends}
                        onChange={(e) => setExcludeWeekends(e.target.checked)}
                    />
                    Pomijaj weekendy
                </label>
            </div>
            <div>
                <DatePicker
                    inline
                    highlightDates={highlightedDays}
                    dayClassName={date => isDayHighlighted(date) ? 'highlighted' : undefined}
                />
            </div>

        </div>
    );
}

export default DietPlanner;
