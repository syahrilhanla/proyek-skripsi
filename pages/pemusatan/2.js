import MainLayout from "@/components/common/MainLayout";
import { pemusatanPage2 } from "@/components/acts/scrollActs";

const page1 = () => {
	const Text = () => pemusatanPage2.act;

	return <MainLayout Child1={Text} title={"Mean"} />;
};

export default page1;
