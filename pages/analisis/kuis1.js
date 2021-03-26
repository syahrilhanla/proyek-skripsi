import React, { useState, useEffect } from 'react';
import MainLayout from '@/components/MainLayout';
import QuizComponent from '@/components/QuizComponent';
import { questionData } from '@/components/data/quiz1Data';
import TableOne from '@/components/graphsAndTables/TableOne';
import TableTwo from '@/components/graphsAndTables/TableTwo';
import Caption from '@/components/Caption';

const quiz1 = () => {

  const [currentData, setCurrentData] = useState(0);

  const DisplayQuiz = () => (
    <QuizComponent questionData={questionData} setDataState={setCurrentData} />
  )

  useEffect(() => {
    console.log(currentData);
  }, [currentData]);

  const DisplayData = () => {
    ;
    return (
      <div style={{ margin: 'auto' }}>
        {currentData < 1 ? <><Caption>
          Data berikut digunakan untuk pertanyaan no 1-2
        </Caption>
          <TableOne /></> : <TableTwo />}
      </div>
    )
  }

  return (
    <MainLayout
      Child1={DisplayData}
      Child2={DisplayQuiz}
    />
  )
}

export default quiz1;
