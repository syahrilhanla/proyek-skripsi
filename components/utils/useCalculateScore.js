const useCalculateScore = () => {
	const getScoringTotal = (quizScore, questionAmount) => {
		const scoreFormula = 100 / questionAmount;
		const finalScore = scoreFormula * quizScore;
		return Math.round(finalScore);
	};

	const getScoreThreshold = (finalScore, questionAmount) => {
		return finalScore < questionAmount * (60 / 100) * 10;
	};

	// fires when user submit the answers or finished the quiz
	const calculateResults = (overallAnswers, setQuizScore) => {
		console.log(overallAnswers);
		setQuizScore(0);
		overallAnswers.forEach((item) => {
			if (item.answer) {
				setQuizScore((prevState) => prevState + 1);
			}
		});
	};

	return { getScoreThreshold, getScoringTotal, calculateResults };
};

export default useCalculateScore;
