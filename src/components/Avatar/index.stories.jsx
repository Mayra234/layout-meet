import React from 'react';
import { Avatar } from './index';
import image1 from '../../assets/image/avatar-1.jpg';

export default { title: 'Components/Avatar' };

export const Overview = () => {
  return <Avatar className="avatar" image={image1} />;
};
