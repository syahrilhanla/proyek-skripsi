import tableStyle from "@/styles/TableStyle.module.css";
import BarChart from "@/components/charts/BarChart";
import LineChart from "@/components/charts/LineChart";
import PieChart from "@/components/charts/PieChart";

export const RiverTable = () => {
	const riverData = [
		{
			no: 1,
			river: "Benawa",
			length: 382,
		},
		{
			no: 2,
			river: "Alalak",
			length: 11.705,
		},
		{
			no: 3,
			river: "Martapura",
			length: 25.066,
		},
		{
			no: 4,
			river: "Barito",
			length: "11.500",
		},
	];

	return (
		<div>
			<p>
				Di bawah ini merupakan tabel dari data panjang sungai khusus di
				Banjarmasin yang bersumber dari BPSKB (Badan Pusat Statistik Kota
				Banjarmasin)
			</p>
			<table className={tableStyle.mainTable} style={{ margin: "auto" }}>
				<thead>
					<tr>
						<th className={tableStyle.tableHead}>No</th>
						<th className={tableStyle.tableHead}>Sungai</th>
						<th className={tableStyle.tableHead}>Panjang (m)</th>
					</tr>
				</thead>

				<tbody>
					{riverData.map((item) => (
						<tr key={item.no}>
							<td>{item.no}</td>
							<td>{item.river}</td>
							<td>{item.length}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export const FishTable = () => {
	const fishData = [
		{
			length: "31-35 ",
			amount: 8,
		},
		{
			length: "26-30",
			amount: 4,
		},
		{
			length: "36-40",
			amount: 11,
		},
		{
			length: "21-25",
			amount: 13,
		},
	];

	return (
		<div>
			<p>
				Tabel berikut menunjukkan hasil pengukuran ikan Kelabau dari tangkapan
				di Sungai Martapura (diukur dalam satuan cm terdekat).
			</p>
			<table className={tableStyle.mainTable} style={{ margin: "auto" }}>
				<thead>
					<tr>
						<th className={tableStyle.tableHead}>No</th>
						<th className={tableStyle.tableHead}>Ukuran (cm)</th>
						<th className={tableStyle.tableHead}>Jumlah (ekor)</th>
					</tr>
				</thead>

				<tbody>
					{fishData.map((item, index) => (
						<tr key={item.length}>
							<td>{index + 1}</td>
							<td>{item.length}</td>
							<td>{item.amount}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export const RiverCatch = () => {
	const labels = ["Baung", "Paray", "Udang Galah", "Lais"];
	const values = [325, 275, 325, 375];

	const chartData = {
		labels: labels,
		label: "Hasil Tangkapan Sungai",
		data: values,
	};

	return <BarChart chartData={chartData} />;
};

export const SnakeHeadLine = () => {
	const chartData = {
		labels: ["Bulan 1", "Bulan 2", "Bulan 3", "Bulan 4", "Bulan 5"],
		datasets: [
			{
				label: "Ikan Gabus",
				data: [3, 6, 9, 12, 23],
				fill: false,
				backgroundColor: "#ff9340",
				borderColor: "#ff9340",
			},
		],
	};

	return (
		<div>
			<LineChart chartData={chartData} />
		</div>
	);
};

export const DuckPie = () => {
	const chartData = {
		labels: ["Itik Sehat", "Itik Sakit"],
		data: [18, 82],
	};

	return (
		<div style={{ margin: "auto" }}>
			<PieChart chartData={chartData} />
		</div>
	);
};
