import { Avatar } from "@material-ui/core";
import { getUserProgress } from "@/components/utils/userFirestoreSavings";

const UserCard = ({ userData }) => {
	return (
		<div>
			<span onClick={() => console.log(getUserProgress(userData))}>
				<Avatar alt={userData.displayName} src={userData.photoURL} />
				<p key={userData.displayName}>{userData.displayName}</p>
			</span>
		</div>
	);
};
export default UserCard;
