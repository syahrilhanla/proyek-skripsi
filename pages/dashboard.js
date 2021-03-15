import React from 'react';
import HomeNavbar from '../components/HomeNavbar';
import Footer from '../components/Footer';
import CircularProgressWithLabel from '../components/ProgressCircularBar';
import { LinearProgress } from '@material-ui/core';

import progressStyles from '../styles/Progress.module.css'
import dashboardStyles from '../styles/Dashboard.module.css'

const dashboard = () => {
  return (
    <div className={dashboardStyles.mainProgress}>
      <HomeNavbar />
      <DashboardContent />
      <UserProgress />
      <Footer />
    </div>
  )
}

const LearningProgress = ({ text, percentageValue, overallAction }) => {
  return (
    <div className={progressStyles.progresses}>
      <h3>
        {text}
      </h3>
      <span style={{ alignSelf: 'center' }}>
        <LinearProgress variant="determinate" value={percentageValue} />
      </span>
      <h2 style={{ justifySelf: 'center', paddingLeft: '2rem' }}>
        {overallAction}
      </h2>
    </div>
  )
}

function UserProgress() {
  return (
    <section>
      <div className={progressStyles.container}>
        <h1 style={{ textAlign: 'center' }}>
          Progres Saya
        </h1>
        <hr />
        <LearningProgress text={'Menganalisis Data'} percentageValue={80} overallAction={'8/10'} />
        <LearningProgress text={'Ukuran Pemusatan'} percentageValue={70} overallAction={'7/10'} />
        <LearningProgress text={'Ukuran Penyebaran'} percentageValue={60} overallAction={'6/10'} />
      </div>
    </section>
  )
}

function DashboardContent() {
  return <section className={dashboardStyles.dashboard}>
    <div className={dashboardStyles.profile}>
      <div className={dashboardStyles.backgroundPicture}></div>
      <div className={dashboardStyles.container}>
        <div className={dashboardStyles.progress}>
          <div>
            <CircularProgressWithLabel value={70} />
          </div>
          <div>
            <h3>21/30 Kegiatan Tuntas</h3>
          </div>
        </div>
        <div className={dashboardStyles.profileName}>
          <h2>Jonathan Joestar</h2>
        </div>
      </div>
    </div>
  </section>
}

export default dashboard
