import React, { useState } from 'react';
import './Accordion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion">
            <div className={`accordion-header ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
                <span className={`accordion-title ${isOpen ? 'open' : ''}`}>{title}</span>
                <FontAwesomeIcon
                    icon={faChevronRight}
                    className={`accordion-icon ${isOpen ? 'open' : ''}`}
                />
            </div>
            {isOpen && (
                <div className="accordion-content">
                    {content}
                </div>
            )}
        </div>
    );
};

export default Accordion;