import dataStyles from "@/styles/DataStyles.module.css";

const DataFrequency = ({ data, frequency }) => {
	return (
		<div>
			<table>
				<tr>
					<td style={{ backgroundColor: "#CDF1FF", padding: "0.5rem" }}>
						Data
					</td>
					{data.map((item) => (
						<td style={{ backgroundColor: "#9ACCFF", padding: "0.5rem" }}>
							{item}
						</td>
					))}
				</tr>
				<tr>
					<td style={{ backgroundColor: "#CDF1FF", padding: "0.5rem" }}>
						Frekuensi
					</td>
					{frequency.map((item) => (
						<td style={{ backgroundColor: "#9ACCFF", padding: "0.5rem" }}>
							{item}
						</td>
					))}
				</tr>
			</table>
		</div>
	);
};

export default DataFrequency;
