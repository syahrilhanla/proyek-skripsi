import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import BorderLinearProgress from "@/components/common/BorderLinearProgress";

import progressStyles from "@/styles/BottomProgress.module.css";

import useUpdateProgress from "@/components/utils/useUpdateProgress";
import Link from "next/link";

const BottomProgress = ({ pageProgress, logic }) => {
	return (
		<div className={progressStyles.main}>
			<div className={progressStyles.content}>
				<span className={progressStyles.left}>
					{logic.currentPath !== 1 && (
						<Link href={`/${logic.prevURL()}`}>
							<ChevronLeftIcon
								fontSize={"large"}
								color={"inherit"}
								onClick={() => useUpdateProgress(logic.currentPath)}
							/>
						</Link>
					)}
				</span>

				{logic.currentURL.split("/")[2] !== "kuis" && (
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
					{logic.currentPath <
						logic.chooseURLList(logic.parentPath)[0].length && (
						<Link href={`/${logic.nextURL()}`}>
							<ChevronRightIcon
								fontSize={"large"}
								color={"inherit"}
								onClick={() => useUpdateProgress(logic.currentPath)}
							/>
						</Link>
					)}
				</span>
			</div>
		</div>
	);
};

export default BottomProgress;
