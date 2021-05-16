import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

const OfflineNotification = ({ open }) => {
	const Alert = (props) => {
		return <MuiAlert elevation={6} variant='standard' {...props} />;
	};

	return (
		<>
			<Snackbar
				open={open}
				anchorOrigin={{ vertical: "top", horizontal: "center" }}
				key={{ vertical: "top" } + { horizontal: "center" }}
			>
				<Alert severity='info'>You are offline!</Alert>
			</Snackbar>
		</>
	);
};

export default OfflineNotification;
