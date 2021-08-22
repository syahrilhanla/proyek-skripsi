import MainLayout from "@/components/common/MainLayout";
import { pemusatanPage5 } from "@/components/acts/scrollActs";

const page1 = () => {
	const Text1 = () => (
		<div>
			<>
				{pemusatanPage5.act1}
				{pemusatanPage5.act2}
			</>
		</div>
	);

	return <MainLayout Child1={Text1} title={"Berlatih Bersama"} />;
};

export default page1;
