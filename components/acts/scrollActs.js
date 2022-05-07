// ESSENTIAL IMPORT FOR TEXT FORMATTING

import DisplayEquation from "@/components/charts/KatexComponent";
import LearningObjectives from "@/components/common/LearningObjectives";
import {
	chapter1Objectives,
	chapter2Objectives,
	chapter3Objectives,
} from "@/components/data/objectivesData";

import Image from "next/image";

import mainLayoutStyles from "@/styles/MainLayout.module.css";
import Caption from "@/components/common/Caption";
import TableOne from "@/components/graphsAndTables/TableOne";
import TableThree from "@/components/graphsAndTables/TableThree";
import TableFour from "@/components/graphsAndTables/TableFour";
import DataColumn from "@/components/charts/DataColumn";

// ===================== CHAPTER 1 __ ANALYSIS ================================

export const analysisPage1 = {
	id: "act1",
	act1: (
		<div>
			<p>
				Ikan betok (<i>Anabas testudineus</i>) atau di sekitaran daerah
				Kalimantan disebut juga dengan ikan papuyu, adalah ikan yang berhabitat
				di air tawar, khususnya rawa, sungai, danau, saluran-saluran air hingga
				persawahan ini merupakan salah satu jenis ikan yang paling populer di
				Kalimantan. Di Kalimantan sendiri terdapat dua varian ikan papuyu, yakni
				ikan papuyu galam (warna kuning) dan papuyu hijau (warna hijau). Ikan
				papuyu ini bernilai ekonomis yang relatif tinggi, dikarenakan permintaan
				permintaan masyarakat yang masih tinggi dan terus meningkat seiring
				dengan pertambahan populasi penduduk.
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
	act2: (
		<div>
			<span
				style={{
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
				}}
			>
				<Image
					src={"/papuyuGalam.JPG"}
					width={480}
					height={240}
					quality={100}
				/>
				<Caption>Gambar 1. Papuyu Galam</Caption>
				<Image
					src={"/papuyuHijau.JPG"}
					width={480}
					height={240}
					quality={100}
				/>
				<Caption>Gambar 2. Papuyu Hijau</Caption>
			</span>
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
				Perhatikan <b>Tabel 1-1</b> di samping, berikut merupakan tabel untuk
				menyajikan data pertumbuhan ikan papuyu. Data ini didapatkan berdasarkan
				pengukuran yang dilakukan dalam jangka waktu tertentu, kemudian data
				disajikan dalam bentuk tabel agar mudah untuk dibaca dan informasi dapat
				lebih mudah dipahami.
			</p>
			<p>
				Berdasarkan <b>Tabel 1-1</b>, dapat dilihat terdapat dua judul kolom
				yakni Umur Benih dengan satuan hari dan Panjang dengan satuan cm. Data
				dari pengukuran dikelompokkan berdasarkan dua judul kolom tersebut, yang
				mana didapatkan ikan papuyu berumur 60 hari memiliki panjang yang
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
	data: (
		<div className={mainLayoutStyles.displayTable}>
			<Caption>Tabel 1-1: Ukuran Benih Ikan Papuyu</Caption>
			<TableOne />
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
				Berdasarkan <b>Gambar 1-2</b> di samping dapat lebih mudah mengamati
				data yang disajikan. Dibandingkan dengan menggunakan tabel, dengan
				menggunakan diagram di samping dapat langsung diketahui dengan mudah
				mana nilai yang lebih tinggi dan lebih rendahnya.
			</p>
		</div>
	),
};

export const analysisPage5 = {
	id: "act1",
	act: (
		<div>
			<p>
				Diagram lingkaran di samping menunjukkan data tentang luas lahan gambut
				yang ada di Indonesia. Menurut penelitian terdapat total 14,9 juta
				hektar luas lahan gambut di Indonesia. Dari situ terdapat 43% terletak
				di Sumatera, 32% terletak di Kalimantan, dan sisanya di tempat lain.
			</p>
			<h5>Pertanyaannya adalah:</h5>
			<ol>
				<li>
					Berapa persentase dan luas lahan gambut di tempat lain (dalam satuan
					juta hektar)?
				</li>
				<li>
					Berapa juta hektar luas lahan gambut yang terdapat di Kalimantan?
				</li>
			</ol>
			<h5>Pembahasan: </h5>
			<ol>
				<li>
					Diagram di atas merupakan diagram lingkaran yang menggunakan satuan
					persen (%), ini berarti nilai maksimum yang dapat dicapai adalah 100%.
					Nilai yang sudah disebutkan pada diagram tadi adalah 43% untuk
					Sumatera dan 32% untuk Kalimantan. Karena yang dicari adalah
					persentase untuk wilayah lain, maka:
					<h4 className={mainLayoutStyles.practiceAnswer}>
						𝑥 = 100 - (43 + 32) = 100 - (75) = (Jawaban Pertanyaan 1)%
					</h4>
				</li>
				<li>
					Nilai persentase dari Kalimantan adalah 32% dari 19,4 juta. Untuk
					mendapatkan luas dari persentase perlu dihitung seperti berikut:
					<h4 className={mainLayoutStyles.practiceAnswer}>
						𝑥 = (14, 9 x 32) / 100 = (Jawaban Pertanyaan 2) juta hektar
					</h4>
					Berarti nilai luas dari area lahan gambut di Kalimantan adalah 𝑥 juta
					hektar atau bisa dibulatkan sebagai 𝑥 juta hektar. Jumlah ini
					merupakan 32% dari 14,9 juta hektar total lahan gambut yang ada di
					Indonesia.
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
				dikumpulkan dari pasar-pasar di kawasan Banjarmasin, didapatkan ukuran
				rata-rata badan ikan sebesar 8,5 cm. Ini merupakan salah satu contoh
				kecil dari penggunaan ukuran pemusatan data dalam kehidupan sehari-hari,
				oleh karena itu ukuran pemusatan data penting untuk dipahami.
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
			{/* <DisplayEquation
				displayMode={"block"}
			>{`\\bar{x} =  \\frac{ \\sum_{i=1}^nx_{i}}{n} = \\frac{x_{1} + x_{2} + ... + x_{n}}{n}`}</DisplayEquation> */}

			<div>
				<p>Keterangan:</p>
				<ul>
					<li>
						<DisplayEquation
							displayMode={"inline"}
						>{`\\bar{x}`}</DisplayEquation>{" "}
						= nilai rata-rata yang dicari
					</li>
					<li>
						<DisplayEquation
							displayMode={"inline"}
						>{`\\sum_{i=1}^nx_{i}`}</DisplayEquation>{" "}
						= jumlah seluruh nilai data
					</li>
					<li>
						<DisplayEquation displayMode={"inline"}>{`n`}</DisplayEquation> =
						banyak data
					</li>
				</ul>
			</div>

			<p>
				Sebagai contoh, pada <b>Tabel 2-1</b> di samping terdapat data yang
				berisikan jumlah telur pertahun itik Alabio, maka untuk mencari
				rata-rata jumlah telur yang dihasilkan oleh Itik A selama 3 tahun
				dihitung seperti ini:
			</p>
			<DisplayEquation
				displayMode={"block"}
			>{`\\bar{x} = \\frac{242 + 256 +251}{3}`}</DisplayEquation>
			<DisplayEquation
				displayMode={"block"}
			>{`\\bar{x} = \\frac{749}{3} = ?`}</DisplayEquation>
			<p>
				Dengan demikian, maka didapatkanlah nilai rata-rata produksi telur dari
				Itik A, yakni sebanyak (Jawaban Pertanyaan 1) atau jika dibulatkan
				menjadi (Jawaban Pertanyaan 1) butir telur pertahun.
			</p>
		</div>
	),
	data: (
		<div className={mainLayoutStyles.displayTable}>
			<Caption>Tabel 2-1: Hasil Produk Telur Itik Alabio</Caption>
			<TableThree />
		</div>
	),
};

export const pemusatanPage3 = {
	id: "act1",
	act: (
		<div>
			<p>
				Terkadang data yang tersaji merupakan banyak data yang berbeda namun
				tetap dalam kategori yang sama. Misalkan saja terdapat kelompok data
				yang memiliki kumpulan nilai dan rata-rata{" "}
				{<DisplayEquation displayMode='inline'>{`\\bar{x}`}</DisplayEquation>},
				kemudian ingin digabungkan dengan data lain yang memiliki kumpulan nilai
				tersendiri dan rata-rata{" "}
				{<DisplayEquation displayMode='inline'>{`\\bar{x}_2`}</DisplayEquation>}{" "}
				. Maka untuk mencari rata-rata gabungan dari nilai-nilai tersebut
				dirumuskan sebagai berikut:
			</p>
			<DisplayEquation
				displayMode={"block"}
			>{`\\bar{x}_{gab} =  \\frac{ \\sum_{i=1}^mx_{i} + \\sum_{i=1}^nx_{i}}{m + n} = \\frac{m  \\times \\bar{x}_{1} + n  \\times \\bar{x}_{2}}{m + n}`}</DisplayEquation>

			<div style={{ width: "40%", margin: "auto" }}>
				<p>Keterangan:</p>
				<ul>
					<li>
						<DisplayEquation
							displayMode={"inline"}
						>{`\\bar{x}_{gab}`}</DisplayEquation>{" "}
						= nilai rata-rata gabungan yang dicari
					</li>
					<li>
						<DisplayEquation
							displayMode={"inline"}
						>{`\\bar{x}_{1}`}</DisplayEquation>{" "}
						= rata-rata kelompok 1
					</li>
					<li>
						<DisplayEquation
							displayMode={"inline"}
						>{`\\bar{x}_{2}`}</DisplayEquation>{" "}
						= rata-rata kelompok 2
					</li>
					<li>
						<DisplayEquation displayMode={"inline"}>{`m`}</DisplayEquation> =
						banyak data kelompok 1
					</li>
					<li>
						<DisplayEquation displayMode={"inline"}>{`n`}</DisplayEquation> =
						banyak data kelompok 2
					</li>
				</ul>
			</div>
			<p>
				Dengan demikian, nilai rata-rata dari gabungan banyaknya nilai data
				kelompok yang sudah memiliki rata-ratanya masing-masing dapat diketahui.
			</p>
		</div>
	),
};

export const pemusatanPage4 = {
	id: "act1",
	act1: (
		<div>
			<h3 style={{ textAlign: "center", fontWeight: "medium" }}>
				A. Median pada Data Berjumlah Ganjil
			</h3>
			<p>
				Median adalah nilai tengah data setelah kumpulan data diurutkan. Jika
				banyak data berjumlah ganjil, median data terletak tepat di
				tengah-tengah data sehingga mediannya merupakan nilai yang tepat berada
				di tengah. Misalkan diperoleh data dari banyaknya tanaman rotan yang
				merupakan primadona salah satu hasil hutan di Kalimantan, panjang
				(satuan meter) rotan yang sudah diukur dan diurutkan datanya sehingga
				menjadi seperti berikut:
			</p>
			<p
				style={{ wordSpacing: "2rem", textAlign: "center", fontSize: "larger" }}
			>
				14 15 15{" "}
				<span
					style={{
						border: "#408CFF 1px solid",
						borderRadius: "50%",
						padding: "0.5rem",
					}}
				>
					<b>16</b>
				</span>{" "}
				18 21 21
			</p>
			<Caption>
				Jumlah data 7 buah rotan yang panjangnya telah diurutkan dari yang
				terendah dan tertinggi
			</Caption>

			<span
				style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
			>
				<Image src={"/rotanHijau.jpg"} width={400} height={240} quality={100} />
				<Image
					src={"/kerajinanRotan.jpg"}
					width={400}
					height={240}
					quality={100}
				/>

				<Caption>
					Gambar 2-1: Atas: Tanaman Rotan; Bawah: Kerajinan Rotan
				</Caption>
			</span>

			<p>
				Seperti yang dilihat berdasarkan contoh di atas, menentukan nilai median
				dari banyak data ganjil sangatlah mudah. Apabila terlalu banyak data
				untuk menemukannya secara keseluruhan dapat menggunakan rumus di bawah
				ini.
			</p>
			<DisplayEquation
				displayMode={"block"}
			>{`Med_{ganjil} = \\frac{banyak data + 1}{2}`}</DisplayEquation>
			<p>
				Dengan menggunakan rumus ini median dapat ditemukan tanpa perlu
				memastikan posisi data di tengah dari keseluruhan data. Seperti pada
				contoh di atas terdapat 7 data, maka dengan ditambahkan 1 dan dibagi dua
				akan didapatkan urutan data sebagai posisi paling tengah, dan pada
				contoh ini ada pada urutan ke-4.
			</p>
		</div>
	),
	act2: (
		<div>
			<h3 style={{ textAlign: "center", fontWeight: "medium" }}>
				B. Median pada Data Berjumlah Genap
			</h3>
			<p>
				Median juga terdapat pada banyak data berjumlah genap. Jika demikian,
				maka median terletak di antara dua nilai data yang berada di tengah
				sehingga mediannya adalah nilai rata-rata dari dua nilai yang terletak
				di tengah. Untuk menentukan nilai tengahnya dengan mudah, dapat dihitung
				dengan rumus berikut:
			</p>

			<DisplayEquation
				displayMode={"block"}
			>{`Med_{genap} = \\frac{nilai\\, data\\, ke\\,-\\frac{n}{2} + nilai\\, data\\, ke-\\,\\frac{n}{2} + 1}{2}`}</DisplayEquation>

			<div style={{ width: "40%", margin: "auto" }}>
				<p>Keterangan:</p>
				<ul>
					<li>
						<DisplayEquation>n</DisplayEquation> = banyak data
					</li>
				</ul>
			</div>
			<p>
				Sebagai contoh kasus, seorang pemilik rumah makan sedang pergi ke pasar
				untuk membeli ikan gabus untuk dijadikan dendeng ikan gabus. Untuk
				diolah makanan, ikan tersebut harus cukup besar untuk diolah dagingnya.
				Maka sang pemilik tersebut menetapkan apabila ikan tersebut melewati
				berat yang ditentukan, yakni nilai tengah dari berat ikan yang dijual
				oleh pedagang, ia akan membelinya dan mengolahnya menjadi makanan. Dan
				apabila tidak memenuhi kriteria yang ditentukan maka akan ia masak
				menjadi hidangan lain.
			</p>
			<span
				style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
			>
				<Image src={"/ikanGabus.jpg"} width={400} height={240} quality={100} />
				<Caption>Gambar 2-2: Ikan Gabus</Caption>
			</span>
		</div>
	),
};

export const pemusatanPage5 = {
	id: "act1",
	act1: (
		<div>
			<p>Perhatikan data di bawah ini!</p>
			<p
				style={{ wordSpacing: "2rem", textAlign: "center", fontSize: "larger" }}
			>
				45 46 43 41 72 84 43 43 40 39
			</p>
			<Caption>Data 10 ekor ikan Papuyu hasil tangkapan Udin</Caption>

			<p>
				Misalkan Udin pergi memancing dan mendapatkan ikan Papuyu. Kemudian ia
				ingin mengamati pertumbuhan ikan Papuyu, namun Udin juga ingin
				menyantapnya. Jadi yang Udin lakukan adalah memilih ikan Papuyu yang
				berat per ikannya (satuan gram) melewati berat yang telah ditetapkan,
				yaitu melewati berat nilai tengah dari semua ikan.
			</p>

			<h5>Pertanyaan:</h5>
			<p>Berapakah jumlah berat ikan Papuyu yang dapat dimakan oleh Udin?</p>
		</div>
	),
	act2: (
		<div>
			<h5>Pembahasan</h5>
			<p>
				Berdasarkan kasus yang disebutkan maka ikan papuyu harus dipilah untuk
				menentukan mana yang dapat disantap dengan mencari nilai median. Melihat
				data yang tersedia, terlihat jelas bahwa kumpulan data tersebut belum
				tersusun, dengan demikian nilai median masih belum dapat ditentukan.
				Maka yang perlu dilakukan adalah mengurutkan datanya terlebih dahulu
				seperti berikut.
			</p>

			<p
				style={{ wordSpacing: "2rem", textAlign: "center", fontSize: "larger" }}
			>
				39 40 41 43 43 43 45 46 72 84
			</p>
			<Caption>
				Data 10 ekor ikan Papuyu hasil tangkapan Udin yang telah diurutkan
			</Caption>

			<p>
				Setelah diurutkan median dapat dicari dengan menggunakan rumus yang
				disebutkan sebelumnya. Banyak data (n) adalah genap yaitu 10, maka
				dimasukkan ke rumus:
			</p>

			<DisplayEquation
				displayMode={"block"}
			>{`Med_{genap} = \\frac{nilai\\, data\\, ke\\,\\frac{10}{2} + nilai\\, data\\, ke\\,\\frac{10}{2} + 1}{2}`}</DisplayEquation>

			<DisplayEquation
				displayMode={"block"}
			>{`\\frac{nilai\\, data\\, ke\\,5 + nilai\\, data\\, ke\\,6}{2}`}</DisplayEquation>

			<DisplayEquation
				displayMode={"block"}
			>{`\\frac{43 + 43}{2} = \\frac{86}{2}=?`}</DisplayEquation>

			{/* <span style={{ display: "flex", justifyContent: "center" }}>
				<Image
					src={"/berlatihPemusatan.png"}
					width={460}
					height={200}
					quality={100}
				/>
			</span> */}

			<p>
				Nilai median yang didapatkan adalah (Jawaban Pertanyaan 1) (gram). Maka
				dengan ini dapat ditentukan berapa jumlah berat ikan yang dapat dimakan
				oleh Udin. Apabila semua berat ikan yang ditangkap memiliki berat lebih
				dari (Jawaban Pertanyaan 1) gram, dapat dijumlahkan sehingga didapatkan
				total beratnya (Jawaban Pertanyaan 2) gram (jumlah kumulatif berat ikan
				yang beratnya melebihi 43 gram).
			</p>
		</div>
	),
};

export const pemusatanPage6 = {
	id: "act1",
	act: (
		<div>
			<p>
				Modus adalah nilai yang “paling sering muncul” atau nilai yang
				frekuensinya paling banyak. Perhatikanlah <b>Tabel 2-2</b> di samping,
				pada tabel tersebut menunjukkan hasil pengumpulan data sebuah tambak
				ikan papuyu, sang peternak ikan ingin melakukan pendataan hasil
				ternaknya dan ia ingin mengetahui persentase populasi ikan papuyu
				terbanyak digolongkan dari ukurannya. Cobalah tentukan persentase
				populasi ikan terbesar dari data yang disajikan!
			</p>

			<h5>Pembahasan:</h5>

			<p>
				Untuk mencari persentase populasi terbesar ikan, ikan yang paling banyak
				jumlahnya harus diketahui, dan berdasarkan tabel dapat diketahui nilai
				frekuensi yang paling besar (satuan ekor) adalah ikan dengan ukuran 8,1
				– 10,0 cm, yaitu 350 ekor. Selanjutnya jumlah ikan harus diubah ke
				persentase populasi, karena jumlah semua ikan adalah 1000 ekor, maka 350
				ekor ikan ukuran 8,1 – 10,0 cm adalah 35% dari total populasi ikan yang
				diukur. Dengan demikian ditemukan populasi terbesarnya, dari ikan ukuran
				8,1 – 10,0 cm yaitu sebesar 35%.
			</p>
		</div>
	),
	data: (
		<div className={mainLayoutStyles.displayTable}>
			<Caption>Tabel 2-2: Ukuran Ikan Papuyu</Caption>
			<TableFour />
		</div>
	),
};

export const penyebaranPage1 = {
	id: "act1",
	act: (
		<div className={mainLayoutStyles.divForObjectives}>
			<LearningObjectives objectives={chapter3Objectives} />
			<p>
				Perhatikan <b>Tabel 3-1</b> di samping, itu merupakan kumpulan dari
				rata-rata suhu pada lahan gambut yang dikumpulkan setiap harinya. Dalam
				tahap ini pasti sudah dipahami cara menentukan nilai terkecil dan nilai
				terbesar, dan berdasarkan dua nilai tersebut selisihnya dapat ditemukan.
				Dalam matematika, selisih antara nilai tertinggi dan nilai terendah
				dinamakan “jangkauan”. Di subbab ini akan dipelajari cara menentukan
				jangkauan data, kuartil, jangkauan antar kuartil, dan simpangan kuartil
				data.
			</p>
		</div>
	),
	data: (
		<div className={mainLayoutStyles.displayTable}>
			<Caption>Tabel 3-1. Suhu Rata-rata per Hari di Lahan Gambut</Caption>
			<DataColumn
				arrList={[
					24, 25, 29, 31, 30, 28, 28, 29, 31, 32, 35, 31, 26, 29, 30, 28, 28,
					29, 31, 30, 28, 31, 26, 29, 32, 35, 31, 26,
				]}
				columns={7}
			/>
		</div>
	),
};

export const penyebaranPage2 = {
	id: "act1",
	act: (
		<div>
			{penyebaranPage1.data}
			<p>
				Jangkauan (R) atau rentang (range) adalah selisih antara nilai data
				terbesar dan nilai data terkecil. Jangkauan dirumuskan sebagai berikut.
			</p>
			<DisplayEquation
				displayMode={"block"}
			>{`R =  x_{maks} - x_{min}`}</DisplayEquation>

			<div style={{ display: "flex", justifyContent: "center" }}>
				<p>Keterangan:</p>
				<ul>
					<li>
						<DisplayEquation displayMode={"inline"}>{`R`}</DisplayEquation> =
						jangkauan
					</li>
					<li>
						<DisplayEquation
							displayMode={"inline"}
						>{`x_{maks}`}</DisplayEquation>{" "}
						= nilai data terbesar
					</li>
					<li>
						<DisplayEquation
							displayMode={"inline"}
						>{`x_{min}`}</DisplayEquation>{" "}
						= nilai data terkecil
					</li>
				</ul>
			</div>
		</div>
	),
};

export const penyebaranPage3 = {
	id: "act1",
	act: (
		<div>
			<p>
				Kuartil adalah tiga data yang membagi seluruh data dalam empat kelompok
				setelah dikelompokkan. Kuartil didapatkan dari data yang telah diurutkan
				dan dibagi menjadi empat bagian yang sama. Pembagian kuartil disebutkan
				dengan urutan, yaitu kuartil pertama (Q1), kuartil kedua (Q2), dan
				kuartil ketiga (Q3). Pembagian kuartil digambarkan sebagai berikut.
			</p>

			<span style={{ display: "flex", justifyContent: "center" }}>
				<Image src={"/kuartil.png"} width={560} height={140} quality={100} />
			</span>

			<p>
				Berdasarkan ilustrasi di atas, dapat dikatakan bahwa Q1 ada di posisi
				25% ({" "}
				<DisplayEquation
					displayMode={"inline"}
				>{`\\frac{1}{4}`}</DisplayEquation>{" "}
				dari total data), Q2 ada di posisi 50% ({" "}
				<DisplayEquation
					displayMode={"inline"}
				>{`\\frac{2}{4}`}</DisplayEquation>{" "}
				dari total data) atau berada di posisi median, Q3 ada di posisi 75% ({" "}
				<DisplayEquation
					displayMode={"inline"}
				>{`\\frac{3}{4}`}</DisplayEquation>{" "}
				dari total data). Dengan demikian maka langkah menentukan kuartil
				adalah:
			</p>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<ol>
					<li>Urutkan nilai data dari yang terkecil ke terbesar</li>
					<li>Tentukan letak kuartil dengan rumus berikut:</li>
					<ul>
						<li style={{ marginBottom: "0.6rem" }}>
							<DisplayEquation displayMode={"inline"}>{`n`}</DisplayEquation> =
							banyak data
						</li>
						<li style={{ marginBottom: "0.6rem" }}>
							Letak
							<DisplayEquation
								displayMode={"inline"}
							>{`Q_{1}`}</DisplayEquation>{" "}
							= letak nilai data ke -{" "}
							<DisplayEquation
								displayMode={"inline"}
							>{`\\frac{1}{4}(n + 1)`}</DisplayEquation>
						</li>
						<li style={{ marginBottom: "0.6rem" }}>
							Letak
							<DisplayEquation
								displayMode={"inline"}
							>{`Q_{2}`}</DisplayEquation>{" "}
							= letak nilai data ke -{" "}
							<DisplayEquation
								displayMode={"inline"}
							>{`\\frac{2}{4}(n + 1)`}</DisplayEquation>
						</li>
						<li style={{ marginBottom: "0.6rem" }}>
							Letak
							<DisplayEquation
								displayMode={"inline"}
							>{`Q_{3}`}</DisplayEquation>{" "}
							= letak nilai data ke -{" "}
							<DisplayEquation
								displayMode={"inline"}
							>{`\\frac{3}{4}(n + 1)`}</DisplayEquation>
						</li>
					</ul>
				</ol>
			</div>
		</div>
	),
};

export const penyebaranPage4 = {
	id: "act1",
	act: (
		<div>
			<p>
				Data tersebut diperoleh dari pengukuran ikan patin di penangkaran.
				Ikan-ikan tersebut ingin digolongkan menjadi beberapa ukuran untuk
				dijual berdasarkan tiga golongan yaitu kecil, sedang, dan besar.
				Kemudian terdapat golongan lain, yakni di bawah ukuran kecil untuk
				dipelihara lebih lanjut. Berdasarkan kasus ini tentukanlah jumlah ikan
				untuk dipelihara lebih lanjut.
			</p>

			<h5>Pembahasan: </h5>
			<p>
				Karena yang dicari adalah jumlah ikan untuk dipelihara lebih lanjut,
				maka yang perlu dicari di sini adalah ukuran panjang ikan yang kurang
				dari nilai Q1. Namun sebelum dapat mencari nilai, data yang ada pada{" "}
				<b>Tabel 3-2</b> di atas harus diurutkan. Setelah terurut maka
				diperoleh:
			</p>

			<div className={mainLayoutStyles.displayTable}>
				<Caption>
					Tabel 3-3. Data Pengukuran Penangkaran Ikan Patin yang Telah Diurutkan
				</Caption>
				<DataColumn
					arrList={[
						21, 22, 22, 23, 24, 25, 25, 25, 26, 27, 27, 28, 28, 28, 28, 29, 30,
						30, 31, 34, 34, 35, 36, 36, 36,
					]}
					columns={5}
				/>
			</div>
			<p>
				Dengan menggunakan rumus letak Q1 maka dihitung menggunakan rumus
				berikut:
			</p>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<ul
					style={{
						listStyle: "none",
					}}
				>
					<li style={{ marginBottom: "0.3rem" }}>
						Letak
						<DisplayEquation
							displayMode={"inline"}
						>{`Q_{1}`}</DisplayEquation>{" "}
						= letak nilai data ke -{" "}
						<DisplayEquation
							displayMode={"inline"}
						>{`\\frac{1}{4}(25 + 1)`}</DisplayEquation>
					</li>
					<li style={{ marginBottom: "0.7rem" }}>
						= letak nilai data ke (<b>Jawaban Pertanyaan 1</b>) atau{" "}
						<DisplayEquation
							displayMode={"inline"}
						>{`6\\frac{1}{2}`}</DisplayEquation>{" "}
						(terletak antara{" "}
						<DisplayEquation displayMode={"inline"}>{`X_{6}`}</DisplayEquation>)
						dan{" "}
						<DisplayEquation displayMode={"inline"}>{`X_{7}`}</DisplayEquation>
					</li>
					<li style={{ marginBottom: "0.3rem" }}>
						Nilai
						<DisplayEquation
							displayMode={"inline"}
						>{`Q_{1}`}</DisplayEquation>{" "}
						= letak nilai data ke -{" "}
						<DisplayEquation
							displayMode={"inline"}
						>{`X_{6} + \\frac{1}{2}(X_{6} + X_{7})`}</DisplayEquation>
					</li>
					<li style={{ marginBottom: "0.3rem" }}>
						={" "}
						<DisplayEquation
							displayMode={"inline"}
						>{`25 + \\frac{1}{2}(25 + 25)`}</DisplayEquation>
					</li>
					<li style={{ marginBottom: "0.3rem" }}>
						={" "}
						<DisplayEquation
							displayMode={"inline"}
						>{`25 + \\frac{1}{2}(0)`}</DisplayEquation>
					</li>
					<li style={{ marginBottom: "0.3rem" }}>
						={" "}
						<DisplayEquation displayMode={"inline"}>{`? + 0`}</DisplayEquation>
					</li>
					<li style={{ marginBottom: "0.3rem" }}>
						= <DisplayEquation displayMode={"inline"}>{`?`}</DisplayEquation>
					</li>
				</ul>
			</div>
			<p>
				Setelah mendapatkan nilai{" "}
				<DisplayEquation displayMode={"inline"}>{`Q_{1} = ?`}</DisplayEquation>{" "}
				maka dapat ditentukan ikan mana yang dapat dipelihara lebih lanjut, dan
				dari data tersebut didapatkan 5 buah data yang nilainya kurang dari (
				<b>Jawaban Pertanyaan 2</b>). Maka jumlah ikan yang dapat dipelihara
				lebih lanjut adalah 5 ekor ikan Patin.
			</p>
		</div>
	),
	data: (
		<div className={mainLayoutStyles.displayTable}>
			<p>Perhatikan data di bawah ini!</p>
			<Caption>
				Tabel 3-2. Data Hasil Pengukuran di Penangkaran Ikan Patin
			</Caption>
			<DataColumn
				arrList={[
					36, 35, 25, 36, 25, 28, 23, 27, 24, 29, 21, 22, 28, 28, 30, 25, 34,
					28, 22, 26, 31, 27, 30, 34, 36,
				]}
				columns={5}
			/>
		</div>
	),
};

export const penyebaranPage5 = {
	id: "act1",
	act: (
		<div>
			<p>
				Jangkauan antarkuartil atau bisa disebut dengan hamparan (H) memiliki
				prinsip yang sama dengan jangkauan data biasa, namun yang dijadikan
				jangkauan di sini adalah rentang data antar kuartil ketiga dan kuartil
				pertama.{" "}
			</p>
			<p>
				Misalkan saja seperti pada kasus yang disebutkan pada bagian sebelumnya,
				yaitu menggolongkan ikan Patin menjadi golongan kecil, besar, dan
				sedang. Maka jangkauan antarkuartil adalah nilai selisih dari golongan
				besar dan golongan kecil. Jangkauan antarkuartil dirumuskan sebagai
				berikut.
			</p>
			<div style={{ textAlign: "center" }}>
				<p>Keterangan:</p>
				<p>
					<DisplayEquation displayMode={"inline"}>H</DisplayEquation> = hamparan
				</p>
			</div>
		</div>
	),
	data: (
		<>
			<Caption>
				Tabel 3-3. Data Pengukuran Penangkaran Ikan Patin yang Telah Diurutkan
			</Caption>
			<DataColumn
				arrList={[
					21, 22, 22, 23, 24, 25, 25, 25, 26, 27, 27, 28, 28, 28, 28, 29, 30,
					30, 31, 34, 34, 35, 36, 36, 36,
				]}
				columns={5}
			/>
		</>
	),
};

export const penyebaranPage6 = {
	id: "act1",
	act: (
		<div>
			<p style={{ marginBottom: "2rem" }}>
				Simpangan kuartil (
				<DisplayEquation displayMode={"inline"}>{`Q_{d}`}</DisplayEquation>)
				atau dapat disebut dengan rentang semi antarkuartil adalah setengah kali
				jangkauan antarkuartil. Simpangan kuartil dapat diperoleh setelah nilai
				dari jangkauan antarkuartil didapatkan. Dengan demikian, maka simpangan
				kuartil dapat dirumuskan sebagai berikut.
			</p>

			<p style={{ textAlign: "center" }}>
				<DisplayEquation
					displayMode={"inline"}
				>{`Q_{d} = \\frac{1}{2}H = \\frac{1}{2}(Q_{3} - Q_{1})`}</DisplayEquation>{" "}
				atau{" "}
				<DisplayEquation
					displayMode={"inline"}
				>{`\\frac{(Q_{3} - Q_{1})}{2}`}</DisplayEquation>
			</p>

			<p style={{ textAlign: "center", marginTop: "2rem" }}>
				Keterangan:
				<br />
				<DisplayEquation displayMode={"inline"}>{`Q_{d}`}</DisplayEquation> =
				Simpanan Kuartil
			</p>

			<p>
				Dengan simpangan kuartil dapat diketahui nilai selisih atau jarak antar
				kuartil. Maksudnya di sini adalah jarak antar{" "}
				<DisplayEquation displayMode={"inline"}>{`Q_{1}`}</DisplayEquation> ke{" "}
				<DisplayEquation displayMode={"inline"}>{`Q_{2}`}</DisplayEquation> atau
				dari <DisplayEquation displayMode={"inline"}>{`Q_{2}`}</DisplayEquation>{" "}
				ke <DisplayEquation displayMode={"inline"}>{`Q_{3}`}</DisplayEquation>.
				Jika diimplementasikan ke kasus ikan Patin tadi, maka dapat didapatkan
				jarak dari nilai golongan ikan Patin kecil ke sedang, begitu pula dengan
				golongan ikan Patin sedang ke besar.
			</p>
		</div>
	),
	data: (
		<>
			<Caption>
				Tabel 3-3. Data Pengukuran Penangkaran Ikan Patin yang Telah Diurutkan
			</Caption>
			<DataColumn
				arrList={[
					21, 22, 22, 23, 24, 25, 25, 25, 26, 27, 27, 28, 28, 28, 28, 29, 30,
					30, 31, 34, 34, 35, 36, 36, 36,
				]}
				columns={5}
			/>
		</>
	),
};
