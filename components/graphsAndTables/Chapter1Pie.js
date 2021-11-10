import PieChart from "@/components/charts/PieChart";

const Chapter1Pie = () => {
	const chartData = {
		labels: ["Sumatera", "Kalimantan", "X (Tempat Lain)"],
		data: [43, 32, 25],
	};

	return (
		<div style={{ margin: "auto" }}>
			<PieChart chartData={chartData} />
		</div>
	);
};

export default Chapter1Pie;
