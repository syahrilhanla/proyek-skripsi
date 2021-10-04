import { addAdmin } from "@/components/utils/userFirestoreSavings";

const addNewAdmin = (newData, adminList, setFeedback) => {
	// const classNames = classList.map((item) => item.className);

	// // check if there's a class with the same name
	// if (classNames.includes(className)) return setFeedback("Kelas Sudah Ada!");
	// else {
	// 	addClass(className, password);
	// 	return setFeedback("Kelas Berhasil Ditambahkan");
	// }

	const adminEmails = adminList.map((admin) => admin.email);
	const adminDisplayNames = adminList.map((admin) => admin.displayName);

	if (
		adminEmails.includes(newData.email) ||
		adminDisplayNames.includes(newData.displayName)
	)
		return setFeedback("Admin Sudah Ada! Silahkan Ubah Nama atau Email");
	else {
		addAdmin(newData);
		return setFeedback("Admin Berhasil Ditambahkan");
	}
};

export default addNewAdmin;
