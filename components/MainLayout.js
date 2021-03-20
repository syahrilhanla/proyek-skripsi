import React from 'react';
import Navbar from './Navbar';
import BottomProgress from './BottomProgress';

import layoutStyles from '../styles/MainLayout.module.css';

const MainLayout = ({ child1, child2 }) => {
  return (
    <>
      <Navbar />

      <h1 className={layoutStyles.title}>
        Analisis Data
      </h1>

      <div className={layoutStyles.container}>
        <div className={layoutStyles.column1}>
          {texts()}
        </div>
        <div className={layoutStyles.column2}>
          {texts()}
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