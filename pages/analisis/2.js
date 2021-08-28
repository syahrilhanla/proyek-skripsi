import MainLayout from "@/components/common/MainLayout";
import { analysisPage2 } from "@/components/acts/scrollActs";

const page2 = () => {
	const Text = () => analysisPage2.act;

	return (
		<>
			<MainLayout
				Child1={Text}
				title={"Menganalisis Data"}
				scrollActID={analysisPage2.id}
			/>
		</>
	);
};

export default page2;
