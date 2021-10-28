import React from "react";
import HomeNavbar from "@/components/common/HomeNavbar";
import Footer from "@/components/common/Footer";
import aboutStyles from "@/styles/About.module.css";
import Image from "next/image";

const perihal = () => {
	return (
		<div style={{ position: "relative" }}>
			<div className={aboutStyles.mainAbout}>
				<HomeNavbar />
				<AboutContent />
			</div>
			<Footer />
		</div>
	);
};

function AboutContent() {
	return (
		<div className={aboutStyles.aboutContent}>
			<div className={aboutStyles.container}>
				<h1>Sumber Belajar untuk Semua</h1>
				<p>
					<i>I/A Statistics</i> merupakan media pembelajaran statistika yang
					menyediakan materi, latihan, dan pemantauan progres belajar yang
					mendukung peserta didik untuk belajar sesuai dengan kecepatan mereka
					sendiri.
				</p>
				<p style={{ marginBottom: "0.6rem", marginTop: "-1.5rem" }}>
					<span style={{ fontSize: "21px" }}>M</span>ateri disusun dengan
					pendekatan kontekstual sehingga peserta didik dapat memahami apa
					hubungan dan manfaat dari statistika dalam kehidupan sehari-hari.
				</p>

				<h1>Teknologi yang Digunakan</h1>
				<div className={aboutStyles.pictures}>
					<span>
						<Image alt='React' src='/react-1.svg' height={100} width={300} />
					</span>
					<span>
						<Image alt='Next.js' src='/nextjs-3.svg' height={100} width={300} />
					</span>
					<span>
						<Image
							alt='Cloud Firestore'
							src='/cloud_firestore.png'
							height={100}
							width={300}
						/>
					</span>
				</div>

				<h1>Profil Pengembang</h1>
				<p>
					Syahril Hanla Azis (1710131110017), mahasiswa Pendidikan Komputer,
					Fakultas Keguruan dan Ilmu Pendidikan, Universitas Lambung Mangkurat.
				</p>

				<h1>Kepentingan Pengembangan</h1>
				<p>
					Media ini dibuat untuk memenuhi persyaratan dalam menyelesaikan
					Program Strata-1 Pendidikan Komputer dengan judul "
					<i>
						Pengembangan Media Pembelajaran Interaktif Berbasis Web pada Materi
						Statistika Kelas VIII dengan Pendekatan Kontekstual Lahan Basah
					</i>
					. "
				</p>

				<h1>Ucapan Terima Kasih</h1>
				<p>
					Terima kasih diucapkan sebesar-besarnya kepada para Dosen Pembimbing,
					yakni Bapak Dr. Harja Santanapurba, M. Kom. selaku{" "}
					<i>Dosen Pembimbing 1</i>, dan Ibu Yuni Suryaningsih, M. Pd. selaku{" "}
					<i>Dosen Pembimbing 2</i>.
				</p>
				<p>
					Tidak lupa juga kepada teman-teman seperjuangan dan tim dosen dan staf
					program studi yang selama ini telah bekerja sama, membantu, dan
					mendidik sehingga tugas akhir ini dapat terselesaikan.
				</p>
			</div>
		</div>
	);
}

export default perihal;
