import MainLayout from "@/components/common/MainLayout";
import { penyebaranPage2 } from "@/components/acts/scrollActs";
import { chapter3Page2 } from "@/components/data/shortEssayData";

const page1 = () => {
	const Text = () => penyebaranPage2.act;

	return (
		<MainLayout
			Child1={Text}
			title={"Jangkauan Data"}
			essayQuestion={chapter3Page2}
			scrollActID={penyebaranPage2.id}
		/>
	);
};

export default page1;
