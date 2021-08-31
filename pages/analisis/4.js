import BarChart from "@/components/charts/BarChart";
import MainLayout from "@/components/common/MainLayout";
import Caption from "@/components/common/Caption";

import TableTwo from "@/components/graphsAndTables/TableTwo";
import { data } from "@/components/graphsAndTables/TableTwo";

import { analysisPage4 } from "@/components/acts/scrollActs";
import { questionDataAnalysisPage4 } from "@/components/acts/questionActs";
import Chapter1Line from "@/components/graphsAndTables/Chapter1Line";

const page4 = () => {
	const tableData = data();

	const Text = () => analysisPage4.act;

	const labels = tableData.map((label) => label.size);
	const percentageData = tableData.map((item) => item.percentage);

	const chartData = {
		labels: labels,
		label: "Ukuran Ikan Kelabau",
		data: percentageData,
	};

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
				scrollActID={analysisPage4.id}
				title={"Menganalisis Grafik/Diagram"}
				questionData={questionDataAnalysisPage4}
				instruction={instruction}
			/>
		</>
	);
};
export default page4;
