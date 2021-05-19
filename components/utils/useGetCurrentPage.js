import { useRouter } from "next/router";

const useGetCurrentPage = () => {
	const router = useRouter();
	const currentURL = router.pathname;
	const parentPath = currentURL.split("/")[1];
	const currentPath = parseInt(currentURL.split("/")[2]);

	return { currentPath, currentURL, parentPath };
};

export default useGetCurrentPage;
