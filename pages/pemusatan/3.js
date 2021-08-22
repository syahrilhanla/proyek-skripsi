import MainLayout from "@/components/common/MainLayout";
import { pemusatanPage3 } from "@/components/acts/scrollActs";

const page1 = () => {
	const Text = () => pemusatanPage3.act;

	return <MainLayout Child1={Text} title={"Rata-rata Gabungan"} />;
};

export default page1;
