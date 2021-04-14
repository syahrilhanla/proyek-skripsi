import React from "react";
import BarChart from "@/components/charts/BarChart";
import MainLayout from "@/components/common/MainLayout";
import TableTwo from "@/components/graphsAndTables/TableTwo";
import { data } from "@/components/graphsAndTables/TableTwo";
import Caption from "@/components/common/Caption";

const page4 = () => {
	const tableData = data();

	const Text = () => (
		<div>
			<p>
				Data biasanya juga disajikan dalam bentuk grafik atau diagram, dengan
				menggunakan tampilan ini biasanya data yang lebih kompleks dapat lebih
				mudah untuk dipahami tanpa perlu usaha lebih untuk menganalisisnya.
				Sebagai contoh kita mempunyai sebuah tabel dengan data ukuran ikan
				Kelabau yang tertangkap di sungai. Kita bisa mengubahnya dari tabel
				menjadi berbagai macam grafik atau diagram, misalnya diagram batang,
				diagram lingkaran, dan diagram garis.
			</p>
			<p>
				Di samping merupakan data dari hasil kumpulan tangkapan ikan Kelabau
				yang ada di sepanjang sungai Kapuas. Berdasarkan hasil tangkapan
				tersebut kita dapat menyajikan datanya menjadi sebuah tabel yang
				menggolongkan ikan berdasarkan ukurannya, kemudian per golongan ukuran
				tersebut didapatkan persentase dari jumlah keseluruhan. Berdasarkan data
				yang ini kita dapat membuatnya menjadi berbagai macam jenis diagram. Di
				bawah merupakan hasil dari pembuatan diagram batang menggunakan data
				yang sama pada tabel di atas.
			</p>
		</div>
	);

	const labels = tableData.map((label) => label.size);
	const percentageData = tableData.map((item) => item.percentage);

	const chartData = {
		labels: labels,
		label: "Ukuran Ikan Kelabau",
		data: percentageData,
	};

	const questionData = [
		{
			questionText: "what is this?",
			answerChoices: [
				{
					answerText: "this is it",
					isCorrect: true,
				},
				{
					answerText: "this is not it",
					isCorrect: false,
				},
			],
		},
	];

	const instruction =
		"Di bawah ini merupakan diagram garis yang menunjukkan aktivitas bertelur dari Itik Alabio, itik yang terkenal sebagai produk peternakan khas Hulu Sungai yang berdaya jual tinggi. Berdasarkan data yang disajikan coba kamu analisa data di atas dan ambil kesimpulan, kemudian jawablah pertanyaan berikut:";

	const Data = () => (
		<div style={{ margin: "auto" }}>
			<TableTwo />
			<Caption>Data-2: Ukuran Ikan kelabau</Caption>
			<br />
			<BarChart chartData={chartData} />
			<Caption>Data-2: Ukuran Ikan kelabau</Caption>
		</div>
	);

	return (
		<>
			<MainLayout
				Child1={Data}
				Child2={Text}
				title={"Menganalisis Grafik/Diagram"}
				questionData={questionData}
				instruction={instruction}
			/>
		</>
	);
};
export default page4;
