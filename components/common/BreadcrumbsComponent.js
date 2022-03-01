import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import useGetCurrentPage from "@/components/utils/useGetCurrentPage";

import { drawersData } from "@/components/data/drawersData";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > * + *": {
			marginTop: theme.spacing(2),
		},
	},
}));

export default function CustomSeparator() {
	const classes = useStyles();
	const { parentPath, defaultPushTo, customPushTo } = useGetCurrentPage();

	// currentPath example:
	// ia-statistics.vercel.app/pemusatan/5

	const determineLinks = (parentPath) => {
		const linkList = drawersData.map((list, index) => {
			return list.items.map((item) => item);
		});

		if (parentPath === "analisis") return linkList[0];
		else if (parentPath === "pemusatan") return linkList[1];
		else if (parentPath === "penyebaran") return linkList[2];
	};

	return (
		<div className={classes.root}>
			<Breadcrumbs
				separator={<NavigateNextIcon fontSize='small' />}
				aria-label='breadcrumb'
			>
				<span
					style={{ cursor: "pointer" }}
					onClick={() => defaultPushTo(`${parentPath}`)}
				>
					<Typography color='textPrimary'>{parentPath}</Typography>
				</span>
				{determineLinks(parentPath).map((item) => {
					return (
						<span
							style={{ cursor: "pointer" }}
							onClick={() => customPushTo(`/${parentPath}/${item.id}`)}
						>
							<Typography color='textPrimary'>{item.subTitle}</Typography>
						</span>
					);
				})}
			</Breadcrumbs>
		</div>
	);
}
