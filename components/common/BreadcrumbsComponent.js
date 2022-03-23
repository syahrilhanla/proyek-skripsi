import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import useGetCurrentPage from "@/components/utils/useGetCurrentPage";

import { drawersData } from "@/components/data/drawersData";

import breadcrumbStyle from "@/styles/DataStyles.module.css";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > * + *": {
			marginTop: theme.spacing(2),
		},
	},
}));

export default function CustomSeparator() {
	const classes = useStyles();
	const { currentURL, parentPath, currentPath, customPushTo } =
		useGetCurrentPage();

	const determineLinks = (parentPath) => {
		const linkList = drawersData.map((list) => {
			return list.items.map((item) => item);
		});

		if (parentPath === "analisis") return linkList[0];
		else if (parentPath === "pemusatan") return linkList[1];
		else if (parentPath === "penyebaran") return linkList[2];
	};

	return (
		<>
			{parentPath !== "admin" &&
			parentPath !== "manageAdmin" &&
			parentPath !== "evaluasi" &&
			parentPath !== "petunjuk" &&
			currentURL.split("/")[2] !== "kuis" ? (
				<div className={`${classes.root} ${breadcrumbStyle.breadcrumbStyle}`}>
					<Breadcrumbs
						separator={<NavigateNextIcon fontSize='small' />}
						aria-label='breadcrumb'
					>
						<span
							style={{ cursor: "pointer" }}
							onClick={() => customPushTo(`${parentPath}/1`)}
						>
							<Typography color='textPrimary'>{parentPath}</Typography>
						</span>
						{determineLinks(parentPath).map((item) => {
							if (item.id == currentPath) {
								return <Typography color='primary'>{item.subTitle}</Typography>;
							} else
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
			) : null}
		</>
	);
}
