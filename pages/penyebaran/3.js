import MainLayout from "@/components/common/MainLayout";
import { penyebaranPage3 } from "@/components/acts/scrollActs";
import { chapter2Page3 } from "@/components/data/shortEssayData";

const page1 = () => {
	const Text = () => penyebaranPage3.act;

	return (
		<MainLayout
			Child1={Text}
			title={"Kuartil"}
			essayQuestion={chapter2Page3}
			scrollActID={penyebaranPage3.id}
		/>
	);
};

export default page1;
