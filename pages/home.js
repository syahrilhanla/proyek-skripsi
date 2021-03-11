import React from 'react';
import HomeNavbar from '../components/HomeNavbar';
import homeStyle from '../styles/HomePage.module.css';
import Link from 'next/link';

const home = () => {
  return (
    <div>
      <HomeNavbar />
      <SectionA />
      <section className={homeStyle.sectionB}>
        <h1>Mengapa App Bagus Untuk Kamu:</h1>
      </section>
    </div>
  )
}


function SectionA() {
  return (
    <section className={homeStyle.billBoard}>
      <div class={homeStyle.bgImage}></div>
      <h1>Media Pembelajaran Statistika</h1>
      <h1>Kelas VIII</h1>
      <div className={homeStyle.startButton}>
        <Link href={'/'}>Mulai</Link>
      </div>
    </section>
  )
}

export default home
