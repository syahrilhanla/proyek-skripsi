import MainLayout from "@/components/common/MainLayout";
import { pemusatanPage3 } from "@/components/acts/scrollActs";
import { chapter2Page3 } from "@/components/data/shortEssayData";

const page1 = () => {
	const Text = () => pemusatanPage3.act;

	return (
		<MainLayout
			Child1={Text}
			title={"Rata-rata Gabungan"}
			essayQuestion={chapter2Page3}
			scrollActID={pemusatanPage3.id}
		/>
	);
};

export default page1;
