import React from 'react';
import navbarStyle from '@/styles/HomeNavbar.module.css';
import Image from 'next/image';
import Link from 'next/link';

const HomeNavbar = () => {
  return (
    <nav className={navbarStyle.navbar}>
      <Link href={'/'}>
        <div className={navbarStyle.logo}>
          <Image src="/stats.svg" height={35} width={40} /> <span><h3>I/A Statistics</h3></span>
        </div>
      </Link>
      <div className={navbarStyle.links}>
        <ul>
          <li>
            <a><Link href={'/'}>Home</Link></a>
          </li>
          <li>
            <a><Link href={'/about'}>About</Link></a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default HomeNavbar
