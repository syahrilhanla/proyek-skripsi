import MainLayout from "@/components/common/MainLayout";
import { penyebaranPage4 } from "@/components/acts/scrollActs";
import { chapter3Page4 } from "@/components/data/shortEssayData";

const page1 = () => {
	const Text1 = () => (
		<div>
			<>{penyebaranPage4.act}</>
		</div>
	);

	return (
		<MainLayout
			Child1={Text1}
			title={"Ayo Mencoba!"}
			essayQuestion={chapter3Page4}
			scrollActID={penyebaranPage4.id}
		/>
	);
};

export default page1;
