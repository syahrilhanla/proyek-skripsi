import React from 'react';
import { MathComponent } from 'mathjax-react'

const EquationDisplay = ({ children }) => {
  return (
    <MathComponent tex={String.raw`${children}`} />
  )
}

const MathJax = ({ children }) => {
  console.log(children);
  return (
    <EquationDisplay>
      {children}
    </EquationDisplay>
  )
}

export default MathJax;
