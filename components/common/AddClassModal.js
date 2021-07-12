import Modal from "@material-ui/core/Modal";
import modalStyles from "@/components/data/modalStyles";
import { useState, useEffect } from "react";
import NewClassForm from "@/components/common/NewClassForm";
import { getClassList } from "@/components/utils/userFirestoreSavings";

const AddClassModal = ({ setNewClass, newClass, setClassList }) => {
	const classes = modalStyles();
	const [open, setOpen] = useState(!newClass);

	useEffect(() => {
		let isMounted = true;
		if (!open) {
			if (isMounted) handleClose();
		}
		return () => (isMounted = false);
	}, [open]);

	const handleClose = () => {
		setOpen(false);
		setNewClass(false);
		getClassList().then((data) => {
			setClassList(data);
			console.log(data);
		});
	};

	// if (open === false) setNewClass(false);

	return (
		<Modal open={open} onClose={handleClose} className={classes.modal}>
			<div className={classes.paper}>
				<NewClassForm setOpen={setOpen} />
			</div>
		</Modal>
	);
};

export default AddClassModal;
