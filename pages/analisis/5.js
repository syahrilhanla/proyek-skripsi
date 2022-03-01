import MainLayout from "@/components/common/MainLayout";
import { chapter1Page5 } from "@/components/data/shortEssayData";
import { analysisPage5 } from "@/components/acts/scrollActs";
import Chapter1Pie from "@/components/graphsAndTables/Chapter1Pie";

const page3 = () => {
	const Text = () => analysisPage5.act;

	return (
		<>
			<MainLayout
				Child1={Chapter1Pie}
				Child2={Text}
				title={"Ayo Mencoba!"}
				essayQuestion={chapter1Page5}
				scrollActID={analysisPage5.id}
			/>
		</>
	);
};

export default page3;
