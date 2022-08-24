import React from 'react';
import { PersonContent } from './index';
import { Avatar } from '../Avatar';
import './index.css';
import avatar1 from '../../assets/image/avatar-1.jpg';
import { Paragraph } from '../Paragraph';

export default {
  title: 'Components/PersonContent',
};

export const Overview = () => {
  return (
    <PersonContent>
      <Avatar image={avatar1} className="avatar-image" />
      <Paragraph className="element-avatar">Alejandra Diavanera</Paragraph>
    </PersonContent>
  );
};
