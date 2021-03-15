import React from 'react';
import HomeNavbar from '../components/HomeNavbar';
import Footer from '../components/Footer';

import dashboardStyles from '../styles/Dashboard.module.css'
import CircularProgressWithLabel from '../components/ProgressCircularBar';

const dashboard = () => {
  return (
    <div>
      <HomeNavbar />
      <DashboardContent />
      <Footer />
    </div>
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
            <p>21/30 Kegiatan Tuntas</p>
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
