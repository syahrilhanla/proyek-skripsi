import LineChart from "@/components/charts/LineChart";

const Chapter1Line = () => {
	const chartData = {
		labels: ["Tahun 1", "Tahun 2", "Tahun 3"],
		datasets: [
			{
				label: "Itik A",
				data: [242, 256, 251],
				fill: false,
				backgroundColor: "#ff9340",
				borderColor: "#ff9340",
				lineTension: 0,
			},
			{
				label: "Itik B",
				data: [238, 248, 271],
				fill: false,
				backgroundColor: "#408CFF",
				borderColor: "#408CFF",
				lineTension: 0,
			},
		],
	};

	return (
		<div>
			<LineChart chartData={chartData} />
		</div>
	);
};

export default Chapter1Line;
