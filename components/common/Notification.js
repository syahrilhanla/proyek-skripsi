import { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
}));

const Notification = ({ isActive, setIsActive }) => {
	const classes = useStyles();
	const [open, setOpen] = useState(!isActive);

	const handleClose = () => {
		setOpen(false);
		setIsActive(true);
	};

	return (
		<div>
			<Modal open={open} onClose={handleClose} className={classes.modal}>
				<div className={classes.paper}>
					<h2>Kamu sudah diam selama 5 detik</h2>
				</div>
			</Modal>
		</div>
	);
};

export default Notification;
