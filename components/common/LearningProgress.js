import BorderLinearProgress from "@/components/common/BorderLinearProgress";

import Link from "next/link";

import progressStyles from "@/styles/Progress.module.css";

const LearningProgress = ({ text, percentageValue, overallAction }) => {
	const goToLink = (chapterName) => {
		if (chapterName === "Menganalisis Data") return "/analisis/1";
		else if (chapterName === "Ukuran Pemusatan") return "/pemusatan/1";
		else if (chapterName === "Ukuran Penyebaran") return "/penyebaran/1";
	};

	return (
		<>
			<Link href={goToLink(text)}>
				<div className={progressStyles.progresses}>
					<h3>{text}</h3>
					<span style={{ alignSelf: "center" }}>
						<BorderLinearProgress value={percentageValue} />
					</span>
					<h2 style={{ justifySelf: "center", paddingLeft: "2rem" }}>
						{overallAction}
					</h2>
				</div>
			</Link>
		</>
	);
};

export default LearningProgress;
