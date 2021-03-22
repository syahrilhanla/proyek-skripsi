import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import BorderLinearProgress from './BorderLinearProgress';
import { data } from './data/drawersData';

import progressStyles from '../styles/BottomProgress.module.css';

import { useRouter } from 'next/router';
import Link from 'next/link';

const BottomProgress = () => {
  const router = useRouter();
  const currentURL = router.pathname;
  const parentPath = currentURL.split('/')[1];
  const currentPath = currentURL.split('/')[2];

  // pages of contents
  const urlList = data.map(item => (
    {
      content: item.title,
      url: item.items.map(unit => unit.id)
    }
  ));

  const chooseURLList = (parentPath) => {
    if (parentPath === 'analisis') {
      return urlList.filter(item => item.content === 'Menganalisis Data')
    } else if (parentPath === 'pemusatan') {
      return urlList.filter(item => item.content === 'Ukuran Pemusatan Data')
    } else if (parentPath === 'penyebaran') {
      return urlList.filter(item => item.content === 'Ukuran Penyebaran Data')
    }
  }

  const analysisList = ['1', '2', '3'];

  const nextURL = () => {
    if (parseInt(currentPath) < chooseURLList(parentPath).length) return `${parentPath}/${chooseURLList(parentPath)
    [currentPath]}`;
  }

  const prevURL = () => {
    if (parseInt(currentPath) > 1) return `${parentPath}/${chooseURLList(parentPath)
    [currentPath - 1]}`;
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
