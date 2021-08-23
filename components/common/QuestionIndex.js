import indexingStyle from "@/styles/QuestionIndex.module.css";
import { questionData } from "@/components/data/quiz1Data";

const QuestionIndex = ({ setCurrentQuestion, questionData }) => {
	return (
		<div className={indexingStyle.borderOnly}>
			<h2>Indeks Soal:</h2>
			<div className={indexingStyle.mother}>
				{questionData.map((question, index) => {
					return (
						<h3
							key={index}
							className={indexingStyle.buttonNumber}
							onClick={() => setCurrentQuestion(index)}
						>
							{index + 1}
						</h3>
					);
				})}
			</div>
		</div>
	);
};

export default QuestionIndex;
