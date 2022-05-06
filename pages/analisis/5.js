import MainLayout from "@/components/common/MainLayout";
import { chapter1Page5 } from "@/components/data/shortEssayData";
import { analysisPage5 } from "@/components/acts/scrollActs";
import Image from "next/image";

const page3 = () => {
	const Text = () => analysisPage5.act;

	return (
		<>
			<MainLayout
				Child1={() => (
					<div style={{ display: "flex", justifyContent: "center" }}>
						<Image
							src={"/PieChart.png"}
							width={324}
							height={324}
							quality={100}
						/>
					</div>
				)}
				Child2={Text}
				title={"Ayo Mencoba!"}
				essayQuestion={chapter1Page5}
				scrollActID={analysisPage5.id}
			/>
		</>
	);
};

export default page3;
