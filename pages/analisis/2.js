import React from "react";
import MainLayout from "@/components/common/MainLayout";
import { useProgress } from "@/components/context/ProgressContext";

const page2 = () => {
	const { chapter2Progress } = useProgress();
	console.log(chapter2Progress);

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
				percentageValue={80}
			/>
		</>
	);
};

export default page2;
