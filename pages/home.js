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
        <div class={homeStyle.contentWrap}>
          <h1>Mengapa App Bagus Untuk Kamu:</h1>
          <div class={homeStyle.reasons}>
            <ul>
              <li>
                <h3>Belajar Mandiri</h3>
                <p>Belajar dengan kecepatanmu sendiri</p>
              </li>
              <li>
                <h3>Latihan</h3>
                <p>Kamu akan diberikan latihan untuk menguji dan mengasah pemahamanmu</p>
              </li>
              <li>
                <h3>Progress Tracking</h3>
                <p>Proses belajarmu akan dipantau sehingga kamu mengetahui seberapa pesat perkembanganmu</p>
              </li>
            </ul>
          </div>
        </div>

      </section>
    </div>
  )
}


function SectionA() {
  return (
    <section className={homeStyle.billBoard}>
      <div class={homeStyle.bgImage}></div>
      <div class={homeStyle.contentWrap}>
        <h1>Media Pembelajaran Statistika</h1>
        <h1>Kelas VIII</h1>
      </div>
      <div className={homeStyle.startButton}>
        <Link href={'/'}>Mulai</Link>
      </div>
    </section>
  )
}

export default home
