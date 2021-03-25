import React from 'react';
import navbarStyle from '../styles/HomeNavbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from './context/AuthContext';

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
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/about'}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default HomeNavbar
