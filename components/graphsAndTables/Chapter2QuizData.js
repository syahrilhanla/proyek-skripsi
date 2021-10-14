import BarChart from "@/components/charts/BarChart";
import DataFrequency from "@/components/charts/DataFrequency";

export const FirstData = () => (
	<div>
		<p>Diketahui sekelompok data:</p>
		<p style={{ wordSpacing: "2rem", textAlign: "center", fontSize: "larger" }}>
			35 30 15 20 40 20 40 35 40
		</p>
	</div>
);

export const KasturiHarvesting = () => {
	const labels = ["90 gr", "100 gr", "110 gr", "120 gr"];
	const values = [2, 6, 5, 4];

	const chartData = {
		labels: labels,
		label: "Hasil Panen Buah Kasturi",
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
