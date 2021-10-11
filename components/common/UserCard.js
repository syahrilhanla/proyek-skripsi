import { useState, useEffect } from "react";
import { Avatar, Button } from "@material-ui/core";
import {
	deleteUserDocument,
	getUserProgress,
} from "@/components/utils/userFirestoreSavings";
import BorderLinearProgress from "@/components/common/BorderLinearProgress";
import UserDetailModal from "@/components/common/UserDetailModal";

import useCountAllActs from "@/components/utils/useCountAllActs";

import userCardStyles from "@/styles/UserCard.module.css";

const UserCard = ({
	userData,
	isEditMode,
	deleteFromUI,
	isSuccess,
	setIsSuccess,
}) => {
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

	const isNoUserYet = () => {
		if (individualProgress) {
			if (individualProgress.length === 0) return true;
		} else return false;
	};

	// filterDescending();

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
				className={`${userCardStyles.parentDiv} ${
					isEditMode ? userCardStyles.editMode : userCardStyles.normalMode
				}`}
				style={isNoUserYet() ? { pointerEvents: "none" } : null}
				onClick={() => setOpenModal(true)}
			>
				<span className={userCardStyles.avatar}>
					<Avatar alt={userData.displayName} src={userData.photoURL} />
				</span>
				<h3 key={userData.displayName}>{userData.displayName}</h3>
				<h3>Score: {userData.score}</h3>
				<span className={userCardStyles.userProgress}>
					<h3>{percentageValue}% </h3>
					<BorderLinearProgress value={percentageValue} />
				</span>
				{isEditMode && (
					<span>
						<Button
							variant='contained'
							color='secondary'
							onClick={(e) => {
								deleteUserDocument(userData.uid);
								deleteFromUI(userData.uid);
								setIsSuccess(true);
								e.stopPropagation();
							}}
						>
							X
						</Button>
					</span>
				)}
			</div>
		</>
	);
};
export default UserCard;
