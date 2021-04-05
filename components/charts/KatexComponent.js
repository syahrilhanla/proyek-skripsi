import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const DisplayEquation = ({ children }) => (
  <BlockMath>{children}</BlockMath>
)

export default DisplayEquation;