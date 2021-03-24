import React from 'react';
import questionStyle from '../styles/QuestionBox.module.css';

const QuestionBox = ({ question, instruction }) => {
  return (
    <div className={questionStyle.main}>

      <h2 className={questionStyle.header}>
        Mari Mencoba
        </h2>

      <p className={questionStyle.instruction}>
        {instruction}
      </p>

      <ol className={questionStyle.questions}>
        {question.map(item => (
          <li>
            {item.question}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default QuestionBox
