import { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import { getUserProgress } from "@/components/utils/userFirestoreSavings";
import BorderLinearProgress from "@/components/common/BorderLinearProgress";
import UserDetailModal from "@/components/common/UserDetailModal";

import useCountAllActs from "@/components/utils/useCountAllActs";

import userCardStyles from "@/styles/UserCard.module.css";

const UserCard = ({ userData }) => {
	const [percentageValue, setPercentageValue] = useState(0);
	const [openModal, setOpenModal] = useState(false);
	const [individualProgress, setIndividualProgress] = useState([]);

	useEffect(() => {
		getUserProgress(userData).then((data) => {
			setIndividualProgress(data);
			useCountAllActs(data).then((percentage) =>
				setPercentageValue(percentage)
			);
		});
	}, []);

	return (
		<>
			{openModal && (
				<UserDetailModal
					setOpenModal={setOpenModal}
					individualProgress={individualProgress}
					userData={userData}
					openModal={openModal}
				/>
			)}

			<div
				className={userCardStyles.parentDiv}
				onClick={() => setOpenModal(true)}
			>
				<span className={userCardStyles.avatar}>
					<Avatar alt={userData.displayName} src={userData.photoURL} />
				</span>
				<h3 key={userData.displayName}>{userData.displayName}</h3>
				<span className={userCardStyles.userProgress}>
					<h3>{percentageValue}% </h3>
					<BorderLinearProgress value={percentageValue} />
				</span>
			</div>
		</>
	);
};
export default UserCard;
