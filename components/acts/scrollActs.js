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
	act2: (
		<div>
			<span style={{ display: "flex", justifyContent: "center" }}>
				<Image
					src={"/papuyuGalam.png"}
					width={360}
					height={160}
					quality={100}
				/>
				<Image
					src={"/papuyuHijau.png"}
					width={360}
					height={160}
					quality={100}
				/>
			</span>
			<Caption>Kiri: Papuyu Galam; Kanan: Papuyu Hijau</Caption>
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
	data: (
		<div style={{ margin: "auto" }}>
			<TableOne />
			<Caption>Tabel 1-3: Ukuran Benih Ikan Papuyu</Caption>
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
				Sebagai contoh, pada tabel 2-1 di samping terdapat data yang berisikan
				jumlah telur pertahun itik Alabio, maka untuk mencari rata-rata jumlah
				telur yang dihasilkan oleh Itik A selama 3 tahun dihitung seperti ini:
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
		<div style={{ margin: "auto" }}>
			<TableThree />
			<Caption>Tabel 2-1: Hasil Produk Telur Itik Alabio</Caption>
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
			>{`\\bar{x}_{gab} =  \\frac{ \\sum_{i=1}^mx_{i} + \\sum_{i=1}^nx_{i}}{m + n} = \\frac{m + \\bar{x}_{1} + n + \\bar{x}_{2}}{m + n}`}</DisplayEquation>

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
			>{`\\frac{43 + 43}{2} = \\frac{86}{2}=43`}</DisplayEquation>

			{/* <span style={{ display: "flex", justifyContent: "center" }}>
				<Image
					src={"/berlatihPemusatan.png"}
					width={460}
					height={200}
					quality={100}
				/>
			</span> */}

			<p>
				Nilai median yang didapatkan adalah 43 (gram). Maka dengan ini dapat
				ditentukan berapa jumlah berat ikan yang dapat dimakan oleh Udin.
				Apabila semua berat ikan yang ditangkap memiliki berat lebih dari 43
				gram, dapat dijumlahkan sehingga didapatkan total beratnya 247 gram
				(jumlah kumulatif berat ikan yang beratnya melebihi 43 gram).
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
				frekuensinya paling banyak. Perhatikanlah <b>tabel 2-2</b> di samping,
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
};
