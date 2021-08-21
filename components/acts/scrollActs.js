// ESSENTIAL IMPORT FOR TEXT FORMATTING

import DisplayEquation from "@/components/charts/KatexComponent";
import LearningObjectives from "@/components/common/LearningObjectives";
import {
	chapter1Objectives,
	chapter2Objectives,
	chapter3Objectives,
} from "@/components/data/objectivesData";

import mainLayoutStyles from "@/styles/MainLayout.module.css";

// ===================== CHAPTER 1 __ ANALYSIS ================================

export const analysisPage1 = {
	id: "act1",
	act: (
		<div>
			<p>
				Ikan betok (<i>Anabas testudineus</i>) atau di sekitaran daerah
				Kalimantan disebut juga dengan ikan papuyu, adalah ikan yang berhabitat
				di air tawar, khususnya rawa, sungai, danau, saluran-saluran air hingga
				persawahan ini merupakan salah satu jenis ikan yang paling populer di
				Kalimantan. Di Kalimantan sendiri terdapat dua varian ikan papuyu, yakni
				ikan papuyu galam (warna kuning) dan papuyu hijau (warna hijau) (Hidayat
				dkk., 2016). Ikan papuyu ini bernilai ekonomis yang relatif tinggi,
				dikarenakan permintaan permintaan masyarakat yang masih tinggi dan terus
				meningkat seiring dengan pertambahan populasi penduduk (Mustakim dkk.,
				2009).
			</p>
			<p>
				Statistika sangat dekat dengan kehidupan sehari-hari, terkadang tidak
				disadari karena memang digunakan hampir untuk semua bidang, oleh karena
				itu penting bagi untuk dipelajari. Di sini akan dipelajari apa itu
				statistika berdasarkan masalah yang ditemui di kehidupan sehari-hari
				melalui data berbentuk tabel dan diagram. Selain itu cara menentukan
				nilai rata-rata (mean), median, modus, dan sebaran data akan dipelajari
				di sini.
			</p>
		</div>
	),
};

export const analysisPage2 = {
	id: "act1",
	act: (
		<div className={mainLayoutStyles.divForObjectives}>
			<LearningObjectives objectives={chapter1Objectives} />
			<p>
				Kalimat yang sering terdengar pada bahasan ikan seperti ini adalah
				“paling panjang" atau “paling pendek”, serta “paling berat” atau “paling
				ringan”. Kalimat-kalimat tersebut didapatkan dari data yang diperoleh
				sebelumnya melalui pengumpulan dan analisa data. Ini merupakan salah
				satu turunan dari ilmu statistika, yaitu ilmu yang mempelajari tentang
				pengumpulan, pengolahan, penganalisaan, dan penarikan kesimpulan data.
			</p>

			<p>
				Pada bab ini akan diajarkan apa itu statistika berdasarkan masalah yang
				ditemui di kehidupan sehari-hari melalui kumpulan data berbentuk tabel
				dan diagram, dengan kumpulan data tersebut kemudian dianalisis sehingga
				dapat diolah lebih lanjut.
			</p>
		</div>
	),
};

export const analysisPage3 = {
	id: "act1",
	act: (
		<div>
			<p>
				Perhatikan tabel 1-1 di samping, berikut merupakan tabel untuk
				menyajikan data pertumbuhan ikan papuyu. Data ini didapatkan berdasarkan
				pengukuran yang dilakukan dalam jangka waktu tertentu, kemudian data
				disajikan dalam bentuk tabel agar mudah untuk dibaca dan informasi dapat
				lebih mudah dipahami.
			</p>
			<p>
				Berdasarkan tabel 1-3, dapat dilihat terdapat dua judul kolom yakni Umur
				Benih dengan satuan hari dan Panjang dengan satuan cm. Data dari
				pengukuran dikelompokkan berdasarkan dua judul kolom tersebut, yang mana
				didapatkan ikan papuyu berumur 60 hari memiliki panjang yang
				berbeda-beda dari 4-5 cm, begitu pula dengan yang 90 hari dan
				seterusnya. Berdasarkan data yang disajikan pada tabel di atas,
				kesimpulan dapat ditarik adalah:
			</p>

			<ul>
				<li>Panjang ikan dengan umur 60 hari adalah 4-5 cm dan seterusnya.</li>
				<li>Setiap 30 hari ikan bertambah panjang menjadi sebesar 1-2 cm.</li>
				<li>
					Panjang ikan gabus paling kecil berumur 120 hari (4 bulan) adalah 6
					cm, dan paling besarnya adalah 7 cm, begitu pula dengan nomor baris
					yang lain.
				</li>
			</ul>
		</div>
	),
};

