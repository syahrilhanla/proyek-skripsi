import React from 'react';
import MainLayout from '../../components/MainLayout';
import TableOne from '../../components/graphsAndTables/TableOne';

const page3 = () => {

  const points = [
    'Panjang ikan dengan umur 30 hari adalah 1-3 cm dan seterusnya.', 'Setiap 30 hari ikan bertambah panjang sebesar 3-5 cm.', 'Panjang ikan gabus paling kecil berumur 120 hari (4 bulan) adalah 8 cm, dan paling besarnya adalah 12 cm, begitu pula dengan nomor baris yang lain.'
  ]

  const Content = () => {
    return (
      <div>
        <p>
          Perhatikan tabel di bawah, berikut merupakan tabel untuk menyajikan data pertumbuhan ikan gabus. Data ini didapatkan berdasarkan pengukuran yang dilakukan dalam jangka waktu tertentu, kemudian data disajikan dalam bentuk tabel agar mudah untuk dibaca dan informasi dapat lebih mudah dipahami.
        </p>
        <p>
          Berdasarkan tabel di atas bisa dilihat terdapat dua judul kolom yakni Umur Benih dengan satuan hari dan Panjang dengan satuan cm. Data dari pengukuran dikelompokkan berdasarkan dua judul kolom tersebut, yang mana didapatkan ikan berumur 30 hari memiliki panjang yang berbeda-beda dari 1-3 cm, begitu pula dengan yang 60 hari dan seterusnya. Berdasarkan data yang disajikan pada tabel di atas, kita bisa menarik kesimpulan bahwa:
        </p>

        <ul>
          {points.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <>
      <MainLayout Child1={TableOne} Child2={Content} title={'Menganalisis Tabel'} />
    </>
  )
}

export default page3;
