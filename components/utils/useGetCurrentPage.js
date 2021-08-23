import { useRouter } from "next/router";

const useGetCurrentPage = () => {
	const router = useRouter();
	const currentURL = router.pathname;
	const parentPath = currentURL.split("/")[1];
	const currentPath = parseInt(currentURL.split("/")[2]);

	const pushTo = (parentPath) => {
		if (parentPath === "analisis") router.push("/pemusatan/1");
		else if (parentPath === "pemusatan") router.push("/pemusatan/1");
		else if (parentPath === "penyebaran") router.push("/kuis");
	};

	return { currentPath, parentPath, currentURL, pushTo };
};

export default useGetCurrentPage;
