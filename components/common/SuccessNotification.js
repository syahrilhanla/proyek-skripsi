import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

const SuccessNotification = ({ open }) => {
	const Alert = (props) => {
		return <MuiAlert elevation={6} variant='standard' {...props} />;
	};

	return (
		<>
			<Snackbar
				open={open}
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
				key={{ vertical: "bottom" } + { horizontal: "center" }}
			>
				<Alert severity='success'>Operasi Sukses!</Alert>
			</Snackbar>
		</>
	);
};

export default SuccessNotification;
