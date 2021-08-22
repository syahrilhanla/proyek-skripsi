import { useState } from "react";
import { useAuth } from "@/components/context/AuthContext";
import { useForm } from "react-hook-form";
import { useJoinClass } from "@/components/utils/useAddClass";

import formStyle from "@/styles/Form.module.css";

const JoinClassForm = ({ setOpen, selectedClass, setIsJoin }) => {
	const { classList, userInfo } = useAuth();
	const [feedback, setFeedback] = useState("");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		// console.log(data);
		useJoinClass(
			selectedClass,
			classList,
			userInfo,
			data.password,
			setFeedback
		);
		setTimeout(() => {
			setFeedback("");
		}, 3000);
	};

	if (feedback === "Berhasil Bergabung ke Kelas") {
		setIsJoin(true);
		setTimeout(() => setOpen(false), 3000);
	}

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>Password:</label>
				<input
					{...register("password", { required: true })}
					className={formStyle.formInput}
				/>
				{errors.password?.type === "required" && (
					<p className={formStyle.errorMsg}>Isi Password!</p>
				)}
				{feedback === "Berhasil Bergabung ke Kelas" && (
					<>
						<p className={formStyle.successMsg}>{feedback}</p>
					</>
				)}
				{feedback === "Password Salah!" && (
					<p className={formStyle.errorMsg}>Password Salah!</p>
				)}
				<input type='submit' className={formStyle.submitButton} />
			</form>
		</div>
	);
};

export default JoinClassForm;
