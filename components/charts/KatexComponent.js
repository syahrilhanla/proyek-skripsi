import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";

const DisplayEquation = ({ children }) => (
	// accepting value as string or any simple text
	// use double backslashes (\\) for symbols like frac and bars
	<BlockMath>{children}</BlockMath>
);

export default DisplayEquation;
