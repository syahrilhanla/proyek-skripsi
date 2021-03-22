import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import BorderLinearProgress from './BorderLinearProgress';

import progressStyles from '../styles/BottomProgress.module.css';

import { useRouter } from 'next/router';
import Link from 'next/link';

const BottomProgress = () => {
  const router = useRouter();
  const currentURL = router.pathname;
  const currentPath = currentURL.split('/')[2];

  // pages of contents
  const analysisList = ['1', '2', '3'];

  const nextURL = () => {
    if (parseInt(currentPath) < analysisList.length) return `${currentURL}/${analysisList[currentPath]}`;
  }

  const prevURL = () => {
    if (parseInt(currentPath) > 1) return `${currentURL}/${analysisList[currentPath - 1]}`;
  }

  return (
    <div className={progressStyles.main}>
      <div className={progressStyles.content}>
        <span className={progressStyles.left}>
          <Link href={`${router.pathname}/${prevURL()}`}>
            <ChevronLeftIcon fontSize={'large'} color={'inherit'} />
          </Link>
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
          <Link href={`${router.pathname}/${nextURL()}`}>
            <ChevronRightIcon fontSize={'large'} color={'inherit'} />
          </Link>
        </span>
      </div>
    </div >
  )
}

export default BottomProgress
