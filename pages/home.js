import React from 'react';
import HomeNavbar from '../components/HomeNavbar';
import homeStyle from '../styles/HomePage.module.css';
import Link from 'next/link';

const home = () => {
  return (
    <div>
      <HomeNavbar />
      <section className={homeStyle.billBoard}>
        <div class={homeStyle.bgImage}></div>
        <h1>Media Pembelajaran Statistika</h1>
        <h1>Kelas VIII</h1>
        <div className={homeStyle.startButton}>
          <Link href={'/'}>Mulai</Link>
        </div>
      </section>
    </div>
  )
}

export default home
