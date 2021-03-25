import React, { useState } from 'react';
import quizStyle from '@/styles/QuizStyle.module.css';

const QuizComponent = ({ questionData }) => {
  const [quizScore, setQuizScore] = useState(0);

  const optionDisplay = (index) => {
    if (index === 0) {
      return 'a'
    } else if (index === 1) {
      return 'b'
    } else if (index === 2) {
      return 'c'
    } else if (index === 3) {
      return 'd'
    }
  }

  const checkAnswer = (isCorrect) => {
    if (isCorrect === true) setQuizScore(prevState => prevState + 1);
  }

  return (
    questionData.map((question, index) => (
      <div key={index} className={quizStyle.main}>
        <div className={quizStyle.question}>
          {index + 1}. {question.questionText}
        </div>
        <div className={quizStyle.answers}>
          {question.answerChoices.map((answer, index) => (
            <button
              key={index}
              onClick={() => checkAnswer(answer.isCorrect)}
              className={quizStyle.answerButton}
            >
              {optionDisplay(index)} {answer.answerText}
            </button>
          ))}
        </div>
      </div>
    ))
  )
}

export default QuizComponent;
