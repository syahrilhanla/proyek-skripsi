import essayStyle from "@/styles/ShortEssay.module.css";
import FormAnswer from "@/components/common/FormAnswer";

const ShortEssay = ({ essayQuestion, setUpdateProgress, updateProgress }) => {
	return (
		<div className={essayStyle.mother}>
			<h1>Pertanyaan Singkat</h1>
			<h4>{essayQuestion.questionText}</h4>
			<FormAnswer
				answer={essayQuestion.answer}
				actID={essayQuestion.id}
				setUpdateProgress={setUpdateProgress}
				updateProgress={updateProgress}
			/>
		</div>
	);
};

export default ShortEssay;
