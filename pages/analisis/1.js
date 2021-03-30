import React, { useEffect, useState } from 'react';
import MainLayout from '@/components/MainLayout';
import MathJax from '@/components/charts/MathJax';

const page1 = () => {
  const [displayMatJax, setDisplayMathJax] = useState(false);

  useEffect(() => {
    setDisplayMathJax(true)
  }, []);

  const Text = () => (
    <div style={{ padding: '0.8rem' }}>
      <p>
        Kamu mungkin pernah mendengar dengan kata “rata-rata”, “paling tinggi/rendah”, atau “paling berat/ringan”. Contohnya ada pada kalimat seperti “rata-rata tinggi orang Indonesia adalah 158,12 cm”, atau “gunung tertinggi di dunia adalah Gunung Everest”. Kalimat-kalimat tersebut didapatkan dari data yang diperoleh sebelumnya melalui pengumpulan dan pengolahan data. Inilah yang disebut dengan statistika, yaitu ilmu yang mempelajari tentang pengumpulan, pengolahan, penganalisisan, dan penarikan kesimpulan data.
      </p>
      <p>
        Di sini kamu akan mempelajari apa itu statistika berdasarkan masalah yang ditemui di kehidupan sehari-hari melalui data berbentuk tabel dan diagram. Selain itu kamu akan mempelajari cara menentukan nilai rata-rata (mean), median, modus, dan sebaran data.
      </p>

      {displayMatJax && <MathJax>a^2</MathJax>}
    </div>
  )

  return (
    <MainLayout Child1={Text} title={'Apa itu Statistika?'} />
  )
}

export default page1;