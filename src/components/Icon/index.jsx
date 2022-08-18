import './index.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Icon = ({ icon = '', className = '', prefix = 'fab' }) => {
  return (
    <div className={'icon ' + className}>
      <FontAwesomeIcon prefix={prefix} icon={icon} />
    </div>
  );
};
