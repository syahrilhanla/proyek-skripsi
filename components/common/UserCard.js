import { useState } from "react";
import { Avatar } from "@material-ui/core";
import { getUserProgress } from "@/components/utils/userFirestoreSavings";
import BorderLinearProgress from "@/components/common/BorderLinearProgress";
import useCountAllActs from "@/components/utils/useCountAllActs";

import userCardStyles from "@/styles/UserCard.module.css";

const UserCard = ({ userData, setOpenModal }) => {
	const [percentageValue, setPercentageValue] = useState(0);
	useCountAllActs(getUserProgress(userData)).then((data) =>
		setPercentageValue(data)
	);

	return (
		<>
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
