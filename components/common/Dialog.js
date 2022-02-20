import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AlertDialog({
	isDialogOpened,
	setIsDialogOpened,
	setIsAnswerSubmitted,
	isFullyAnswered,
}) {
	const handleClickOpen = () => {
		setIsDialogOpened(true);
	};

	const handleClose = () => {
		setIsDialogOpened(false);
	};

	return (
		<div>
			{/* <Button variant='outlined' color='primary' onClick={handleClickOpen}>
				Open alert dialog
			</Button> */}
			<Dialog
				open={isDialogOpened}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>
					{"Selesai Mengerjakan?"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>
						{isFullyAnswered
							? "Tekan 'Ya' jika ingin mengumpul jawaban dan nilai akan terisi, tekan 'Kembali' untuk batal"
							: "MASIH TERDAPAT JAWABAN KOSONG, Tekan 'Ya' jika ingin mengumpul jawaban dan nilai akan terisi, tekan 'Kembali' untuk batal"}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color='primary'>
						Kembali
					</Button>
					<Button
						onClick={() => {
							setIsAnswerSubmitted(true);
							handleClose();
						}}
						color='primary'
						autoFocus
					>
						Ya
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
