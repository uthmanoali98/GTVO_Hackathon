import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./QuizQuestion.css";

const QuizQuestion = ({ questionNumber, questionData, onAnswer }) => {
    const { question } = questionData;
    const [selected, setSelected] = useState(null); // Tracks selected answer

    const handleSelect = (answer) => {
        setSelected(answer); // Mark the selected option
        onAnswer(answer === questionData.answer); // Check correctness
    };

    // Reset selected state when the question changes
    useEffect(() => {
        setSelected(null);
    }, [questionData, questionNumber]); // Dependency array ensures reset when data changes

    return (
        <div className="quiz-question-container border-all-default padding-all">
            <h3 className="question-title">Question #{questionNumber}</h3>
            <p className="question-text">{question}</p>
            <div className="quiz-options">
                <button
                    className={`quiz-button true-button ${selected === "True" ? "true-selected" : ""}`}
                    onClick={() => handleSelect("True")}
                >
                    True
                </button>
                <button
                    className={`quiz-button false-button ${selected === "False" ? "false-selected" : ""}`}
                    onClick={() => handleSelect("False")}
                >
                    False
                </button>
            </div>
        </div>
    );
};

QuizQuestion.propTypes = {
    questionNumber: PropTypes.number.isRequired,
    questionData: PropTypes.shape({
        question: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired,
    }).isRequired,
    onAnswer: PropTypes.func.isRequired,
};

export default QuizQuestion;