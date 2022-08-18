import React from 'react';
import { ReactDOM } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';

export const Button = ({ icon = '', className = '' }) => {
  return (
    <button type="button" className={'btn ' + className}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};
