import React from "react";
import MainLayout from "@/components/common/MainLayout";
import { analysisPage1 } from "@/components/acts/scrollActs";

const page1 = () => {
	const Text = () => analysisPage1.act1;
	const Image = () => analysisPage1.act2;

	return (
		<MainLayout
			Child1={Image}
			Child2={Text}
			title={"Apa itu Statistika?"}
			scrollActID={analysisPage1.id}
		/>
	);
};

export default page1;
