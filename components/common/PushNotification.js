import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

const PushNotification = ({ open, type }) => {
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
				<Alert severity={type === "success" ? "success" : "error"}>
					{type === "success" ? "Operasi Sukses" : "Operasi Gagal!"}!
				</Alert>
			</Snackbar>
		</>
	);
};

export default PushNotification;
