import React from 'react';
import './index.css';

export const Paragraph = ({ className = '', children = '', id = '' }) => {
  return (
    <p id={id} className={'text ' + className}>
      {children}
    </p>
  );
};
