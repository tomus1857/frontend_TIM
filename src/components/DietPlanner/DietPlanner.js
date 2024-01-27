import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './DietPlanner.css';
import { addDays, isWeekend, format } from 'date-fns';

function DietPlanner({ numberOfDays, excludeWeekends, onChange }) {
    const [highlightedDays, setHighlightedDays] = useState([]);
    const [numberOfDaysInput, setNumberOfDaysInput] = useState(numberOfDays);
    const [excludeWeekendsToggle, setExcludeWeekendsToggle] = useState(excludeWeekends);

    useEffect(() => {
        updateHighlightedDays();
    }, [numberOfDaysInput, excludeWeekendsToggle]);

    const updateHighlightedDays = () => {
        let days = [];
        let dayCounter = 0;
        let dayIndex = 0;

        while (dayCounter < numberOfDaysInput) {
            let day = addDays(new Date(), dayIndex);
            const dayFormatted = format(day, 'EEE'); // Format dnia tygodnia jako "Mon", "Tue", itp.

            if (excludeWeekendsToggle && (dayFormatted === 'Sat' || dayFormatted === 'Sun')) {
                dayIndex++;
                continue;
            }

            days.push(day);
            dayCounter++;
            dayIndex++;
        }

        setHighlightedDays(days);
        onChange(days.length * 75);
    };

    const isDayHighlighted = date => {
        return highlightedDays.some(
            highlightedDay =>
                date.getDate() === highlightedDay.getDate() &&
                date.getMonth() === highlightedDay.getMonth() &&
                date.getFullYear() === highlightedDay.getFullYear()
        );
    };

    const handleChangeNumberOfDays = (e) => {
        const newNumberOfDays = parseInt(e.target.value) || 0;
        setNumberOfDaysInput(newNumberOfDays);
        onChange(newNumberOfDays * 75);
    };

    const handleExcludeWeekendsToggle = () => {
        setExcludeWeekendsToggle(!excludeWeekendsToggle);
    };



    return (
        <div className="diet-planner">
            <h2>Planowanie diety</h2>
            <div className="dni">
                <label htmlFor="numberOfDays">Liczba dni diety:</label>
                <input
                    type="number"
                    id="numberOfDays"
                    min="1"
                    value={numberOfDaysInput}
                    onChange={handleChangeNumberOfDays}
                />
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={excludeWeekendsToggle}
                        onChange={handleExcludeWeekendsToggle}
                    />
                    Pomijaj weekendy
                </label>
            </div>
            <div className="kalendarz">
                <DatePicker
                    inline
                    highlightDates={highlightedDays}
                    selected={highlightedDays[0]} // Zaznacz pierwszy dzień jako początkowy
                    dayClassName={date => isDayHighlighted(date) ? 'highlighted' : undefined}
                />
            </div>
        </div>
    );
}

export default DietPlanner;
