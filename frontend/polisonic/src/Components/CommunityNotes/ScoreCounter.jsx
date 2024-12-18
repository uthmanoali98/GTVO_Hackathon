import React, { useState } from 'react';
import './ScoreCounter.css';

const ScoreCounter = ({ initialScore }) => {
  const [score, setScore] = useState(initialScore);

  return (
    <div className="score-counter">
      {/* Increment Button */}
      <button
        className={`score-button increment ${score > initialScore ? 'active' : ''}`}
        onClick={() => setScore(score + 1)}
      >
        +
      </button>

      {/* Score Display */}
      <span className="score-value">{score}</span>

      {/* Decrement Button */}
      <button
        className={`score-button decrement ${score < initialScore ? 'active' : ''}`}
        onClick={() => setScore(score - 1)}
      >
        -
      </button>
    </div>
  );
};

export default ScoreCounter;