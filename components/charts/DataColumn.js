import dataStyles from "@/styles/DataStyles.module.css";

const DataColumn = ({ arrList, columns }) => {
	return (
		<div
			className={dataStyles.blueTableData}
			style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
		>
			{arrList.map((number) => (
				<span className={dataStyles.spanElement}>{number}</span>
			))}
		</div>
	);
};

export default DataColumn;
