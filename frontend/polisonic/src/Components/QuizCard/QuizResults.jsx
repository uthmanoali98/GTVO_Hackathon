import React from "react";
import "./QuizResults.css";

const QuizResults = ({ score, total }) => {
    const isPerfect = score === total;
    const resultClass = isPerfect ? "perfect-score" : "partial-score";

    return (
        <div className="quiz-results-card border-all-default">
            {/* Header */}
            <div className="quiz-header">
                <h4 className="h4">Quiz Results</h4>
            </div>

            {/* Score Section */}
            <div className={`quiz-score ${resultClass}`}>
                <h2 className="h2">
                    {score}/{total} Correct
                </h2>
            </div>

            {/* Message Section */}
            <div className="quiz-message">
                <p className="body-large">
                    Nice! You’ve been awarded a free audio article.
                </p>
                <p className="body-small">
                    Lorem ipsum dolor sit amet consectetur. Commod quis tincidunt ut
                    fringilla a mauris.
                </p>
            </div>
        </div>
    );
};

export default QuizResults;
