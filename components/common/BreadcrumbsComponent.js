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
	const { currentPath, parentPath, currentURL, pushTo } = useGetCurrentPage();

	// currentPath example:
	// ia-statistics.vercel.app/pemusatan/5

	let pageList = [];

	const linkList = drawersData.map((list, index) =>
		list.items.map((subLink) => subLink)
	);

	const analisis = linkList[0];
	const pemusatan = linkList[1];
	const penyebaran = linkList[2];

	const determineLinks = () => {
		if (parentPath === "analisis") return analisis;
		else if (parentPath === "pemusatan") return pemusatan;
		else if (parentPath === "penyebaran") return penyebaran;
	};

	// const breadcrumbButtonGenerator = ( pageNumber) => {
	// 	let currentPage = 1;
	// 	while (currentPage <= pageNumber) {
	// 		pageList = [...pageList, currentPage];
	// 		currentPage += 1;
	// 	}
	// 	console.log({ pageList });
	// };

	// if user were on page 5
	// breadcrumbButtonGenerator(determineLinks());

	return (
		<div className={classes.root}>
			<Breadcrumbs
				separator={<NavigateNextIcon fontSize='small' />}
				aria-label='breadcrumb'
			>
				<Link color='inherit' href='/' onClick={pushTo(parentPath)}>
					<Typography color='textPrimary'>{parentPath}</Typography>
				</Link>
				{determineLinks().map((subTitle) => {
					return (
						<Link color='inherit' href='/' onClick={pushTo(currentURL)}>
							<Typography color='textPrimary'>{subTitle}</Typography>
						</Link>
					);
				})}
			</Breadcrumbs>
		</div>
	);
}
