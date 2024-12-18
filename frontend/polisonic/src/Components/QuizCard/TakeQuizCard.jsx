import React from "react";

const TakeQuizCard = ({ onStartQuiz }) => (
    <div className="take-quiz-card border-all-default padding-all">
        <h3 className="h3">Test your understanding and get a free article.</h3>
        <p className="body-reg">
            Answer three true or false questions to get rewarded with another audio
            article for free.
        </p>
        <button className="start-quiz-btn" onClick={onStartQuiz}>
            Take the quiz
        </button>
    </div>
);

export default TakeQuizCard;
