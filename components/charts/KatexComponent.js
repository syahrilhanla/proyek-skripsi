import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";

const DisplayEquation = ({ children, displayMode }) => {
	// accepting value as string or any simple text
	// use double backslashes (\\) for symbols like frac and bars(

	if (displayMode === "block") return <BlockMath>{children}</BlockMath>;
	else return <InlineMath>{children}</InlineMath>;
};

export default DisplayEquation;
