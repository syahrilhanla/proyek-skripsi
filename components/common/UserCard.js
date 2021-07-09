import { Avatar } from "@material-ui/core";

const UserCard = ({ userData }) => {
	return (
		<div>
			<span>
				<Avatar alt={userData.displayName} src={userData.photoURL} />
				<p key={userData.displayName}>{userData.displayName}</p>
			</span>
		</div>
	);
};
export default UserCard;
