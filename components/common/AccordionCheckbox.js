import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CheckboxDetails from "@/components/common/CheckboxDetails";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
}));

const AccordionCheckbox = ({ title, chapterDetails }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1a-content'
					id='panel1a-header'
				>
					<Typography className={classes.heading}>{title}</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							width: "100%",
						}}
					>
						<CheckboxDetails chapterDetails={chapterDetails} />
					</div>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default AccordionCheckbox;
