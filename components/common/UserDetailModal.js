import Modal from "@material-ui/core/Modal";
import modalStyles from "@/components/data/modalStyles";
import { useState } from "react";

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

	return (
		<Modal open={open} onClose={handleClose} className={classes.modal}>
			<div className={classes.paper}>
				<h3>Detail</h3>
			</div>
		</Modal>
	);
};

export default UserDetailModal;
