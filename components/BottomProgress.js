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
  const currentPath = parseInt(currentURL.split('/')[2]);

  // pages of contents
  const urlList = data.map(item => (
    {
      content: item.title,
      url: item.items.map(unit => unit.id)
    }
  ));

  const chooseURLList = (parentPath) => {
    if (parentPath === 'analisis') {
      return urlList.filter(item => item.content === 'Menganalisis Data').map(unit => unit.url);
    } else if (parentPath === 'pemusatan') {
      return urlList.filter(item => item.content === 'Ukuran Pemusatan Data').map(unit => unit.url);
    } else if (parentPath === 'penyebaran') {
      return urlList.filter(item => item.content === 'Ukuran Penyebaran Data').map(unit => unit.url);
    }
  }

  const nextURL = () => {
    if (currentPath && currentPath < chooseURLList(parentPath)[0].length) {
      // if already is on page numbering
      return `${parentPath}/${chooseURLList(parentPath)[0][currentPath]}`;
    } else if (currentPath && currentPath === chooseURLList(parentPath)[0].length) {
      // if already at the top of the content, then go to quiz/last url of content
      return `${parentPath}/${chooseURLList(parentPath)[0][currentPath.length - 1]}`;
    } else return `${parentPath}/1`;
  }

  const prevURL = () => {
    // if already is on page numbering, then can only go to previous link if on page 2
    if (currentPath > 1) {
      return `${parentPath}/${chooseURLList(parentPath)[0][currentPath - 2]}`
    }
    // if no, then always go to the first page
    else return `${parentPath}/1`;
  }

  return (
    <div className={progressStyles.main}>
      <div className={progressStyles.content}>
        <span className={progressStyles.left}>
          <Link href={`/${prevURL()}`}>
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
          <Link href={`/${nextURL()}`}>
            <ChevronRightIcon fontSize={'large'} color={'inherit'} />
          </Link>
        </span>
      </div>
    </div >
  )
}

export default BottomProgress
