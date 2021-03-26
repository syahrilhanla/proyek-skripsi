import React, { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import QuizComponent from '@/components/QuizComponent';
import { questionData } from '@/components/data/quiz1Data';
import TableOne from '@/components/graphsAndTables/TableOne';
import TableTwo from '@/components/graphsAndTables/TableTwo';
import Caption from '@/components/Caption';

const quiz1 = () => {

  // needed to display data on QuizComponent
  // takes number as argument from questionData array being set in QuizComponent
  const DisplayData = ({ currentQuestion }) => {
    const displayDataDynamically = (currentQuestion) => {
      if (currentQuestion < 2) {
        return (
          <>
            <Caption>
              Data berikut digunakan untuk pertanyaan no 1-2
            </Caption>
            <TableOne />
          </>
        )
      } else if (currentQuestion < 4) {
        return (
          <><Caption>
            Data berikut digunakan untuk pertanyaan no 3
          </Caption><TableTwo /></>
        )
      } else return null;
    }

    return (
      <div style={{ margin: 'auto 0px' }}>
        {displayDataDynamically(currentQuestion)}
      </div>
    )
  }

  const DisplayQuiz = () => (
    <QuizComponent questionData={questionData} DisplayData={DisplayData} />
  )

  return (
    <MainLayout
      Child1={DisplayQuiz}
    />
  )
}

export default quiz1;
