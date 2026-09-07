// src/components/ui/AccordionItem.jsx
import React from 'react';
import './AccordionItem.css';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={onClick}>
        <span>{question}</span>
        <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      {isOpen && <div className="accordion-content">{answer}</div>}
    </div>
  );
};

export default AccordionItem;