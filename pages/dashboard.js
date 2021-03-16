import React from 'react';
import HomeNavbar from '../components/HomeNavbar';
import Footer from '../components/Footer';
import CircularProgressWithLabel from '../components/ProgressCircularBar';
import LearningProgress from '../components/LearningProgress';

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
          <div className={dashboardStyles.progressBar}>
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
