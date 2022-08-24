import React from 'react';
import './index.css';

export const Paragraph = ({ className = '', children = '' }) => {
  return <p className={'text ' + className}>{children}</p>;
};
