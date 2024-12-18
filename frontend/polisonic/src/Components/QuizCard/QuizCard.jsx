import React, { useState } from "react";
import TakeQuizCard from "./TakeQuizCard";
import QuizQuestion from "./QuizQuestion";
import QuizResults from "./QuizResults";
import "./QuizCard.css";

const QuizCard = ({ quizQuestions }) => {
    const [step, setStep] = useState("intro"); // "intro" | "quiz" | "results"
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);

    const handleStartQuiz = () => setStep("quiz");

    const handleAnswer = (isCorrect) => {
        setAnswers([...answers, isCorrect]);
        if (isCorrect) setScore(score + 1);

        if (currentQuestionIndex + 1 < quizQuestions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setStep("results");
        }
    };

    return (
        <div className="quiz-card-container">
            {step === "intro" && <TakeQuizCard onStartQuiz={handleStartQuiz} />}
            {step === "quiz" && (
                <QuizQuestion
                    questionNumber={currentQuestionIndex + 1}
                    questionData={quizQuestions[currentQuestionIndex]}
                    onAnswer={handleAnswer}
                />
            )}
            {step === "results" && (
                <QuizResults score={score} total={quizQuestions.length} />
            )}
        </div>
    );
};

export default QuizCard;
