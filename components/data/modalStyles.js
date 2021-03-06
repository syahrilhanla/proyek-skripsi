import { makeStyles } from "@material-ui/core/styles";

const modalStyles = makeStyles((theme) => ({
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		overflow: "auto",
		maxHeight: "90vh",
	},
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		overflow: "auto",
	},
}));

export default modalStyles;
