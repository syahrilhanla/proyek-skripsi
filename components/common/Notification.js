import { useState } from "react";
import Modal from "@material-ui/core/Modal";
import modalStyles from "@/components/data/modalStyles";

const Notification = ({ isActive, setIsActive }) => {
	const classes = modalStyles();
	const [open, setOpen] = useState(!isActive);

	const handleClose = () => {
		setOpen(false);
		setIsActive(true);
	};

	return (
		<div>
			<Modal open={open} onClose={handleClose} className={classes.modal}>
				<div className={classes.paper}>
					<h2>Kamu kehilangan fokus belajar</h2>
				</div>
			</Modal>
		</div>
	);
};

export default Notification;
