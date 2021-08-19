import React from "react";
import MainLayout from "@/components/common/MainLayout";
import { analysisPage2 } from "@/components/acts/scrollActs";

const page2 = () => {
	const Text = () => analysisPage2.act;

	return (
		<>
			<MainLayout Child1={Text} title={"Menganalisis Data"} />
		</>
	);
};

export default page2;
