import React from 'react';
import MainLayout from '@/components/MainLayout';
import QuizComponent from '@/components/QuizComponent';
import { questionData } from '@/components/data/quiz1Data';
import TableOne from '@/components/graphsAndTables/TableOne';
import Caption from '@/components/Caption';

const quiz1 = () => {

  const DisplayQuiz = () => (
    <QuizComponent questionData={questionData} />
  )

  const DisplayData = () => (
    <div style={{ margin: 'auto' }}>
      <Caption>
        Data berikut digunakan untuk pertanyaan no 1-2
      </Caption>
      <TableOne />
    </div>
  )

  return (
    <MainLayout
      Child1={DisplayData}
      Child2={DisplayQuiz}
    />
  )
}

export default quiz1;
