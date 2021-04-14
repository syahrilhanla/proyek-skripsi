import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(1),
		marginLeft: theme.spacing(4),
	},
	title: {
		width: "87%",
	},
	small: {
		width: theme.spacing(3.5),
		height: theme.spacing(3.5),
	},
	logo: {
		display: "grid",
		gridTemplateColumns: "1fr 3fr",
		width: "15%",
	},
	sectionDesktop: {
		display: "none",
		marginRight: "2rem",
		[theme.breakpoints.up("md")]: {
			display: "flex",
			paddingRight: "2rem",
		},
		float: "right",
	},
	sectionMobile: {
		display: "flex",
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
	profileDesktop: {
		paddingRight: "1.5rem",
	},
}));
