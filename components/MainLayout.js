import React from 'react';
import Navbar from './Navbar';
import BottomProgress from './BottomProgress';

import layoutStyles from '../styles/MainLayout.module.css';
import QuestionBox from './QuestionBox';

const MainLayout = ({ Child1, Child2, title, questionData, instruction }) => {
  return (
    <>
      <div className={layoutStyles.wrapper}>
        <Navbar />

        <h1 className={layoutStyles.title}>
          {title}
        </h1>

        <div className={Child2 ? layoutStyles.containerCombo : layoutStyles.containerSolo} >
          <div className={layoutStyles.column1}>
            <Child1 />
          </div>
          {Child2 && <div className={layoutStyles.column2}>
            <Child2 />
          </div>}
        </div>
        <div className={layoutStyles.questionBox}>
          {questionData && <QuestionBox question={questionData} instruction={instruction} />}
        </div>
      </div>
      <BottomProgress />
    </>
  )
}

export default MainLayout

function texts() {
  return 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio temporibus rerum quod tempora quis deserunt enim omnis nobis dicta pariatur earum, beatae fugit illo, modi asperiores nisi repudiandae sed doloremqu     Obcaecati autem quibusdam fugiat debitis ex corporis doloremque dignissimos nemo animi possimus! Unde est quas neque.Qui, earum, enim alias quasi tempore nisi et quisquam, quaerat perferendis velit facere nam!'
}