import BarChart from "@/components/charts/BarChart";
import DataFrequency from "@/components/charts/DataFrequency";

export const ModusEvaluation = () => (
	<div>
		<p>Diketahui sekelompok data:</p>
		<p style={{ wordSpacing: "2rem", textAlign: "center", fontSize: "larger" }}>
			35 30 15 20 40 20 40 35 40
		</p>
	</div>
);

export const SouthBorneoFish = () => {
	const labels = [
		"Sepat Siam (1)",
		"Belida (2)",
		"Udang Tawar (3)",
		"Udang Lainnya (4)",
	];
	const values = [35, 45, 65, 20];

	const chartData = {
		labels: labels,
		label: "Produksi Ikan Kalsel 2014",
		data: values,
	};

	return <BarChart chartData={chartData} />;
};

export const ShrimpCatch = () => {
	const labels = [
		"Minggu ke-1",
		"Minggu ke-2",
		"Minggu ke-3",
		"Minggu ke-4",
		"Minggu ke-5",
	];
	const values = [15, 20, 25, 20, 15];

	const chartData = {
		labels: labels,
		label: "Berat Udang Tangkapan Nelayan",
		data: values,
	};

	return <BarChart chartData={chartData} />;
};

export const MedianFrequency = () => {
	const data = [45, 60, 75, 80, 90, 110];
	const frequency = [3, 7, 1, 6, 4, 1];

	return (
		<div>
			<p>Perhatikan sekelompok data berikut!</p>
			<DataFrequency data={data} frequency={frequency} />
		</div>
	);
};

export const RattanLength = () => {
	const arr = [
		"14",
		"15",
		"17",
		"12",
		"19",
		"13",
		"11",
		"10",
		"19",
		"15",
		"15",
		"15",
		"17",
		"12",
		"14",
		"15",
		"15",
		"15",
		"19",
		"17",
	];
	return <DataColumn arrList={arr} />;
};
