// src/components/QAComponent.jsx
import React, { useState } from 'react';
import './QAComponent.css'; // We'll define some basic styles here

const QAComponent = ({ question, answer }) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAnswer = () => setIsExpanded(!isExpanded);

  // const [open, setOpen] = useState(false);
  
//   return (
//     <div className="qa-item">
//       <div className="qa-question h4">
//         <span>{question}</span>
//         <button 
//           className="qa-toggle-button" 
//           onClick={() => setOpen(!open)}
//           aria-label="Toggle answer"
//         >
//           {open ? '–' : '+'}
//         </button>
//       </div>
//       {open && <div className="qa-answer body-reg">{answer}</div>}
//     </div>
//   );
// };

return (
  <div className="qa-item">
    <div className="qa-question">
      <span className="h4">{question}</span>
      <button className="qa-toggle-button" onClick={toggleAnswer} aria-label="Toggle answer">
        {/* Conditional SVG */}
        {isExpanded ? (
          // Minus SVG
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className='minus-svg'
          >
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        ) : (
          // Plus SVG
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        )}
      </button>
    </div>
    {isExpanded && <div className="qa-answer body-reg">{answer}</div>}
  </div>
);
};

export default QAComponent;