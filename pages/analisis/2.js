import React from "react";
import MainLayout from "@/components/common/MainLayout";

const page2 = () => {
	const Text = () => (
		<div style={{ padding: "0.8rem" }}>
			<p>
				Statistika ada dalam kehidupan sehari-hari, mungkin kamu tidak
				menyadarinya karena memang digunakan hampir untuk semua bidang, karena
				itu penting bagi kamu untuk mempelajarinya. Salah satu ilmu yang paling
				sering digunakan adalah menganalisis data, dan di sini kamu akan belajar
				bagaimana cara menganalisis data dari tabel dan grafik atau diagram.
			</p>
		</div>
	);

	return (
		<>
			<MainLayout
				Child1={Text}
				title={"Menganalisis Data"}
				percentageValue={50}
			/>
		</>
	);
};

export default page2;
