import essayStyle from "@/styles/ShortEssay.module.css";
import FormAnswer from "@/components/common/FormAnswer";

const ShortEssay = ({ essayQuestion }) => {
	return (
		<div className={essayStyle.mother}>
			<h4>{essayQuestion.questionText}</h4>
			<FormAnswer answer={essayQuestion.answer} />
		</div>
	);
};

export default ShortEssay;
