import tableStyle from "@/styles/TableStyle.module.css";

const TableThree = () => {
	const tableData = data();

	return (
		<div>
			<table className={tableStyle.mainTable}>
				<thead>
					<tr>
						<th className={tableStyle.tableHead}>Itik</th>
						<th className={tableStyle.tableHead}>Tahun Pertama</th>
						<th className={tableStyle.tableHead}>Tahun Kedua</th>
						<th className={tableStyle.tableHead}>Tahun Ketiga</th>
					</tr>
				</thead>

				<tbody>
					{tableData.map((item) => (
						<>
							<tr key={item.name}>
								<td>{item.name}</td>
								<td>{item.firstYear}</td>
								<td>{item.secondYear}</td>
								<td>{item.thirdYear}</td>
							</tr>
						</>
					))}
				</tbody>
			</table>
		</div>
	);
};

export function data() {
	return [
		{
			name: "Itik A",
			firstYear: 242,
			secondYear: 256,
			thirdYear: 251,
		},
		{
			name: "Itik B",
			firstYear: 252,
			secondYear: 256,
			thirdYear: 245,
		},
		{
			name: "Itik C",
			firstYear: 248,
			secondYear: 260,
			thirdYear: 242,
		},
		{
			name: "Jumlah",
			firstYear: 742,
			secondYear: 772,
			thirdYear: 739,
		},
	];
}

export default TableThree;
