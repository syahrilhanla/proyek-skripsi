import { useState, useEffect } from "react";

import Modal from "@material-ui/core/Modal";
import modalStyles from "@/components/data/modalStyles";
import ClassDropDown from "@/components/common/ClassDropDown";
import JoinClassForm from "@/components/common/JoinClassForm";

const UserNewClassModal = ({ setNewClass, newClass, setUserClass }) => {
	const classes = modalStyles();
	const [open, setOpen] = useState(!newClass);
	const [selectedClass, setSelectedClass] = useState("");

	useEffect(() => setUserClass(selectedClass), [selectedClass]);

	const handleClose = () => {
		setOpen(false);
		setNewClass(false);
	};
	return (
		<Modal open={open} onClose={handleClose} className={classes.modal}>
			<div className={classes.paper}>
				<ClassDropDown setSelectedClass={setSelectedClass} />
				<JoinClassForm setOpen={setOpen} selectedClass={selectedClass} />
			</div>
		</Modal>
	);
};

export default UserNewClassModal;
