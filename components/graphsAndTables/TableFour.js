import tableStyle from "@/styles/TableStyle.module.css";

const TableTwo = () => {
	const tableData = data();

	return (
		<div>
			<table className={tableStyle.mainTable}>
				<thead>
					<tr>
						<th className={tableStyle.tableHead}>Ukuran (cm)</th>
						<th className={tableStyle.tableHead}>Banyak Ikan (ekor)</th>
					</tr>
				</thead>

				<tbody>
					{tableData.map((item) => (
						<tr key={item.size}>
							<td>{item.size}</td>
							<td>{item.amount}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export function data() {
	return [
		{
			size: "4,0 – 6,0",
			amount: 150,
		},
		{
			size: "6,1 – 8,0",
			amount: 250,
		},
		{
			size: "8,1 – 10,0",
			amount: 350,
		},
		{
			size: "10,1 – 12,0",
			amount: 250,
		},
		{
			size: "Jumlah",
			amount: 1000,
		},
	];
}

export default TableTwo;
