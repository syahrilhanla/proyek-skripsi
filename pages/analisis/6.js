import MainLayout from "@/components/common/MainLayout";
import TableOne from "@/components/graphsAndTables/TableOne";
import { firstQuestion } from "@/components/data/shortEssayData";
import { analysisPage6 } from "@/components/acts/scrollActs";

const page3 = () => {
	const Text = () => analysisPage6.act;

	return (
		<>
			<MainLayout
				Child1={TableOne}
				Child2={Text}
				title={"Berlatih Bersama"}
				essayQuestion={firstQuestion}
				scrollActID={analysisPage6.id}
			/>
		</>
	);
};

export default page3;
