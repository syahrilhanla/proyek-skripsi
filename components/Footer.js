import footerStyles from '../styles/Footer.module.css';
import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <div className={footerStyles.footerHeader}>
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
            <a href='http://github.com/syahrilhanla' target='_blank'>
              <span>
                <Image src={'/github-icon.png'} height={21} width={21} />
              </span> syahrilhanla
            </a>

          </div>
          <div className={footerStyles.identity}>

            <a href='http://instagram.com/syahrilhanla64' target='_blank'>
              <span>
                <Image src={'/instagram-icon.png'} height={21} width={21} />
              </span> @syahrilhanla64
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
