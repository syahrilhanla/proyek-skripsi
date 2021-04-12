// extracting chapter(n)Data to have pages as key objects and acts per page as its value
export const dataExtractor = (chapter) => {
	return chapter.map((pageData, pageIndex) => {
		return {
			page: `page${pageIndex + 1}`,
			pageData: pageData.acts,
		};
	});
};

const countPercentage = (score, actLength) => {
	const percentage = Math.round((score / actLength) * 100);
	console.log({ percentage }, { score }, { actLength });
	return percentage;
};

// counting progress data as percentage to be displayed in ProgressBar component
export const getScore = (dataProgress) => {
	let score = 0;
	const actLength = dataProgress.length;
	let percentage;

	dataProgress.map(data => {
		if (data === true) score += 1;
	})

	// dataProgress.map((item) => {
	// 	actLength = item.pageData.length;
	// 	console.log(item)
	// 	item.pageData.map((data) => {
	// 		if (data.act === true) score += 1;
	// 	});
	// });

	percentage = countPercentage(score, actLength);

	return { score, actLength, percentage };
};

// used in dataSeparator below
const pageProgresses = (chapterProgress) => {
	// expected output:
	// { page: String, pageData: Array }

	// returns only as singular array with pageData in it
	return chapterProgress.map((item) => {
		return item.data.map((pageData) => pageData);
	})[0];
};

// separates data from array to each chapter with pages them at ProgressContext
export const dataSeparator = (data, chapterName) =>
	pageProgresses(data.filter((item) => item.chapter === chapterName));

// get current page's data
export const getCurrentPageProgress = (data, currentPage) => {
	const combinedProgress = [];
	data.filter((data) => data.page === currentPage).map(item => item.pageData.map(unit => combinedProgress.push(unit.act)));
	console.log(combinedProgress);
	return combinedProgress;
};

// update user progress on page
export const updateProgress = () => {
	console.log('updating progress');
}

// combine all the progress in the chapter
export const combinePageProgress = (localChapterProgress) => {
	const combinedProgress = [];
	const allProgress = localChapterProgress.map(data => data.pageData.map(unit => combinedProgress.push(unit.act)));

	return { combinedProgress, length: combinedProgress }
}