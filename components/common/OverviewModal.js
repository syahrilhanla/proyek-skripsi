import { useEffect, useState } from "react";
import Modal from "@material-ui/core/Modal";
import modalStyles from "@/components/data/modalStyles";

import { useAuth } from "@/components/context/AuthContext";

import {
	CommonFeatures,
	ContentHelp,
	DashboardHelp,
	HelpContent,
	GraphHelp,
} from "../../pages/petunjuk";
import { changeHasReadOverview } from "@/components/utils/userFirestoreSavings";
import { Button, ButtonGroup } from "@material-ui/core";

const OverviewModal = () => {
	const classes = modalStyles();

	const [open, setOpen] = useState(false);
	const [whichInfo, setWhichInfo] = useState(1);
	const [isChecked, setIsChecked] = useState(false);

	const { userInfo, setDashboardRenderCounter, dashboardRenderCounter } =
		useAuth();

	useEffect(() => {
		if (userInfo && dashboardRenderCounter === 0) {
			if (userInfo.hasReadOverview === false) setOpen(true);
		}
	}, [userInfo]);

	const handleClose = () => {
		setOpen(false);
		setDashboardRenderCounter((prevValue) => prevValue + 1);
		if (isChecked === true) {
			changeHasReadOverview(userInfo.uid, isChecked);
		}
	};

	const handleCheckBox = () => {
		setIsChecked((prevValue) => !prevValue);
		changeHasReadOverview();
	};

	const WhichInfoButton = () => (
		<ButtonGroup variant='contained' aria-label='outlined primary button group'>
			<Button
				onClick={() => setWhichInfo(1)}
				color={whichInfo === 1 && "primary"}
			>
				Fitur Umum
			</Button>
			<Button
				onClick={() => setWhichInfo(2)}
				color={whichInfo === 2 && "primary"}
			>
				Dashboard (Halaman Profil)
			</Button>
			<Button
				onClick={() => setWhichInfo(3)}
				color={whichInfo === 3 && "primary"}
			>
				Halaman Materi
			</Button>
			<Button
				onClick={() => setWhichInfo(4)}
				color={whichInfo === 4 && "primary"}
			>
				Interaktifitas Diagram
			</Button>
		</ButtonGroup>
	);

	const DisplayInfo = ({ whichInfo }) => {
		if (whichInfo === 1) {
			return (
				<>
					<CommonFeatures />
				</>
			);
		} else if (whichInfo === 2) {
			return (
				<>
					<DashboardHelp />
				</>
			);
		} else if (whichInfo === 3) {
			return (
				<>
					<ContentHelp />
				</>
			);
		} else if (whichInfo === 4) {
			return (
				<>
					<GraphHelp />
				</>
			);
		}
	};
	return (
		<div>
			<Modal open={open} onClose={handleClose} className={classes.modal}>
				<div
					className={classes.paper}
					style={{ display: "grid", placeItems: "center" }}
				>
					<HelpContent
						whichInfo={whichInfo}
						WhichInfoButton={WhichInfoButton}
						DisplayInfo={DisplayInfo}
					/>
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
								checked={isChecked}
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
