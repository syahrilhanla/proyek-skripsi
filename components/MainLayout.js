import React from 'react';
import Navbar from './Navbar';
import BottomProgress from './BottomProgress';

import layoutStyles from '../styles/MainLayout.module.css';

const MainLayout = ({ Child1, Child2, title }) => {
  return (
    <div className={layoutStyles.wrapper}>
      <Navbar />

      <h1 className={layoutStyles.title}>
        {title}
      </h1>

      <div className={layoutStyles.container} style={
        !Child2 && { gridTemplateColumns: '1fr' }
      }>
        <div className={layoutStyles.column1}>
          <Child1 />
        </div>
        {Child2 && <div className={layoutStyles.column2}>
          <Child2 />
        </div>}
      </div>

      <BottomProgress />
    </div>
  )
}

export default MainLayout

function texts() {
  return 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio temporibus rerum quod tempora quis deserunt enim omnis nobis dicta pariatur earum, beatae fugit illo, modi asperiores nisi repudiandae sed doloremqu     Obcaecati autem quibusdam fugiat debitis ex corporis doloremque dignissimos nemo animi possimus! Unde est quas neque.Qui, earum, enim alias quasi tempore nisi et quisquam, quaerat perferendis velit facere nam!'
}