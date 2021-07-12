import Modal from "@material-ui/core/Modal";
import modalStyles from "@/components/data/modalStyles";
import { useState } from "react";
import ClassDropDown from "./ClassDropDown";
import { useEffect } from "react";

const UserNewClassModal = ({ setNewClass, newClass }) => {
	const classes = modalStyles();
	const [open, setOpen] = useState(!newClass);
	const [selectedClass, setSelectedClass] = useState("");

	// useEffect(() => console.log(selectedClass), [selectedClass]);

	const handleClose = () => {
		setOpen(false);
		setNewClass(false);
	};
	return (
		<Modal open={open} onClose={handleClose} className={classes.modal}>
			<div className={classes.paper}>
				<ClassDropDown setSelectedClass={setSelectedClass} />
			</div>
		</Modal>
	);
};

export default UserNewClassModal;
