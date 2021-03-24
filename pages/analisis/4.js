import React from 'react';
import BarChart from '../../components/BarChart';
import MainLayout from '../../components/MainLayout';
import tableStyle from '../../styles/TableStyle.module.css';

const page4 = () => {

  const Text = () => (
    <div>
      <p>
        Data biasanya juga disajikan dalam bentuk grafik atau diagram, dengan menggunakan tampilan ini biasanya data yang lebih kompleks dapat lebih mudah untuk dipahami tanpa perlu usaha lebih untuk menganalisisnya. Sebagai contoh kita mempunyai sebuah tabel dengan data ukuran ikan Kelabau yang tertangkap di sungai. Kita bisa mengubahnya dari tabel menjadi berbagai macam grafik atau diagram, misalnya diagram batang, diagram lingkaran, dan diagram garis.
      </p>
      <p>
        Di samping merupakan data dari hasil kumpulan tangkapan ikan Kelabau yang ada di sepanjang sungai Kapuas. Berdasarkan hasil tangkapan tersebut kita dapat menyajikan datanya menjadi sebuah tabel yang menggolongkan ikan berdasarkan ukurannya, kemudian per golongan ukuran tersebut didapatkan persentase dari jumlah keseluruhan. Berdasarkan data yang ini kita dapat membuatnya menjadi berbagai macam jenis diagram. Di bawah merupakan hasil dari pembuatan diagram batang menggunakan data yang sama pada tabel di atas. Kita dapat membaginya
        Ayo Mencoba!
        sesuai dengan golongan ukuran pada tabel, dan melihat berapa banyak populasi (dalam persentase) dari jumlah ikan tersebut.
      </p>
    </div>
  );

  const tableData = [
    {
      no: 1,
      size: '249-301',
      percentage: 8
    },
    {
      no: 2,
      size: '302-354',
      percentage: 42
    },
    {
      no: 3,
      size: '355-407',
      percentage: 25
    },
    {
      no: 4,
      size: '408-460',
      percentage: 17
    },
    {
      no: 5,
      size: '461-513',
      percentage: 17
    },
  ]

  const Table1 = () => {
    return (
      <div>
        <table className={tableStyle.mainTable}>
          <thead>
            <tr>
              <th className={tableStyle.tableHead}>
                No
              </th>
              <th className={tableStyle.tableHead}>
                Ukuran (mm)
              </th>
              <th className={tableStyle.tableHead}>
                Persentase (%)
              </th>
            </tr>
          </thead>

          <tbody>
            {tableData.map(item => (
              <tr key={item.no}>
                <td>
                  {item.no}
                </td>
                <td>
                  {item.size}
                </td>
                <td>
                  {item.percentage}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  const labels = tableData.map(label => label.size);
  const data = tableData.map(item => item.percentage);

  const charData = {
    labels: labels,
    label: 'Ukuran Ikan Kelabau',
    data: data
  };

  const questionData = [
    {
      question: 'what is this?',
      answer: 'yes'
    }
  ];

  const instruction = 'Di bawah ini merupakan diagram garis yang menunjukkan aktivitas bertelur dari Itik Alabio, itik yang terkenal sebagai produk peternakan khas Hulu Sungai yang berdaya jual tinggi. Berdasarkan data yang disajikan coba kamu analisa data di atas dan ambil kesimpulan, kemudian jawablah pertanyaan berikut:'

  const Data = () => (
    <div style={{ margin: 'auto' }}>
      <Table1 />
      <br />
      <BarChart charData={charData} />
    </div>
  )

  return (
    <>
      <MainLayout
        Child1={Data}
        Child2={Text}
        title={'Menganalisis Grafik/Diagram'}
        questionData={questionData}
        instruction={instruction} />
    </>
  )
}

export default page4
