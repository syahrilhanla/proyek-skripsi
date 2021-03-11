import React from 'react';
import navbarStyle from '../styles/HomeNavbar.module.css';
import Image from 'next/image';

const HomeNavbar = () => {
  return (
    <nav class={navbarStyle.navbar}>
      <div class={navbarStyle.logo}>
        <Image src="/stats.svg" height={35} width={40} /> <span><h3>I/A Statistics</h3></span>
      </div>
      <div class={navbarStyle.links}>
        <ul>
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>About</p>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default HomeNavbar
