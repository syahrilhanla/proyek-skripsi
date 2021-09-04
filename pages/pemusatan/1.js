import MainLayout from "@/components/common/MainLayout";
import { pemusatanPage1 } from "@/components/acts/scrollActs";
import TableOne from "@/components/graphsAndTables/TableOne";

const page1 = () => {
	const Text = () => pemusatanPage1.act;

	return (
		<MainLayout
			Child1={TableOne}
			Child2={Text}
			title={"Ukuran Pemusatan Data"}
			scrollActID={pemusatanPage1.id}
		/>
	);
};

export default page1;
