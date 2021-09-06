import MainLayout from "@/components/common/MainLayout";
import { pemusatanPage2 } from "@/components/acts/scrollActs";
import { chapter2Page2 } from "@/components/data/shortEssayData";

const page1 = () => {
	const Text = () => pemusatanPage2.act;
	const Data = () => pemusatanPage2.data;

	return (
		<MainLayout
			Child1={Data}
			Child2={Text}
			title={"Mean"}
			essayQuestion={chapter2Page2}
			scrollActID={pemusatanPage2.id}
		/>
	);
};

export default page1;
