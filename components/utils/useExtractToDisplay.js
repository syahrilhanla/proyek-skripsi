import { dataSeparator } from "@/components/utils/dataProcessors";

const useExtractToDisplay = (individualProgress) => {
	const chapterNames = individualProgress.map((chapter) => {
		if (chapter.chapter === "chapter1") {
			return "Menganalisis Data";
		} else if (chapter.chapter === "chapter2") {
			return "Ukuran Pemusatan Data";
		} else return "Ukuran Penyebaran Data";
	});

	const chapter1Progress = dataSeparator(individualProgress, "chapter1");
	const chapter2Progress = dataSeparator(individualProgress, "chapter2");
	const chapter3Progress = dataSeparator(individualProgress, "chapter3");

	const pageDetails = individualProgress.map((chapter) => {
		return chapter.data.map((page) => page.pageData.map((content) => content));
	});

	const chapter1Details = chapter1Progress.map((page) =>
		page.pageData.map((content) => content)
	);
	const chapter2Details = chapter2Progress.map((page) =>
		page.pageData.map((content) => content)
	);
	const chapter3Details = chapter3Progress.map((page) =>
		page.pageData.map((content) => content)
	);

	// console.log({ chapter1Details });

	return { chapterNames, chapter1Details, chapter3Details, chapter2Details };
};

export default useExtractToDisplay;
