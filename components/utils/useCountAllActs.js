export default async function useCountAllActs(userData) {
	const data = userData;

	let overallDone = 0;
	let overallHaveNotDone = 0;

	data.forEach((item) => {
		item.data.forEach((unit) => {
			unit.pageData.forEach((atom) => {
				if (atom.act) overallDone += 1;
				else if (!atom.act) overallHaveNotDone += 1;
			});
		});
	});

	const overallCount = overallDone + overallHaveNotDone;
	const progressPercentage = (overallDone / overallCount) * 100;
	return Math.round(progressPercentage);
}
