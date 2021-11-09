import { useState } from "react";
import Modal from "@material-ui/core/Modal";
import modalStyles from "@/components/data/modalStyles";
import { HelpContent } from "../../pages/petunjuk";

const OverviewModal = () => {
	const classes = modalStyles();
	const [open, setOpen] = useState(true);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Modal open={open} onClose={handleClose} className={classes.modal}>
				<div
					className={classes.paper}
					style={{ display: "grid", placeItems: "center" }}
				>
					<HelpContent />
					<div
						style={{
							width: "60%",
							textAlign: "center",
							display: "flex",
							flexDirection: "column",
						}}
					>
						<span>
							<input type='checkbox' />
							<span>Jangan tampilkan lagi</span>
						</span>
						<button
							style={{
								marginTop: "1rem",
								color: "white",
								backgroundColor: "#E34F4F",
								padding: "0.7rem 1rem",
								borderRadius: "4px",
								border: "none",
								pointer: "cursor",
							}}
							onClick={() => handleClose()}
						>
							TUTUP
						</button>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default OverviewModal;
