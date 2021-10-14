import { useState } from "react";
import { useAuth } from "@/components/context/AuthContext";
import { useForm } from "react-hook-form";
import { useAddClass } from "@/components/utils/useAddClass";

import formStyle from "@/styles/Form.module.css";

const NewClassForm = ({ setOpen }) => {
	const { classList } = useAuth();
	const [feedback, setFeedback] = useState("");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		// console.log(data);
		useAddClass(data.className, classList, setFeedback, data.password);
		setTimeout(() => {
			setFeedback("");
		}, 3000);
	};

	if (feedback === "Kelas Berhasil Ditambahkan") {
		setTimeout(() => setOpen(false), 3000);
	}

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>Nama Kelas:</label>
				<input
					{...register("className", { required: true })}
					className={formStyle.formInput}
					style={{ width: "fit-content" }}
				/>
				{errors.className?.type === "required" && (
					<p className={formStyle.errorMsg}>Isi Nama Kelas!</p>
				)}
				<label>Password:</label>
				<input
					{...register("password", { required: true })}
					className={formStyle.formInput}
					style={{ width: "fit-content" }}
				/>
				{errors.password?.type === "required" && (
					<p className={formStyle.errorMsg}>Isi Password!</p>
				)}
				{feedback !== "" && (
					<>
						<p
							className={
								feedback === "Kelas Sudah Ada!"
									? formStyle.errorMsg
									: formStyle.successMsg
							}
						>
							{feedback}
						</p>
					</>
				)}
				{feedback === "Kelas Sudah Ada!" && (
					<p className={formStyle.errorMsg}>
						Silahkan cek di menu <i>dropdown</i>
					</p>
				)}
				<input type='submit' className={formStyle.submitButton} />
			</form>
		</div>
	);
};

export default NewClassForm;
