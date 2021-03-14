import React from 'react';
import HomeNavbar from '../components/HomeNavbar';
import { SectionA, SectionB, SectionC } from '../components/Sections';
import Footer from '../components/Footer';

const home = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
      <HomeNavbar />
      <SectionA />
      <SectionB />
      <SectionC />
      <Footer />
    </div>
  )
}

export default home
