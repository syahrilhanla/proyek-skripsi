import React from 'react';
import { MathComponent } from 'mathjax-react'

const EquationDisplay = ({ children }) => {
  return (
    <MathComponent tex={String.raw`${children}`} />
  )
}

const MathJax = ({ text }) => {
  return (
    <EquationDisplay>
      {text}
    </EquationDisplay>
  )
}

export default MathJax;
