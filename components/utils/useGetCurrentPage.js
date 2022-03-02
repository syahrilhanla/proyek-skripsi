import { useRouter } from "next/router";

const useGetCurrentPage = () => {
	const router = useRouter();
	const currentURL = router.pathname;
	const parentPath = currentURL.split("/")[1];
	const currentPath = parseInt(currentURL.split("/")[2]);

	const defaultPushTo = (parentPath) => {
		if (parentPath === "analisis") router.push("/pemusatan/1");
		else if (parentPath === "pemusatan") router.push("/pemusatan/1");
		else if (parentPath === "penyebaran") router.push("/kuis");
	};

	const customPushTo = (address) => {
		router.push(address);
	};

	return { currentPath, parentPath, currentURL, defaultPushTo, customPushTo };
};

export default useGetCurrentPage;
