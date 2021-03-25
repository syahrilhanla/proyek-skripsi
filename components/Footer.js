import footerStyles from '@/styles/Footer.module.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
              <li>
                <Link href={'/about'}>Tentang</Link>
              </li>
              <li>Petunjuk Penggunaan</li>
            </ul>
          </div>
        </div>

        <div className={footerStyles.identityGrid}>

          <p className={footerStyles.copyright}>&#169; 2021 - Syahril Hanla</p>

          <div className={footerStyles.identity}>
            <span>
              <Image src={'/github-icon.png'} height={21} width={21} />
            </span>
            <a href='https://github.com/syahrilhanla' target='_blank'>
              syahrilhanla
            </a>
          </div>
          <div className={footerStyles.identity}>
            <span>
              <Image src={'/instagram-icon.png'} height={21} width={21} />
            </span>
            <a href='https://www.instagram.com/syahrilhanla64' target='_blank'>
              @syahrilhanla64
            </a>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Footer
