import { useState, useEffect } from "react";

import Modal from "@material-ui/core/Modal";
import modalStyles from "@/components/data/modalStyles";
import ClassDropDown from "@/components/common/ClassDropDown";
import JoinClassForm from "@/components/common/JoinClassForm";

const UserNewClassModal = ({ setNewClass, newClass, setUserClass }) => {
	const classes = modalStyles();
	const [open, setOpen] = useState(!newClass);
	const [isJoin, setIsJoin] = useState(false);
	const [selectedClass, setSelectedClass] = useState("");

	useEffect(() => {
		if (isJoin) setUserClass(selectedClass.className);
	}, [isJoin]);

	const handleClose = () => {
		setOpen(false);
		setNewClass(false);
	};
	return (
		<Modal open={open} onClose={handleClose} className={classes.modal}>
			<div className={classes.paper}>
				<ClassDropDown setSelectedClass={setSelectedClass} />
				<JoinClassForm
					setOpen={setOpen}
					selectedClass={selectedClass}
					setIsJoin={setIsJoin}
				/>
			</div>
		</Modal>
	);
};

export default UserNewClassModal;
