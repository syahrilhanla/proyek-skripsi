import { useEffect } from "react";
import useCountDown from "react-countdown-hook";

const useTimerPercentage = () => {
	const initialTime = 60 * 1000; // initial time in milliseconds, defaults to 60000
	const interval = 1000; // interval to change remaining time amount, defaults to 1000

	const [timeLeft, { start }] = useCountDown(initialTime, interval);
	useEffect(() => start(), []);

	let percentage = timeLeft / 100 / 6;

	return { percentage };
};

export default useTimerPercentage;
