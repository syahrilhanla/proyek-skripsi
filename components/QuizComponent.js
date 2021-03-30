import React, { useState } from 'react';
import quizStyle from '@/styles/QuizStyle.module.css';

const QuizComponent = ({ questionData, DisplayData }) => {
  const [quizScore, setQuizScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

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

  const DisplayScore = ({ quizScore }) => {
    return (
      <div>
        <h3>
          {quizScore}
        </h3>
      </div>
    )
  }

  const checkAnswer = (isCorrect) => {
    console.log(isCorrect);
    if (isCorrect === true) {
      setQuizScore(prevState => prevState + 1);
      console.log({ quizScore });
    }

    if (!(currentQuestion < questionData.length - 1)) {
      setIsFinished(true);
    } else setCurrentQuestion(prevState => prevState + 1);

  }

  return (
    <div key={currentQuestion} className={quizStyle.main}>
      {!isFinished && <DisplayData currentQuestion={currentQuestion} />}
      <div key={currentQuestion} className={quizStyle.questionDisplay}>
        <div className={quizStyle.question}>
          <h3>
            Soal <b><i>{currentQuestion + 1}</i></b> / {questionData.length}
          </h3>
          <p>
            {questionData[currentQuestion].questionText}
          </p>
        </div>
        <div className={quizStyle.answers}>
          {questionData[currentQuestion].answerChoices.map((answer, index) => (
            <button
              key={index}
              onClick={() => checkAnswer(answer.isCorrect)}
              className={quizStyle.answerButton}
            >
              {optionDisplay(index)}. {answer.answerText}
            </button>
          ))}
        </div>

        {isFinished && <DisplayScore quizScore={quizScore} />}
      </div>
    </div>
  )
}

export default QuizComponent;
