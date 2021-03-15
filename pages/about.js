import React from 'react';
import HomeNavbar from '../components/HomeNavbar';
import Footer from '../components/Footer';
import aboutStyles from '../styles/About.module.css';
import Image from 'next/image';

const about = () => {
  return (
    <div className={aboutStyles.mainAbout}>
      <HomeNavbar />
      <AboutContent />
      <Footer />
    </div>
  )
}

function AboutContent() {
  return (
    <div className={aboutStyles.aboutContent}>
      <div className={aboutStyles.container}>
        <h1>
          Sumber Belajar untuk Semua
        </h1>
        <p>
          <i>I/A Statistics</i> merupakan media pembelajaran statistika yang menyediakan materi, latihan, dan pemantauan progres belajar yang mendukung peserta didik untuk belajar sesuai dengan kecepatan mereka sendiri.
        </p>
        <p style={{ marginBottom: "0.6rem", marginTop: "-1.5rem" }}>
          <span style={{ fontSize: "21px" }}>M</span>ateri disusun dengan pendekatan kontekstual sehingga peserta didik dapat memahami apa hubungan dan manfaat dari statistika dalam kehidupan sehari-hari
        </p>

        <h1>
          Teknologi yang Digunakan
        </h1>
        <div className={aboutStyles.pictures}>
          <span>
            <Image src="/react-1.svg" height={100} width={300} />
          </span>
          <span>
            <Image src="/nextjs-3.svg" height={100} width={300} />
          </span>
          <span><Image src="/cloud_firestore.png" height={100} width={300} /></span>
        </div>

        <h1>
          Profil Pengembang
        </h1>
        <p>
          Syahril Hanla Azis (1710131110017), mahasiswa Pendidikan Komputer, Fakultas Keguruan dan Ilmu Pendidikan,  Universitas Lambung Mangkurat
        </p>
      </div>
    </div>
  )
}

export default about
