import { useState } from "react";
import { useAuth } from "@/components/context/AuthContext";
import { useForm } from "react-hook-form";
import { useAddClass } from "@/components/utils/useAddClass";
import useAddNewAdmin from "@/components/utils/useAddNewAdmin";

import formStyle from "@/styles/Form.module.css";

const NewAdminForm = ({ setOpen }) => {
	const { adminList } = useAuth();
	const [feedback, setFeedback] = useState("");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		// useAddClass(data.displayName, classList, setFeedback, data.password);
		const newData = {
			displayName: data.displayName,
			email: data.email,
		};

		useAddNewAdmin(newData, adminList, setFeedback);
		setTimeout(() => {
			setFeedback("");
		}, 3000);
	};

	if (feedback === "Admin Berhasil Ditambahkan") {
		setTimeout(() => setOpen(false), 3000);
	}

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>Nama Lengkap:</label>
				<input
					{...register("displayName", { required: true })}
					className={formStyle.formInput}
					style={{ width: "fit-content" }}
				/>
				{errors.displayName?.type === "required" && (
					<p className={formStyle.errorMsg}>Isi Nama Kelas!</p>
				)}
				<label>Email:</label>
				<input
					{...register("email", { required: true })}
					className={formStyle.formInput}
					style={{ width: "fit-content" }}
				/>
				{errors.email?.type === "required" && (
					<p className={formStyle.errorMsg}>Isi Email!</p>
				)}
				{feedback !== "" && (
					<>
						<p
							className={
								feedback === "Admin Sudah Ada! Silahkan Ubah Nama atau Email"
									? formStyle.errorMsg
									: formStyle.successMsg
							}
						>
							{feedback}
						</p>
					</>
				)}
				<input type='submit' className={formStyle.submitButton} />
			</form>
		</div>
	);
};

export default NewAdminForm;
