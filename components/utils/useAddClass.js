import { addClass } from "@/components/utils/userFirestoreSavings";

const useAddClass = (className, classList, setFeedback, password) => {
	const classNames = classList.map((item) => item.className);

	// check if there's a class with the same name
	if (classNames.includes(className)) return setFeedback("Kelas Sudah Ada!");
	else {
		addClass(className, password);
		return setFeedback("Kelas Berhasil Ditambahkan");
	}
};

export default useAddClass;
