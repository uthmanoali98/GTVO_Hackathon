// src/components/QAComponent.jsx
import React, { useState } from 'react';
import './QAComponent.css'; // We'll define some basic styles here

const QAComponent = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="qa-item">
      <div className="qa-question">
        <span>{question}</span>
        <button 
          className="qa-toggle-button" 
          onClick={() => setOpen(!open)}
          aria-label="Toggle answer"
        >
          {open ? '–' : '+'}
        </button>
      </div>
      {open && <div className="qa-answer">{answer}</div>}
    </div>
  );
};

export default QAComponent;