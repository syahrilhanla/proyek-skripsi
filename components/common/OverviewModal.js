import { useEffect, useState } from "react";
import Modal from "@material-ui/core/Modal";
import modalStyles from "@/components/data/modalStyles";

import { useAuth } from "@/components/context/AuthContext";

import { HelpContent } from "../../pages/petunjuk";
import { changeHasReadOverview } from "@/components/utils/userFirestoreSavings";

const OverviewModal = () => {
	const classes = modalStyles();
	const [open, setOpen] = useState(false);
	const [hasReadOverview, setHasReadOverview] = useState(false);
	const { userInfo } = useAuth();

	useEffect(() => {
		if (userInfo) {
			if (userInfo.hasReadOverview === false) setOpen(true);
		}
	}, [userInfo]);

	const handleClose = () => {
		setOpen(false);
		if (hasReadOverview === true) {
			changeHasReadOverview(userInfo.uid, hasReadOverview);
		}
	};

	const handleCheckBox = () => {
		setHasReadOverview((prevValue) => !prevValue);
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
							<input
								type='checkbox'
								checked={hasReadOverview}
								onChange={handleCheckBox}
							/>
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
								cursor: "pointer",
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
