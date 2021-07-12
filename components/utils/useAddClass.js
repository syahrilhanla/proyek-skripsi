import { addClass } from "@/components/utils/userFirestoreSavings";

const useAddClass = (data, classList, setIsSame) => {
	const classNames = classList.map((item) => item.className);
	if (classNames.includes(data)) return setIsSame(true);
	else addClass(data);
};

export default useAddClass;
