import React from "react";
import HomeNavbar from "@/components/common/HomeNavbar";
import Footer from "@/components/common/Footer";
import OverviewModal from "@/components/common/OverviewModal";

import Image from "next/image";

import aboutStyles from "@/styles/About.module.css";

const perihal = () => {
	return (
		<div style={{ position: "relative" }}>
			<OverviewModal />
			<div className={aboutStyles.mainAbout}>
				<HomeNavbar />
				<HelpContent />
			</div>
			<Footer />
		</div>
	);
};

export function HelpContent() {
	return (
		<div className={aboutStyles.aboutContent}>
			<h1 style={{ textAlign: "center", fontWeight: 400 }}>
				Petunjuk Penggunaan
			</h1>

			<div
				className={aboutStyles.container}
				style={{
					border: "1px solid #4444",
					borderRadius: "6px",
					padding: "1.5rem",
				}}
			>
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
						memasuki kelas yang telah dibuat oleh admin (guru).
					</li>
					<li>
						Daftar Materi. Bagian ini dapat diklik untuk langsung mengakses
						materi secara cepat ke bagian awal materi. Bagian ini juga
						menampilkan progres dari setiap sub materi.
					</li>
					<li>
						Tombol profile. Dengan menekan tombol ini user/admin dapat secara
						langsung membuka halaman dashboard/admin dari manapun.
					</li>
					<li>
						Tombol Log Out. Dengan menekan tombol ini user/admin akan keluar
						akun dan diarahkan secara langsung ke homepage.
					</li>
					<li>
						Tombol Sidebar. Jika tombol ini ditekan maka sidebar akan keluar
						untuk menampilkan daftar konten dan navigasi yang terdapat pada
						aplikasi.
					</li>
				</ol>
			</div>
		</div>
	);
}

export default perihal;
