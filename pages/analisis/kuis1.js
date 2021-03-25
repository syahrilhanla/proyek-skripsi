import React from 'react';
import MainLayout from '@/components/MainLayout';
import QuizComponent from '@/components/QuizComponent';
import { questionData } from '@/components/data/quiz1Data';
import TableOne from '@/components/graphsAndTables/TableOne';

const quiz1 = () => {

  const DisplayQuiz = () => (
    <QuizComponent questionData={questionData} />
  )

  return (
    <MainLayout
      Child1={TableOne}
      Child2={DisplayQuiz}
    />
  )
}

export default quiz1;
