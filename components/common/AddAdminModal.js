import { useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";

import modalStyles from "@/components/data/modalStyles";
import NewAdminForm from "@/components/common/NewAdminForm";
import { getAllAdminData } from "@/components/utils/userFirestoreSavings";

const AddAdminModal = ({ setNewAdmin, newAdmin, setAdminList }) => {
	const classes = modalStyles();
	const [open, setOpen] = useState(newAdmin);

	useEffect(() => {
		let isMounted = true;
		if (!open) {
			if (isMounted) handleClose();
		}
		return () => (isMounted = false);
	}, [open]);

	const handleClose = () => {
		setOpen(false);
		setNewAdmin(false);
		getAllAdminData().then((data) => {
			setAdminList(data);
			// console.log(data);
		});
	};

	// if (open === false) setNewClass(false);

	return (
		<Modal open={open} onClose={handleClose} className={classes.modal}>
			<div className={classes.paper}>
				<NewAdminForm setOpen={setOpen} />
			</div>
		</Modal>
	);
};

export default AddAdminModal;
