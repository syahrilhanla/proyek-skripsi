import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import BorderLinearProgress from "@/components/common/BorderLinearProgress";

import progressStyles from "@/styles/BottomProgress.module.css";

import useUpdateProgress from "@/components/utils/useUpdateProgress";
import useGetCurrentPage from "@/components/utils/useGetCurrentPage";

import Link from "next/link";
import useBottomProgressLogic from "@/components/utils/useBottomProgressLogic";

const BottomProgress = ({ pageProgress }) => {
	const { parentPath, currentPath, currentURL } = useGetCurrentPage();
	const { nextURL, prevURL, chooseURLList } = useBottomProgressLogic();

	return (
		<div className={progressStyles.main}>
			<div className={progressStyles.content}>
				<span className={progressStyles.left}>
					{currentPath !== 1 && (
						<Link href={`/${prevURL()}`}>
							<ChevronLeftIcon
								fontSize={"large"}
								color={"inherit"}
								onClick={() => useUpdateProgress(parentPath)}
							/>
						</Link>
					)}
				</span>

				{currentURL.split("/")[2] !== "kuis" && (
					<span>
						<BorderLinearProgress
							value={pageProgress.percentage ? pageProgress.percentage : 0}
						/>
						<div className={progressStyles.progress}>
							<p>
								{pageProgress.score}/{pageProgress.actLength} Kegiatan
							</p>
						</div>
					</span>
				)}

				<span className={progressStyles.right}>
					{currentPath < chooseURLList(parentPath)[0].length && (
						<Link href={`/${nextURL()}`}>
							<ChevronRightIcon
								fontSize={"large"}
								color={"inherit"}
								onClick={() => useUpdateProgress(parentPath)}
							/>
						</Link>
					)}
				</span>
			</div>
		</div>
	);
};

export default BottomProgress;
