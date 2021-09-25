import { Box, CircularProgress } from "@material-ui/core";

const LoadingProgress = () => (
	<Box sx={{ display: "flex" }}>
		<CircularProgress />
	</Box>
);

export default LoadingProgress;
