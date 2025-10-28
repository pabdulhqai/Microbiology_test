
import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import { CheckCircleIcon, XCircleIcon } from './icons';
import type { Question } from '../types';

export const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleAnswerSelect = (index: number) => {
    if (showFeedback) return;
    setSelectedAnswer(index);
    setShowFeedback(true);
    if (index === currentQuestion.correctAnswerIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };
  
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setQuizFinished(false);
  };

  if (quizFinished) {
    const percentage = Math.round((score / QUIZ_QUESTIONS.length) * 100);
    return (
      <div className="w-full max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-2xl text-center border border-slate-200">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Quiz Complete!</h2>
        <p className="text-xl text-slate-600 mb-6">Your final score is:</p>
        <div className={`text-6xl font-bold mb-8 ${percentage >= 70 ? 'text-green-500' : percentage >= 40 ? 'text-yellow-500' : 'text-red-500'}`}>
          {percentage}%
        </div>
        <p className="text-lg text-slate-600 mb-8">You answered {score} out of {QUIZ_QUESTIONS.length} questions correctly.</p>
        <button
          onClick={handleRestart}
          className="bg-sky-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-sky-700 transition-colors shadow-lg"
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-4 md:p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-8">Knowledge Check</h2>
        <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="p-8">
                <p className="text-sm font-semibold text-sky-600 mb-2">Question {currentQuestionIndex + 1} of {QUIZ_QUESTIONS.length}</p>
                <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-6">{currentQuestion.question}</h3>
                <div className="space-y-4">
                    {currentQuestion.options.map((option, index) => {
                        const isCorrect = index === currentQuestion.correctAnswerIndex;
                        const isSelected = selectedAnswer === index;
                        
                        let buttonClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex items-center justify-between ";
                        if (showFeedback) {
                            if (isCorrect) {
                                buttonClass += "bg-green-100 border-green-500 text-green-800 font-semibold";
                            } else if (isSelected && !isCorrect) {
                                buttonClass += "bg-red-100 border-red-500 text-red-800 font-semibold";
                            } else {
                                buttonClass += "border-slate-300 text-slate-600";
                            }
                        } else {
                            buttonClass += "border-slate-300 hover:border-sky-500 hover:bg-sky-50 text-slate-700";
                        }

                        return (
                            <button key={index} onClick={() => handleAnswerSelect(index)} disabled={showFeedback} className={buttonClass}>
                                <span>{option}</span>
                                {showFeedback && isCorrect && <CheckCircleIcon className="w-6 h-6 text-green-500" />}
                                {showFeedback && isSelected && !isCorrect && <XCircleIcon className="w-6 h-6 text-red-500" />}
                            </button>
                        );
                    })}
                </div>
                {showFeedback && (
                    <div className="mt-6 p-4 bg-slate-100 rounded-lg border border-slate-200">
                        <p className="font-semibold text-slate-700">Explanation:</p>
                        <p className="text-slate-600">{currentQuestion.explanation}</p>
                    </div>
                )}
            </div>
             {showFeedback && (
                <div className="bg-slate-50 px-8 py-4">
                    <button
                        onClick={handleNext}
                        className="w-full bg-sky-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-sky-700 transition-colors shadow-lg"
                    >
                        {currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? "Next Question" : "Finish Quiz"}
                    </button>
                </div>
            )}
        </div>
    </div>
  );
};
