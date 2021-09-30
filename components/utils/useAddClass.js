import { addClass, joinClass } from "@/components/utils/userFirestoreSavings";

export const useAddClass = (className, classList, setFeedback, password) => {
	const classNames = classList.map((item) => item.className);

	// check if there's a class with the same name
	if (classNames.includes(className)) return setFeedback("Kelas Sudah Ada!");
	else {
		addClass(className, password);
		return setFeedback("Kelas Berhasil Ditambahkan");
	}
};

export const useJoinClass = async (
	selectedClass,
	classList,
	userInfo,
	password,
	setFeedback
) => {
	if (userInfo) {
		const trueClass = classList.filter(
			(item) => item.password === password && item.className === selectedClass
		);

		// console.log({ trueClass });

		if (trueClass.length > 0) {
			await joinClass(userInfo.uid, selectedClass);
			return setFeedback("Berhasil Bergabung ke Kelas");
		} else return setFeedback("Password Salah!");
	}
};
