import React from 'react';
import HomeNavbar from '../components/HomeNavbar';
import homeStyle from '../styles/HomePage.module.css';

const home = () => {
  return (
    <div>
      <HomeNavbar />
      <section className={homeStyle.billBoard}>
        <h1>Media Pembelajaran Statistika</h1>
        <h1>Kelas VIII</h1>
        <div className={homeStyle.startButton}>
          <span>Start</span>
        </div>
      </section>
    </div>
  )
}

export default home
