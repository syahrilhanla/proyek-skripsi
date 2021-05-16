import { drawersData } from "@/components/data/drawersData";
import { useRouter } from "next/router";

const useBottomProgressLogic = () => {
  const router = useRouter();
  const currentURL = router.pathname;
  const parentPath = currentURL.split("/")[1];
  const currentPath = parseInt(currentURL.split("/")[2]);

  // pages of contents
  const urlList = drawersData.map((item) => ({
    content: item.title,
    url: item.items.map((unit) => unit.id),
  }));

  const chooseURLList = (parentPath) => {
    if (parentPath === "analisis") {
      return urlList
        .filter((item) => item.content === "Menganalisis Data")
        .map((unit) => unit.url);
    } else if (parentPath === "pemusatan") {
      return urlList
        .filter((item) => item.content === "Ukuran Pemusatan Data")
        .map((unit) => unit.url);
    } else if (parentPath === "penyebaran") {
      return urlList
        .filter((item) => item.content === "Ukuran Penyebaran Data")
        .map((unit) => unit.url);
    }
  };

  const nextURL = () => {
    if (currentPath && currentPath < chooseURLList(parentPath)[0].length) {
      // if already is on page numbering
      return `${parentPath}/${chooseURLList(parentPath)[0][currentPath]}`;
    } else if (
      currentPath &&
      currentPath === chooseURLList(parentPath)[0].length
    ) {
      // if already at the top of the content, then go to quiz/last url of content
      return `${parentPath}/${chooseURLList(parentPath)[0][currentPath.length - 1]
        }`;
    } else return `${parentPath}/1`;
  };

  const prevURL = () => {
    // if already is on page numbering, then can only go to previous link if on page 2
    if (currentPath > 1) {
      return `${parentPath}/${chooseURLList(parentPath)[0][currentPath - 2]}`;
    }
    // if no, then always go to the first page
    else return `${parentPath}/1`;
  };

  return {
    chooseURLList, nextURL, prevURL, currentPath, currentURL, parentPath
  }
}

export default useBottomProgressLogic;
