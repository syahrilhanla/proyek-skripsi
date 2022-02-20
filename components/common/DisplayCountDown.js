import { useTimer } from "react-timer-hook";

const CountingDown = ({ expiryTimestamp, setCallback }) => {
	const { seconds, minutes } = useTimer({
		expiryTimestamp,
		onExpire: () => setCallback(true),
	});

	return (
		<div style={{ margin: "0px auto", width: "100%", textAlign: "center" }}>
			<h2>
				Waktu Tersisa:{" "}
				<span>
					{minutes < 10 && "0"}
					{minutes}
				</span>
				:
				<span>
					{seconds < 10 && "0"}
					{seconds}
				</span>
			</h2>
		</div>
	);
};

const DisplayCountDown = ({ timeSet, setCallback }) => {
	const time = new Date();
	time.setSeconds(time.getSeconds() + timeSet); // 600 to 10 minutes

	return <CountingDown expiryTimestamp={time} setCallback={setCallback} />;
};

export default DisplayCountDown;