export const analysisPage4 = {
	id: "act1",
	act: (
		<div>
			<p>
				Data biasanya juga disajikan dalam bentuk grafik atau diagram, dengan
				menggunakan tampilan ini biasanya data yang lebih kompleks dapat lebih
				mudah untuk dipahami tanpa perlu usaha lebih untuk menganalisisnya.
				Sebagai contoh diketahui sebuah tabel dengan data ukuran ikan yang
				dijual di pasar-pasar kawasan Banjarmasin. Data bisa diubah dari bentuk
				tabel menjadi berbagai macam bentuk grafik atau diagram, misalnya
				diagram batang, diagram lingkaran, dan diagram garis.
			</p>
			<p>
				Di samping merupakan data dari hasil kumpulan ikan papuyu yang dibeli
				dari pasar-pasar yang ada di Banjarmasin. Data disajikan sebagai sebuah
				tabel yang menggolongkan ikan berdasarkan ukurannya, kemudian per
				golongan ukuran tersebut didapatkan persentase dari jumlah keseluruhan.
				Berdasarkan data ini dapat dibuat berbagai macam jenis diagram. Di bawah
				merupakan hasil dari pembuatan diagram batang menggunakan data yang sama
				pada tabel di atas. Data dapat dibagi sesuai dengan golongan ukuran pada
				tabel, dan dilihat berapa populasi banyaknya ikan (dalam persentase)
				dari jumlah ikan tersebut.
			</p>
			<p>
				Berdasarkan diagram 1-5 di samping dapat lebih mudah mengamati data yang
				disajikan. Dibandingkan dengan menggunakan tabel, dengan menggunakan
				diagram di atas dapat langsung diketahui dengan mudah mana nilai yang
				lebih tinggi dan lebih rendahnya.
			</p>
		</div>
	),
};

export const analysisPage5 = {
	id: "act1",
	act: (
		<div>
			<p>
				Di bawah ini merupakan diagram garis yang menunjukkan aktivitas bertelur
				dari Itik Alabio, itik yang terkenal sebagai produk peternakan khas
				daerah HSU (Hulu Sungai Utara) yang berdaya jual tinggi, Analisis data
				di atas dan ambil kesimpulan berdasarkan data yang disajikan, kemudian
				jawablah pertanyaan berikut:
			</p>
			<ol>
				<li>Tahun berapakah itik paling banyak bertelur?</li>
				<li>Itik manakah yang paling sedikit bertelur di tahun pertama?</li>
			</ol>
		</div>
	),
};

export const analysisPage6 = {
	id: "act1",
	act: (
		<div>
			<p>
				Diagram lingkaran di samping menunjukkan data tentang luas lahan gambut
				yang ada di Indonesia. Menurut penelitian terdapat total 14,9 juta
				hektar luas lahan gambut di Indonesia. Dari situ terdapat 43% terletak
				di Sumatera, 32% terletak di Kalimantan, dan sisanya di tempat lain.
			</p>
			<p>Pertanyaannya adalah:</p>
			<ol>
				<li>
					Berapa persentase dan luas lahan gambut di tempat lain (dalam satuan
					juta hektar)?
				</li>
				<li>
					Berapa juta hektar luas lahan gambut yang terdapat di Kalimantan?
				</li>
			</ol>
		</div>
	),
};

// ===================== CHAPTER 1 __ ANALYSIS ================================

// ===================== CHAPTER 2 __ PEMUSATAN ===============================

export const pemusatanPage1 = {
	id: "act1",
	act: (
		<div className={mainLayoutStyles.divForObjectives}>
			<LearningObjectives objectives={chapter2Objectives} />
			<p>
				Di kehidupan sehari-hari kata “rata-rata” sering kali terdengar.
				Rata-rata merupakan salah satu ukuran pemusatan data yang paling sering
				digunakan. Berdasarkan data yang didapat dari ikan papuyu yang
				dikumpulkan dari pasar-pasar di kawasan Banjarmasin (teks sementara,
				sumber ditambahkan nanti), didapatkan ukuran rata-rata badan ikan
				sebesar 8,5 cm. Ini merupakan salah satu contoh kecil dari penggunaan
				ukuran pemusatan data dalam kehidupan sehari-hari, oleh karena itu
				ukuran pemusatan data penting untuk dipahami.
			</p>
			<p>
				Perhatikan data dalam tabel di samping! Dalam tabel tersebut terdapat
				data hasil produksi telur itik Alabio yang telah dikumpulkan selama 3
				tahun. Dalam subbab ini akan dipelajari cara menentukan nilai rata-rata
				(mean), modus, dan median dari data yang disajikan.
			</p>
		</div>
	),
};

export const pemusatanPage2 = {
	id: "act1",
	act: (
		<div>
			<p>
				Pada kegiatan ini akan dipelajari cara menentukan nilai rata-rata.
				Rata-rata dalam statistika nilai disebut dengan mean. Rata-rata dihitung
				dengan menjumlahkan semua data yang dikumpulkan dan dibagi dengan jumlah
				satuan data. Mencari nilai rata-rata dirumuskan sebagai berikut:
			</p>
			<DisplayEquation>{`\\bar{x} =  \\frac{ \\sum_{i=1}^nx_{i}}{n} = \\frac{x_{1} + x_{2} + ... + x_{n}}{n}`}</DisplayEquation>
		</div>
	),
};
