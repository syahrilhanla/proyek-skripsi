import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ chartData }) => {
	const data = {
		labels: chartData.labels,
		datasets: chartData.datasets.map((item) => item),
	};

	return (
		<>
			<Line data={data} />
		</>
	);
};

export default LineChart;
