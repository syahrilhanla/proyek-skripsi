import DataColumn from "@/components/charts/DataColumn";
import BarChart from "@/components/charts/BarChart";

export const FishCatch = () => {
	const labels = ["6 kg", "7 kg", "8 kg", "9 kg", "10 kg", "12 kg"];
	const values = [15, 20, 25, 20, 15, 10];

	const chartData = {
		labels: labels,
		label: "Berat Ikan Tangkapan Nelayan",
		data: values,
	};

	return <BarChart chartData={chartData} />;
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
	return <DataColumn arrList={arr} columns={5} />;
};
