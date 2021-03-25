import React from 'react';
import captionStyle from '@/styles/CaptionStyle.module.css';

const CaptionComponent = ({ children }) => {
  return (
    <div className={captionStyle.main}>
      <span className={captionStyle.spanText}>
        {children}
      </span>
    </div>
  )
}

const Caption = ({ children }) => (
  <CaptionComponent>
    {children}
  </CaptionComponent>
)

export default Caption
