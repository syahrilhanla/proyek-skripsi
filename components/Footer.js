import footerStyles from '../styles/Footer.module.css';
import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <div class={footerStyles.footerHeader}>
        <Image src="/stats.svg" height={35} width={40} /> <span><h3>I/A Statistics</h3></span>
      </div>
      <div className={footerStyles.container}>
        <div className={footerStyles.grid}>
          <div className={footerStyles.footerDesc}>
            Menyediakan keperluan siswa untuk belajar statistika secara mandiri dengan optimal, efisien, dan praktis
        </div>
          <div className={footerStyles.links}>
            <ul>
              <li>Tentang</li>
              <li>Petunjuk Penggunaan</li>
            </ul>
          </div>
        </div>

        <div className={footerStyles.identityGrid}>

          <p className={footerStyles.copyright}>&#169; 2021 - Syahril Hanla</p>

          <div className={footerStyles.identity}>
            <span>
              <Image src={'/github-icon.png'} height={18} width={16} />
            </span>
            <span > syahrilhanla</span>
          </div>
          <div className={footerStyles.identity}>
            <span>
              <Image src={'/instagram-icon.png'} height={18} width={16} />
            </span>
            <span >
              @syahrilhanla64
          </span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
