import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import BorderLinearProgress from './BorderLinearProgress';

import progressStyles from '../styles/BottomProgress.module.css';

const BottomProgress = () => {

  return (
    <div className={progressStyles.main}>
      <div className={progressStyles.content}>
        <span className={progressStyles.left}>
          <ChevronLeftIcon fontSize={'large'} color={'inherit'} />
        </span>

        <span>
          <BorderLinearProgress value={20} />
          <div className={progressStyles.progress}>
            <p>
              1/5 Kegiatan
            </p>
          </div>
        </span>

        <span className={progressStyles.right}>
          <ChevronRightIcon fontSize={'large'} color={'inherit'} />
        </span>
      </div>
    </div>
  )
}

export default BottomProgress
