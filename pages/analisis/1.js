import React from "react";
import MainLayout from "@/components/common/MainLayout";
import DisplayEquation from "@/components/charts/KatexComponent";
import LearningObjectives from "@/components/common/LearningObjectives";
import { chapter1Objectives } from "@/components/data/objectivesData";

const page1 = () => {
	const Text = () => (
		<div
			style={{
				padding: "0.8rem",
				display: "flex",
				justifyContent: "center",
				flexWrap: "wrap",
			}}
		>
			<LearningObjectives objectives={chapter1Objectives} />
			<p>
				Kamu mungkin pernah mendengar dengan kata “rata-rata”, “paling
				tinggi/rendah”, atau “paling berat/ringan”. Contohnya ada pada kalimat
				seperti “rata-rata tinggi orang Indonesia adalah 158,12 cm”, atau
				“gunung tertinggi di dunia adalah Gunung Everest”. Kalimat-kalimat
				tersebut didapatkan dari data yang diperoleh sebelumnya melalui
				pengumpulan dan pengolahan data. Inilah yang disebut dengan statistika,
				yaitu ilmu yang mempelajari tentang pengumpulan, pengolahan,
				penganalisisan, dan penarikan kesimpulan data.
			</p>
			<p>
				Di sini kamu akan mempelajari apa itu statistika berdasarkan masalah
				yang ditemui di kehidupan sehari-hari melalui data berbentuk tabel dan
				diagram. Selain itu kamu akan mempelajari cara menentukan nilai
				rata-rata (mean), median, modus, dan sebaran data.
			</p>

			<DisplayEquation>\int_0^\infty x^2 dx</DisplayEquation>
		</div>
	);

	const Objectives = () => (
		<div>
			<LearningObjectives objectives={chapter1Objectives} />
		</div>
	);

	return <MainLayout Child1={Text} title={"Apa itu Statistika?"} />;
};

export default page1;
