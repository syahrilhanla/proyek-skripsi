import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import CircularProgressWithLabel from "@/components/common/ProgressCircularBar";
import LearningProgress from "@/components/common/LearningProgress";

import progressStyles from "@/styles/Progress.module.css";
import dashboardStyles from "@/styles/Dashboard.module.css";

<<<<<<< HEAD
import {
	combinePageProgress,
	getScore,
} from "@/components/utils/dataProcessors";
import { getLocalUserProgress } from "@/components/utils/userLocalSavings";

import { useAuth } from "@/components/context/AuthContext";
import { useProgress } from "@/components/context/ProgressContext";

const dashboard = () => {
	const { localUserData } = useAuth();
	const { dashboardProgress, dashboardLoading } = useProgress();

	const [pageReady, setPageReady] = useState(false);

	const [chapter1Value, setChapter1Value] = useState(0);
	const [chapter2Value, setChapter2Value] = useState(0);
	const [chapter3Value, setChapter3Value] = useState(0);

	const setProgressValues = () => {
		return { chapter1Value, chapter2Value, chapter3Value };
	};

	const setUserProgress = async (dashboardProgress) => {
		console.log(dashboardProgress);
		if (dashboardProgress.chapter1 !== undefined) {
			const chapter1Progress = combinePageProgress(
				await dashboardProgress.chapter1
			);
			const chapter2Progress = combinePageProgress(
				await dashboardProgress.chapter2
			);
			const chapter3Progress = combinePageProgress(
				await dashboardProgress.chapter3
			);

			setChapter1Value(getScore(chapter1Progress.combinedProgress));
			setChapter2Value(getScore(chapter2Progress.combinedProgress));
			setChapter3Value(getScore(chapter3Progress.combinedProgress));

			setPageReady(true);
		}
	};

	useEffect(() => {
		if (dashboardProgress !== null) {
			console.log(dashboardProgress);
			setUserProgress(dashboardProgress);
		}
	}, [dashboardLoading]);

	return (
		<>
			{localUserData && pageReady === true ? (
				<DisplayDashboard />
			) : (
				<p>Loading</p>
			)}
		</>
	);
=======
import useProgressValues from "@/components/utils/useProgressValues";

const dashboard = () => {
	const progressValues = useProgressValues();

	return <>{progressValues.localUserData && <DisplayDashboard />}</>;
>>>>>>> 36b6b4b608bdea223f175814247441ce22cfae2c

	function DisplayDashboard() {
		return (
			<div className={progressStyles.mainProgress}>
				<Navbar />
				<DashboardContent displayName={progressValues.localUserData.displayName} />
				<UserProgress progressValues={progressValues.setProgressValues()} />
				<Footer />
			</div>
		);
	}
};

function UserProgress({ progressValues }) {
	return (
		<section className={progressStyles.progressSection}>
			<div className={progressStyles.container}>
				<h1>Progres Saya</h1>
				<LearningProgress
					text={"Menganalisis Data"}
					percentageValue={progressValues.chapter1Value.percentage}
					overallAction={`${progressValues.chapter1Value.score}/${progressValues.chapter1Value.actLength}`}
				/>
				<LearningProgress
					text={"Ukuran Pemusatan"}
					percentageValue={progressValues.chapter2Value.percentage}
					overallAction={`${progressValues.chapter2Value.score}/${progressValues.chapter2Value.actLength}`}
				/>
				<LearningProgress
					text={"Ukuran Penyebaran"}
					percentageValue={progressValues.chapter3Value.percentage}
					overallAction={`${progressValues.chapter3Value.score}/${progressValues.chapter3Value.actLength}`}
				/>
			</div>
		</section>
	);
}

function DashboardContent({ displayName }) {
	console.log(displayName);
	return (
		<section className={dashboardStyles.dashboard}>
			<div className={dashboardStyles.profile}>
				<div className={dashboardStyles.backgroundPicture}></div>
				<div className={dashboardStyles.container}>
					<div className={dashboardStyles.progress}>
						<div className={dashboardStyles.progressBar}>
							<CircularProgressWithLabel value={70} />
						</div>
						<div>
							<h3>21/30 Kegiatan Tuntas</h3>
						</div>
					</div>
					<div className={dashboardStyles.profileName}>
						<h2>{displayName}</h2>
					</div>
				</div>
			</div>
		</section>
	);
}

export default dashboard;
