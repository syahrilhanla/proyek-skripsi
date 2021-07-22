import { useState } from "react";
import { Avatar } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";

import useExtractToDisplay from "@/components/utils/useExtractToDisplay";

import modalStyles from "@/components/data/modalStyles";
import userCardStyles from "@/styles/UserCard.module.css";

const UserDetailModal = ({
	openModal,
	setOpenModal,
	userData,
	individualProgress,
}) => {
	const classes = modalStyles();
	const [open, setOpen] = useState(openModal);

	console.log({ openModal, userData, individualProgress });

	const handleClose = () => {
		setOpen(false);
		setOpenModal(false);
	};

	const { chapterNames, pageDetails } = useExtractToDisplay(individualProgress);

	console.log({ chapterNames, pageDetails });

	return (
		<Modal open={open} onClose={handleClose} className={classes.modal}>
			<div className={classes.paper}>
				<div className={userCardStyles.userDetail}>
					<h3>Detail Progress</h3>
					<div className={userCardStyles.Avatar}>
						<Avatar alt={userData.displayName} src={userData.photoURL} />
					</div>
					<div className={userCardStyles.displayName}>
						<h4>{userData.displayName}</h4>
						<h4>{userData.className}</h4>
					</div>
					<div className={userCardStyles.checkboxList}>
						{chapterNames.map((chapterName) => (
							<h3 key={chapterName}>{chapterName}</h3>
						))}
						{pageDetails.map((details) => {
							return details.map((item) =>
								item.map((unit) => <p>{unit.name}</p>)
							);
						})}
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default UserDetailModal;
