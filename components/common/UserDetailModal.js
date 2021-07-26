import { useState } from "react";
import { Avatar } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";

import useExtractToDisplay from "@/components/utils/useExtractToDisplay";

import modalStyles from "@/components/data/modalStyles";
import userCardStyles from "@/styles/UserCard.module.css";
import AccordionCheckbox from "./AccordionCheckbox";

const UserDetailModal = ({
	openModal,
	setOpenModal,
	userData,
	individualProgress,
}) => {
	const classes = modalStyles();
	const [open, setOpen] = useState(openModal);

	const handleClose = () => {
		setOpen(false);
		setOpenModal(false);
	};

	const { chapter1Details, chapter2Details, chapter3Details } =
		useExtractToDisplay(individualProgress);

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
					<div className={userCardStyles.displayData}>
						<h2>Detail Progress</h2>
						<AccordionCheckbox
							chapterDetails={chapter1Details}
							title='Bab 1: Menganalisis Data'
						/>
						<AccordionCheckbox
							chapterDetails={chapter2Details}
							title='Bab 2: Ukuran Pemusatan Data'
						/>
						<AccordionCheckbox
							chapterDetails={chapter3Details}
							title='Bab 3: Ukuran Penyebaran Data'
						/>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default UserDetailModal;
