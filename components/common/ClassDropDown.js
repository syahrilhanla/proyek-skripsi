import { useForm } from "react-hook-form";
import { useAuth } from "@/components/context/AuthContext";

import selectStyle from "@/styles/Select.module.css";

const ClassDropDown = ({ setShowClass = () => false, setSelectedClass }) => {
	const { classList } = useAuth();

	const { register, handleSubmit } = useForm();

	const getClassInfo = (className) => {
		return classList.filter((item) => item.className === className)[0];
	};

	const onSubmit = (data) => {
		setShowClass(true);
		setSelectedClass(getClassInfo(data.className));
	};

	return (
		<div className={selectStyle.dropdown}>
			<form onChange={handleSubmit(onSubmit)}>
				<select
					{...register("className", { required: true })}
					className={selectStyle.select}
				>
					<option value='Pilih Kelas' defaultValue>
						Pilih Kelas
					</option>
					{classList.map((item) => {
						return (
							<option key={item.className} value={item.className}>
								{item.className}
							</option>
						);
					})}
				</select>
			</form>
		</div>
	);
};

export default ClassDropDown;
