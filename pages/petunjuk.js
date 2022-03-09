import { useState } from "react";
import HomeNavbar from "@/components/common/HomeNavbar";
import Footer from "@/components/common/Footer";

import Image from "next/image";

import aboutStyles from "@/styles/About.module.css";
import { Button, ButtonGroup } from "@material-ui/core";

const perihal = () => {
	const [whichInfo, setWhichInfo] = useState(1);

	const WhichInfoButton = () => (
		<ButtonGroup variant='contained' aria-label='outlined primary button group'>
			<Button
				onClick={() => setWhichInfo(1)}
				color={whichInfo === 1 && "primary"}
			>
				Fitur Umum
			</Button>
			<Button
				onClick={() => setWhichInfo(2)}
				color={whichInfo === 2 && "primary"}
			>
				Dashboard (Halaman Profil)
			</Button>
			<Button
				onClick={() => setWhichInfo(3)}
				color={whichInfo === 3 && "primary"}
			>
				Halaman Materi
			</Button>
			<Button
				onClick={() => setWhichInfo(4)}
				color={whichInfo === 4 && "primary"}
			>
				Interaktifitas Diagram
			</Button>
		</ButtonGroup>
	);

	const DisplayInfo = ({ whichInfo }) => {
		if (whichInfo === 1) {
			return (
				<>
					<CommonFeatures />
				</>
			);
		} else if (whichInfo === 2) {
			return (
				<>
					<DashboardHelp />
				</>
			);
		} else if (whichInfo === 3) {
			return (
				<>
					<ContentHelp />
				</>
			);
		} else if (whichInfo === 4) {
			return (
				<>
					<GraphHelp />
				</>
			);
		}
	};

	return (
		<div style={{ position: "relative" }}>
			<div className={aboutStyles.mainAbout}>
				<HomeNavbar />
				<HelpContent
					whichInfo={whichInfo}
					DisplayInfo={DisplayInfo}
					WhichInfoButton={WhichInfoButton}
				/>
			</div>
			<Footer />
		</div>
	);
};

export function HelpContent({ WhichInfoButton, DisplayInfo, whichInfo }) {
	return (
		<div className={aboutStyles.aboutContent}>
			<h1 style={{ textAlign: "center", fontWeight: 400 }}>
				Petunjuk Penggunaan
			</h1>
			<div
				style={{
					display: "grid",
					placeItems: "center",
					marginBottom: "1rem",
				}}
			>
				<WhichInfoButton />
			</div>
			<div
				className={aboutStyles.container}
				style={{
					border: "1px solid #4444",
					borderRadius: "6px",
					padding: "1.5rem",
				}}
			>
				<DisplayInfo whichInfo={whichInfo} />
			</div>
		</div>
	);
}

export function CommonFeatures() {
	return (
		<>
			<h1 style={{ marginBottom: "1rem" }}>Fitur Umum</h1>
			<ol style={{ lineHeight: "1.9" }}>
				<li>
					Materi dapat diakses setelah pengguna masuk dengan menggunakan akun
					email Google.
				</li>
				<li>
					Aplikasi dapat berjalan secara offline tanpa menggunakan koneksi
					internet dengan beberapa fitur yang dikurangi seperti menyimpan
					progres ke database eksternal.
				</li>
				<li>
					Setiap detail progres kegiatan pembelajaran direkam secara lokal pada
					perangkat dan global di database eksternal, sehingga guru (admin)
					dapat memantau kegiatan apa saja yang telah dan tidak dilakukan
					peserta didik.
				</li>
			</ol>
		</>
	);
}

export function ContentHelp() {
	return (
		<>
			<h1 style={{ marginBottom: "1rem" }}>Halaman Materi</h1>
			<Image src={"/contentPage.png"} height={400} width={800} quality={100} />
			<ol style={{ lineHeight: "1.9" }}>
				<li>
					Kolom teks materi. Kolom ini merupakan salah satu kegiatan yang
					tersedia di setiap halaman materi. Pengguna ditandai telah
					menyelesaikan kegiatan pertama jika telah selesai membaca materi pada
					halaman. Setiap kegiatan yang telah diselesaikan akan secara langsung
					tersimpan secara lokal dan eksternal.
				</li>
				<li>
					Tombol navigasi materi. Digunakan sebagai navigasi untuk berpindah
					materi.
				</li>
				<li>
					<i>Progress Bar</i>. Progres pembelajaran berupa kegiatan pada halaman
					dapat dilihat secara langsung.
				</li>
				<li>
					Tombol Sidebar. Jika tombol ini ditekan maka sidebar akan keluar untuk
					menampilkan daftar konten dan navigasi yang terdapat pada aplikasi.
				</li>
				<li>
					Tombol profile. Dengan menekan tombol ini user/admin dapat secara
					langsung membuka halaman dashboard/admin dari manapun.
				</li>
				<li>
					Tombol Log Out. Dengan menekan tombol ini user/admin akan keluar akun
					dan diarahkan secara langsung ke homepage.
				</li>
			</ol>
		</>
	);
}

export function GraphHelp() {
	return (
		<>
			<h1 style={{ marginBottom: "1rem" }}>Interaktifitas Diagram/Grafik</h1>
			<Image
				src={"/diagramInteractivity.png"}
				height={600}
				width={800}
				quality={100}
			/>
			<ol style={{ lineHeight: "1.9" }}>
				<li>Letakkan kursor di atas bagian data yang ingin ditampilkan.</li>
			</ol>
		</>
	);
}

export function DashboardHelp() {
	return (
		<>
			<h1 style={{ marginBottom: "1rem" }}>
				<i>Dashboard</i> (Halaman Profil)
			</h1>
			<Image
				src={"/dashboard_info.png"}
				height={400}
				width={800}
				quality={100}
			/>
			<ol style={{ lineHeight: "1.9" }}>
				<li>
					Tombol Masuk Kelas. Tombol ini tersedia jika user (pengguna) belum
					memasuki kelas yang telah dibuat oleh admin (guru). Pengguna harus
					bergabung ke dalam kelas terlebih dahulu untuk dapat mengikuti kuis
					evaluasi.
				</li>
				<li>
					Daftar Materi. Bagian ini dapat diklik untuk langsung mengakses materi
					secara cepat ke bagian awal materi. Bagian ini juga menampilkan
					progres dari setiap sub materi.
				</li>
				<li>
					Tombol profile. Dengan menekan tombol ini user/admin dapat secara
					langsung membuka halaman dashboard/admin dari manapun.
				</li>
				<li>
					Tombol Log Out. Dengan menekan tombol ini user/admin akan keluar akun
					dan diarahkan secara langsung ke homepage.
				</li>
				<li>
					Tombol Sidebar. Jika tombol ini ditekan maka sidebar akan keluar untuk
					menampilkan daftar konten dan navigasi yang terdapat pada aplikasi.
				</li>
			</ol>
		</>
	);
}

export default perihal;
