import Modal from "@material-ui/core/Modal";
import modalStyles from "@/components/data/modalStyles";
import { useState } from "react";
import NewClassForm from "@/components/common/NewClassForm";

const AddClassModal = ({ setNewClass, newClass }) => {
	const classes = modalStyles();
	const [open, setOpen] = useState(!newClass);

	const handleClose = () => {
		setOpen(false);
		setNewClass(false);
	};
	return (
		<Modal open={open} onClose={handleClose} className={classes.modal}>
			<div className={classes.paper}>
				<NewClassForm setOpen={setOpen} />
			</div>
		</Modal>
	);
};

export default AddClassModal;
