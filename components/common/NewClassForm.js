import { useState } from "react";
import { useAuth } from "@/components/context/AuthContext";
import { useForm } from "react-hook-form";
import useAddClass from "@/components/utils/useAddClass";

import formStyle from "@/styles/Form.module.css";

const NewClassForm = () => {
	const { classList } = useAuth();
	const [isSame, setIsSame] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
		useAddClass(data.className, classList, setIsSame);
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>Isi Nama Kelas:</label>
				<input
					{...register("className", { required: true })}
					className={formStyle.formInput}
				/>
				{errors.className?.type === "required" && (
					<p className={formStyle.errorMsg}>Isi Nama Kelas!</p>
				)}
				{isSame && (
					<>
						<p
							className={formStyle.errorMsg}
							style={{ marginBottom: "-0.4rem" }}
						>
							Kelas Sudah Ada!
						</p>
						<p className={formStyle.errorMsg}>
							Silahkan cek di menu <i>dropdown</i>
						</p>
					</>
				)}
				<input type='submit' className={formStyle.submitButton} />
			</form>
		</div>
	);
};

export default NewClassForm;
