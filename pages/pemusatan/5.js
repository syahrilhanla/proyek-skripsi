import MainLayout from "@/components/common/MainLayout";
import { pemusatanPage5 } from "@/components/acts/scrollActs";
import { chapter2Page5 } from "@/components/data/shortEssayData";

const page1 = () => {
	const Text1 = () => (
		<div>
			<>
				{pemusatanPage5.act1}
				{pemusatanPage5.act2}
			</>
		</div>
	);

	return (
		<MainLayout
			Child1={Text1}
			title={"Berlatih Bersama"}
			essayQuestion={chapter2Page5}
			scrollActID={pemusatanPage5.id}
		/>
	);
};

export default page1;
