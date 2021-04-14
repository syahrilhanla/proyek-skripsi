import homeStyle from "@/styles/Sections.module.css";
import Image from "next/image";

import { useAuth } from "@/components/context/AuthContext";

export function SectionA() {
	const { login } = useAuth();

	return (
		<section className={homeStyle.billBoard}>
			<div className={homeStyle.bgImage}></div>
			<div className={homeStyle.contentWrap}>
				<h1>Media Pembelajaran Statistika</h1>
				<h1>Kelas VIII</h1>
			</div>
			<div onClick={() => login()} className={homeStyle.startButton}>
				Mulai
			</div>
		</section>
	);
}

export function SectionB() {
	return (
		<section className={homeStyle.sectionB}>
			<div className={homeStyle.contentWrap}>
				<h1>Mengapa App Ini Bagus Untuk Kamu:</h1>
				<div className={homeStyle.reasons}>
					<ul>
						<li>
							<span>
								<Image
									src={"/open-book.png"}
									width={70}
									height={70}
									className={homeStyle.images}
								/>
							</span>
							<h3>Belajar Mandiri</h3>
							<p>Belajar dengan kecepatanmu sendiri</p>
						</li>
						<li>
							<span>
								<Image src={"/quiz.png"} width={70} height={70} />
							</span>
							<h3>Latihan</h3>
							<p>
								Kamu akan diberikan latihan untuk menguji dan mengasah
								pemahamanmu
							</p>
						</li>
						<li>
							<span>
								<Image src={"/progress.png"} width={70} height={70} />
							</span>
							<h3>Progress Tracking</h3>
							<p>
								Proses belajarmu akan dipantau sehingga kamu mengetahui seberapa
								pesat perkembanganmu
							</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export function SectionC() {
	return (
		<section className={homeStyle.sectionC}>
			<div className={homeStyle.contentWrap}>
				<h1>Kompetensi Dasar</h1>
				<div className={homeStyle.gridKD}>
					<ul>
						<li>
							<h3>3.10</h3>
							<p>
								Menganalisis data berdasarkan distribusi data, nilai rata-rata,
								median, dan modus sebaran data untuk mengambil kesimpulan,
								membuat keputusan, dan membuat prediksi
							</p>
						</li>
						<li>
							<h3>4.10</h3>
							<p>
								Menyajikan dan menyelesaikan masalah yang berkaitan dengan
								distribusi data, nilai rata-rata, median, modus, dan sebaran
								data untuk mengambil simpulan, membuat keputusan, dan membuat
								prediksi
							</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
