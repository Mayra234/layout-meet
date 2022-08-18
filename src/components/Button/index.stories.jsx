import React from 'react';
import { Button } from './index';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Components/Button',
};

export const Overview = () => {
  return <Button icon={faPhone} />;
};
