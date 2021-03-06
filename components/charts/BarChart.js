import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ chartData }) => {
	const data = {
		labels: chartData.labels,
		datasets: [
			{
				label: chartData.label,
				backgroundColor: "#408CFF",
				borderColor: "#408CFF",
				borderWidth: 1,
				hoverBackgroundColor: "#408CFF",
				hoverBorderColor: "#408CFF",
				data: chartData.data,
			},
		],
	};

	return (
		<div>
			<Bar
				data={data}
				width={280}
				height={200}
				options={{
					maintainAspectRatio: false,
					scales: {
						yAxes: [
							{
								ticks: {
									beginAtZero: true,
								},
							},
						],
					},
				}}
			/>
		</div>
	);
};

export default BarChart;
