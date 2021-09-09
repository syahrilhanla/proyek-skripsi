import dataStyles from "@/styles/DataStyles.module.css";
import BarChart from "@/components/charts/BarChart";

export const FirstData = () => (
	<div>
		<p>Diketahui sekelompok data:</p>
		<p style={{ wordSpacing: "2rem", textAlign: "center", fontSize: "larger" }}>
			35 30 15 20 40 20 40 35 40
		</p>
	</div>
);

export const DataColumn = ({ arrList }) => {
	return (
		<div className={dataStyles.blueTableData}>
			{arrList.map((number) => (
				<span className={dataStyles.spanElement}>{number}</span>
			))}
		</div>
	);
};

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
