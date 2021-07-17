import { Avatar } from "@material-ui/core";
import { getUserProgress } from "@/components/utils/userFirestoreSavings";

import userCardStyles from "@/styles/UserCard.module.css";
import BorderLinearProgress from "@/components/common/BorderLinearProgress";

const UserCard = ({ userData }) => {
	return (
		<>
			<div
				className={userCardStyles.parentDiv}
				onClick={() => console.log(getUserProgress(userData))}
			>
				<span className={userCardStyles.avatar}>
					<Avatar alt={userData.displayName} src={userData.photoURL} />
				</span>
				<h3 key={userData.displayName}>{userData.displayName}</h3>
				<span className={userCardStyles.userProgress}>
					<BorderLinearProgress value={80} />
				</span>
			</div>
		</>
	);
};
export default UserCard;
