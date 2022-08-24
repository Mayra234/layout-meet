import React from 'react';
import './index.css';

export const PersonContent = ({ children = '', className = '' }) => {
  return <div className={'avatar-container ' + className}>{children}</div>;
};
